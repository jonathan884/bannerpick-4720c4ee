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
  {
    id: "banner-size-guide",
    title: "The Ultimate Banner Size Guide for Every Platform",
    excerpt: "Never get your banner dimensions wrong again with this comprehensive size guide.",
    content: `Getting the right banner size is crucial for every platform. Here's your complete guide.\n\n## Facebook\n- Cover Photo: 820 x 312 px\n- Event Cover: 1920 x 1005 px\n- Ad Banner: 1200 x 628 px\n- Story: 1080 x 1920 px\n\n## Instagram\n- Post: 1080 x 1080 px\n- Story: 1080 x 1920 px\n- Reel Cover: 1080 x 1920 px\n- Ad: 1080 x 1080 px\n\n## Twitter / X\n- Header: 1500 x 500 px\n- In-stream: 1600 x 900 px\n- Card Image: 800 x 418 px\n\n## LinkedIn\n- Banner: 1584 x 396 px\n- Sponsored Content: 1200 x 627 px\n\n## YouTube\n- Channel Art: 2560 x 1440 px\n- Thumbnail: 1280 x 720 px\n\n## Google Ads\n- Leaderboard: 728 x 90 px\n- Medium Rectangle: 300 x 250 px\n- Skyscraper: 160 x 600 px\n- Large Rectangle: 336 x 280 px\n\n## Pro Tips\n- Always design at 2x resolution for retina displays\n- Keep important text within safe zones\n- Test on multiple devices before publishing\n- Save templates for frequently used sizes`,
    category: "Resources",
    author: "David Kim",
    date: "2024-11-20",
    readTime: "8 min read",
    image: banner3,
  },
  {
    id: "brand-consistency-banners",
    title: "How to Maintain Brand Consistency Across All Your Banners",
    excerpt: "Build a recognizable brand identity with consistent banner designs across platforms.",
    content: `Brand consistency is what separates amateur designs from professional ones.\n\n## Why Consistency Matters\nConsumers need 5-7 impressions before they remember a brand. Consistent banners accelerate this recognition.\n\n## Create a Style Guide\nDocument your brand's visual elements:\n- Primary and secondary colors with exact hex codes\n- Typography hierarchy and font pairings\n- Logo usage rules and minimum sizes\n- Image style and photography guidelines\n- Icon style and illustration approach\n\n## Use Templates\nCreate reusable templates for each platform. This ensures every team member produces on-brand content.\n\n## Color Palette Rules\n- Stick to 2-3 primary colors\n- Define accent colors for CTAs\n- Specify background colors and gradients\n- Create dark and light mode versions\n\n## Typography Standards\n- Maximum 2-3 font families\n- Define heading, body, and caption sizes\n- Specify line heights and letter spacing\n- Ensure readability at all sizes\n\n## Quality Control\n- Review all banners against your style guide\n- Use design approval workflows\n- Conduct regular brand audits\n- Update guidelines as your brand evolves`,
    category: "Branding",
    author: "Lisa Wang",
    date: "2024-11-15",
    readTime: "6 min read",
    image: banner4,
  },
  {
    id: "cta-optimization",
    title: "Mastering Call-to-Action Buttons in Banner Design",
    excerpt: "Boost click-through rates with perfectly crafted CTA buttons and persuasive copy.",
    content: `Your CTA button can make or break your banner's performance.\n\n## The Anatomy of a Great CTA\nA high-converting CTA combines three elements: compelling copy, strategic placement, and eye-catching design.\n\n## Copy That Converts\n- Use action verbs: "Get", "Start", "Discover", "Claim"\n- Create urgency: "Limited Time", "Today Only", "Don't Miss"\n- Be specific: "Get 50% Off" beats "Learn More"\n- Keep it short: 2-5 words maximum\n\n## Design Best Practices\n- Contrast: CTA should stand out from the background\n- Size: Large enough to click, not so large it overwhelms\n- Shape: Rounded corners perform better than sharp edges\n- Color: Use your brand's accent color for CTAs\n\n## Placement Strategies\n- Right side or center placement typically performs best\n- Below the headline for reading flow\n- Multiple CTAs for longer banners\n- Thumb-friendly zones for mobile\n\n## A/B Testing Your CTAs\n- Test one variable at a time\n- Run tests for sufficient duration\n- Track click-through rates and conversions\n- Implement winning variations quickly\n\n## Common Mistakes\n- Too many CTAs competing for attention\n- Vague copy like "Click Here"\n- Poor color contrast making CTAs invisible\n- CTAs too small for mobile screens`,
    category: "Marketing",
    author: "James Wilson",
    date: "2024-11-08",
    readTime: "7 min read",
    image: banner6,
  },
  {
    id: "responsive-banner-design",
    title: "Responsive Banner Design: One Design, Every Screen",
    excerpt: "Learn how to create banners that look perfect on desktop, tablet, and mobile devices.",
    content: `In a multi-device world, responsive banners aren't optional — they're essential.\n\n## The Mobile-First Approach\nStart with mobile and scale up. Over 60% of web traffic comes from mobile devices.\n\n## Responsive Design Principles\n- Flexible grids and layouts\n- Scalable images and graphics\n- Breakpoint-specific adjustments\n- Touch-friendly interactive elements\n\n## Typography Scaling\n- Use relative units (em, rem, vw)\n- Minimum 16px for body text on mobile\n- Increase heading sizes progressively\n- Maintain readable line lengths\n\n## Image Optimization\n- Serve different sizes for different screens\n- Use WebP format for smaller file sizes\n- Implement lazy loading for performance\n- Consider art direction for key visuals\n\n## Testing Checklist\n- Test on real devices, not just browser tools\n- Check portrait and landscape orientations\n- Verify touch targets are at least 44px\n- Test on slow network connections\n\n## Common Pitfalls\n- Text too small on mobile screens\n- Images that don't scale properly\n- CTAs that are hard to tap\n- Animations that cause lag on mobile`,
    category: "Design Tips",
    author: "Sarah Chen",
    date: "2024-10-30",
    readTime: "5 min read",
    image: banner1,
  },
  {
    id: "ai-in-banner-design",
    title: "How AI is Revolutionizing Banner Design in 2025",
    excerpt: "Discover how artificial intelligence tools are transforming the way we create banners.",
    content: `AI is no longer the future of design — it's the present.\n\n## The AI Design Revolution\nFrom generating images to writing copy, AI tools are transforming every aspect of banner creation.\n\n## AI-Powered Image Generation\n- Create unique visuals from text prompts\n- Generate background images and patterns\n- Produce product mockups instantly\n- Create variations for A/B testing\n\n## Smart Copy Generation\n- Headlines that convert\n- CTA copy optimization\n- Multi-language translations\n- Tone and style adjustments\n\n## Automated Layout Design\n- AI suggests optimal element placement\n- Auto-generates responsive versions\n- Balances visual hierarchy automatically\n- Creates platform-specific adaptations\n\n## Color Palette AI\n- Generate harmonious color schemes\n- Analyze competitor color strategies\n- Suggest accessible color combinations\n- Create mood-based palettes\n\n## The Human Touch\nWhile AI handles the heavy lifting, human creativity remains essential for:\n- Brand strategy and positioning\n- Emotional storytelling\n- Cultural sensitivity\n- Final quality approval\n\n## Getting Started with AI\n- Start with one AI tool and master it\n- Use AI for ideation, not just execution\n- Always review and refine AI output\n- Stay updated on new capabilities`,
    category: "Technology",
    author: "Alex Rivera",
    date: "2024-10-22",
    readTime: "8 min read",
    image: banner4,
  },
  {
    id: "seasonal-banner-campaigns",
    title: "Planning Seasonal Banner Campaigns That Drive Sales",
    excerpt: "A month-by-month guide to creating timely, relevant banner campaigns throughout the year.",
    content: `Seasonal campaigns are goldmines for engagement — if you plan ahead.\n\n## Why Seasonal Matters\nConsumers are primed to buy during holidays and seasonal events. Your banners should meet them where they are.\n\n## Q1: New Year & Fresh Starts\n- January: New Year sales, gym/health promotions\n- February: Valentine's Day, love-themed designs\n- March: Spring collections, St. Patrick's Day\n\n## Q2: Spring & Summer\n- April: Easter, spring cleaning sales\n- May: Mother's Day, graduation\n- June: Father's Day, summer kickoff\n\n## Q3: Back to Season\n- July: Summer sales, Independence Day\n- August: Back-to-school campaigns\n- September: Fall collections, Labor Day\n\n## Q4: Holiday Season\n- October: Halloween, fall themes\n- November: Black Friday, Cyber Monday\n- December: Christmas, year-end sales\n\n## Planning Timeline\n- Design banners 4-6 weeks before events\n- Create 3-5 variations for each campaign\n- Schedule A/B tests 2 weeks before launch\n- Prepare follow-up and extension banners\n\n## Design Tips for Seasonal Banners\n- Use seasonal colors and imagery\n- Create urgency with countdown elements\n- Maintain brand identity within seasonal themes\n- Update landing pages to match banner designs`,
    category: "Marketing",
    author: "Mike Roberts",
    date: "2024-10-15",
    readTime: "9 min read",
    image: banner2,
  },
];
