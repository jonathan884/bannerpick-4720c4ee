import { motion } from "framer-motion";
import { Code2, Image, Film, Zap, Monitor, Smartphone, BarChart3, Palette, Globe, MousePointerClick, Layers, RefreshCw } from "lucide-react";

const services = [
  {
    icon: Code2,
    tag: "HTML5",
    title: "HTML5 Banner Ads",
    subtitle: "Interactive & High-Performance Display Advertising",
    description:
      "Elevate your digital advertising campaigns with professionally coded HTML5 banner ads. Our responsive, lightweight banners are built to Google Ads specifications and load blazing fast across all devices — delivering higher click-through rates and maximum engagement.",
    features: [
      { icon: Monitor, text: "Google Display Network & DV360 ready" },
      { icon: Smartphone, text: "Fully responsive across all screen sizes" },
      { icon: Zap, text: "Optimized under 150KB for fast loading" },
      { icon: MousePointerClick, text: "Interactive elements & rich media support" },
    ],
    keywords: ["HTML5 banner design", "display ad production", "Google Ads banners", "rich media ads", "programmatic display advertising"],
    gradient: "from-primary/10 to-primary/5",
    accent: "primary",
  },
  {
    icon: Image,
    tag: "STATIC",
    title: "Static Banner Design",
    subtitle: "Clean, Impactful Visuals That Convert",
    description:
      "Make every pixel count with stunning static banner designs crafted for social media, websites, and email campaigns. Our pixel-perfect designs combine compelling visuals with strategic messaging to drive conversions — from social media banners to billboard-ready artwork.",
    features: [
      { icon: Palette, text: "Brand-consistent design system" },
      { icon: Layers, text: "Multi-platform & multi-size adaptation" },
      { icon: Globe, text: "Social media, web & print-ready formats" },
      { icon: BarChart3, text: "Conversion-focused visual hierarchy" },
    ],
    keywords: ["static banner design", "social media graphics", "web banner design", "display ad creative", "email header design"],
    gradient: "from-accent/10 to-accent/5",
    accent: "accent",
  },
  {
    icon: Film,
    tag: "ANIMATED",
    title: "Animated GIF Banners",
    subtitle: "Motion Graphics That Capture Attention",
    description:
      "Stand out in crowded feeds with eye-catching animated GIF banners. Our frame-by-frame animations combine smooth motion design with strategic messaging — perfect for email campaigns, social media advertising, and display networks where video isn't supported.",
    features: [
      { icon: RefreshCw, text: "Smooth looping frame-by-frame animation" },
      { icon: Zap, text: "Optimized file size for email & web" },
      { icon: BarChart3, text: "2-3x higher engagement than static ads" },
      { icon: Globe, text: "Universal format — works everywhere" },
    ],
    keywords: ["animated GIF banner", "motion banner design", "email animation", "animated display ads", "GIF ad production"],
    gradient: "from-primary/10 to-accent/5",
    accent: "primary",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BannerServices = () => {
  return (
    <section id="services" className="py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
            Professional <span className="text-gradient-primary">banner design</span> services
            <br className="hidden md:block" /> for every advertising platform
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            From high-performance HTML5 display ads to stunning static creatives and engaging animated GIFs — 
            we deliver conversion-optimized banner designs that elevate your brand and maximize ROI.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.tag}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 items-center`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} border border-${service.accent}/20 flex items-center justify-center`}>
                    <service.icon className={`w-6 h-6 text-${service.accent}`} />
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-[0.2em] text-${service.accent}`}>
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
                  {service.title}
                </h3>
                <p className={`text-${service.accent}/80 font-medium text-lg`}>
                  {service.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {service.description}
                </p>

                {/* Features grid */}
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  {service.features.map((f) => (
                    <div key={f.text} className="flex items-start gap-3 p-3 rounded-xl bg-card/50 border border-border/50">
                      <f.icon className={`w-5 h-5 text-${service.accent} shrink-0 mt-0.5`} />
                      <span className="text-sm text-foreground/80">{f.text}</span>
                    </div>
                  ))}
                </div>

                {/* SEO keyword tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.keywords.map((kw) => (
                    <span key={kw} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border/50">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual card */}
              <div className="flex-1 w-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative rounded-2xl bg-gradient-to-br ${service.gradient} border border-border/50 p-8 md:p-12 aspect-[4/3] flex flex-col items-center justify-center text-center overflow-hidden`}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }} />
                  
                  <service.icon className={`w-16 h-16 text-${service.accent}/60 mb-6`} />
                  <h4 className="text-2xl font-heading font-bold mb-2">{service.title}</h4>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    {service.subtitle}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex gap-8 mt-8">
                    {index === 0 && (
                      <>
                        <div><span className="text-2xl font-bold text-primary">150KB</span><p className="text-xs text-muted-foreground">Max Size</p></div>
                        <div><span className="text-2xl font-bold text-primary">60fps</span><p className="text-xs text-muted-foreground">Smooth</p></div>
                        <div><span className="text-2xl font-bold text-primary">100%</span><p className="text-xs text-muted-foreground">Responsive</p></div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div><span className="text-2xl font-bold text-accent">40+</span><p className="text-xs text-muted-foreground">Sizes</p></div>
                        <div><span className="text-2xl font-bold text-accent">4K</span><p className="text-xs text-muted-foreground">Resolution</p></div>
                        <div><span className="text-2xl font-bold text-accent">24hr</span><p className="text-xs text-muted-foreground">Delivery</p></div>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <div><span className="text-2xl font-bold text-primary">3x</span><p className="text-xs text-muted-foreground">Engagement</p></div>
                        <div><span className="text-2xl font-bold text-primary">30fps</span><p className="text-xs text-muted-foreground">Smooth</p></div>
                        <div><span className="text-2xl font-bold text-primary">∞</span><p className="text-xs text-muted-foreground">Loop</p></div>
                      </>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 p-12 rounded-2xl bg-card border border-border"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Not sure which banner type you need?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our team of expert designers will help you choose the right format for your campaign goals, platform requirements, and target audience.
          </p>
          <a
            href="#home"
            className="inline-flex px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition-opacity"
          >
            Get a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BannerServices;
