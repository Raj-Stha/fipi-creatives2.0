"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  ArrowUpRight,
  ChevronUp,
} from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="bg-black pt-32 pb-12 relative overflow-hidden  "
    >
      {/* Subtle Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-fipi-purple/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-fipi-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          {/* Left Side: CTA */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-10 leading-[1.1]  text-white">
                Ready to{" "}
                <span className="italic font-light text-fipi-purple">
                  evolve
                </span>{" "}
                your digital presence?
              </h2>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-fipi-dark px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-secondary hover:text-white  cursor-pointer transition-all duration-300 group">
                  Start a Project
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <a
                  href="mailto:hello@fipicreatives.com"
                  className="px-8 py-4 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 text-white/80 hover:text-white"
                >
                  hello@fipicreatives.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Links */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-12">
            <div>
              <span className="text-white font-mono text-[16px] uppercase tracking-widest mb-8 block">
                Navigation
              </span>
              <ul className="space-y-4">
                {["Services", "Work", "About", "Insights", "Careers"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-white/60 hover:text-fipi-green transition-colors duration-300 text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <span className="text-white font-mono text-[16px] uppercase tracking-widest mb-8 block">
                Connect
              </span>
              <ul className="space-y-4">
                {[
                  { name: "Instagram", icon: Instagram },
                  { name: "Twitter", icon: Twitter },
                  { name: "LinkedIn", icon: Linkedin },
                  { name: "Facebook", icon: Facebook },
                ].map((social) => (
                  <li key={social.name}>
                    <a
                      href="#"
                      className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 text-sm group"
                    >
                      <social.icon className="w-4 h-4 text-white/20 group-hover:text-fipi-purple transition-colors" />
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold text-lg">
              F
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-tight text-white leading-none">
                Fipi <span className="text-fipi-green">Creatives</span>
              </span>
              <span className="text-[10px] text-white/20 font-mono uppercase tracking-widest mt-1">
                Digital Agency
              </span>
            </div>
          </div>

          {/* <div className="flex flex-col md:items-end gap-2">
            <p className="text-white/30 text-[11px] font-mono uppercase tracking-wider">
              © {year} Fipi Creatives. All rights reserved.
            </p>
            <div className="flex gap-6 text-[11px] text-white/20 font-mono uppercase tracking-wider">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div> */}

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border bg-white/20 border-white flex items-center justify-center text-white hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
