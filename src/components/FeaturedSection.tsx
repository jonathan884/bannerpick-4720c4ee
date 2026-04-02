import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Eye, X } from "lucide-react";
import { banners } from "@/data/content";

const FeaturedSection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const featured = banners.slice(0, 3);

  return (
    <section id="featured" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-4">
            Our <span className="text-gradient-primary">Best Sellers</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our most popular and highest-rated banner designs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((banner, i) => (
            <motion.div
              key={banner.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-card cursor-pointer"
              onClick={() => setLightbox(banner.id)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={banner.image}
                  alt={banner.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">{banner.category}</span>
                  <h3 className="text-lg font-heading font-semibold mt-1">{banner.title}</h3>
                </div>
                <Eye className="absolute top-4 right-4 w-5 h-5 text-primary" />
              </div>
              {i === 0 && (
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold">
                  Best Seller
                </div>
              )}
            </motion.div>
          ))}
        </div>
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
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 text-foreground hover:text-primary"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={banners.find((b) => b.id === lightbox)?.image}
                alt=""
                className="w-full rounded-2xl shadow-card"
              />
              <div className="mt-4">
                <h3 className="text-xl font-heading font-bold">
                  {banners.find((b) => b.id === lightbox)?.title}
                </h3>
                <p className="text-muted-foreground mt-1">
                  {banners.find((b) => b.id === lightbox)?.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedSection;
