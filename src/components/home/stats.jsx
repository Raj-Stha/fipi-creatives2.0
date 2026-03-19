"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    id: 1,
    label: "Years of Experience",
    value: 12,
    suffix: "+",
    color: "from-blue-500 to-indigo-600",
    shadow: "rgba(79,70,229,0.4)",
  },
  {
    id: 2,
    label: "Projects Completed",
    value: 500,
    suffix: "+",
    color: "from-fuchsia-500 to-pink-600",
    shadow: "rgba(217,70,239,0.4)",
  },
  {
    id: 3,
    label: "Happy Clients",
    value: 250,
    suffix: "+",
    color: "from-emerald-400 to-teal-500",
    shadow: "rgba(16,185,129,0.4)",
  },
  {
    id: 4,
    label: "Creative Awards",
    value: 45,
    suffix: "+",
    color: "from-orange-400 to-rose-500",
    shadow: "rgba(249,115,22,0.4)",
  },
];

export default function Stats() {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Premium Dark Mode Background Elements */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-fuchsia-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px]"></div>
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_100%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto ">
        {/* <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[10rem] font-extrabold tracking-tighter leading-tight"
          >
            <span className="text-fuchsia-800 mr-6">Proven</span>
            <span className="text-green-600">Results</span>
          </motion.h2>
        </div> */}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 ">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Subcomponent for Animated Stat Cards
function StatCard({ stat, index }) {
  const ref = useRef(null);
  // Viewport tracking (once: false ensures it triggers every time it enters the screen)
  const isInView = useInView(ref, { once: false });

  // Custom counter animation hook
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Linear tweening from 0 to stat.value
      let start = 0;
      const end = stat.value;
      const duration = 1500; // 1.5 seconds layout animation
      const incrementTime = 20; // 20ms intervals
      const steps = duration / incrementTime;
      const incrementValue = end / steps;

      const timer = setInterval(() => {
        start += incrementValue;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    } else {
      // Reset counter to 0 immediately when it leaves the viewport
      setCount(0);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      className="relative group h-full"
      style={{
        // Define standard CSS variables to animate 3D glow shadows natively
        "--hover-shadow": stat.shadow,
      }}
    >
      <div
        className="relative h-full p-8 cursor-pointer rounded-[0.5rem]  backdrop-blur-xl 
        transition-all duration-500 ease-out overflow-hidden flex flex-col items-center justify-center text-center
        hover:scale-[1.01] hover:-translate-y-2
        hover:shadow-[0_20px_50px_var(--hover-shadow)]
        hover:border-white/10"
      >
        {/* Animated Number Value */}
        <div className="relative z-10 mb-6">
          <h3
            className={`text-7xl  font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br ${stat.color} group-hover:drop-shadow-[0_0_15px_var(--hover-shadow)] transition-all duration-500`}
          >
            {count}
            {stat.suffix}
          </h3>
        </div>

        {/* Decorative Divider */}
        <div
          className={`w-12 h-1.5 rounded-full mb-6 transition-all duration-500 bg-green-500 group-hover:w-24 group-hover:opacity-100 group-hover:shadow-[0_0_10px_var(--hover-shadow)]`}
        ></div>

        {/* Label */}
        <p className="text-lg  font-bold tracking-wider text-fuchsia-800 uppercase relative z-10 group-hover:text-green transition-colors duration-500">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}
