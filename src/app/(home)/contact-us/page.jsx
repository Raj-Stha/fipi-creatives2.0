"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageSquare, Send, ArrowRight } from "lucide-react";

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 pt-32 pb-24 overflow-hidden relative">
      
      {/* Dynamic Background Elements for Light Mode */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-fuchsia-600/5 rounded-full blur-[120px] opacity-70"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px] opacity-50"></div>
        
        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-fipi-green text-sm tracking-[0.3em] uppercase mb-6 font-bold flex items-center justify-center gap-3">
              <span className="w-12 h-px bg-fipi-green/50 hidden sm:block"></span>
              Get in Touch
              <span className="w-12 h-px bg-fipi-green/50 hidden sm:block"></span>
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-black tracking-tighter leading-[1.1] mb-8">
              Let's craft your <br />
              <span className="text-fuchsia-800 drop-shadow-sm">
                next success story
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Whether you have a fully formed project or just a spark of an idea, our team is ready to bring it to life with precision and creativity.
            </p>
          </motion.div>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl font-bold mb-8 text-neutral-900">Direct Contact</h3>
              
              <div className="space-y-8">
                {/* Email Item */}
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center justify-center shrink-0 group-hover:bg-fuchsia-50 group-hover:border-fuchsia-200 transition-all duration-300 shadow-sm">
                    <Mail className="w-6 h-6 text-neutral-500 group-hover:text-fuchsia-800 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 uppercase tracking-widest font-semibold mb-1">Email Us</p>
                    <a href="mailto:hello@fipicreatives.com" className="text-lg font-medium text-neutral-800 hover:text-fuchsia-800 transition-colors">
                      hello@fipicreatives.com
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center justify-center shrink-0 group-hover:bg-fipi-green/10 group-hover:border-fipi-green/30 transition-all duration-300 shadow-sm">
                    <Phone className="w-6 h-6 text-neutral-500 group-hover:text-fipi-green transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 uppercase tracking-widest font-semibold mb-1">Call Us</p>
                    <a href="tel:+9779800000000" className="text-lg font-medium text-neutral-800 hover:text-fipi-green transition-colors">
                      +977 980-000-0000
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center justify-center shrink-0 group-hover:bg-fuchsia-50 group-hover:border-fuchsia-200 transition-all duration-300 shadow-sm">
                    <MapPin className="w-6 h-6 text-neutral-500 group-hover:text-fuchsia-800 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 uppercase tracking-widest font-semibold mb-1">Studio</p>
                    <p className="text-lg font-medium text-neutral-800">
                      Kathmandu, Nepal<br />
                      Innovation Hub, PO Box 1234
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof / Small Element */}
            <div className="mt-16 p-8 rounded-[2rem] bg-neutral-50 border border-neutral-100 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-fipi-green/10 blur-[40px] rounded-full"></div>
              <MessageSquare className="w-8 h-8 text-fipi-green mb-4" />
              <p className="text-lg italic text-neutral-600">
                "Fipi Creatives transformed our vague ideas into a digital masterpiece."
              </p>
              <p className="mt-4 text-sm font-bold text-neutral-900">— Recent Client</p>
            </div>
          </motion.div>

          {/* Right Column: Glassmorphic Contact Form matching Light Theme */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500 relative overflow-hidden group">
              
              {/* Form Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <h3 className="text-3xl font-bold mb-8 relative z-10 text-neutral-900">Send a Message</h3>

              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-600 ml-1">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-neutral-50/50 border border-neutral-200 rounded-2xl px-5 py-4 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-800/20 focus:border-fuchsia-800 transition-all font-sans"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-600 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-neutral-50/50 border border-neutral-200 rounded-2xl px-5 py-4 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-fipi-green/20 focus:border-fipi-green transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-600 ml-1">Subject / Service Needed</label>
                  <select className="w-full bg-neutral-50/50 border border-neutral-200 rounded-2xl px-5 py-4 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-fuchsia-800/20 focus:border-fuchsia-800 transition-all font-sans appearance-none">
                    <option value="" className="text-neutral-500">Select a service...</option>
                    <option value="web" className="text-neutral-900">Web Design & Development</option>
                    <option value="brand" className="text-neutral-900">Branding & Graphic Design</option>
                    <option value="marketing" className="text-neutral-900">Digital Marketing & SEO</option>
                    <option value="other" className="text-neutral-900">Other Inquiry</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-600 ml-1">Project Details</label>
                  <textarea 
                    rows="5"
                    placeholder="Tell us about your project goals, timeline, and budget..."
                    className="w-full bg-neutral-50/50 border border-neutral-200 rounded-2xl px-5 py-4 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-800/20 focus:border-fuchsia-800 transition-all font-sans resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="button"
                  className="w-full mt-4 bg-fipi-green hover:bg-emerald-400 text-[#050505] font-bold text-lg py-5 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_4px_14px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.4)] transform hover:-translate-y-1"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
