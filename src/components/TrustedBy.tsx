import { motion } from "framer-motion";

const brands = [
  "Netflix", "Shopify", "Airbnb", "Spotify", "Stripe",
  "Slack", "Figma", "Notion", "Vercel", "Linear",
];

const TrustedBy = () => {
  return (
    <section id="trusted" className="py-16 px-4 border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground uppercase tracking-[0.2em] mb-10"
        >
          Trusted by marketing teams worldwide
        </motion.p>

        {/* Scrolling logos */}
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="shrink-0 text-muted-foreground/40 text-xl md:text-2xl font-heading font-bold tracking-wider select-none">
                {brand}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
