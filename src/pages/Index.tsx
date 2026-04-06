import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import FeaturedSection from "@/components/FeaturedSection";
import BannerServices from "@/components/BannerServices";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustedBy />
      <FeaturedSection />
      <BannerServices />
      <AboutSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
