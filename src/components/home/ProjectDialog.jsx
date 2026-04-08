"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ProjectDialog({ isOpen, onClose }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Dialog Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
            >
              <X className="w-5 h-5 text-neutral-600" />
            </button>

            {/* Left Side: Form */}
            <div className="flex-1 p-8 md:p-12 relative overflow-hidden">
               {/* Decorative Blobs (matching system UI colors) */}
               <div className="absolute -top-24 -left-24 w-64 h-64 bg-fipi-purple/5 rounded-full blur-3xl pointer-events-none" />
               <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-fipi-green/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <p className="text-fipi-green font-bold text-sm tracking-wider uppercase mb-2">Have a Project in Mind</p>
                <h2 className="text-4xl md:text-5xl font-display font-black text-neutral-900 mb-8 tracking-tight">Tell Us A Bit More</h2>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name *"
                      required
                      className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 focus:border-fipi-green focus:ring-1 focus:ring-fipi-green outline-none transition-all placeholder:text-neutral-400"
                    />
                    <input
                      type="email"
                      placeholder="Email *"
                      required
                      className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 focus:border-fipi-green focus:ring-1 focus:ring-fipi-green outline-none transition-all placeholder:text-neutral-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative flex">
                      <div className="flex items-center gap-2 px-3 border border-r-0 border-neutral-200 rounded-l-xl bg-neutral-50">
                        <img src="https://flagcdn.com/w20/np.png" alt="Nepal" className="w-5 h-auto opacity-70" />
                        <span className="text-sm text-neutral-500 font-medium">+977</span>
                      </div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-5 py-3.5 rounded-r-xl border border-neutral-200 focus:border-fipi-green focus:ring-1 focus:ring-fipi-green outline-none transition-all placeholder:text-neutral-400"
                      />
                    </div>
                    <select
                      className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 focus:border-fipi-green focus:ring-1 focus:ring-fipi-green outline-none transition-all text-neutral-500 appearance-none bg-no-repeat bg-[right_1.25rem_center] bg-[length:1rem]"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")` }}
                    >
                      <option value="">---Service---</option>
                      <option value="web">Web Development</option>
                      <option value="digital">Digital Marketing</option>
                      <option value="brand">Branding</option>
                      <option value="seo">SEO Optimization</option>
                    </select>
                  </div>

                  <textarea
                    rows="4"
                    placeholder="Write a Message *"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 focus:border-fipi-green focus:ring-1 focus:ring-fipi-green outline-none transition-all placeholder:text-neutral-400 resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="bg-fipi-green hover:bg-emerald-600 text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-fipi-green/20 transition-all transform hover:-translate-y-1"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* Right Side: Contact Info */}
            <div className="w-full md:w-[380px] bg-neutral-50/50 p-8 md:p-12 flex flex-col justify-center relative border-l border-neutral-100">
                {/* Background Blobs for right side (matching image style) */}
                <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden text-fipi-green/5">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute -top-10 -right-10 w-64 h-64 fill-current">
                        <path d="M45.7,-77.6C58.9,-71.4,69.1,-58.5,76.4,-44.6C83.7,-30.7,88.1,-15.3,86.9,-0.7C85.7,13.9,78.9,27.8,70.5,40.4C62.1,53.1,52,64.4,39.6,71.9C27.1,79.5,12.4,83.1,-2.4,87.2C-17.2,91.3,-32.1,95.8,-45.6,90.4C-59.2,85.1,-71.4,69.9,-79.9,54C-88.5,38.1,-93.4,21.5,-93,5.4C-92.6,-10.8,-86.9,-26.4,-77.5,-39.8C-68,-53.2,-54.9,-64.3,-40.8,-70C-26.7,-75.7,-11.6,-76,2.2,-79.8C16,-83.6,29.9,-75.1,45.7,-77.6Z" transform="translate(100 100)" />
                    </svg>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-20 -left-20 w-80 h-80 fill-current opacity-60">
                         <path d="M44.7,-76.4C58.1,-70.2,69.1,-58.1,76.1,-44.3C83.2,-30.5,86.2,-15,85.5,-0.4C84.7,14.2,80.1,27.9,72.4,40.1C64.7,52.3,53.9,62.9,41.4,70.1C28.9,77.3,14.5,81.1,-0.1,81.3C-14.7,81.4,-29.4,78,-42.6,71.2C-55.7,64.3,-67.4,54.1,-75.7,41.2C-84,28.3,-89.1,12.7,-88.9,-2.8C-88.7,-18.2,-83.3,-33.5,-74.2,-46C-65.1,-58.4,-52.3,-68,-38.5,-73.9C-24.6,-79.7,-9.8,-81.8,2.4,-86.1C14.7,-90.4,29.3,-82.7,44.7,-76.4Z" transform="translate(100 100)" />
                    </svg>
                </div>

              <div className="relative z-10 space-y-10">
                <div>
                    <h4 className="text-neutral-500 font-medium text-sm mb-1">We would love to hear from you</h4>
                    <h3 className="text-2xl font-bold text-neutral-900">Get In Touch</h3>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-fipi-green flex items-center justify-center text-white shadow-lg shadow-fipi-green/20 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Our Phone Number</p>
                      <p className="text-neutral-900 font-bold">9801848492</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-fipi-green flex items-center justify-center text-white shadow-lg shadow-fipi-green/20 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Our Email</p>
                      <p className="text-neutral-900 font-bold">hello@fipicreatives.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-fipi-green flex items-center justify-center text-white shadow-lg shadow-fipi-green/20 group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Office Address</p>
                      <p className="text-neutral-900 font-bold">Shankhamul, Kathmandu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
