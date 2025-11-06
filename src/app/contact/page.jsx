"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  Instagram,
  Coffee,
  Sparkles,
  Mail,
  MapPin,
  Phone,
  Send,
  Calendar,
  Clock,
  Star,
} from "lucide-react";

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    email: "",
    collaborationType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const collaborationTypes = [
    "Fashion / Beauty Collab",
    "Travel / Stay Feature",
    "UGC Package",
    "Website / Business Feature",
    "Long-term Partnership",
    "Event Coverage",
    "Other",
  ];

  const budgetRanges = [
    "₹3,000 - ₹5,000",
    "₹5,000 - ₹10,000",
    "₹10,000 - ₹20,000",
    "₹20,000+",
    "Negotiable",
  ];

  const quickFacts = [
    { icon: MapPin, label: "Based in", value: "Kerala, India" },
    { icon: Clock, label: "Response Time", value: "24-48 hours" },
    { icon: Calendar, label: "Availability", value: "Open for travel" },
    { icon: Star, label: "Collaborations", value: "5+ successful brands" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch("https://formspree.io/f/xrbonejn", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          type: formData.type,
          message: formData.message
        })
      });
      if (resp.ok) {
        setStatus({ ok: true, message: "Thanks — I got your message! I’ll reply soon." });
        setFormData({ name: "", email: "", type: "", message: "" });
        if (typeof window !== "undefined" && window.confetti) window.confetti();
      } else {
        setStatus({ ok: false, message: "Something went wrong — please try again." });
      }
    } catch (err) {
      setStatus({ ok: false, message: "Network error. Try again later." });
    }
  };


  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* Custom Cursor */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-300"
        style={{
          left: cursorPos.x - 12,
          top: cursorPos.y - 12,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-6 h-6 bg-pink-400 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Sparkles className="w-3 h-3 text-pink-600" />
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 font-['Poppins']">
        {/* Navigation */}
        <nav className="px-6 py-4 backdrop-blur-md bg-white/70 sticky top-0 z-40 border-b border-pink-200/30">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <a
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
              title="Made with 💖 by Niki"
            >
              @nikivault
            </a>
            <div className="hidden md:flex space-x-8">
              <a
                href="/"
                className="text-purple-700 hover:text-pink-600 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-purple-700 hover:text-pink-600 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="/portfolio"
                className="text-purple-700 hover:text-pink-600 transition-colors font-medium"
              >
                Portfolio
              </a>
              <a
                href="/work-with-me"
                className="text-purple-700 hover:text-pink-600 transition-colors font-medium"
              >
                Work With Me
              </a>
              <a
                href="/blog"
                className="text-purple-700 hover:text-pink-600 transition-colors font-medium"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="text-purple-700 hover:text-pink-600 transition-colors font-medium border-b-2 border-pink-400"
              >
                Contact
              </a>
            </div>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <Coffee className="w-4 h-4" />
              Buy Me Chai
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
            >
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-pink-200">
                <Mail className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-purple-700">
                  Let's Collaborate
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h1>

              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Ready to create something amazing together? I'd love to hear
                about your brand and how we can collaborate! ✨
              </p>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {quickFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-pink-200/50 shadow-xl text-center hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-purple-700 mb-1">
                      {fact.label}
                    </h3>
                    <p className="text-purple-600">{fact.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-pink-200/50 shadow-xl">
                <h2 className="text-3xl font-bold text-purple-700 mb-6">
                  Collaboration Form
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-purple-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-purple-200/50 text-purple-700 placeholder-purple-400 outline-none focus:ring-2 focus:ring-purple-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-purple-700 mb-2">
                        Brand / Company
                      </label>
                      <input
                        type="text"
                        value={formData.brand}
                        onChange={(e) =>
                          handleInputChange("brand", e.target.value)
                        }
                        className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-purple-200/50 text-purple-700 placeholder-purple-400 outline-none focus:ring-2 focus:ring-purple-400"
                        placeholder="Brand name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-purple-200/50 text-purple-700 placeholder-purple-400 outline-none focus:ring-2 focus:ring-purple-400"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-purple-700 mb-2">
                        Collaboration Type *
                      </label>
                      <select
                        required
                        value={formData.collaborationType}
                        onChange={(e) =>
                          handleInputChange("collaborationType", e.target.value)
                        }
                        className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-purple-200/50 text-purple-700 outline-none focus:ring-2 focus:ring-purple-400"
                      >
                        <option value="">Select type</option>
                        {collaborationTypes.map((type, index) => (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-purple-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) =>
                          handleInputChange("budget", e.target.value)
                        }
                        className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-purple-200/50 text-purple-700 outline-none focus:ring-2 focus:ring-purple-400"
                      >
                        <option value="">Select budget</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">
                      Timeline
                    </label>
                    <input
                      type="text"
                      value={formData.timeline}
                      onChange={(e) =>
                        handleInputChange("timeline", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-purple-200/50 text-purple-700 placeholder-purple-400 outline-none focus:ring-2 focus:ring-purple-400"
                      placeholder="When do you need this completed?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows="5"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-purple-200/50 text-purple-700 placeholder-purple-400 outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message 💌
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Direct Contact */}
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-pink-200/50 shadow-xl">
                  <h3 className="text-2xl font-bold text-purple-700 mb-6">
                    Direct Contact
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-purple-600">Email</p>
                        <a
                          href="mailto:nikithasudeer@gmail.com"
                          className="text-purple-700 font-medium hover:text-pink-600 transition-colors"
                        >
                          nikithasudeer@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center">
                        <Instagram className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-purple-600">Instagram</p>
                        <a
                          href="https://instagram.com/nikivault"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-700 font-medium hover:text-pink-600 transition-colors"
                        >
                          @nikivault
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-purple-600">Location</p>
                        <p className="text-purple-700 font-medium">
                          Kerala, India
                        </p>
                        <p className="text-xs text-purple-500">
                          (Open for travel work)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-pink-200/50 shadow-xl">
                  <h3 className="text-2xl font-bold text-purple-700 mb-6">
                    Quick FAQ
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-purple-700 mb-1">
                        How long does it take to hear back?
                      </p>
                      <p className="text-sm text-purple-600">
                        I typically respond within 24-48 hours!
                      </p>
                    </div>

                    <div>
                      <p className="font-medium text-purple-700 mb-1">
                        Do you work with small brands?
                      </p>
                      <p className="text-sm text-purple-600">
                        Absolutely! I love supporting growing brands and
                        startups.
                      </p>
                    </div>

                    <div>
                      <p className="font-medium text-purple-700 mb-1">
                        What's included in your rates?
                      </p>
                      <p className="text-sm text-purple-600">
                        Content creation, editing, posting, and usage rights
                        (terms vary).
                      </p>
                    </div>

                    <div>
                      <p className="font-medium text-purple-700 mb-1">
                        Can you travel for shoots?
                      </p>
                      <p className="text-sm text-purple-600">
                        Yes! I'm open to travel within India for the right
                        projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-purple-600 mb-4">
              Looking forward to hearing from you 💕
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="https://instagram.com/nikivault"
                className="text-purple-600 hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <button className="text-purple-600 hover:text-pink-500 transition-colors">
                <Coffee className="w-6 h-6" />
              </button>
              <button className="text-purple-600 hover:text-pink-500 transition-colors">
                <Heart className="w-6 h-6" />
              </button>
            </div>
            <p className="text-sm text-purple-500">
              Made with 💖 by Niki • Based in Kerala, India
            </p>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }

        * {
          cursor: none;
        }

        a, button, input, select, textarea, [role="button"] {
          cursor: none;
        }
      `}</style>
    </>
  );
}
