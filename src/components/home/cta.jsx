"use client";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="max-w-7xl  mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" rounded-[3rem] p-12 md:p-24 text-center border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full " />
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 relative z-10">
              Ready to <span className="gradient-text">Ignite</span>{" "}
              <span className="text-primary">Your Brand?</span>
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto relative z-10">
              Join hundreds of successful brands that have transformed their
              digital presence with Fipi Creatives.
            </p>
            <Button className="bg-primary px-8 py-6 text-md tracking-wider rounded-md  relative ">
              Get Started Now
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
