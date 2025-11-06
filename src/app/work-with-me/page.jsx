"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  Instagram,
  Coffee,
  Sparkles,
  ArrowRight,
  Star,
  CheckCircle,
  Users,
  TrendingUp,
  Camera,
} from "lucide-react";

export default function WorkWithMePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const collaborationTypes = [
    {
      type: "Fashion / Beauty Collab",
      deliverables: "1-2 Reel + 1-2 Story",
      description: "Styling, product demos, or tutorials",
      price: "Starting from ₹5,000",
      color: "from-purple-400 to-pink-400",
    },
    {
      type: "Travel / Stay Feature",
      deliverables: "1–2 Reels + 1-2 Story Set",
      description: "Promoting stays, trips, or experiences",
      price: "Starting from ₹8,000",
      color: "from-blue-400 to-purple-400",
    },
    {
      type: "UGC Package",
      deliverables: "1-2 Videos + Edited Photos",
      description: "For brands to reuse on ads/socials",
      price: "Starting from ₹6,000",
      color: "from-pink-400 to-rose-400",
    },
    {
      type: "Website / Business Feature",
      deliverables: "1 Reel + 1 Story",
      description: "Creative promotional content",
      price: "Starting from ₹4,000",
      color: "from-green-400 to-blue-400",
    },
  ];

  const brandsBenefits = [
    {
      icon: Camera,
      title: "Story-driven Content",
      description: "Relatable short-form content that connects",
    },
    {
      icon: Star,
      title: "High-Quality Edits",
      description: "Visually consistent, professional content",
    },
    {
      icon: Users,
      title: "Engaged Audience",
      description: "Thousands of active, interested viewers",
    },
    {
      icon: TrendingUp,
      title: "UGC Rights",
      description: "Rights to reuse assets (negotiable)",
    },
  ];

  const collaboratedBrands = [
    "BuyDost",
    "Rebella",
    "Ningen",
    "One Wish",
    "Aqualens",
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
                className="text-purple-700 hover:text-pink-600 transition-colors font-medium border-b-2 border-pink-400"
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
                className="text-purple-700 hover:text-pink-600 transition-colors font-medium"
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
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
            >
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-pink-200">
                <Star className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-purple-700">
                  Your Creator Pitch
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Work With Me
                </span>
              </h1>

              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-pink-200/50 shadow-xl text-left">
                <p className="text-xl leading-relaxed text-gray-700 mb-6">
                  I create{" "}
                  <span className="font-semibold text-purple-600">
                    short-form content
                  </span>{" "}
                  that feels real, aesthetic, and tailored for curious, creative
                  audiences, whether it's a fashion brand, a beauty launch, or a
                  travel stay worth experiencing.
                </p>

                <p className="text-lg leading-relaxed text-gray-600">
                  Let's collaborate to create authentic content that resonates
                  with your target audience and drives real engagement. ✨
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Types */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">
              How We Can Collaborate
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {collaborationTypes.map((collab, index) => (
                <div
                  key={index}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-pink-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${collab.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:rotate-12 transition-transform duration-300`}
                    >
                      🎥
                    </div>
                    <h3 className="text-xl font-bold text-purple-700 mb-3">
                      {collab.type}
                    </h3>
                    <p className="text-purple-600 font-medium mb-2">
                      {collab.deliverables}
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {collab.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-purple-700">
                        {collab.price}
                      </span>
                      <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Brands Get */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">
              What Brands Get
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {brandsBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="text-center group hover:scale-105 transition-all duration-300"
                  >
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-pink-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-purple-700 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Brands I've Worked With */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-purple-700">
              Brands I've Worked With
            </h2>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-pink-200/50 shadow-xl">
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {collaboratedBrands.map((brand, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full border border-purple-200/50 hover:scale-105 transition-all duration-300"
                  >
                    <span className="font-semibold text-purple-700">
                      {brand}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6 border border-green-200/50">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Star className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-green-700">
                    Testimonial
                  </h3>
                </div>
                <p className="text-green-700 italic">
                  "Nikitha's content matched our brand tone perfectly — creative
                  and engaging."
                </p>
                <p className="text-sm text-green-600 mt-2">— Rebella Team</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="px-6 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Ready to Collaborate? ✨
              </h2>
              <p className="text-lg mb-8 opacity-90 text-center">
                Let's create something amazing together!
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-2xl text-purple-700 placeholder-purple-400 border-none outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Brand / Website"
                    className="w-full px-4 py-3 rounded-2xl text-purple-700 placeholder-purple-400 border-none outline-none"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-2xl text-purple-700 placeholder-purple-400 border-none outline-none"
                />

                <select className="w-full px-4 py-3 rounded-2xl text-purple-700 border-none outline-none">
                  <option>Type of Collaboration</option>
                  <option>Fashion / Beauty Collab</option>
                  <option>Travel / Stay Feature</option>
                  <option>UGC Package</option>
                  <option>Website / Business Feature</option>
                  <option>Other</option>
                </select>

                <textarea
                  placeholder="Tell me about your project..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-2xl text-purple-700 placeholder-purple-400 border-none outline-none resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-white text-purple-700 px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message 💌
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-white/80 mb-2">Or reach out directly:</p>
                <a
                  href="mailto:nikithasudeer@gmail.com"
                  className="text-white font-medium hover:underline"
                >
                  📧 nikithasudeer@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-purple-600 mb-4">
              Let's create something beautiful together 💕
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

        a, button, input, [role="button"] {
          cursor: none;
        }
      `}</style>
    </>
  );
}
