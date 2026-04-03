import { motion } from "framer-motion";
import { ChevronDown, Sparkles, MousePointer2 } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import heroBanners from "@/assets/hero-banners.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBanners} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-primary/3 blur-2xl animate-float" style={{ animationDelay: "5s" }} />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
        >
          <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
            <Sparkles className="w-4 h-4 text-primary" />
          </motion.div>
          <span className="text-sm text-primary font-medium">Premium Banner Designs</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight"
        >
          Stunning Banners
          <br />
          <span className="text-gradient-primary">That Convert</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Explore our curated collection of professionally designed banners that
          elevate your brand and captivate your audience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#featured"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-lg shadow-glow"
          >
            Explore Banners
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg border border-border text-foreground font-semibold text-lg hover:border-primary/50 transition-colors"
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Scroll down indicator - mouse style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16"
        >
          <a href="#featured" className="inline-flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
            
            {/* Mouse icon */}
            <div className="relative w-7 h-11 rounded-full border-2 border-muted-foreground/40 group-hover:border-primary/60 transition-colors">
              <motion.div
                animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"
              />
            </div>
            
            {/* Bouncing chevrons */}
            <div className="flex flex-col items-center -space-y-1">
              <motion.div
                animate={{ y: [0, 4, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 4, 0], opacity: [0.2, 0.7, 0.2] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
