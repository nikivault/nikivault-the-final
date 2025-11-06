"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  Instagram,
  Coffee,
  Sparkles,
  ArrowRight,
  Play,
  MapPin,
  Music,
  ShoppingBag,
  Plane,
} from "lucide-react";

export default function HomePage() {
  const [currentMood, setCurrentMood] = useState(0);
  const [vaultStats, setVaultStats] = useState({
    collabs: 5,
    trips: 3,
    coffees: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const moodBoard = [
    { icon: Music, text: "Song I'm loving", item: "Flowers - Miley Cyrus" },
    {
      icon: ShoppingBag,
      text: "Product of the week",
      item: "Dot&Key Lip Gloss",
    },
    { icon: Plane, text: "Place I want to visit", item: "Japan & Switzerland" },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentMood((prev) => (prev + 1) % moodBoard.length);
    }, 3000);
    return () => clearInterval(interval);
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
            <div
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent cursor-pointer hover:scale-110 transition-transform duration-300"
              title="Made with 💖 by Niki"
            >
              @nikivault
            </div>
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
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
              >
                <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-pink-200">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-purple-700">
                    Available for collaborations
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                  <span className="wave-text">👋</span> Hey, I'm{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                    Niki
                  </span>
                </h1>

                <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                  and I create{" "}
                  <span className="font-semibold text-purple-600">
                    short-form videos
                  </span>{" "}
                  that inspire and inform, from fashion styling and makeup
                  reviews to travel diaries and so on! ✨
                </p>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  I love creating content that feels real — from styling looks I
                  actually wear, to sharing honest beauty finds, to discovering
                  places and brands worth talking about.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button
                    onClick={() =>
                      document
                        .getElementById("collab-section")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    💌 Work With Me
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href="https://instagram.com/nikivault"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 backdrop-blur-sm text-purple-700 border-2 border-purple-200 px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <Play className="w-4 h-4" />🎥 Watch My Reels
                    <Instagram className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </a>
                </div>

                {/* Live Vault Counter */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-pink-200/50 shadow-lg">
                  <h3 className="text-lg font-semibold text-purple-700 mb-4">
                    ✨ Live Vault Counter
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                        <ShoppingBag className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold text-purple-700">
                        {vaultStats.collabs} collabs
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                        <Plane className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold text-purple-700">
                        {vaultStats.trips} trips
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full flex items-center justify-center">
                        <Coffee className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold text-purple-700">
                        {vaultStats.coffees} chais bought
                      </span>
                      <span className="text-sm text-gray-600">
                        (be the first one!)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Visual */}
              <div
                className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
              >
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl p-8 border border-pink-300/30 shadow-2xl">
                    <div className="aspect-square bg-gradient-to-br from-purple-300 to-pink-300 rounded-2xl flex items-center justify-center text-8xl mb-6">
                      🪩
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-purple-700 mb-2">
                        @nikivault
                      </h3>
                      <p className="text-purple-600">
                        Fashion • Beauty • Travel
                      </p>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center animate-bounce">
                    ✨
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-300 rounded-full flex items-center justify-center animate-pulse">
                    💄
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mini Mood Board */}
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-pink-200/50 shadow-xl">
              <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
                🎧 Mini Mood Board
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {moodBoard.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className={`transform transition-all duration-500 hover:scale-105 ${
                        currentMood === index ? "ring-2 ring-purple-400" : ""
                      }`}
                    >
                      <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 text-center border border-purple-200/30">
                        <Icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                        <h3 className="font-semibold text-purple-700 mb-2">
                          {item.text}
                        </h3>
                        <p className="text-sm text-purple-600">{item.item}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Hidden Confessions */}
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">
              💭 Hidden Confessions
            </h2>
            <p className="text-center text-purple-600 mb-8">
              Anonymous thoughts from my amazing followers ✨
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                "Your outfit posts literally save my wardrobe everyday! Thank you for being so real about affordable fashion 💕",
                "I started my own content creation journey because you inspired me to be authentic. Thank you Niki! 🌟",
                "Your travel posts make me want to explore Kerala so badly! The way you capture moments is magical ✨",
                "That skincare routine video changed my life! My skin has never looked better 💄",
                "You're literally the reason I discovered so many amazing brands. Your recommendations are always spot on! 🛍️",
                "Your positive energy is contagious! Even on my worst days, your content makes me smile 😊",
              ].map((confession, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-6 border border-pink-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <p className="text-purple-700 italic leading-relaxed mb-4">
                    "{confession}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-sm text-purple-500">
                      Anonymous Follower
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                💌 Send Anonymous Message
              </button>
            </div>
          </div>
        </section>

        {/* Wishlist Wall */}
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">
              💖 Wishlist Wall
            </h2>
            <p className="text-center text-purple-600 mb-8">
              Things I'm currently dreaming about ✨
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  item: "Professional Ring Light",
                  price: "₹3,500",
                  category: "Equipment",
                  emoji: "💡",
                },
                {
                  item: "Vintage Film Camera",
                  price: "₹15,000",
                  category: "Photography",
                  emoji: "📸",
                },
                {
                  item: "Korean Skincare Set",
                  price: "₹5,000",
                  category: "Beauty",
                  emoji: "🌸",
                },
                {
                  item: "Aesthetic Tripod",
                  price: "₹2,800",
                  category: "Equipment",
                  emoji: "📱",
                },
                {
                  item: "Cozy Oversized Sweater",
                  price: "₹2,200",
                  category: "Fashion",
                  emoji: "🧥",
                },
                {
                  item: "Japan Travel Fund",
                  price: "₹1,50,000",
                  category: "Travel",
                  emoji: "🗾",
                },
              ].map((wishItem, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-pink-200/50 shadow-xl hover:scale-105 transition-all duration-300 relative"
                >
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-2xl transform rotate-12">
                    {wishItem.emoji}
                  </div>
                  <div className="mb-4">
                    <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                      {wishItem.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-purple-700 mb-2">
                    {wishItem.item}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-4">
                    {wishItem.price}
                  </p>
                  <button className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-2 rounded-full text-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                    Help Niki Get This ✨
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="px-6 py-12" id="collab-section">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl">
              <h2 className="text-3xl font-bold mb-4">
                Join The Cozy Internet Club ☕
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Where I tell you stories, share behind-the-scenes moments, and
                give you first access to collaborations!
              </p>
              <form id="mc-proxy-form" onSubmit={async (e)=>{e.preventDefault(); const form = e.target; const fd = new FormData(form); const email = fd.get('EMAIL'); const fname = fd.get('FNAME') || ''; try{ const resp = await fetch('/api/subscribe', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({email,fname})}); const j = await resp.json(); if(resp.ok){ alert('Subscribed! Check your email.'); form.reset(); } else { alert('Error: '+(j.error||'Unable to subscribe')); } } catch(err){ alert('Network error'); } }} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto w-full"> 
                <input name="EMAIL" type="email" placeholder="your@email.com" required className="flex-1 px-4 py-3 rounded-full text-purple-700 placeholder-purple-400 border-none outline-none" /> 
                <input name="FNAME" type="text" placeholder="Your first name (optional)" className="hidden" /> 
                <button type="submit" className="bg-white text-purple-700 px-6 rounded-full font-semibold shadow hover:shadow-lg hover:scale-105 transition-all duration-300">Join 💌</button> 
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-16 bg-gradient-to-br from-purple-200 via-pink-100 to-blue-100">
          <div className="max-w-6xl mx-auto">
            {/* Wall of Love */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center mb-8 text-purple-700">
                💖 Wall of Love
              </h2>
              <p className="text-center text-purple-600 mb-8">
                Beautiful messages from my amazing community ✨
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    name: "Priya",
                    message:
                      "Niki's authenticity shines through every post. She's not just creating content, she's building a genuine community! 💕",
                    color: "from-pink-200 to-rose-200",
                  },
                  {
                    name: "Anjali",
                    message:
                      "I discovered so many amazing brands through Niki! Her recommendations are always spot-on and honest 🌟",
                    color: "from-purple-200 to-pink-200",
                  },
                  {
                    name: "Kavya",
                    message:
                      "The way she presents Kerala's beauty makes me so proud of our state! Her travel content is pure magic ✨",
                    color: "from-blue-200 to-purple-200",
                  },
                  {
                    name: "Meera",
                    message:
                      "Niki inspired me to start my own creative journey. Her positive energy is absolutely contagious! 🌈",
                    color: "from-yellow-200 to-pink-200",
                  },
                  {
                    name: "Riya",
                    message:
                      "Every collaboration feels so genuine! She only works with brands she truly believes in 💎",
                    color: "from-green-200 to-blue-200",
                  },
                  {
                    name: "Sneha",
                    message:
                      "Her fashion sense is incredible! I've recreated so many of her looks and always get compliments 👗",
                    color: "from-orange-200 to-pink-200",
                  },
                ].map((love, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${love.color} rounded-3xl p-6 border border-pink-200/50 shadow-xl hover:scale-105 transition-all duration-300 transform hover:rotate-1`}
                  >
                    <p className="text-purple-700 mb-4 leading-relaxed font-medium">
                      "{love.message}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                        {love.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-purple-700">
                          {love.name}
                        </p>
                        <p className="text-xs text-purple-500">
                          Vault Community Member
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 mr-4">
                  💌 Share Your Love
                </button>
                <button className="bg-white/60 backdrop-blur-sm text-purple-700 border-2 border-purple-200 px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                  🌟 Join the Community
                </button>
              </div>
            </div>

            {/* Support Section */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-pink-200/50 shadow-xl mb-12">
              <h3 className="text-2xl font-bold text-center mb-6 text-purple-700">
                💝 Support Niki's Journey
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Coffee className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-purple-700 mb-2">
                    Buy Me Chai
                  </h4>
                  <p className="text-sm text-purple-600 mb-4">
                    Fuel my creativity with some chai love!
                  </p>
                  <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                    ☕ ₹50
                  </button>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-purple-700 mb-2">
                    Tip Jar
                  </h4>
                  <p className="text-sm text-purple-600 mb-4">
                    Support my content creation journey!
                  </p>
                  <button className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                    💝 ₹100
                  </button>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-purple-700 mb-2">
                    Gift Wishlist
                  </h4>
                  <p className="text-sm text-purple-600 mb-4">
                    Help me get equipment & more!
                  </p>
                  <button className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                    🎁 Surprise
                  </button>
                </div>
              </div>
            </div>

            {/* Fan Shoutouts */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4 text-purple-700">
                🙌 This Month's Supporters
              </h3>
              <p className="text-purple-600 mb-6">
                These legends powered this month's content!
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Aditi K.",
                  "Rohit M.",
                  "Shreya P.",
                  "Kiran S.",
                  "Naina R.",
                ].map((supporter, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full border border-purple-200/50 hover:scale-105 transition-all duration-300"
                  >
                    <span className="text-purple-700 font-medium">
                      {supporter} 🌟
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="text-center">
              <p className="text-purple-600 mb-6">
                Thanks for being part of my journey 💕
              </p>
              <div className="flex justify-center space-x-8 mb-8">
                <a
                  href="https://instagram.com/nikivault"
                  className="text-purple-600 hover:text-pink-500 transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-6 h-6" />
                  <span className="hidden md:inline">@nikivault</span>
                </a>
                <a
                  href="mailto:nikithasudeer@gmail.com"
                  className="text-purple-600 hover:text-pink-500 transition-colors flex items-center gap-2"
                >
                  <Heart className="w-6 h-6" />
                  <span className="hidden md:inline">Email</span>
                </a>
                <button className="text-purple-600 hover:text-pink-500 transition-colors flex items-center gap-2">
                  <Coffee className="w-6 h-6" />
                  <span className="hidden md:inline">Buy Chai</span>
                </button>
              </div>

              {/* Quick Links */}
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
                <a
                  href="/about"
                  className="text-purple-500 hover:text-pink-500 transition-colors"
                >
                  About
                </a>
                <a
                  href="/portfolio"
                  className="text-purple-500 hover:text-pink-500 transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="/work-with-me"
                  className="text-purple-500 hover:text-pink-500 transition-colors"
                >
                  Collaborations
                </a>
                <a
                  href="/blog"
                  className="text-purple-500 hover:text-pink-500 transition-colors"
                >
                  Blog
                </a>
                <a
                  href="/contact"
                  className="text-purple-500 hover:text-pink-500 transition-colors"
                >
                  Contact
                </a>
              </div>

              <div className="border-t border-purple-200/50 pt-8">
                <p className="text-sm text-purple-500 mb-2">
                  Made with 💖 by Niki • Based in Kerala, India
                </p>
                <p className="text-xs text-purple-400">
                  © 2025 @nikivault • All rights reserved • Open for travel
                  collaborations
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        .wave-text {
          display: inline-block;
          animation: wave 2s infinite;
        }
        
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }

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
