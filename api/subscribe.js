// Vercel Serverless Function to subscribe to Mailchimp list
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  try {
    const { email, fname } = req.body || {};
    if (!email) return res.status(400).json({ error: 'Missing email' });

    // Environment variables to set on Vercel:
    // MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID, MAILCHIMP_DC (e.g., us18)
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const DC = process.env.MAILCHIMP_DC; // data center like us18

    if (!API_KEY || !LIST_ID || !DC) {
      return res.status(500).json({ error: 'Mailchimp not configured on server' });
    }

    const url = `https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;
    const body = {
      email_address: email,
      status: 'subscribed',
      merge_fields: { FNAME: fname || '' }
    };

    const auth = Buffer.from(`any:${API_KEY}`).toString('base64');
    const r = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const data = await r.json();
    if (r.status === 200 || r.status === 201) {
      return res.status(200).json({ ok: true });
    } else {
      return res.status(r.status).json({ error: data.detail || 'Mailchimp error', data });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
