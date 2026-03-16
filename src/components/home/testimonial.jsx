"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "motion/react";
import { wrap } from "@motionone/utils";
import { Quote } from "lucide-react";

const testimonialsRow1 = [
  {
    quote:
      "Fipi Creatives transformed our digital presence. Their attention to detail and creative vision is unmatched.",
    author: "Sarah Jenkins",
    role: "CEO, Lumina Tech",
    image: "https://picsum.photos/seed/person1/100/100",
  },
  {
    quote:
      "Working with them was a game-changer for our brand. They truly understand modern digital storytelling.",
    author: "Michael Chen",
    role: "Marketing Director, EcoSphere",
    image: "https://picsum.photos/seed/person2/100/100",
  },
  {
    quote:
      "The growth we've seen since partnering with Fipi is incredible. They are more than just an agency.",
    author: "Emma Rodriguez",
    role: "Founder, Bloom Digital",
    image: "https://picsum.photos/seed/person3/100/100",
  },
  {
    quote:
      "Innovative, responsive, and highly creative. Fipi Creatives is the partner every brand needs.",
    author: "David Park",
    role: "CMO, Nexa Solutions",
    image: "https://picsum.photos/seed/person4/100/100",
  },
];

const testimonialsRow2 = [
  {
    quote:
      "Their strategic approach to SEO and social media has put us ahead of all our competitors.",
    author: "Lisa Thompson",
    role: "Head of Growth, Skyward",
    image: "https://picsum.photos/seed/person5/100/100",
  },
  {
    quote:
      "Exceptional quality and professional service. They delivered beyond our expectations.",
    author: "James Wilson",
    role: "Director, Artisan Collective",
    image: "https://picsum.photos/seed/person6/100/100",
  },
  {
    quote:
      "Fipi's ability to capture our brand's essence was remarkable. Highly recommended!",
    author: "Olivia Martinez",
    role: "Brand Manager, Veloce",
    image: "https://picsum.photos/seed/person7/100/100",
  },
  {
    quote:
      "A truly collaborative experience. They listen, they create, and they deliver results.",
    author: "Robert Taylor",
    role: "CEO, Innovate Hub",
    image: "https://picsum.photos/seed/person8/100/100",
  },
];

function ParallaxRow({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-5, -30, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div
        className="flex whitespace-nowrap flex-nowrap gap-8"
        style={{ x }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-12 overflow-hidden bg-fipi-dark relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-fipi-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fipi-green/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-fipi-green font-mono text-sm tracking-[0.4em] uppercase block mb-4"
            >
              Testimonials
            </motion.span>
            <h2 className="text-6xl font-display font-bold mb-8 ">
              Voices of <span className="text-primary italic">Impact</span>
            </h2>
            <p className=" max-w-2xl mx-auto text-xl ">
              We don't just build brands; we build legacies. Hear from the
              visionaries who've scaled with us.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <ParallaxRow baseVelocity={-1.5}>
            {testimonialsRow1.map((testimonial, index) => (
              <div key={`${testimonial.author}-${index}`}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </ParallaxRow>

          <ParallaxRow baseVelocity={1.5}>
            {testimonialsRow2.map((testimonial, index) => (
              <div key={`${testimonial.author}-${index}`}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </ParallaxRow>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  const cardRef = useRef < HTMLDivElement > null;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 3;
    const y = e.clientY - rect.top - rect.height / 3;
    setMousePos({ x: x * 0.1, y: y * 0.1 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: mousePos.x, y: mousePos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="bg-gray-100 cursor-pointer backdrop-blur-xl p-10  rounded-lg border border-white/10 w-[450px] md:w-[600px] shrink-0 relative group hover:bg-primary transition-all duration-700 hover:border-black/20 hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] cursor-default"
    >
      <Quote className="w-12 h-12 text-primary absolute top-10 right-10  transition-all duration-700 group-hover:rotate-12" />

      <div className="relative z-10">
        <p className="text-xl  font-display italic mb-12 leading-relaxed whitespace-normal text-black group-hover:text-white transition-colors duration-500">
          "{testimonial.quote}"
        </p>

        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="absolute inset-0 bg-fipi-green blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="w-20 h-20 rounded-md shadow-2xl border-2 border-white/20 object-cover relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h4 className="font-display font-bold text-xl text-black group-hover:text-white transition-colors duration-500">
              {testimonial.author}
            </h4>
            <p className="text-primary group-hover:text-white transition-colors duration-500">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>

      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </motion.div>
  );
}
