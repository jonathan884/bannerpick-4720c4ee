import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import FeaturedSection from "@/components/FeaturedSection";
import BannerGallery from "@/components/BannerGallery";
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
      <BannerGallery />
      <AboutSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
