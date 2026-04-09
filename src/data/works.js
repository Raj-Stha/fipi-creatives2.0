export const works = [
  // ── Website Development ─────────────────────────────────────────────────────
  {
    slug: "travel-explore-nepal",
    title: "Explore Nepal Travel Portal",
    category: "website-development",
    childCategory: "travel-website",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80",
  },
  {
    slug: "edu-zeit-network",
    title: "Edu-Zeit Education Network",
    category: "website-development",
    childCategory: "educational-website",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
  },
  {
    slug: "organic-store-nepal",
    title: "Organic Nepal E-Commerce",
    category: "website-development",
    childCategory: "e-commerce",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
  },
  {
    slug: "fipi-news-portal",
    title: "Global Times News Agency",
    category: "website-development",
    childCategory: "news-agency",
    image: "https://images.unsplash.com/photo-1504711432813-0b0496da04f2?w=800&q=80",
  },
   {
    slug: "corporate-fipi-info",
    title: "FiPi Corporate Info Site",
    category: "website-development",
    childCategory: "informative-website",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
  },

  // ── Mobile Applications ─────────────────────────────────────────────────────
  {
    slug: "fitlife-mobile-app",
    title: "FitLife Fitness Tracker",
    category: "mobile-application",
    childCategory: "ios-android",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    slug: "nepal-pay-fintech",
    title: "NepalPay Fintech App",
    category: "mobile-application",
    childCategory: "ios-android",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },

  // ── Graphics Design ────────────────────────────────────────────────────────
  {
    slug: "fipi-brand-collateral",
    title: "Elite Business Brochure",
    category: "graphics-design",
    childCategory: "flyer-brochure",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=800&q=80",
  },
  {
    slug: "social-promo-campaign",
    title: "Instagram Growth Visuals",
    category: "graphics-design",
    childCategory: "social-media-design",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
  },
  {
    slug: "modern-minimal-logo",
    title: "Zenith Tech Logo",
    category: "graphics-design",
    childCategory: "logo-design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
  },
  {
    slug: "motion-intro-video",
    title: "Corporate Motion Intro",
    category: "graphics-design",
    childCategory: "gifs-motion",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
  },
];

export const workCategories = [
  { id: "all", label: "All" },
  { 
    id: "website-development", 
    label: "Website Development",
    children: [
      { id: "all", label: "All" },
      { id: "travel-website", label: "Travel Website" },
      { id: "e-commerce", label: "E-Commerce" },
      { id: "educational-website", label: "Educational Website" },
      { id: "informative-website", label: "Informative Website" },
      { id: "news-agency", label: "News Agency" },
    ]
  },
  { 
    id: "mobile-application", 
    label: "Mobile Application",
    children: []
  },
  { 
    id: "graphics-design", 
    label: "Graphics Design",
    children: [
      { id: "all", label: "All" },
      { id: "flyer-brochure", label: "Flyer/Brochure" },
      { id: "social-media-design", label: "Social Media Design" },
      { id: "logo-design", label: "Logo Design" },
      { id: "gifs-motion", label: "Gifs And Motion" },
    ]
  },
];
