// import Head from 'next/head';

// export default function ContactPage() {
//   return (
//     <>
//       <Head>
//         <title>Contact Us | Department of Computer Science</title>
//       </Head>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <h1 className="text-4xl font-bold font-lora text-center text-brand-red-900 dark:text-white">
//           Contact Us
//         </h1>
//         <p className="mt-4 text-lg text-center text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
//           Find our location, contact details, and a form to get in touch with the department.
//         </p>
//       </div>
//     </>
//   );
// }


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Linkedin, 
  Instagram, 
  Youtube, 
  ArrowRight,
  Clock,
  Globe2
} from 'lucide-react';

/**
 * CONTACT US PAGE - PREMIUM RED BRANDED VIBE
 * Features:
 * - Brand Colors: Red (#991b1b), Dark Red (#7f1d1d), Parchment (#fdfbf7)
 * - Typography: Lora (Serif) for headings, Inter (Sans) for body
 * - Interaction: Staggered entry animations and interactive form states
 */

export default function App() {
  const [formState, setFormState] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => setFormState('success'), 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] dark:bg-slate-950 font-sans selection:bg-red-100">
      {/* Custom Font Styles for the Preview */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Inter:wght@400;700;900&display=swap');
        .font-lora { font-family: 'Lora', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}} />

      {/* Header Section with Scholarly Vibe */}
      <section className="pt-32 pb-20 border-b border-red-50 dark:border-slate-900 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 text-[#991b1b] mb-6"
            >
              <div className="w-10 h-0.5 bg-[#991b1b]"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Get in touch</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black font-lora text-[#7f1d1d] dark:text-white uppercase tracking-tighter leading-[0.9]"
            >
              Connect <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#991b1b] to-[#ef4444]">With Us.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-10 text-xl md:text-2xl text-slate-700 dark:text-slate-400 font-medium leading-relaxed max-w-2xl font-lora"
            >
              Find our location, contact details, and a form to get in touch with the department. We are here to assist your academic journey.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Interactive Info Cards */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-6"
            >
              <div className="group flex items-start space-x-6 p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-red-50 dark:border-slate-800 transition-all hover:shadow-2xl">
                <div className="w-12 h-12 rounded-2xl bg-[#991b1b] text-white flex items-center justify-center shrink-0 shadow-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 font-sans">Call Us</h3>
                  <p className="text-xl font-bold text-slate-900 dark:text-white font-lora">+91 98765 43210</p>
                  <p className="text-sm text-slate-500 mt-1 font-sans">Available 8.30AM — 1.30PM IST</p>
                </div>
              </div>

              <div className="group flex items-start space-x-6 p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-red-50 dark:border-slate-800 transition-all hover:shadow-2xl">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 font-sans">Email</h3>
                  <p className="text-xl font-bold text-slate-900 dark:text-white font-lora break-all">hicascgsaiml@gmail.com</p>
                  <p className="text-sm text-slate-500 mt-1 font-sans">Official Response Desk</p>
                </div>
              </div>

              <div className="group flex items-start space-x-6 p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-red-50 dark:border-slate-800 transition-all hover:shadow-2xl">
                <div className="w-12 h-12 rounded-2xl bg-[#7f1d1d] text-white flex items-center justify-center shrink-0 shadow-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 font-sans">Location</h3>
                  <p className="text-xl font-bold text-slate-900 dark:text-white font-lora">Coimbatore, India</p>
                  <p className="text-sm text-slate-500 mt-1 font-sans">Hindusthan Gardens, Nava India</p>
                </div>
              </div>
            </motion.div>

            {/* Social Connectivity */}
            <div className="pt-8 border-t border-red-100 dark:border-slate-800">
               <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 font-lora">Digital Presence</h3>
               <div className="flex space-x-4">
                  {[Linkedin, Instagram, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#991b1b] hover:text-white transition-all transform hover:-translate-y-1 border border-red-50 dark:border-slate-800 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
               </div>
            </div>
          </div>

          {/* Right: Modern Branded Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#7f1d1d] dark:bg-slate-900 rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
              {/* Visual Accent */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-black text-white font-lora uppercase tracking-tight mb-4">Send a message</h2>
                <p className="text-red-100/60 mb-12 font-medium font-sans">Professional inquiries are reviewed within one business day.</p>

                <AnimatePresence mode="wait">
                  {formState === 'success' ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-20 text-center"
                    >
                      <div className="w-20 h-20 bg-white/10 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <Send className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-black text-white uppercase mb-2 font-lora">Request Received</h3>
                      <p className="text-red-100/60 font-medium font-sans">Our coordinator will reach out to you shortly.</p>
                      <button onClick={() => setFormState('idle')} className="mt-8 text-amber-400 font-black text-xs uppercase tracking-widest hover:underline font-sans">New Inquiry</button>
                    </motion.div>
                  ) : (
                    <form key="form" onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2 font-sans">
                          <label className="text-[10px] font-black uppercase tracking-widest text-red-200/40 ml-4">Full Name</label>
                          <input required type="text" className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-3xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all placeholder:text-red-200/20" placeholder="e.g., Jane Smith" />
                        </div>
                        <div className="space-y-2 font-sans">
                          <label className="text-[10px] font-black uppercase tracking-widest text-red-200/40 ml-4">Email Address</label>
                          <input required type="email" className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-3xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all placeholder:text-red-200/20" placeholder="jane@example.com" />
                        </div>
                      </div>

                      <div className="space-y-2 font-sans">
                        <label className="text-[10px] font-black uppercase tracking-widest text-red-200/40 ml-4">Inquiry Category</label>
                        <div className="relative">
                          <select className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-3xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all appearance-none cursor-pointer">
                            <option className="bg-[#7f1d1d]">General Information</option>
                            <option className="bg-[#7f1d1d]">Admissions 2026</option>
                            <option className="bg-[#7f1d1d]">Research & Labs</option>
                            <option className="bg-[#7f1d1d]">Alumni Portal</option>
                          </select>
                          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                            <ArrowRight className="w-4 h-4 rotate-90" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 font-sans">
                        <label className="text-[10px] font-black uppercase tracking-widest text-red-200/40 ml-4">Message</label>
                        <textarea required rows={5} className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-3xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all resize-none placeholder:text-red-200/20" placeholder="Tell us how we can help..."></textarea>
                      </div>

                      <button 
                        type="submit" 
                        disabled={formState === 'loading'}
                        className="w-full py-6 bg-amber-500 hover:bg-amber-600 text-[#7f1d1d] font-black rounded-3xl shadow-2xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-3 uppercase tracking-[0.2em] text-xs disabled:opacity-50 font-sans"
                      >
                        {formState === 'loading' ? 'Transmitting...' : (
                          <><span>Submit Message</span> <ArrowRight className="w-4 h-4" /></>
                        )}
                      </button>
                    </form>
                  )}
                </AnimatePresence>

                {/* Support Badges */}
                <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-center space-x-12 opacity-40 font-sans">
                    <div className="flex items-center space-x-2 text-[10px] font-black text-white uppercase tracking-widest">
                      <Clock className="w-4 h-4 text-amber-500" />
                      <span>Institutional Support</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[10px] font-black text-white uppercase tracking-widest">
                      <Globe2 className="w-4 h-4 text-amber-500" />
                      <span>Academic Excellence</span>
                    </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}