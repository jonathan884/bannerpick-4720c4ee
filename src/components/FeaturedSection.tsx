import { motion } from "framer-motion";
import { Paintbrush, Layers, Zap, Target, ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";

const features = [
  {
    icon: <Paintbrush className="w-6 h-6" />,
    step: "CREATE",
    title: "One design, endless possibilities",
    description: "From static banners to animated GIFs and HTML5 ads — we craft pixel-perfect creatives tailored to your brand.",
    points: [
      "🎨  Custom designs for every platform",
      "✨  Consistent brand identity across all assets",
      "⚡  Fast turnaround without compromising quality",
    ],
    testimonial: {
      quote: "BannerPick transformed our ad creatives. Our CTR improved by 3x within the first month.",
      author: "Sarah M.",
      role: "Marketing Director",
    },
  },
  {
    icon: <Layers className="w-6 h-6" />,
    step: "SCALE",
    title: "From one banner to hundreds",
    description: "Need banners in multiple sizes and formats? We handle bulk production while maintaining design quality.",
    points: [
      "📐  All standard ad sizes covered",
      "🔄  Responsive designs that adapt perfectly",
      "📦  Bulk delivery with organized file structure",
    ],
    testimonial: {
      quote: "They delivered 200+ banner variants in a week. The consistency was remarkable.",
      author: "David L.",
      role: "E-commerce Manager",
    },
  },
  {
    icon: <Zap className="w-6 h-6" />,
    step: "PERFORM",
    title: "Designs that drive real results",
    description: "Every banner is designed with conversion in mind — strong CTAs, visual hierarchy, and platform optimization.",
    points: [
      "🎯  Conversion-focused design principles",
      "📊  A/B test-ready variants included",
      "🚀  Optimized for Google, Meta & more",
    ],
    testimonial: {
      quote: "Our display ad performance doubled after switching to BannerPick's designs.",
      author: "Alex K.",
      role: "Performance Marketer",
    },
  },
];

const FeaturedSection = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section id="featured" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Don't let design bottlenecks
              <br />
              <span className="text-gradient-primary">kill your growth</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your creative process from a bottleneck to a growth accelerator. 
              Get professional banner designs delivered fast.
            </p>
          </motion.div>

          {/* Feature blocks */}
          <div className="space-y-32">
            {features.map((feature, i) => (
              <motion.div
                key={feature.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 md:gap-20 items-center`}
              >
                {/* Text side */}
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="text-primary"
                    >
                      {feature.icon}
                    </motion.div>
                    <span className="text-sm font-bold text-primary tracking-wider">{feature.step}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.points.map((point, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.1 }}
                        className="text-foreground/80"
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial card side */}
                <div className="flex-1 w-full">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-2xl bg-card border border-border shadow-card"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <motion.span
                          key={j}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.1 }}
                          className="text-primary text-lg"
                        >
                          ★
                        </motion.span>
                      ))}
                    </div>
                    <p className="text-foreground/90 text-lg leading-relaxed mb-6 italic">
                      "{feature.testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-heading font-semibold text-foreground">{feature.testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{feature.testimonial.role}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 md:p-20 rounded-3xl bg-card border border-border relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <div className="relative z-10">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6"
              >
                <Target className="w-8 h-8" />
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Ready to create banners
                <br />
                <span className="text-gradient-primary">that actually convert?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
                BannerPick helps businesses create professional, high-converting banner designs for every platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  onClick={() => setContactOpen(true)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:border-primary/50 transition-all"
                >
                  Book a consultation
                </motion.button>
                <motion.button
                  onClick={() => setContactOpen(true)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow"
                >
                  Get started
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default FeaturedSection;
