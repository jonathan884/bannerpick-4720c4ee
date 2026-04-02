import banner1 from "@/assets/banner-1.jpg";
import banner2 from "@/assets/banner-2.jpg";
import banner3 from "@/assets/banner-3.jpg";
import banner4 from "@/assets/banner-4.jpg";
import banner5 from "@/assets/banner-5.jpg";
import banner6 from "@/assets/banner-6.jpg";

export interface Banner {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const banners: Banner[] = [
  { id: 1, title: "Summer Sale Campaign", category: "Social Media", image: banner1, description: "Vibrant gradient banner perfect for summer promotions and seasonal sales campaigns." },
  { id: 2, title: "Corporate Excellence", category: "Business", image: banner2, description: "Elegant corporate banner with navy blue and gold accents for professional branding." },
  { id: 3, title: "Food & Restaurant", category: "Food & Beverage", image: banner3, description: "Mouth-watering food banner designed for restaurants and food delivery services." },
  { id: 4, title: "Tech Product Launch", category: "Technology", image: banner4, description: "Futuristic neon banner ideal for tech product launches and gadget showcases." },
  { id: 5, title: "Fashion Collection", category: "Fashion", image: banner5, description: "Stylish pastel banner for fashion brands and new collection announcements." },
  { id: 6, title: "Real Estate Premium", category: "Real Estate", image: banner6, description: "Luxury real estate banner with emerald and gold premium design." },
];

export const categories = [...new Set(banners.map((b) => b.category))];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "banner-design-tips",
    title: "10 Essential Tips for Creating Stunning Banner Designs",
    excerpt: "Learn the key principles that make banner designs stand out and drive engagement.",
    content: `Creating effective banner designs requires a blend of creativity and strategy. Here are 10 essential tips:\n\n## 1. Keep It Simple\nClutter is the enemy of good design. Focus on one clear message per banner.\n\n## 2. Use High-Quality Images\nAlways use crisp, professional images that resonate with your target audience.\n\n## 3. Bold Typography\nChoose fonts that are readable at various sizes and create visual hierarchy.\n\n## 4. Color Psychology\nColors evoke emotions. Use warm colors for urgency, cool colors for trust.\n\n## 5. Strong Call-to-Action\nEvery banner needs a clear CTA that tells viewers what to do next.\n\n## 6. Brand Consistency\nMaintain your brand colors, fonts, and style across all banners.\n\n## 7. Mobile-First Design\nDesign for mobile screens first, then scale up for desktop.\n\n## 8. White Space\nDon't be afraid of empty space — it helps your message breathe.\n\n## 9. A/B Testing\nTest different versions to see what resonates best with your audience.\n\n## 10. Stay Current\nFollow design trends but don't lose your brand identity.`,
    category: "Design Tips",
    author: "Sarah Chen",
    date: "2024-12-10",
    readTime: "5 min read",
    image: banner1,
  },
  {
    id: "color-psychology-banners",
    title: "Color Psychology in Banner Design: A Complete Guide",
    excerpt: "Understand how colors influence viewer behavior and boost your banner performance.",
    content: `Colors play a crucial role in how people perceive and react to your banners.\n\n## The Power of Color\nResearch shows that color increases brand recognition by up to 80%. In banner design, the right color palette can make the difference between a scroll-past and a click.\n\n## Red: Urgency & Excitement\nPerfect for sale banners and limited-time offers.\n\n## Blue: Trust & Reliability\nIdeal for corporate, tech, and financial brands.\n\n## Green: Growth & Health\nGreat for eco-friendly products and wellness brands.\n\n## Orange: Energy & Enthusiasm\nExcellent for CTAs and youth-oriented campaigns.\n\n## Black: Luxury & Sophistication\nPerfect for premium products and high-end brands.\n\n## Tips for Choosing Colors\n- Consider your target audience demographics\n- Test different combinations\n- Ensure sufficient contrast for readability\n- Use complementary colors for visual harmony`,
    category: "Design Tips",
    author: "Mike Roberts",
    date: "2024-12-05",
    readTime: "7 min read",
    image: banner2,
  },
  {
    id: "social-media-banner-trends",
    title: "2025 Social Media Banner Trends You Can't Ignore",
    excerpt: "Stay ahead of the curve with these emerging social media banner design trends.",
    content: `The digital landscape is constantly evolving. Here are the top trends for 2025.\n\n## 1. 3D Elements\nAdding depth with 3D typography and objects creates eye-catching banners.\n\n## 2. Glassmorphism\nFrosted glass effects continue to dominate modern design.\n\n## 3. Bold Gradients\nMulti-color gradients are making a strong comeback.\n\n## 4. Minimalist Animation\nSubtle motion graphics that don't overwhelm the viewer.\n\n## 5. AI-Generated Art\nLeveraging AI to create unique, custom visuals.\n\n## 6. Retro Revival\n90s and Y2K aesthetics with a modern twist.\n\n## Conclusion\nStaying current with trends while maintaining brand consistency is the key to successful social media banners.`,
    category: "Trends",
    author: "Emily Park",
    date: "2024-11-28",
    readTime: "6 min read",
    image: banner5,
  },
];
