// Brand palette — used consistently across ALL service pages
export const PRIMARY = "#7d2c91";
export const PRIMARY_LIGHT = "#f3e8ff";
export const SECONDARY = "#10b981";
export const SECONDARY_LIGHT = "#d1fae5";

// ─── FiPi Creatives — Actual Services Data ────────────────────────────────────

export const services = [
  // ── 1. Digital Marketing (Corporate Planning) ─────────────────────────────
  {
    slug: "digital-marketing",
    title: "Digital Marketing (Corporate Planning)",
    tagline: "Comprehensive digital growth strategies for established businesses.",
    description:
      "Our Corporate Planning services provide a multi-layered approach to digital growth, combining advanced social media management with robust technical SEO and local visibility.",
    icon: "TrendingUp",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    comparisonFeatures: [
      { label: "SMM Graphical Posts", keyword: "Graphical Posts", icon: "🎨" },
      { label: "GIFs / Reels Content", keyword: "Reel", icon: "🎬" },
      { label: "Festive Posts", keyword: "Festive", icon: "🎉" },
      { label: "Ad Budget & Management", keyword: "Ad", icon: "💰" },
      { label: "Technical SEO Audit", keyword: "Technical", icon: "⚙️" },
      { label: "On-Page Optimization", keyword: "On-Page", icon: "📄" },
      { label: "Local SEO / Google Maps", keyword: "Local", icon: "📍" },
      { label: "High-Quality Blog Posts", keyword: "Blog", icon: "✍️" },
      { label: "Advanced Analytics", keyword: "Analysis", icon: "📈" },
      { label: "Full Strategic Management", keyword: "Management", icon: "👑" },
    ],
    categories: [
      { id: "all", label: "All Packages" },
      { id: "basic", label: "Basic" },
      { id: "medium", label: "Medium" },
      { id: "premium", label: "Premium" },
    ],
    packages: [
      {
        slug: "dm-corporate-basic",
        category: "basic",
        title: "Basic Package",
        subtitle: "Essential digital presence for corporate entities.",
        price: "Rs 25,000",
        priceNote: "/month",
        badge: "Essential",
        badgeColor: "#3b82f6",
        icon: "LayoutTemplate",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
        description: 
          "A foundational package covering social media basics and essential website optimization to ensure your corporate brand remains visible and trustworthy.",
        highlightImages: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=60",
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=60",
          "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&q=60"
        ],
        features: [
          "4 Graphical Posts (SMM)",
          "1 Gif / Reel (SMM)",
          "2 Festive Posts (SMM)",
          "Post Scheduling & Copywriting",
          "Facebook + Instagram Platforms",
          "Technical SEO & SSL/TLS HTTPS",
          "Site Speed Analysis",
          "On-Page SEO (2 Keywords)",
          "Title & Meta Tags Optimization",
          "Off-Page: Reddit / Quora Posting",
          "1 Medium Blog Post",
          "Local SEO: GMB Setup & Map Listing"
        ],
        deliverables: [
          "Monthly content calendar",
          "6 custom graphics/videos",
          "Technical SEO audit report",
          "On-page optimization summary",
          "GMB listing verification"
        ],
        whoIsItFor: "Small to mid-sized corporations looking for professional digital maintenance.",
        process: [
          { step: 1, title: "Audit", desc: "Detailed review of existing assets and SEO standing." },
          { step: 2, title: "Strategy", desc: "Crafting a content plan and keyword roadmap." },
          { step: 3, title: "Execution", desc: "Implementation of SEO fixes and content rollout." },
          { step: 4, title: "Review", desc: "Monthly performance tracking and adjustments." }
        ],
        faqs: [
          { q: "Is ad budget included?", a: "No, this basic package focuses on organic management and SEO foundations." },
          { q: "Which platforms are managed?", a: "We focus on Facebook and Instagram for social media." }
        ]
      },
      {
        slug: "dm-corporate-medium",
        category: "medium",
        title: "Medium Package",
        subtitle: "Strategic growth with advanced SEO and ad management.",
        price: "Rs 35,000",
        priceNote: "/month",
        badge: "Most Popular",
        badgeColor: "#f59e0b",
        icon: "TrendingUp",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        description:
          "Scale your corporate presence with increased content output, advanced technical SEO optimizations, and a dedicated monthly ad budget to drive immediate results.",
        highlightImages: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=60",
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=60",
          "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&q=60"
        ],
        features: [
          "6 Graphical Posts & 2 Gif / Reels",
          "4 Festive Posts & Post Scheduling",
          "Content Plan & Calendar",
          "Facebook + Instagram Management",
          "Copywriting & Research/Analysis",
          "Ad Budget included ($10)",
          "Technical: XML Sitemaps & Robots.txt",
          "Schema Markup Integration",
          "On-Page: 5 Keywords & URL Opt.",
          "Image Alt Text Optimization",
          "Off-Page: 2 Medium Blogs & Link Building",
          "Local SEO: GMB Optimization & Posting",
          "Map Ranking & NAP Consistency"
        ],
        deliverables: [
          "Strategic content calendar",
          "12 custom visual assets",
          "Advanced SEO technical setup",
          "Monthly ad performance report",
          "Enhanced GMB presence"
        ],
        whoIsItFor: "Corporations ready to compete aggressively in digital spaces.",
        process: [
          { step: 1, title: "Deep Dive", desc: "Competitor analysis and advanced keyword research." },
          { step: 2, title: "Optimize", desc: "Technical SEO overhaul and GMB ranking strategy." },
          { step: 3, title: "Scale", desc: "Launch of ad campaigns and enriched content stream." },
          { step: 4, title: "Insight", desc: "Data-driven reporting with ROI focus." }
        ],
        faqs: [
          { q: "What is NAP consistency?", a: "It ensures your Name, Address, and Phone Number are identical across the web for SEO." }
        ]
      },
      {
        slug: "dm-corporate-premium",
        category: "premium",
        title: "Premium Package",
        subtitle: "The ultimate digital authority package for leaders.",
        price: "Rs 70,000",
        priceNote: "/month",
        badge: "Premium Choice",
        badgeColor: "#7d2c91",
        icon: "Crown",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
        description:
          "A comprehensive 360-degree digital management solution. We become your outsourced marketing department, handling everything from high-tier SEO to multi-platform ad management and PR.",
        highlightImages: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=60",
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=60",
          "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&q=60"
        ],
        features: [
          "12 Graphical Posts & 4 Gif / Reels",
          "6 Festive Posts & Full Management",
          "Competitor Analysis & Content Calendar",
          "Meta Pixel, A/B & Landing Page Testing",
          "Meta Ad ($20) & Google Ads ($35) Budget",
          "Advanced Technical: Mobile Resp. & Crawl Fixes",
          "On-Page: 10 Keywords & Internal Linking",
          "Content Freshness Management",
          "Off-Page: 4 Medium Blogs & Guest Postings",
          "Influencer Outreach & Forum Engagement",
          "Community Marketing & PR",
          "Local SEO: Citations & Review Management",
          "Localized Content Strategy"
        ],
        deliverables: [
          "Full-spectrum digital strategy",
          "22+ high-end visual assets",
          "A/B testing results & optimization",
          "Guest post placements (Authority sites)",
          "Complete reputation management report"
        ],
        whoIsItFor: "Market leaders and large enterprises requiring maximum impact and flawless execution.",
        process: [
          { step: 1, title: "Omni-Audit", desc: "Holistic review of brand perception and performance." },
          { step: 2, title: "Advanced Setup", desc: "Pixel deployment, A/B test environments, and PR outreach." },
          { step: 3, title: "Dominance", desc: "Aggressive SEO, high-budget ads, and community engagement." },
          { step: 4, title: "Leadership", desc: "Strategic consulting and comprehensive monthly reviews." }
        ],
        faqs: [
          { q: "How many Google Ads are included?", a: "We manage custom campaign structures within the provided $35 budget." }
        ]
      },
    ],
  },

  // ── 2. Social Media Marketing (SME) ───────────────────────────────────────
  {
    slug: "social-media",
    title: "Social Media Marketing (SME)",
    tagline: "Vibrant community building for small and medium businesses.",
    description:
      "Tailored social media solutions for SMEs focused on engagement, brand awareness, and converting followers into loyal customers.",
    icon: "Megaphone",
    heroImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80",
    comparisonFeatures: [
      { label: "Graphical Posts", keyword: "Graphical Posts", icon: "🎨" },
      { label: "GIFs / Reels", keyword: "Reel", icon: "🎬" },
      { label: "Festive Posts", keyword: "Festive", icon: "🎉" },
      { label: "Post Scheduling", keyword: "Scheduling", icon: "📅" },
      { label: "Copywriting", keyword: "Copywriting", icon: "✍️" },
      { label: "Ad Budget included", keyword: "Ad", icon: "💰" },
      { label: "Content Plan & Calendar", keyword: "Calendar", icon: "📋" },
      { label: "Research & Analysis", keyword: "Analysis", icon: "🔍" },
      { label: "Full Account Management", keyword: "Management", icon: "👑" },
    ],
    categories: [
      { id: "all", label: "All Packages" },
      { id: "basic", label: "Basic" },
      { id: "medium", label: "Medium" },
      { id: "premium", label: "Premium" },
    ],
    packages: [
      {
        slug: "smm-sme-basic",
        category: "basic",
        title: "Basic Package",
        subtitle: "Starter social presence for rising brands.",
        price: "Rs 10,000",
        priceNote: "/month",
        badge: "Starter",
        badgeColor: "#10b981",
        icon: "Smartphone",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
        description: "Everything you need to keep your social channels active and professional without breaking the bank.",
        features: [
          "4 Graphical Posts",
          "1 Gif / Reel",
          "2 Festive Posts",
          "Post Scheduling",
          "Platform (Facebook + Instagram)",
          "Copywriting"
        ],
        deliverables: ["7 visual assets per month", "Copywriting for all posts", "Strategic scheduling"],
        whoIsItFor: "New startups and local shops starting their social journey.",
        process: [
          { step: 1, title: "Onboarding", desc: "Understanding your brand voice and style." },
          { step: 2, title: "Content", desc: "Designing your monthly graphics and reels." },
          { step: 3, title: "Go Live", desc: "Scheduled posting according to peak audience times." }
        ],
        highlightImages: [
             "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&q=60",
             "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=60",
             "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&q=60"
        ],
      },
      {
        slug: "smm-sme-medium",
        category: "medium",
        title: "Medium Package",
        subtitle: "Enhanced engagement with ad support.",
        price: "Rs 16,000",
        priceNote: "/month",
        badge: "Value Plus",
        badgeColor: "#3b82f6",
        icon: "BarChart3",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
        description: "Boost your reach with more content and a dedicated ad budget to find your target audience faster.",
        features: [
          "6 Graphical Posts",
          "2 Gif / Reels",
          "4 Festive Posts",
          "Post Scheduling",
          "Content Plan and Calendar",
          "Platform (Facebook + Instagram)",
          "Copywriting",
          "Research and Analysis",
          "Ad Budget included ($10)"
        ],
        deliverables: ["12 visual assets per month", "Research insights", "Ad campaign setup"],
        whoIsItFor: "Growing SMEs looking for more aggressive social growth.",
        process: [
          { step: 1, title: "Planning", desc: "Creating a detailed content calendar." },
          { step: 2, title: "Ad Strategy", desc: "Targeting research and ad creative prep." },
          { step: 3, title: "Management", desc: "Continuous monitoring and engagement." }
        ],
        highlightImages: [
             "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&q=60",
             "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=60",
             "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&q=60"
        ],
      },
      {
        slug: "smm-sme-premium",
        category: "premium",
        title: "Premium Package",
        subtitle: "The complete SME social media takeover.",
        price: "Rs 20,000",
        priceNote: "/month",
        badge: "Full Service",
        badgeColor: "#7d2c91",
        icon: "Target",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        description: "Maximize your ROI with full account management, competitor tracking, and a larger ad budget for market dominance.",
        features: [
          "12 Graphical Posts",
          "4 Gif / Reels",
          "6 Festive Posts",
          "Full Social Media Management",
          "Platform Optimization",
          "Competitor Analysis",
          "Content Plan & Calendar",
          "Platform (Facebook + Instagram)",
          "Copywriting",
          "Post Scheduling",
          "Ad Budget included ($20)"
        ],
        deliverables: ["22+ high-quality assets", "Competitor benchmark report", "Optimized profile presence"],
        whoIsItFor: "Established SMEs wanting premium social media management.",
        process: [
          { step: 1, title: "Analysis", desc: "Comprehensive competitor and platform audit." },
          { step: 2, title: "Creative", desc: "High-volume content production." },
          { step: 3, title: "Growth", desc: "Strategic ad spending and community building." }
        ],
        highlightImages: [
             "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&q=60",
             "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=60",
             "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&q=60"
        ],
      },
    ],
  },

  // ── 3. SEO Optimization ───────────────────────────────────────────────────
  {
    slug: "seo-optimization",
    title: "Search Engine Optimization (SEO)",
    tagline: "Dominating search results and driving organic traffic.",
    description:
      "Technical, On-Page, and Off-Page SEO solutions designed to move your rankings and keep you on page 1 of search results.",
    icon: "Search",
    heroImage: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=1200&q=80",
    comparisonFeatures: [
      { label: "Technical SEO (SSL/Speed)", keyword: "Technical", icon: "⚙️" },
      { label: "On-Page Optimization", keyword: "On-Page", icon: "📄" },
      { label: "Keyword Research", keyword: "Keywords", icon: "🔑" },
      { label: "Meta Tags & Header Opt.", keyword: "Tags", icon: "🏷️" },
      { label: "Local SEO / GMB", keyword: "Local SEO", icon: "📍" },
      { label: "Content Freshness & Internal Linking", keyword: "Internal", icon: "🔄" },
      { label: "Off-Page: Blog Posts", keyword: "Blog", icon: "✍️" },
      { label: "Link Building / Guest Post", keyword: "Link", icon: "🔗" },
      { label: "Review & Reputation Mgmt", keyword: "Review", icon: "⭐" },
    ],
    categories: [
      { id: "all", label: "All Packages" },
      { id: "basic", label: "Basic" },
      { id: "medium", label: "Medium" },
      { id: "premium", label: "Premium" },
    ],
    packages: [
      {
        slug: "seo-basic",
        category: "basic",
        title: "Basic Package",
        subtitle: "Foundational SEO for local visibility.",
        price: "Rs 12,000",
        priceNote: "/month",
        badge: "Essential",
        badgeColor: "#3b82f6",
        icon: "SearchCode",
        image: "https://images.unsplash.com/photo-1571624436279-b272afd7527a?w=800&q=80",
        description: "A focused package to fix your technical foundations and start ranking for local search queries.",
        features: [
          "Technical SEO: SSL/TLS HTTPS",
          "Site Speed Analysis",
          "On-Page: 2 Keywords Research",
          "Title and Meta Tags",
          "Header Tags Optimization",
          "Off-Page: Reddit / Quora Posting",
          "1 Medium Blog Post",
          "Local SEO: GMB Setup & Map Listing"
        ],
        deliverables: ["SEO Health Audit", "Keyword Strategy", "GMB Profile Setup"],
        whoIsItFor: "New websites or small local businesses.",
        process: [
             { step: 1, title: "Audit", desc: "Full site technical check." },
             { step: 2, title: "Fix", desc: "Implementing core on-page and technical changes." },
             { step: 3, title: "Visibility", desc: "GMB setup and local directory listing." }
        ],
        highlightImages: [
             "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=60",
             "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=60",
             "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&q=60"
        ],
      },
      {
        slug: "seo-medium",
        category: "medium",
        title: "Medium Package",
        subtitle: "Advanced optimizations and authority building.",
        price: "Rs 20,000",
        priceNote: "/month",
        badge: "Growth",
        badgeColor: "#f59e0b",
        icon: "FileText",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
        description: "Scale your authority with sitemaps, schema markup, and advanced link building techniques.",
        features: [
          "Technical: XML Sitemaps & Robots.txt",
          "SSL/TLS & Site Speed Analysis",
          "Schema Markup Integration",
          "On-Page: 5 Keywords Research",
          "Title, Meta & Header Tags",
          "URL Optimization & Image Alt Text",
          "Off-Page: 2 Medium Blogs",
          "Link Building & Social Signals",
          "Local SEO: GMB Optimization & Ranking",
          "NAP Consistency"
        ],
        deliverables: ["Advanced SEO roadmap", "Backlink profile growth", "GMB ranking improvement"],
        whoIsItFor: "Businesses wanting to outrank local competitors.",
        process: [
             { step: 1, title: "Technical Boost", desc: "Schema, Sitemaps, and advanced structure." },
             { step: 2, title: "Authority", desc: "Starting active link building and social signals." },
             { step: 3, title: "Monitoring", desc: "Weekly ranking checks and fine-tuning." }
        ],
        highlightImages: [
             "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=60",
             "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=60",
             "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&q=60"
        ],
      },
      {
        slug: "seo-premium",
        category: "premium",
        title: "Premium Package",
        subtitle: "Complete search dominance and PR.",
        price: "Rs 40,000",
        priceNote: "/month",
        badge: "Dominance",
        badgeColor: "#7d2c91",
        icon: "BarChart3",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        description: "The complete SEO experience including crawl error fixes, canonical management, and extensive community marketing.",
        features: [
          "Technical: Mobile Resp. & Crawl Error Fixes",
          "Canonical Tags & Sitemap/Robots.txt",
          "On-Page: 10 Keywords Research",
          "Title, Meta, URL & Image Alt Opt.",
          "Internal Linking & Content Freshness",
          "Off-Page: 4 Medium Blogs & Link Building",
          "Guest Postings & Brand Mentions",
          "Influencer Outreach & Community Marketing",
          "Forum & Community Engagement",
          "Local SEO: Review Mgmt & Citations",
          "Localized Content Strategy"
        ],
        deliverables: ["Full search landscape analysis", "Premium guest posts", "Total reputation management"],
        whoIsItFor: "High-competition niches and nationwide brands.",
        process: [
             { step: 1, title: "Omni-Audit", desc: "Deep technical and market analysis." },
             { step: 2, title: "Execution", desc: "Aggressive content and link building." },
             { step: 3, title: "Expansion", desc: "Community PR and influencer outreach." }
        ],
        highlightImages: [
             "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=60",
             "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=60",
             "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&q=60"
        ],
      },
    ],
  },

  // ── 4. Website Development ──────────────────────────────────────────────────
  {
    slug: "website-development",
    title: "Website Development",
    tagline: "High-performance, custom websites that convert.",
    description:
      "We build robust, scalable, and visually stunning websites tailored to your business goals, from e-commerce platforms to corporate portals.",
    icon: "Layout",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    categories: [
      { id: "custom", label: "Custom Design" },
      { id: "ecommerce", label: "E-Commerce" },
      { id: "performance", label: "Page Speed" },
    ],
    packages: [],
    comparisonFeatures: []
  },

  // ── 5. Mobile App Development ────────────────────────────────────────────────
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tagline: "Innovative mobile experiences for iOS and Android.",
    description:
      "Transform your ideas into powerful mobile applications with our end-to-end development services, focusing on user experience and technical excellence.",
    icon: "Smartphone",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    categories: [
      { id: "ios", label: "iOS Development" },
      { id: "android", label: "Android Development" },
      { id: "cross-platform", label: "React Native/Flutter" },
    ],
    packages: [],
    comparisonFeatures: []
  },

  // ── 6. Branding & Print Collateral ──────────────────────────────────────────
  {
    slug: "branding-collateral",
    title: "Branding & Print Collateral",
    tagline: "Consistent brand identity across all physical touchpoints.",
    description:
      "From brochures and visiting cards to custom calendars and stationary, we design professional print materials that leave a lasting impression.",
    icon: "PenTool",
    heroImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80",
    categories: [
      { id: "brochures", label: "Brochures" },
      { id: "visiting-cards", label: "Visiting Cards" },
      { id: "calendars", label: "Custom Calendars" },
    ],
    packages: [],
    comparisonFeatures: []
  },
];

// ── Lookup helpers ────────────────────────────────────────────────────────────

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) || null;
}

export function getPackageBySlug(serviceSlug, packageSlug) {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return null;
  return service.packages.find((p) => p.slug === packageSlug) || null;
}
