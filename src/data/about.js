// ─── Company Story & Values ─────────────────────────────────────────────────

export const companyStory = {
  founded: "2019",
  tagline: "Where creativity meets strategy.",
  mission:
    "To empower brands with bold creative work and data-driven marketing strategies that drive measurable growth and lasting impact.",
  vision:
    "To become the most trusted creative partner for ambitious brands across South Asia and beyond — a studio where big ideas are given the room to become iconic.",
  story: [
    "FiPi Creatives was born in Kathmandu in 2019 from a simple but stubborn belief: that good design and smart strategy should not be luxuries reserved for large corporations. Two friends with laptops, a coffee addiction, and a relentless appetite for craft decided to build something different.",
    "We started with branding projects for local businesses. Word spread. The scope grew. Today, FiPi is a full-service creative agency of over 30 specialists — designers, strategists, developers, storytellers — serving brands across Nepal, India, and Southeast Asia.",
    "What has never changed is our founding conviction: every brand deserves work that surprises people. Work that earns attention, not just buys it. We are restless about improvement, obsessive about quality, and genuinely excited about every brief that lands on our desk.",
  ],
  stats: [
    { label: "Founded", value: "2019" },
    { label: "Team Members", value: "30+" },
    { label: "Projects Delivered", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Countries Served", value: "8" },
    { label: "Awards", value: "14" },
  ],
};

export const values = [
  {
    title: "Craft First",
    description:
      "We obsess over details others overlook. Every pixel, every word, every interaction is intentional. Quality is not a checkbox — it is a standard we refuse to compromise.",
    icon: "✦",
    color: "#7d2c91",
  },
  {
    title: "Radical Transparency",
    description:
      "We say what we mean. With clients, with each other, about timelines and about risks. Honest conversations build better work and stronger relationships.",
    icon: "◈",
    color: "#10b981",
  },
  {
    title: "Bold Thinking",
    description:
      "Safe work is invisible work. We encourage our team to push ideas further, question assumptions, and propose the unexpected — because that is where memorable brands live.",
    icon: "◆",
    color: "#f59e0b",
  },
  {
    title: "People Over Process",
    description:
      "Frameworks serve teams, not the other way around. We adapt, we listen, and we put the human relationship at the center of everything we build.",
    icon: "●",
    color: "#3b82f6",
  },
  {
    title: "Relentless Growth",
    description:
      "The marketing and design landscape never stops evolving. Neither do we. Every team member is given time, budget, and encouragement to learn and level up constantly.",
    icon: "▲",
    color: "#ec4899",
  },
  {
    title: "Ownership Mindset",
    description:
      "We treat every client's business like our own. That means thinking beyond the brief, anticipating problems, and taking responsibility for outcomes — not just outputs.",
    icon: "★",
    color: "#8b5cf6",
  },
];

// ─── Team Members ─────────────────────────────────────────────────────────────

export const teamMembers = [
  {
    id: 1,
    name: "Aditya Shrestha",
    role: "Co-Founder & CEO",
    department: "Leadership",
    bio: "Aditya is the strategic engine behind FiPi. With a background in brand consulting and growth marketing, he has helped over 80 brands find their footing in crowded markets.",
    avatar: "https://picsum.photos/seed/team01/400/400",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
    featured: true,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Co-Founder & Creative Director",
    department: "Leadership",
    bio: "Priya leads FiPi's creative vision. A designer by training and a storyteller by instinct, she oversees every visual touchpoint to ensure beauty and purpose live together.",
    avatar: "https://picsum.photos/seed/team02/400/400",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
    featured: true,
  },
  {
    id: 3,
    name: "Sameer Thapa",
    role: "Head of Marketing",
    department: "Marketing",
    bio: "Sameer architects multi-channel campaigns that convert. He bridges creative intuition with analytical rigor to drive growth for every client under his watch.",
    avatar: "https://picsum.photos/seed/team03/400/400",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
    featured: true,
  },
  {
    id: 4,
    name: "Rajesh Kumar",
    role: "SEO & Content Strategist",
    department: "Marketing",
    bio: "Rajesh has an almost supernatural instinct for search. He has consistently delivered top rankings for clients in competitive industries across the region.",
    avatar: "https://picsum.photos/seed/team04/400/400",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
    featured: false,
  },
  {
    id: 5,
    name: "Anika Joshi",
    role: "Social Media Lead",
    department: "Marketing",
    bio: "Anika crafts social strategies that build communities, not just followings. Her campaigns consistently outperform industry benchmarks for engagement and conversion.",
    avatar: "https://picsum.photos/seed/team05/400/400",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
    featured: false,
  },
  {
    id: 6,
    name: "Dev Karmacharya",
    role: "Lead Developer",
    department: "Technology",
    bio: "Dev architects the digital products that bring our creative work to life. He is obsessive about performance, accessibility, and code that stands the test of time.",
    avatar: "https://picsum.photos/seed/team06/400/400",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
    featured: false,
  },
  {
    id: 7,
    name: "Sunita Rai",
    role: "Brand Strategist",
    department: "Strategy",
    bio: "Sunita digs into audience behavior, market positioning, and competitive landscapes to build brand strategies that are both rigorous and inspired.",
    avatar: "https://picsum.photos/seed/team07/400/400",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
    featured: false,
  },
  {
    id: 8,
    name: "Rohan Pandey",
    role: "Motion Designer",
    department: "Creative",
    bio: "Rohan gives brands movement and personality. His motion work spans brand films, social content, UI animations, and everything in between.",
    avatar: "https://picsum.photos/seed/team08/400/400",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
    featured: false,
  },
  {
    id: 9,
    name: "Maya Gurung",
    role: "UI/UX Designer",
    department: "Creative",
    bio: "Maya combines user empathy with aesthetic precision to design interfaces that delight. She has led design for 40+ digital products across multiple industries.",
    avatar: "https://picsum.photos/seed/team09/400/400",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
    featured: false,
  },
];

export const departments = ["All", ...Array.from(new Set(teamMembers.map((m) => m.department)))];

// ─── Network / Partners ───────────────────────────────────────────────────────

export const networkStats = [
  { label: "Global Partners", value: "50+" },
  { label: "Countries Active", value: "8" },
  { label: "Media Partners", value: "120+" },
  { label: "Influencer Network", value: "2,000+" },
];

export const partnerCategories = [
  {
    id: 1,
    title: "Technology Partners",
    description:
      "We integrate seamlessly with the platforms and tools modern brands depend on — from marketing automation to CMS and analytics.",
    color: "#7d2c91",
    icon: "💻",
    partners: [
      {
        name: "HubSpot",
        logo: "https://picsum.photos/seed/hubspot/200/100",
        description: "CRM & marketing automation",
      },
      {
        name: "Shopify",
        logo: "https://picsum.photos/seed/shopify/200/100",
        description: "E-commerce platform",
      },
      {
        name: "Webflow",
        logo: "https://picsum.photos/seed/webflow/200/100",
        description: "Web design & CMS",
      },
      {
        name: "Meta Business",
        logo: "https://picsum.photos/seed/metabiz/200/100",
        description: "Social advertising",
      },
    ],
  },
  {
    id: 2,
    title: "Media & Publishing Partners",
    description:
      "Editorial relationships and media buying alliances that give our clients premium placement across leading publications in Nepal and beyond.",
    color: "#10b981",
    icon: "📰",
    partners: [
      {
        name: "Kantipur Media",
        logo: "https://picsum.photos/seed/kantipur/200/100",
        description: "Nepal's largest media group",
      },
      {
        name: "Himalayan Times",
        logo: "https://picsum.photos/seed/himalayan/200/100",
        description: "Leading English daily",
      },
      {
        name: "Nepal Television",
        logo: "https://picsum.photos/seed/ntv/200/100",
        description: "National broadcast media",
      },
      {
        name: "Online Khabar",
        logo: "https://picsum.photos/seed/okhabar/200/100",
        description: "Digital news platform",
      },
    ],
  },
  {
    id: 3,
    title: "Agency Alliance Network",
    description:
      "Strategic partnerships with complementary agencies across South Asia allow us to scale capacity and deliver specialist expertise on any project.",
    color: "#f59e0b",
    icon: "🤝",
    partners: [
      {
        name: "Brandworks India",
        logo: "https://picsum.photos/seed/brandworks/200/100",
        description: "Brand strategy, New Delhi",
      },
      {
        name: "PixelForge SG",
        logo: "https://picsum.photos/seed/pixelforge/200/100",
        description: "Digital production, Singapore",
      },
      {
        name: "StoryHouse BD",
        logo: "https://picsum.photos/seed/storyhouse/200/100",
        description: "Content studio, Dhaka",
      },
      {
        name: "CreativeCo LK",
        logo: "https://picsum.photos/seed/creativeco/200/100",
        description: "Creative agency, Colombo",
      },
    ],
  },
  {
    id: 4,
    title: "Influencer & Creator Network",
    description:
      "An exclusive roster of 2,000+ vetted influencers across Nepal, India and Southeast Asia — across every category from lifestyle to tech, fashion to finance.",
    color: "#ec4899",
    icon: "🎥",
    partners: [
      {
        name: "Lifestyle Creators",
        logo: "https://picsum.photos/seed/lifestyle/200/100",
        description: "500+ creators",
      },
      {
        name: "Tech Influencers",
        logo: "https://picsum.photos/seed/techinflu/200/100",
        description: "200+ verified voices",
      },
      {
        name: "Fashion & Beauty",
        logo: "https://picsum.photos/seed/fashioncr/200/100",
        description: "400+ content creators",
      },
      {
        name: "Food & Travel",
        logo: "https://picsum.photos/seed/foodtravel/200/100",
        description: "300+ micro & macro",
      },
    ],
  },
];

export const globalPresence = [
  { country: "Nepal", city: "Kathmandu", type: "HQ", flag: "🇳🇵" },
  { country: "India", city: "New Delhi", type: "Office", flag: "🇮🇳" },
  { country: "Singapore", city: "Singapore", type: "Partner Hub", flag: "🇸🇬" },
  { country: "Bangladesh", city: "Dhaka", type: "Partner Hub", flag: "🇧🇩" },
  { country: "Sri Lanka", city: "Colombo", type: "Partner Hub", flag: "🇱🇰" },
  { country: "UAE", city: "Dubai", type: "Coming Soon", flag: "🇦🇪" },
  { country: "UK", city: "London", type: "Coming Soon", flag: "🇬🇧" },
  { country: "USA", city: "New York", type: "Coming Soon", flag: "🇺🇸" },
];
