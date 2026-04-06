import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 md:pt-36">
        <ParticleBackground />
        
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-bold leading-[1.1] tracking-tight mb-8"
          >
            <span className="text-foreground">Design </span>
            <span className="relative inline-block">
              <span className="text-gradient-primary">stunning</span>
              <motion.span 
                className="absolute -inset-2 border-2 border-dashed border-primary/40 rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </span>
            <span className="text-foreground"> banners</span>
            <br />
            <span className="text-foreground">that </span>
            <span className="relative inline-block">
              <span className="text-gradient-primary">convert</span>
              <motion.span 
                className="absolute -inset-2 border-2 border-dashed border-primary/40 rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              />
            </span>
            <span className="text-foreground"> at scale</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Professional banner designs for every platform. From static to animated, 
            we create visuals that elevate your brand and drive results.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={() => setContactOpen(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-xl border border-border text-foreground font-semibold text-base hover:border-primary/50 hover:bg-card/50 transition-all"
            >
              Book a consultation
            </motion.button>
            <motion.a
              href="#featured"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-base shadow-glow"
            >
              Get started
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>

        {/* Scrolling banner showcase */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-10 w-full mt-20 overflow-hidden"
        >
          <BannerMarquee direction="left" speed={30} />
          <BannerMarquee direction="right" speed={25} />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="relative z-10 mt-12 mb-8"
        >
          <a href="#trusted" className="inline-flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
            <div className="relative w-6 h-10 rounded-full border-2 border-muted-foreground/30 group-hover:border-primary/50 transition-colors">
              <motion.div
                animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
              />
            </div>
          </a>
        </motion.div>
      </section>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

// Marquee component for scrolling banners
const bannerImages = [
  "https://cdn.prod.website-files.com/672b6e17b837fe6d8ed6a300/677cfa4c79f169ee077195a8_Template%203.avif",
  "https://cdn.prod.website-files.com/672b6e17b837fe6d8ed6a300/677cfa4cad4de39551e613e3_Template%206.avif",
  "https://cdn.prod.website-files.com/672b6e17b837fe6d8ed6a300/677cfa4c4f89b5f0b28632b9_Template%209.avif",
  "https://cdn.prod.website-files.com/672b6e17b837fe6d8ed6a300/677cfa4c709a8c5f7ce43f26_Template%2012.avif",
  "https://cdn.prod.website-files.com/672b6e17b837fe6d8ed6a300/677cfa4cdd47acd0e9f1038f_Template%2015.avif",
  "https://cdn.prod.website-files.com/672b6e17b837fe6d8ed6a300/677cfa4c897d8035847d15aa_Template%2018.avif",
  "https://cdn.prod.website-files.com/672b6e17b837fe6d8ed6a300/677cfa4c46248aaf342898c7_Template%2010.avif",
  "https://cdn.prod.website-files.com/672b6e17b837fe6d8ed6a300/677cfa4caa8639e2c562a5ee_Template%2014.avif",
];

const BannerMarquee = ({ direction, speed }: { direction: "left" | "right"; speed: number }) => {
  const images = [...bannerImages, ...bannerImages];
  
  return (
    <div className="flex gap-4 py-2 overflow-hidden">
      <motion.div
        className="flex gap-4 shrink-0"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      >
        {images.map((src, i) => (
          <div key={i} className="shrink-0 w-48 h-32 md:w-56 md:h-36 rounded-xl overflow-hidden border border-border/50 shadow-card">
            <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
