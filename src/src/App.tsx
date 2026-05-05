/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import { 
  Globe, 
  Instagram, 
  Megaphone, 
  CheckCircle2, 
  MapPin, 
  User, 
  Phone,
  Mail,
  Youtube,
  Facebook,
  Search,
  ArrowRight,
  MessageCircle,
  X,
  Send,
  Loader2
} from "lucide-react";

// Initialize Gemini API
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

function WhatsAppWidget() {
  return (
    <motion.a 
      href="https://wa.me/919871401412?text=Hi!%20I%27m%20interested%20in%20getting%20a%20website%20designed%20for%20my%20business.%20Could%20you%20please%20share%20details%20about%20your%20packages,%20pricing,%20and%20timeline?%20I%27d%20also%20love%20to%20see%20your%20portfolio.%20Looking%20forward%20to%20hearing%20from%20you!%20%F0%9F%99%8F"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 px-6 py-3.5 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-2xl z-[60] transition-transform font-bold text-sm sm:text-base"
    >
      💬 Chat on WhatsApp
    </motion.a>
  );
}

export default function App() {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Web Development",
      description: "Tailored sites for local success. High-performance, responsive, and secure.",
      price: "$599",
      features: ["Responsive Design", "Fast Loading", "Custom Branding", "Domain Setup"]
    },
    {
      icon: <Instagram className="w-8 h-8 text-white" />,
      title: "Social Growth",
      description: "Professional Instagram management to build your brand presence and daily engagement.",
      price: "Included",
      features: ["Content Strategy", "Engagement Boost", "Brand Aesthetics", "Daily Updates"]
    },
    {
      icon: <Megaphone className="w-8 h-8 text-white" />,
      title: "Full Promotion",
      description: "Hyper-local ad campaigns across Google, YouTube, Instagram, and Facebook.",
      price: "$399",
      features: ["Google Ads", "YouTube Ads", "Instagram Ads", "Facebook Ads"]
    }
  ];

  return (
    <div className="min-h-screen bg-black font-sans text-slate-100 relative overflow-hidden">
      {/* Background Mesh Elements */}
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></motion.div>
      <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }} className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"></motion.div>
      <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.2, 0.05] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 4 }} className="fixed top-[20%] right-[10%] w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-blue-400 rounded-xl flex items-center justify-center shadow-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-900 opacity-20"></div>
              <span className="text-white font-bold text-xl uppercase relative z-10">D</span>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-slate-900 rounded-tl-lg flex items-center justify-center">
                <span className="text-[8px] font-black leading-none">T</span>
              </div>
            </div>
            <span className="font-bold text-lg tracking-tight uppercase">Digitroops</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#contact" className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-all shadow-lg border border-white/10">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 border border-indigo-500/20 relative overflow-hidden group">
              <span className="absolute inset-0 bg-indigo-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative z-10">Websites That Work. Marketing That Grows.</span>
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-indigo-400 drop-shadow-2xl">
              Digital Growth <br/><span className="text-indigo-500 italic drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">Simplified.</span>
            </h1>
            <p className="text-sm text-slate-400 mb-8 max-w-sm leading-relaxed">
              Digitroops empowers local businesses with high-end digital identities and hyper-targeted advertising. Professional solutions for local success.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-block px-8 py-4 bg-white/5 border border-white/10 text-slate-200 font-bold rounded-2xl hover:bg-white/10 transition-all uppercase text-xs tracking-widest backdrop-blur-sm">
                Start My Project
              </a>
              <a href="#portfolio" className="inline-block px-8 py-4 bg-white/5 border border-white/10 text-slate-200 font-bold rounded-2xl hover:bg-white/10 transition-all uppercase text-xs tracking-widest backdrop-blur-sm">
                Our Portfolio
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[2.5rem] p-2 bg-white/5 border border-white/10 backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                alt="Digital Transformation" 
                className="w-full h-full object-cover rounded-[2rem]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-black border-2 border-black shadow-2xl rounded-[2rem] p-8 flex flex-col relative z-10"
              >
                <div className="mb-6 p-4 bg-slate-900 w-fit rounded-2xl border border-slate-800 shadow-inner">{service.icon}</div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-3 text-white">{service.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.slice(0, 3).map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      <CheckCircle2 className="w-3 h-3 text-white/50" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="about" className="py-24 px-6 relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 uppercase tracking-tighter drop-shadow-2xl">The DigiTroops Way</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-black/40 backdrop-blur-xl border border-indigo-500/20 shadow-[0_0_30px_rgba(79,70,229,0.1)] hover:shadow-[0_0_50px_rgba(79,70,229,0.3)] hover:border-indigo-500/50 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group cursor-default"
            >
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-indigo-500/20 blur-[50px] group-hover:bg-indigo-500/40 transition-colors duration-500 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-6">Our Mission</span>
                <h3 className="text-2xl md:text-3xl font-black mb-6 text-white uppercase tracking-wider">Empower & <br/><span className="text-indigo-400 italic">Dominate</span></h3>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-6 font-medium">
                  To empower businesses with powerful digital solutions that don't just exist—but dominate.
                </p>
                <p className="text-slate-400 leading-relaxed text-sm">
                  We aim to turn ideas into impactful online experiences and transform traffic into revenue through smart design, strategic marketing, and relentless execution.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-black/40 backdrop-blur-xl border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:border-blue-500/50 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group cursor-default"
            >
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/20 blur-[50px] group-hover:bg-blue-500/40 transition-colors duration-500 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-6">Our Vision</span>
                <h3 className="text-2xl md:text-3xl font-black mb-6 text-white uppercase tracking-wider">Global <br/><span className="text-blue-400 italic">Success</span></h3>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-6 font-medium">
                  To become a leading force in the digital world where every brand we touch stands out, scales fast, and succeeds globally.
                </p>
                <p className="text-slate-400 leading-relaxed text-sm">
                  We envision a future where DigiTroops becomes synonymous with growth, innovation, and unstoppable digital success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white uppercase tracking-tighter">Our Portfolio</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
              Real results for real local businesses. Check out our latest digital transformations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gym Website */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group relative rounded-[2.5rem] overflow-hidden bg-black border border-slate-900 shadow-2xl"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000" 
                  alt="Gym Website Preview" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 md:p-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Iron Forge Gym</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">High-conversion landing page & membership portal designed for foot traffic.</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">Crafted by Digitroops</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-slate-300 uppercase tracking-widest">Web Presence</span>
                </div>
              </div>
            </motion.div>

            {/* Barber Shop Website */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group relative rounded-[2.5rem] overflow-hidden bg-black border border-slate-900 shadow-2xl"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1000" 
                  alt="Barber Shop Website Preview" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 md:p-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Classic Cuts Barbershop</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Modern booking system & style gallery tailored for local appointments.</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">Crafted by Digitroops</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-slate-300 uppercase tracking-widest">Web Presence</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-[3rem] p-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white uppercase tracking-tighter">Ready to Scale?</h2>
          <p className="text-slate-400 text-sm mb-10 max-w-sm mx-auto leading-relaxed">
            Contact the Digitroops team to get your business growth strategy started today.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="sms:+919871401412" target="_top" className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold uppercase text-[11px] tracking-widest hover:bg-indigo-700 transition-all shadow-lg flex items-center gap-3">
              <MessageCircle className="w-4 h-4" /> Message Us
            </a>
            <a href="tel:+919871401412" target="_top" className="bg-white/5 border border-white/10 text-slate-300 px-10 py-4 rounded-2xl font-bold uppercase text-[11px] tracking-widest hover:bg-white/10 transition-all flex items-center gap-3">
              <Phone className="w-4 h-4" /> Book a Call
            </a>
          </div>
          <div className="mt-20 flex flex-col items-center gap-3">
            <a href="mailto:digitroops01@gmail.com" className="text-xs font-bold text-slate-500 hover:text-white transition-colors tracking-widest">digitroops01@gmail.com</a>
          </div>
        </div>
      </footer>
      <WhatsAppWidget />
    </div>
  );
}
