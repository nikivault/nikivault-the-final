const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "build", "client");
const manifestPath = path.join(outDir, ".vite", "manifest.json");

if (!fs.existsSync(manifestPath)) {
  console.error("manifest not found at", manifestPath);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

// find first entry (isEntry === true)
const entry = Object.values(manifest).find(item => item.isEntry || item.isEntry === true);

if (!entry) {
  console.error("No entry with isEntry found in manifest");
  process.exit(1);
}

// Build HTML
const cssLinks = (entry.css || []).map(c => `<link rel="stylesheet" href="./${c}">`).join("\\n");
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>NikiVault</title>
${cssLinks}
</head>
<body>
<div id="root"></div>
<script type="module" src="./${entry.file}"></script>
</body>
</html>
`;

// Ensure outDir exists
if (!fs.existsSync(outDir)) {
  console.error("output directory not found:", outDir);
  process.exit(1);
}

// write index.html
const target = path.join(outDir, "index.html");
fs.writeFileSync(target, html, "utf8");
console.log("Wrote", target);
