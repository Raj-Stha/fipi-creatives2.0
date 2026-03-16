"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
  useSpring,
} from "motion/react";
import { Rocket, Share2, Search, ArrowRight } from "lucide-react";

const steps = [
  {
    id: "branding",
    title: "Business Branding",
    icon: Rocket,
    color: "from-primary to-blue-600",
    description:
      "We build foundations that last by uncovering your core identity and crafting a visual language that resonates.",
    subSteps: [
      {
        subtitle: "Uncover Your Core Identity",
        description:
          "We begin with deep brand discovery, uncovering your core values and unique selling propositions.",
        image:
          "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
        tag: "Discovery",
      },
      {
        subtitle: "Craft a Visual Language",
        description:
          "Our design team crafts a cohesive visual identity, including logos, typography, and color palettes.",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=81",
        tag: "Design",
      },
    ],
  },
  {
    id: "social",
    title: "Social Media",
    icon: Share2,
    color: "from-pink-600 to-primary",
    description:
      "Data-driven strategies to foster real connections and amplify your reach across all digital platforms.",
    subSteps: [
      {
        subtitle: "Data-Driven Content",
        description:
          "We develop a content strategy tailored to each platform, ensuring your brand stays relevant.",
        image:
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
        tag: "Strategy",
      },
      {
        subtitle: "Foster Real Connections",
        description:
          "Our community managers turn followers into brand advocates through active engagement.",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        tag: "Engagement",
      },
    ],
  },
  {
    id: "seo",
    title: "SEO Optimization",
    icon: Search,
    color: "from-primary to-emerald-600",
    description:
      "Technical excellence and high-intent visibility to build domain authority and drive organic growth.",
    subSteps: [
      {
        subtitle: "Technical Excellence",
        description:
          "Comprehensive technical audits to ensure your website is perfectly optimized for search engines.",
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=81",
        tag: "Audit",
      },
      {
        subtitle: "High-Intent Visibility",
        description:
          "Optimizing your content with high-intent keywords for the searches that matter most.",
        image:
          "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80",
        tag: "Keywords",
      },
    ],
  },
];

const TextReveal = ({ text, className, delay = 0 }) => {
  const words = text.split(" ");
  return (
    <span className={`inline-flex flex-wrap text-black ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden mr-[0.25em] last:mr-0 py-[0.1em]"
        >
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.3,
              delay: delay + i * 0.015,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default function GrowthStrategy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Calculate which step is active based on scroll progress
  const activeIndex = useTransform(
    smoothProgress,
    [0, 0.33, 0.66, 1],
    [0, 1, 2, 2],
  );
  const [currentStep, setCurrentStep] = useState(0);

  useMotionValueEvent(activeIndex, "change", (latest) => {
    const rounded = Math.round(latest);
    if (rounded !== currentStep) {
      setCurrentStep(rounded);
    }
  });

  // Alternating entry directions: Even index from bottom, Odd index from top
  const getDirectionalProps = (index) => {
    const fromBottom = index % 2 === 0;
    return {
      initial: { opacity: 0, y: fromBottom ? 60 : -60 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: fromBottom ? -60 : 60 },
    };
  };

  return (
    <section id="growth" ref={containerRef} className="bg-gray-50 relative">
      <div className="sticky top-0 pt-16 pb-20 w-full flex flex-col overflow-hidden">
        {/* Section Header - Fixed at top of sticky container */}
        <div className="max-w-7xl mx-auto px-6  w-full relative z-30">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-display mb-12 font-bold  text-black"
          >
            Scaling <span className="text-primary italic">Success</span>
          </motion.h2>
        </div>

        {/* Content Area */}
        <div className="flex-1 relative flex items-center">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={currentStep}
              {...getDirectionalProps(currentStep)}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full"
            >
              {/* Background Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${steps[currentStep].color} opacity-[0.05] pointer-events-none blur-[120px]`}
              />

              <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-start">
                  {/* Left Side: Title & Description */}
                  <div className="space-y-10">
                    <div className="flex items-center gap-6">
                      <motion.div
                        layoutId="step-icon"
                        className={`p-4 rounded-md bg-gradient-to-br ${steps[currentStep].color} shadow-2xl shrink-0`}
                      >
                        {React.createElement(steps[currentStep].icon, {
                          className: "w-5 h-5 text-white",
                        })}
                      </motion.div>
                      <div className="min-w-0">
                        <motion.span
                          layoutId="step-number"
                          className="text-primary font-mono text-xs tracking-[0.3em] uppercase block "
                        >
                          Pillar 0{currentStep + 1}
                        </motion.span>
                        <h3 className="text-4xl  font-display font-bold text-white tracking-tight">
                          <TextReveal text={steps[currentStep].title} />
                        </h3>
                      </div>
                    </div>

                    <div className="text-xl text-fipi-light/60 leading-relaxed max-w-xl">
                      <TextReveal
                        text={steps[currentStep].description}
                        delay={0.1}
                      />
                    </div>

                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.35 }}
                      className="flex items-center gap-3 text-primary font-bold group/btn pt-4"
                    >
                      Explore Strategy
                      <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-fipi-dark transition-all duration-300">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </motion.button>
                  </div>

                  {/* Right Side: Sub Steps */}
                  <div className="grid sm:grid-cols-2 gap-8">
                    {steps[currentStep].subSteps.map((sub, idx) => (
                      <motion.div
                        key={sub.subtitle}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.2 + idx * 0.05, duration: 0.3 }}
                        className="space-y-4 group"
                      >
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
                          <img
                            src={sub.image}
                            alt={sub.subtitle}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-fipi-dark/60 to-transparent" />
                          <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white uppercase tracking-widest">
                            {sub.tag}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-lg font-display font-bold text-white mb-2">
                            <TextReveal
                              text={sub.subtitle}
                              delay={0.3 + idx * 0.05}
                            />
                          </h4>
                          <p className="text-sm text-fipi-light/40 leading-relaxed line-clamp-2">
                            {sub.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentStep === i ? "w-12 bg-primary" : "w-3 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
