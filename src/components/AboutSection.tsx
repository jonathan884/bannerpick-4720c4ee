import { motion } from "framer-motion";
import { Users, Award, Palette, Target, Lightbulb, Rocket } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const values = [
  { icon: <Lightbulb className="w-6 h-6" />, title: "Innovation", desc: "Pushing creative boundaries with every design" },
  { icon: <Target className="w-6 h-6" />, title: "Precision", desc: "Pixel-perfect attention to every detail" },
  { icon: <Rocket className="w-6 h-6" />, title: "Results", desc: "Designs that drive real business outcomes" },
];

const milestones = [
  { year: "2019", title: "Founded", desc: "BannerPick was born with a vision to revolutionize banner design" },
  { year: "2020", title: "First 100 Clients", desc: "Reached our first milestone of serving 100 businesses" },
  { year: "2022", title: "Global Expansion", desc: "Expanded services to over 30 countries worldwide" },
  { year: "2024", title: "Award Winning", desc: "Recognized as a top design agency in digital marketing" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Who <span className="text-gradient-primary">We Are</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're a passionate team of designers and marketers dedicated to creating
            banners that don't just look great — they perform.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <AnimatedCounter end={500} suffix="+" label="Happy Clients" icon={<Users className="w-6 h-6" />} />
          <AnimatedCounter end={2500} suffix="+" label="Banners Created" icon={<Palette className="w-6 h-6" />} />
          <AnimatedCounter end={15} suffix="" label="Awards Won" icon={<Award className="w-6 h-6" />} />
          <AnimatedCounter end={30} suffix="+" label="Countries Served" icon={<Target className="w-6 h-6" />} />
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-card text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4"
              >
                {v.icon}
              </motion.div>
              <h3 className="text-xl font-heading font-semibold mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Roadmap */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-3xl font-heading font-bold mb-2">
            Our <span className="text-gradient-primary">Journey</span>
          </h3>
        </motion.div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-border" />
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-center mb-10 ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <div className={`w-5/12 p-5 rounded-2xl bg-card border border-border shadow-card ${i % 2 === 0 ? "text-right mr-auto" : "text-left ml-auto"}`}>
                <span className="text-primary font-bold font-heading text-lg">{m.year}</span>
                <h4 className="font-heading font-semibold mt-1">{m.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary border-4 border-background" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
