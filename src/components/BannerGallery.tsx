import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Grid3x3, X, Eye } from "lucide-react";
import { banners, categories } from "@/data/content";

const BannerGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? banners : banners.filter((b) => b.category === activeCategory);

  return (
    <section id="categories" className="py-24 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
            <Grid3x3 className="w-4 h-4" />
            All Categories
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-4">
            Browse Our <span className="text-gradient-primary">Collection</span>
          </h2>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", ...categories].map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Banner grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((banner) => (
              <motion.div
                key={banner.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card cursor-pointer"
                onClick={() => setLightbox(banner.id)}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">{banner.category}</span>
                  <h3 className="text-lg font-heading font-semibold mt-1">{banner.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{banner.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setLightbox(null)} className="absolute -top-12 right-0 text-foreground hover:text-primary">
                <X className="w-8 h-8" />
              </button>
              <img src={banners.find((b) => b.id === lightbox)?.image} alt="" className="w-full rounded-2xl shadow-card" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BannerGallery;
