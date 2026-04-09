"use client";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import ProjectDialog from "./ProjectDialog";

const TITLE_VARIANTS = [
  "Strategic Growth",
  "Brand Evolution",
  "Software Solutions",
  "Digital Marketing",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TITLE_VARIANTS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="sticky top-0 h-screen w-full flex items-center overflow-hidden z-0 bg-black/60 pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay for premium depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-fipi-dark via-fipi-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-fipi-dark" />
      </div>

      <div className="max-w-4xl mx-auto text-center backdrop-blur-sm px-12 py-8 rounded-md w-full relative z-10">
        {/* Content Aligned Left - Scaled down for single view fit */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-white/10 text-white  border border-white/10 text-fipi-green font-semibold uppercase tracking-wider  mb-4 md:mb-6 text-sm backdrop-blur-md"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fipi-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-fipi-green"></span>
            </span>
            Full-Service Digital Partner
          </motion.div>

          <h1 className="text-4xl  font-display font-bold mb-4  text-white">
            <span>Pioneering</span>
            <div className="relative  pt-4 text-7xl text-center  overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -30, opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className=" gradient-text  block whitespace-nowrap"
                >
                  {TITLE_VARIANTS[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>
          <span className="mt-4 text-4xl text-white font-bold">
            For Visionaries.
          </span>

          <div className="space-y-4 mt-8 mb-8 max-w-2xl mx-auto md:mb-10">
            {/* <p className=" max-w-xl font-light italic ">
              "We solve their problem and growth in their business by our best
              digital service."
            </p> */}
            <p className="text-base   text-white   ">
              Engineering{" "}
              <span className="text-white font-medium text-fipi-green">
                unrivaled transformations
              </span>{" "}
              that scale your impact globally through software and marketing.
            </p>
          </div>

          <div className="flex justify-center flex-wrap gap-4 items-center">
            {/* Optimized Small Primary Glass Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsDialogOpen(true)}
                className="relative overflow-hidden cursor-pointer px-7 py-3 rounded-md flex items-center gap-2.5 text-sm md:text-base font-semibold tracking-wide shadow-lg group bg-gradient-to-r from-fipi-purple to-fipi-green backdrop-blur-md border border-white/20 hover:border-white/40 transition-all font-sans"
              >
                <span className="relative z-10 text-white">Start Project</span>
                <ArrowRight className="relative z-10 w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                  animate={{ translateX: ["100%", "-100%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 4,
                  }}
                />
              </motion.div>

            {/* Optimized Small Secondary Glass Button */}
            <Link href="/services">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3 rounded-md border border-fipi-green/50 text-sm md:text-base font-medium backdrop-blur-md flex items-center gap-2.5 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute cursor-pointer inset-0 bg-gradient-to-br from-fipi-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 text-white group-hover:text-fipi-green transition-colors font-semibold">
                  Our Services
                </span>
                <Sparkles className="w-4 h-4 text-fipi-green group-hover:rotate-12 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Compact Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-5 h-9 border border-white/10 rounded-full flex justify-center p-1 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 bg-fipi-purple rounded-full shadow-[0_0_10px_#7B2E8D]"
          />
        </div>
        <span className="text-[9px] uppercase tracking-[0.4em] font-medium text-fipi-light/20 uppercase">
          Scroll
        </span>
      </motion.div>

      <ProjectDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </section>
  );
}
