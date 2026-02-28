import React from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className="mx-auto max-w-[1400px] w-full pb-24 px-4 sm:px-6 md:px-8 mt-12 md:mt-24">
      {/* 4. CONTACT SECTION (Full Width Glass) */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative rounded-[3rem] overflow-hidden border border-brand-main/30 shadow-[0_0_50px_rgba(163,120,181,0.15)] bg-card/10"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/40 via-card/80 to-page/90 backdrop-blur-2xl" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-main/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-light/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16 lg:p-24 items-center">
          
          {/* Left Column: Contact Info */}
          <div className="flex flex-col justify-center h-full">
            <h1 className="font-display text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-light mb-6 uppercase tracking-tighter drop-shadow-lg">
              GET IN TOUCH
            </h1>
            <p className="text-lg text-brand-light/80 max-w-md font-medium leading-relaxed mb-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestias odio ratione magni? Vitae illo doloribus dolor, vero fugiat laboriosam eum nemo deserunt et? Eligendi, deleniti dolore. Magni, officia! Cupiditate!
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-center gap-6 group">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-main/20 text-brand-light border border-brand-main/30 shadow-[0_0_20px_rgba(163,120,181,0.2)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-main/40">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-brand-main uppercase mb-1 drop-shadow-md">Email</p>
                  <p className="text-xl font-bold text-white drop-shadow-md">ekarin.s@example.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-6 group">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-main/20 text-brand-light border border-brand-main/30 shadow-[0_0_20px_rgba(163,120,181,0.2)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-main/40">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-brand-main uppercase mb-1 drop-shadow-md">Location</p>
                  <p className="text-xl font-bold text-white drop-shadow-md">Nonthaburi, Thailand</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-6 group">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-main/20 text-brand-light border border-brand-main/30 shadow-[0_0_20px_rgba(163,120,181,0.2)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-main/40">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-brand-main uppercase mb-1 drop-shadow-md">Phone</p>
                  <p className="text-xl font-bold text-white drop-shadow-md">+66 XX XXX XXXX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form 
            className="space-y-6 bg-card/60 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col h-full justify-between" 
            onSubmit={(e) => { e.preventDefault(); alert('Transmission Sent!'); }}
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-light ml-2 drop-shadow-md">Name</label>
                  <input type="text" placeholder="Steve" className="w-full rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-medium text-white focus:border-brand-main focus:bg-black/40 focus:outline-none placeholder:text-white/20 transition-all shadow-inner" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-light ml-2 drop-shadow-md">Email</label>
                  <input type="email" placeholder="Steve@example.com" className="w-full rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-medium text-white focus:border-brand-main focus:bg-black/40 focus:outline-none placeholder:text-white/20 transition-all shadow-inner" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-light ml-2 drop-shadow-md">Subject</label>
                <input type="text" placeholder="Subject" className="w-full rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-medium text-white focus:border-brand-main focus:bg-black/40 focus:outline-none placeholder:text-white/20 transition-all shadow-inner" required />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-light ml-2 drop-shadow-md">Message</label>
                <textarea placeholder="..." className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-medium text-white focus:border-brand-main focus:bg-black/40 focus:outline-none placeholder:text-white/20 h-32 md:h-40 transition-all shadow-inner" required />
              </div>
            </div>

            <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-2xl bg-brand-main py-5 text-sm font-black tracking-widest text-white transition-all hover:scale-[1.02] hover:bg-brand-dark shadow-[0_0_30px_rgba(163,120,181,0.3)] uppercase mt-6">
              <Send className="h-5 w-5" /> Send
            </button>
          </form>

        </div>
      </motion.section>
    </div>
  );
}