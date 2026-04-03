import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Sparkles, Search, Tag } from "lucide-react";
import { blogPosts } from "@/data/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(blogPosts.map((p) => p.category))];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4"
            >
              <Sparkles className="w-4 h-4" />
              Get Inspired Weekly
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
              Our <span className="text-gradient-primary">Blog</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Tips, trends, and insights on banner design and digital marketing
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl glass border border-border focus:border-primary/50 focus:outline-none text-foreground placeholder:text-muted-foreground text-sm transition-colors bg-transparent"
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-gradient-primary text-primary-foreground shadow-glow"
                      : "glass text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Tag className="w-3 h-3" />
                    {cat}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Featured Post */}
          {filteredPosts.length > 0 && activeCategory === "All" && !searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <Link to={`/blog/${filteredPosts[0].id}`} className="group block rounded-2xl overflow-hidden glass border border-border">
                <div className="grid md:grid-cols-2">
                  <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                    <img
                      src={filteredPosts[0].image}
                      alt={filteredPosts[0].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                      ✨ Featured • {filteredPosts[0].category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{filteredPosts[0].excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{filteredPosts[0].date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{filteredPosts[0].readTime}</span>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {(activeCategory === "All" && !searchQuery ? filteredPosts.slice(1) : filteredPosts).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Link to={`/blog/${post.id}`} className="group block rounded-2xl overflow-hidden glass border border-border shadow-card h-full">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{post.category}</span>
                    <h3 className="text-lg font-heading font-semibold mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-muted-foreground text-lg">No articles found matching your search.</p>
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
