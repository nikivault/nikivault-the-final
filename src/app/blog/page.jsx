"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  Instagram,
  Coffee,
  Sparkles,
  Calendar,
  Clock,
  Tag,
  Search,
  Filter,
} from "lucide-react";

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Posts", emoji: "🪩", count: 8 },
    { id: "fashion", name: "Fashion & Styling", emoji: "👗", count: 3 },
    { id: "beauty", name: "Beauty & Skincare", emoji: "💄", count: 2 },
    { id: "travel", name: "Travel & Lifestyle", emoji: "✈️", count: 2 },
    { id: "creator", name: "Creator Life", emoji: "🎥", count: 1 },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "My Journey as a Content Creator: The Real Behind-the-Scenes",
      category: "creator",
      excerpt:
        "From my first awkward video to finding my authentic voice online — here's the honest story of my creator journey...",
      date: "Nov 3, 2025",
      readTime: "5 min read",
      tags: ["Creator Life", "Journey", "Behind the Scenes"],
      vaultRating: "☕☕☕",
      featured: true,
    },
    {
      id: 2,
      title: "Kerala Travel Diary: Hidden Gems You Need to Visit",
      category: "travel",
      excerpt:
        "Sharing my favorite secret spots in Kerala that aren't in every travel guide. From cozy cafes to stunning viewpoints...",
      date: "Oct 28, 2025",
      readTime: "7 min read",
      tags: ["Travel", "Kerala", "Hidden Gems"],
      vaultRating: "⭐⭐⭐",
    },
    {
      id: 3,
      title: "Affordable Fashion Finds That Look Expensive",
      category: "fashion",
      excerpt:
        "Let's talk about those budget-friendly pieces that give luxury vibes. Here are my current obsessions under ₹2000...",
      date: "Oct 25, 2025",
      readTime: "4 min read",
      tags: ["Fashion", "Budget", "Styling"],
      vaultRating: "💄💄💄",
    },
    {
      id: 4,
      title: "Skincare Routine That Actually Works for Indian Weather",
      category: "beauty",
      excerpt:
        "After years of trial and error, I've finally found a routine that works in our humid climate. No fancy products needed...",
      date: "Oct 20, 2025",
      readTime: "6 min read",
      tags: ["Skincare", "Beauty", "Indian Weather"],
      vaultRating: "☕☕",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "all" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
                className="text-purple-700 hover:text-pink-600 transition-colors font-medium"
              >
                Work With Me
              </a>
              <a
                href="/blog"
                className="text-purple-700 hover:text-pink-600 transition-colors font-medium border-b-2 border-pink-400"
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Inside the Vault 🪩
                </span>
              </h1>

              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Stories, travel diaries, and little creator moments by Niki ☕
              </p>

              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-pink-200/50 text-purple-700 placeholder-purple-400 outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Random Post
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
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
          </div>
        </section>

        {/* Blog Posts */}
        <section className="px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className={`group hover:scale-105 transition-all duration-300 ${
                    post.featured ? "md:col-span-2" : ""
                  } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-pink-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                        {
                          categories.find((cat) => cat.id === post.category)
                            ?.name
                        }
                      </span>
                      <div className="flex items-center gap-1 text-xs text-purple-600">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-purple-600">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>

                    <h2
                      className={`font-bold text-purple-700 mb-3 ${post.featured ? "text-3xl" : "text-xl"}`}
                    >
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full flex items-center gap-1"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-purple-600">
                          Vault Rating:
                        </span>
                        <span className="text-lg">{post.vaultRating}</span>
                      </div>
                    </div>

                    <button className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                      Read More
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl">
              <h2 className="text-3xl font-bold mb-4">
                💌 Join The Cozy Internet Club
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Get fashion, travel & creator updates straight to your inbox!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-full text-purple-700 placeholder-purple-400 border-none outline-none"
                />
                <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Subscribe ✨
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-purple-600 mb-4">
              Thanks for reading my stories 💕
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
