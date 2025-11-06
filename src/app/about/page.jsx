"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  Instagram,
  Coffee,
  Sparkles,
  ArrowRight,
  Camera,
  MapPin,
  Star,
  CheckCircle,
} from "lucide-react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const contentPillars = [
    {
      emoji: "👗",
      title: "Fashion & Styling",
      description: "Outfit ideas, brand collabs, and aesthetic looks",
      color: "from-purple-400 to-pink-400",
    },
    {
      emoji: "💄",
      title: "Beauty & Skincare",
      description: "Honest product reviews and self-care favorites",
      color: "from-pink-400 to-rose-400",
    },
    {
      emoji: "✈️",
      title: "Travel & Lifestyle",
      description: "Stays, experiences, and photo diaries",
      color: "from-blue-400 to-purple-400",
    },
  ];

  const collaboratedBrands = [
    { name: "BuyDost", type: "Product discovery reel", verified: true },
    { name: "Rebella", type: "Fashion styling", verified: true },
    { name: "Ningen", type: "Skincare product feature", verified: true },
    { name: "One Wish", type: "Lipstick showcase", verified: true },
    { name: "Aqualens", type: "Contact lens demo", verified: true },
  ];

  const funDetails = [
    { emoji: "☕", label: "Current obsession", value: "Iced matcha lattes" },
    {
      emoji: "💋",
      label: "Can't live without",
      value: "Definitely my Dot&Key Lip Gloss",
    },
    { emoji: "🧳", label: "Dream destination", value: "Japan + Switzerland" },
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
                className="text-purple-700 hover:text-pink-600 transition-colors font-medium border-b-2 border-pink-400"
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
                <Camera className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-purple-700">
                  Your Creator Story
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  About Niki
                </span>
              </h1>

              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-pink-200/50 shadow-xl text-left">
                <p className="text-xl leading-relaxed text-gray-700 mb-6">
                  I'm{" "}
                  <span className="font-semibold text-purple-600">Niki</span> —
                  a creator who loves fashion, beauty, and travel. What started
                  as a small creative outlet has grown into a space where I post
                  real, creative, and relatable moments and share nostalgic
                  throwbacks, fun trends, and the cool internet finds that
                  inspire me.
                </p>

                <p className="text-lg leading-relaxed text-gray-600">
                  My content feels genuine because it comes from genuine
                  experiences — whether I'm styling an outfit I'd actually wear,
                  testing a product I'm curious about, or exploring places that
                  genuinely excite me. I believe in creating content that's both
                  beautiful and honest. ✨
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Pillars */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">
              My Content Pillars
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {contentPillars.map((pillar, index) => (
                <div
                  key={index}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-pink-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:rotate-12 transition-transform duration-300`}
                    >
                      {pillar.emoji}
                    </div>
                    <h3 className="text-xl font-bold text-purple-700 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaborated Brands */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">
              Collaborated Brands
            </h2>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-pink-200/50 shadow-xl">
              <div className="grid gap-4">
                {collaboratedBrands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <div>
                        <h3 className="font-semibold text-purple-700">
                          {brand.name}
                        </h3>
                        <p className="text-sm text-purple-600">{brand.type}</p>
                      </div>
                    </div>
                    {brand.verified && (
                      <div className="flex items-center gap-1 bg-green-100 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-green-600" />
                        <span className="text-xs text-green-700 font-medium">
                          Verified
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl border border-purple-200/50">
                <p className="text-center text-purple-700 font-medium">
                  <span className="text-2xl">🎯</span> These collaborations
                  reached{" "}
                  <span className="font-bold">
                    thousands of engaged viewers
                  </span>{" "}
                  through short, aesthetic, story-driven videos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Details */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">
              Fun Details About Me
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {funDetails.map((detail, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-pink-200/50 shadow-xl text-center hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{detail.emoji}</div>
                  <h3 className="font-semibold text-purple-700 mb-2">
                    {detail.label}
                  </h3>
                  <p className="text-purple-600">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl">
              <h2 className="text-3xl font-bold mb-4">
                Let's Create Together! ✨
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Ready to collaborate on authentic, engaging content that
                resonates with your audience?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/work-with-me"
                  className="bg-white text-purple-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  💌 Work With Me
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com/nikivault"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  Follow My Journey
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-purple-600 mb-4">
              Thanks for getting to know me better 💕
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
