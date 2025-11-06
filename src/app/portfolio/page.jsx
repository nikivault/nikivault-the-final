"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  Instagram,
  Coffee,
  Sparkles,
  Play,
  Eye,
  Filter,
  Grid,
  List,
} from "lucide-react";

export default function PortfolioPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  const categories = [
    { id: "all", name: "All Content", emoji: "🪩", count: 12 },
    { id: "fashion", name: "Fashion & Styling", emoji: "👗", count: 4 },
    { id: "beauty", name: "Beauty & Skincare", emoji: "💄", count: 3 },
    { id: "travel", name: "Travel & Lifestyle", emoji: "✈️", count: 3 },
    { id: "collabs", name: "Brand Collaborations", emoji: "🎥", count: 5 },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Rebella Fashion Styling",
      category: "fashion",
      type: "Brand Collaboration",
      description:
        "Styled this look for Rebella — comfy, colorful, and totally me 💅",
      engagement: "2.5K views",
      thumbnail: "🌈",
      tags: ["Fashion", "Styling", "Colorful"],
    },
    {
      id: 2,
      title: "Dot&Key Lip Gloss Review",
      category: "beauty",
      type: "Product Review",
      description:
        "Honest review of my current obsession — this gloss is everything! ✨",
      engagement: "1.8K views",
      thumbnail: "💋",
      tags: ["Beauty", "Skincare", "Review"],
    },
    {
      id: 3,
      title: "Kerala Travel Diary",
      category: "travel",
      type: "Travel Content",
      description:
        "Exploring the beautiful backwaters and hidden gems of Kerala 🌴",
      engagement: "3.2K views",
      thumbnail: "🏝️",
      tags: ["Travel", "Kerala", "Nature"],
    },
    {
      id: 4,
      title: "BuyDost Product Discovery",
      category: "collabs",
      type: "Brand Collaboration",
      description:
        "Found some amazing products through BuyDost — sharing my favorites! 🛍️",
      engagement: "2.1K views",
      thumbnail: "🛒",
      tags: ["Shopping", "Discovery", "Products"],
    },
    {
      id: 5,
      title: "Autumn Fashion Lookbook",
      category: "fashion",
      type: "Fashion Content",
      description: "Cozy autumn vibes with warm colors and comfy textures 🍂",
      engagement: "4.1K views",
      thumbnail: "🍁",
      tags: ["Fashion", "Autumn", "Lookbook"],
    },
    {
      id: 6,
      title: "Ningen Skincare Routine",
      category: "beauty",
      type: "Brand Collaboration",
      description: "My evening skincare routine featuring Ningen products 🌙",
      engagement: "2.8K views",
      thumbnail: "🌟",
      tags: ["Skincare", "Routine", "Evening"],
    },
    {
      id: 7,
      title: "Coffee Shop Aesthetic",
      category: "travel",
      type: "Lifestyle Content",
      description:
        "Found the coziest coffee shop with the most Instagram-worthy corners ☕",
      engagement: "1.9K views",
      thumbnail: "☕",
      tags: ["Lifestyle", "Coffee", "Aesthetic"],
    },
    {
      id: 8,
      title: "One Wish Lipstick Collection",
      category: "beauty",
      type: "Brand Collaboration",
      description:
        "Swatching and reviewing the entire One Wish lipstick range 💄",
      engagement: "3.5K views",
      thumbnail: "💄",
      tags: ["Beauty", "Lipstick", "Swatches"],
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

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
                className="text-purple-700 hover:text-pink-600 transition-colors font-medium border-b-2 border-pink-400"
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
          <div className="max-w-6xl mx-auto text-center">
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
            >
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-pink-200">
                <Play className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-purple-700">
                  Your Work, Visualized
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h1>

              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                A curated collection of my content across fashion, beauty,
                travel, and brand collaborations. Each piece tells a story and
                connects with audiences in an authentic way. ✨
              </p>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-pink-200/50 shadow-xl max-w-2xl mx-auto">
                <p className="text-lg font-medium text-purple-700">
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

        {/* Filter Section */}
        <section className="px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                        : "bg-white/60 backdrop-blur-sm text-purple-700 hover:bg-white/80 border border-pink-200/50"
                    }`}
                  >
                    <span>{category.emoji}</span>
                    <span className="font-medium">{category.name}</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full p-1 border border-pink-200/50">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-purple-500 text-white"
                      : "text-purple-600 hover:bg-purple-100"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-purple-500 text-white"
                      : "text-purple-600 hover:bg-purple-100"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="px-6 py-8">
          <div className="max-w-6xl mx-auto">
            {viewMode === "grid" ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`group hover:scale-105 transition-all duration-300 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-20 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-pink-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                      {/* Thumbnail */}
                      <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center text-6xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 to-pink-300/20"></div>
                        <span className="relative z-10">{item.thumbnail}</span>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                            {item.type}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-purple-600">
                            <Eye className="w-3 h-3" />
                            {item.engagement}
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-purple-700 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`group hover:scale-[1.02] transition-all duration-300 ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-20 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-pink-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="flex gap-6">
                        {/* Thumbnail */}
                        <div className="w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 to-pink-300/20"></div>
                          <span className="relative z-10">
                            {item.thumbnail}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                              {item.type}
                            </span>
                            <div className="flex items-center gap-1 text-xs text-purple-600">
                              <Eye className="w-3 h-3" />
                              {item.engagement}
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-purple-700 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 mb-3 leading-relaxed">
                            {item.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl">
              <h2 className="text-3xl font-bold mb-4">Love What You See? ✨</h2>
              <p className="text-lg mb-6 opacity-90">
                Let's create something amazing together! I'd love to bring your
                brand's story to life through authentic, engaging content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/work-with-me"
                  className="bg-white text-purple-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  💌 Let's Collaborate
                </a>
                <a
                  href="https://instagram.com/nikivault"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  See More on Instagram
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-purple-600 mb-4">
              Thanks for checking out my work 💕
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
