import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto prose prose-invert prose-headings:font-heading">
          <h1 className="text-4xl font-heading font-bold mb-8 text-gradient-primary">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-8">Last updated: January 1, 2024</p>

          <h2>1. Information We Collect</h2>
          <p>When you contact us through our website, we may collect the following information:</p>
          <ul>
            <li>Your name and email address</li>
            <li>Phone number (if provided)</li>
            <li>Project details and requirements</li>
            <li>Any other information you voluntarily provide</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide requested services</li>
            <li>Communicate with you about your projects</li>
            <li>Improve our website and services</li>
            <li>Send relevant updates about our services (with your consent)</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website or servicing you, so long as those parties agree to keep this information confidential.</p>

          <h2>4. Data Security</h2>
          <p>We implement appropriate security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>

          <h2>5. Cookies</h2>
          <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some functionality of our website.</p>

          <h2>6. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.</p>

          <h2>7. Children's Privacy</h2>
          <p>Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children.</p>

          <h2>8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

          <h2>9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p><a href="mailto:info@bannerpick.com" className="text-primary hover:underline">info@bannerpick.com</a></p>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Privacy;
