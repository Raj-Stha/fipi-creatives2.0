"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/#about",
    megaMenu: [
      {
        title: "Who We Are",
        description:
          "Discover our story, mission, and the passion behind FiPi Creatives.",
        image: "https://picsum.photos/seed/team/600/400",
        href: "/about/who-we-are",
      },
      {
        title: "Our Team",
        description:
          "Meet the talented people behind our creative and strategic work.",
        image: "https://picsum.photos/seed/ourteam/600/400",
        href: "/about/team",
      },
      {
        title: "Our Network",
        description: "Exploring our global reach and strategic partnerships.",
        image: "https://picsum.photos/seed/network/600/400",
        href: "/about/network",
      },
    ],
  },
  {
    name: "Services",
    href: "/#services",
    megaMenu: [
      {
        title: "Digital Marketing",
        description:
          "Strategic growth through data-driven multi-channel campaigns.",
        image: "https://picsum.photos/seed/marketing/600/400",
        href: "/services/digital-marketing",
      },
      {
        title: "Creative Design",
        description: "Visual storytelling that leaves a lasting impression.",
        image: "https://picsum.photos/seed/design/600/400",
        href: "/services/creative-design",
      },
      {
        title: "SEO Optimization",
        description: "Dominating search results and driving organic traffic.",
        image: "https://picsum.photos/seed/seo/600/400",
        href: "/services/seo-optimization",
      },
      {
        title: "Web Development",
        description: "High-performance, scalable digital experiences.",
        image: "https://picsum.photos/seed/web/600/400",
        href: "/services/web-development",
      },
      {
        title: "Social Media",
        description:
          "Building vibrant communities and powerful brand presence.",
        image: "https://picsum.photos/seed/social/600/400",
        href: "/services/social-media",
      },
      {
        title: "Brand Strategy",
        description:
          "Defining your purpose and positioning for long-term success.",
        image: "https://picsum.photos/seed/app/600/400",
        href: "/services/brand-strategy",
      },
    ],
  },
  {
    name: "Our Work",
    href: "/our-works",
    megaMenu: [
      {
        title: "Branding & Identity",
        description:
          "Strategic brand identity and visual storytelling projects.",
        image: "https://picsum.photos/seed/branding/600/400",
        href: "/our-works?category=branding",
      },
      {
        title: "Web & Digital",
        description: "High-performance websites and digital experiences.",
        image: "https://picsum.photos/seed/digital/600/400",
        href: "/our-works?category=web-digital",
      },
      {
        title: "App Development",
        description: "Innovative mobile and web application solutions.",
        image: "https://picsum.photos/seed/app-dev/600/400",
        href: "/our-works?category=app-development",
      },
      {
        title: "Digital Marketing",
        description: "Data-driven campaigns and growth strategies.",
        image: "https://picsum.photos/seed/marketing/600/400",
        href: "/our-works?category=digital-marketing",
      },
      {
        title: "Photography",
        description: "Professional commercial and urban photography.",
        image: "https://picsum.photos/seed/photo/600/400",
        href: "/our-works?category=photography",
      },
      {
        title: "All Projects",
        description: "Explore our complete portfolio of creative works.",
        image: "https://picsum.photos/seed/projects/600/400",
        href: "/our-works",
      },
    ],
  },
  { name: "Blog", href: "/blog" },
  // { name: "Hire Influencers", href: "/hire-influencers" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  // Normalize pathname to handle trailing slash (optional)
  const normalizedPath = pathname?.replace(/\/$/, "") ?? "";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isHome = normalizedPath === "" || normalizedPath === "/";
  const isSolid = isScrolled || activeDropdown || isMobileMenuOpen || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-in-out ${
        isSolid
          ? "bg-white  py-3 md:py-4"
          : "bg-transparent text-white py-5 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto  flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative h-10 w-32 md:w-30 flex items-center overflow-visible">
            <Image
              src="/logo.png"
              alt="Fipi Creatives Logo"
              width={200}
              height={80}
              className={`${!isSolid && "invert brightness-0"} object-contain object-left scale-[1.35] md:scale-[1.5] origin-left transition-all duration-500 drop-shadow-sm group-hover:opacity-80 ${isSolid ? "brightness-100" : ""}`}
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div
          className={` ${!isSolid ? "rounded-md  bg-white/20  backdrop-blur-3xl" : ""}hidden md:flex items-center  px-4 py-3 gap-7 lg:gap-8`}
        >
          {navItems.map((item) => (
            <div
              key={item.name}
              className="static"
              onMouseEnter={() => item.megaMenu && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.href.includes("#") ? (
                <a
                  href={item.href}
                  className={`text-sm font-medium transition-colors  flex items-center gap-1.5 py-2 ${
                    activeDropdown === item.name
                      ? "text-fipi-green"
                      : isSolid
                        ? "text-gray-900 hover:text-fipi-green"
                        : "text-fipi-light/90 hover:text-fipi-green"
                  }`}
                >
                  {item.name}
                  {item.megaMenu && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform  ${activeDropdown === item.name ? "rotate-180" : ""}`}
                    />
                  )}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors  flex items-center gap-1.5 py-2 ${
                    activeDropdown === item.name
                      ? "text-fipi-green"
                      : isSolid
                        ? "text-gray-900 hover:text-fipi-green"
                        : "text-fipi-light/90 hover:text-fipi-green"
                  }`}
                >
                  {item.name}
                  {item.megaMenu && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform  ${activeDropdown === item.name ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>
              )}
            </div>
          ))}
          {/* <div
            className={`flex items-center gap-5 ml-2 pl-6 border-l transition-colors duration-500 ${
              isSolid ? "border-gray-200" : "border-white/20"
            }`}
          >
            <Link
              href="/login"
              className={`text-sm font-medium transition-colors  ${
                isSolid
                  ? "text-gray-700 hover:text-fipi-green"
                  : "text-fipi-light/90 hover:text-fipi-green"
              }`}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="gradient-button px-6 py-2 rounded-full text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Register
            </Link>
          </div> */}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 -mr-2 transition-colors  ${
            isSolid ? "text-gray-900" : "text-fipi-light"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mega Menu Desktop - Classic & Clean Styling */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
            className="absolute backdrop-blur-3xl rounded-md top-full left-1/2 -translate-x-1/2 w-full max-w-7xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="grid grid-cols-3 gap-3">
                {navItems
                  .find((n) => n.name === activeDropdown)
                  ?.megaMenu?.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className="group relative block aspect-[16/10] overflow-hidden rounded-md bg-gray-50 shadow-sm hover:shadow-xl transition-all duration-500"
                    >
                      <img
                        src={subItem.image}
                        alt={subItem.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent p-6 flex flex-col justify-end z-10 transition-colors duration-500 group-hover:from-gray-900">
                        {/* Premium subtle glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-fipi-purple/20 via-transparent to-fipi-green/20 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

                        <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1.5 group-hover:text-fipi-green transition-colors relative z-20">
                          {subItem.title}
                        </h3>
                        <p className="text-white/80 line-clamp-1 text-sm md:text-base  mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0 relative z-20">
                          {subItem.description}
                        </p>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-900 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 relative z-20 shadow-md">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu - Light Theme */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="px-6 py-6 max-h-[80vh] overflow-y-auto w-full">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="border-b border-gray-50 last:border-0 pb-2 mb-2 last:pb-0 last:mb-0"
                  >
                    <div
                      className={`flex items-center justify-between text-lg font-medium transition-colors py-2 cursor-pointer ${
                        activeDropdown === item.name
                          ? "text-fipi-green"
                          : "text-gray-800"
                      }`}
                      onClick={() =>
                        item.megaMenu
                          ? setActiveDropdown(
                              activeDropdown === item.name ? null : item.name,
                            )
                          : setIsMobileMenuOpen(false)
                      }
                    >
                      {item.href.includes("#") ? (
                        <a
                          href={item.href}
                          onClick={(e) => item.megaMenu && e.preventDefault()}
                          className="flex-1"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.href} className="flex-1">
                          {item.name}
                        </Link>
                      )}
                      {item.megaMenu && (
                        <div className="p-2 -mr-2">
                          <ChevronDown
                            className={`w-5 h-5 transition-transform  ${activeDropdown === item.name ? "rotate-180 text-fipi-green" : "text-gray-400"}`}
                          />
                        </div>
                      )}
                    </div>

                    {item.megaMenu && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, marginTop: 0 }}
                        animate={{ opacity: 1, marginTop: 16 }}
                        className="grid gap-3"
                      >
                        {item.megaMenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <img
                              src={subItem.image}
                              className="w-14 h-14 rounded-lg object-cover shadow-sm bg-gray-200"
                              alt=""
                            />
                            <div>
                              <h4 className="font-bold text-sm text-gray-900">
                                {subItem.title}
                              </h4>
                              <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                                {subItem.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <Link
                    href="/login"
                    className="py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-medium text-center hover:bg-gray-100 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="gradient-button py-3 rounded-xl font-medium text-center shadow-md"
                  >
                    Sign Up
                  </Link>
                </div>
                <Link
                  href="/contact-us"
                  className="gradient-button w-full py-3.5 rounded-xl mt-3 shadow-md shadow-fipi-green/20 block text-center"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
