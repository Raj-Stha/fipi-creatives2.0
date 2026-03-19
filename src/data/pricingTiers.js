// Per-service 3-tier pricing data shown on single package pages
// The "recommended: true" tier is highlighted and shown in the sidebar.

export const servicePricingTiers = {
  "digital-marketing": [
    {
      name: "Starter",
      price: "$399",
      priceNote: "/ month",
      icon: "Zap",
      description:
        "Perfect for small businesses starting out with digital ads and basic email marketing.",
      features: [
        "Google Ads setup (1 campaign)",
        "Email welcome sequence (3 emails)",
        "Monthly analytics report",
        "Keyword research (200 terms)",
      ],
      recommended: false,
    },
    {
      name: "Professional",
      price: "$999",
      priceNote: "/ month",
      icon: "TrendingUp",
      description:
        "Ideal for growing businesses needing multi-channel campaigns with advanced optimization.",
      features: [
        "Google + Meta Ads (5 campaigns)",
        "Full email automation suite",
        "Weekly performance reviews",
        "A/B testing & CRO",
        "Dedicated account manager",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "$2,499+",
      priceNote: "/ month",
      icon: "Crown",
      description:
        "For large businesses needing a full-service digital marketing department.",
      features: [
        "All-platform ad management",
        "Custom funnel & CRO strategy",
        "Influencer partnerships",
        "Daily optimization & scaling",
        "Priority support & daily reporting",
      ],
      recommended: false,
    },
  ],

  "creative-design": [
    {
      name: "Starter",
      price: "$449",
      priceNote: "one-time",
      icon: "Sparkles",
      description:
        "Perfect for solopreneurs and startups needing a foundational brand identity.",
      features: [
        "Primary logo + 1 variation",
        "Color palette (3 colors)",
        "Basic brand guidelines PDF",
        "2 revision rounds",
      ],
      recommended: false,
    },
    {
      name: "Professional",
      price: "$1,299",
      priceNote: "one-time",
      icon: "Palette",
      description:
        "Ideal for established brands needing comprehensive design across all touchpoints.",
      features: [
        "Full logo suite (3 variations)",
        "Social graphics pack (15/month)",
        "UI/UX wireframes (5 screens)",
        "Print collateral (card + brochure)",
        "Complete brand guidelines (20 pages)",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "$3,499+",
      priceNote: "one-time",
      icon: "Crown",
      description:
        "Full creative production for businesses launching or rebranding at scale.",
      features: [
        "Complete brand identity system",
        "UI/UX design (full app or website)",
        "30 social graphics/month",
        "Video motion graphics",
        "Dedicated design team",
      ],
      recommended: false,
    },
  ],

  "seo-optimization": [
    {
      name: "Starter",
      price: "$299",
      priceNote: "/ month",
      icon: "Search",
      description:
        "Great for businesses beginning their SEO journey with foundational on-page work.",
      features: [
        "5 pages optimized / month",
        "Keyword research (100 terms)",
        "Meta tags & title optimization",
        "Monthly ranking report",
      ],
      recommended: false,
    },
    {
      name: "Professional",
      price: "$699",
      priceNote: "/ month",
      icon: "TrendingUp",
      description:
        "Ideal for businesses in competitive niches that need a complete SEO strategy.",
      features: [
        "10 pages optimized / month",
        "Technical SEO audit & fixes",
        "On-page + off-page optimization",
        "5 backlinks / month (DA 40+)",
        "Bi-weekly strategy calls",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "$1,499+",
      priceNote: "/ month",
      icon: "Crown",
      description:
        "Full-service SEO domination for large sites and highly competitive industries.",
      features: [
        "Unlimited page optimization",
        "15+ backlinks / month",
        "Local + national SEO",
        "Content strategy & production",
        "Priority support & reporting",
      ],
      recommended: false,
    },
  ],

  "web-development": [
    {
      name: "Starter",
      price: "$799",
      priceNote: "one-time",
      icon: "LayoutTemplate",
      description:
        "Fast, conversion-optimized landing page for businesses running paid campaigns.",
      features: [
        "1 custom landing page",
        "Mobile-first responsive design",
        "Lead capture form + CRM",
        "Analytics integration (GA4)",
      ],
      recommended: false,
    },
    {
      name: "Professional",
      price: "$2,999",
      priceNote: "one-time",
      icon: "Code2",
      description:
        "Complete corporate website with CMS, blog, and all the pages your business needs.",
      features: [
        "Up to 10 custom pages",
        "CMS (Sanity / WordPress)",
        "Blog + contact forms",
        "SEO fundamentals setup",
        "60-day post-launch support",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "$6,999+",
      priceNote: "one-time",
      icon: "Cpu",
      description:
        "Custom web application or e-commerce store built for scale and performance.",
      features: [
        "Custom web app or e-commerce",
        "API + database architecture",
        "Authentication & dashboard",
        "Automated testing + CI/CD",
        "90-day support SLA",
      ],
      recommended: false,
    },
  ],

  "social-media": [
    {
      name: "Starter",
      price: "$349",
      priceNote: "/ month",
      icon: "Smartphone",
      description:
        "Ideal for small businesses wanting a consistent social media presence on 1–2 platforms.",
      features: [
        "2 platforms managed",
        "10 posts / month",
        "Caption copywriting",
        "Monthly analytics report",
      ],
      recommended: false,
    },
    {
      name: "Professional",
      price: "$799",
      priceNote: "/ month",
      icon: "Share2",
      description:
        "Best for growing brands that need active management, content creation, and strategy.",
      features: [
        "3 platforms managed",
        "18 posts / month",
        "Custom graphics (not templates)",
        "2 Reels or TikToks / month",
        "Bi-weekly strategy calls",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "$1,499+",
      priceNote: "/ month",
      icon: "Crown",
      description:
        "Full-agency social media management with influencers, ads, and content production.",
      features: [
        "4+ platforms managed",
        "30 posts / month",
        "Influencer outreach (5/month)",
        "Paid social ad management",
        "Dedicated social media team",
      ],
      recommended: false,
    },
  ],

  "brand-strategy": [
    {
      name: "Starter",
      price: "$599",
      priceNote: "one-time",
      icon: "Compass",
      description:
        "For new businesses needing brand naming or a quick positioning clarity session.",
      features: [
        "Brand name options (50+)",
        "Domain & trademark pre-screening",
        "Brand positioning statement",
        "Tagline options (5)",
      ],
      recommended: false,
    },
    {
      name: "Professional",
      price: "$1,799",
      priceNote: "one-time",
      icon: "Target",
      description:
        "Ideal for businesses needing full brand discovery, messaging, and strategy framework.",
      features: [
        "Brand discovery sprint",
        "Competitor & audience research",
        "Messaging & value proposition",
        "3 buyer personas",
        "Brand guidelines (strategy layer)",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "$3,999+",
      priceNote: "one-time",
      icon: "Crown",
      description:
        "Complete brand strategy + full visual identity system — built for lasting impact.",
      features: [
        "Full brand strategy & positioning",
        "Complete visual identity system",
        "50-page brand guidelines PDF",
        "Brand voice & tone guide",
        "Multi-channel launch strategy",
      ],
      recommended: false,
    },
  ],
};

export function getPricingTiers(serviceSlug) {
  return servicePricingTiers[serviceSlug] || [];
}

export function getRecommendedTier(serviceSlug) {
  const tiers = getPricingTiers(serviceSlug);
  return tiers.find((t) => t.recommended) || tiers[1] || null;
}
