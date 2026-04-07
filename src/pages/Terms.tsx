import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto prose prose-invert prose-headings:font-heading">
          <h1 className="text-4xl font-heading font-bold mb-8 text-gradient-primary">Terms & Conditions</h1>
          <p className="text-muted-foreground text-sm mb-8">Last updated: January 1, 2024</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using the BannerPick website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.</p>

          <h2>2. Services</h2>
          <p>BannerPick provides professional banner design services including but not limited to:</p>
          <ul>
            <li>HTML5 banner ad design and development</li>
            <li>Static banner design for web and social media</li>
            <li>Animated GIF banner creation</li>
            <li>Custom graphic design solutions</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>All designs, graphics, and content created by BannerPick remain the intellectual property of BannerPick until full payment has been received. Upon full payment, the client receives full usage rights for the agreed-upon deliverables.</p>

          <h2>4. Payment Terms</h2>
          <ul>
            <li>Payment terms will be agreed upon before project commencement</li>
            <li>A deposit may be required for larger projects</li>
            <li>Final deliverables are released upon full payment</li>
            <li>All prices are subject to change without prior notice</li>
          </ul>

          <h2>5. Revisions</h2>
          <p>Each project includes a specified number of revision rounds as agreed upon in the project scope. Additional revisions beyond the agreed scope may incur extra charges.</p>

          <h2>6. Client Responsibilities</h2>
          <p>Clients are responsible for:</p>
          <ul>
            <li>Providing accurate project requirements and brand assets</li>
            <li>Timely feedback and approvals</li>
            <li>Ensuring they have rights to any materials provided to us</li>
            <li>Reviewing and approving final deliverables</li>
          </ul>

          <h2>7. Limitation of Liability</h2>
          <p>BannerPick shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services. Our total liability shall not exceed the amount paid for the specific service in question.</p>

          <h2>8. Confidentiality</h2>
          <p>Both parties agree to keep confidential any proprietary information shared during the course of the project. This includes business strategies, design concepts, and any sensitive data.</p>

          <h2>9. Termination</h2>
          <p>Either party may terminate the service agreement with written notice. In case of termination, the client is responsible for payment of all work completed up to the termination date.</p>

          <h2>10. Governing Law</h2>
          <p>These Terms and Conditions shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms shall be resolved through mutual negotiation first.</p>

          <h2>11. Contact</h2>
          <p>For questions about these Terms and Conditions, please contact us at:</p>
          <p><a href="mailto:info@bannerpick.com" className="text-primary hover:underline">info@bannerpick.com</a></p>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Terms;
