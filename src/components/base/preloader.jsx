"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Motion value for smooth animation
  const progressValue = useMotionValue(0);
  const width = useTransform(progressValue, (v) => `${v}%`);
  const bubbleLeft = useTransform(progressValue, (v) => `calc(${v}% - 12px)`); // smaller offset for bubble

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const duration = 1200; // faster preload
    const startTime = performance.now();

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const value = Math.min((elapsed / duration) * 100, 100);
      setProgress(value);
      progressValue.set(value); // smooth animation

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
          document.documentElement.style.overflow = "";
        }, 200);
      }
    };

    requestAnimationFrame(updateProgress);

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [progressValue]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[10000] bg-gradient-to-br from-primary  to-secondary flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.7, 0, 0.3, 1] },
          }}
        >
          {/* Background Glows */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-fipi-green/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[150px]" />
            <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-fipi-purple/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[120px]" />
          </motion.div>

          {/* Logo */}
          <div className="relative flex flex-col items-center mb-10">
            <motion.div
              className="relative w-72 h-36 md:w-[32rem] md:h-56"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="absolute inset-0 bg-white/5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              />

              <div className="w-full h-full grid grid-cols-10 grid-rows-10 relative">
                {Array.from({ length: 100 }).map((_, i) => {
                  const isVisible = i < progress;
                  const x = i % 10;
                  const y = Math.floor(i / 10);

                  return (
                    <motion.div
                      key={i}
                      className="relative w-full h-full overflow-hidden"
                      initial={{ opacity: 0, scale: 0.2 }}
                      animate={
                        isVisible
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.2 }
                      }
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <div
                        className="absolute inset-0 w-[1000%] h-[1000%]"
                        style={{ left: `-${x * 100}%`, top: `-${y * 100}%` }}
                      >
                        <Image
                          src="/logo.png"
                          alt="logo"
                          fill
                          className="object-cover shadow-2xl brightness-0 invert"
                          priority
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
