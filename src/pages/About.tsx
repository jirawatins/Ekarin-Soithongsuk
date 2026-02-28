import React from "react";
import { BentoCard } from "@/components/ui/BentoCard";
import { SkillIcon } from "@/components/ui/SkillIcon";
import { Download, GraduationCap, Code2, Sparkles } from "lucide-react";
import { motion } from "motion/react";

// ==========================================
// 1. HERO PROFILE COMPONENT
// ==========================================
function HeroProfile() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 auto-rows-min">
      {/* Main Introduction */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="col-span-1 md:col-span-2 lg:col-span-3 h-full"
      >
        <BentoCard className="h-full flex flex-col justify-center bg-card/40 backdrop-blur-xl border-brand-main/20 shadow-2xl p-8 md:p-12 lg:p-16 rounded-[2.5rem] relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-main/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-main/30 bg-brand-main/10 w-fit mb-8">
              <Sparkles className="w-4 h-4 text-brand-main" />
              <span className="text-xs font-bold tracking-widest text-brand-main uppercase">Behind the Renders</span>
            </div>
            
            <h1 className="mb-6 font-display text-5xl md:text-7xl font-black text-text-main tracking-tighter uppercase leading-[0.9]">
              CRAFTING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-main to-brand-light">VIRTUAL WORLDS</span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-muted font-medium leading-relaxed max-w-3xl">
              I am a passionate 3D Modeler and Animator with a keen eye for detail and a love for storytelling through visual arts. My journey started with a simple cube in Blender, and has evolved into creating complex, immersive environments and bringing characters to life.
            </p>
          </div>
        </BentoCard>
      </motion.div>

      {/* Profile Stats / Avatar */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="col-span-1 h-full"
      >
        <BentoCard className="h-full flex flex-col justify-center items-center bg-gradient-to-b from-brand-main/20 to-card/60 backdrop-blur-xl border-brand-main/30 shadow-2xl p-8 rounded-[2.5rem] text-center group">
          <div className="relative h-32 w-32 rounded-full mb-6 p-1 bg-gradient-to-tr from-brand-main to-brand-light group-hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 bg-brand-main/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="h-full w-full rounded-full bg-card flex items-center justify-center overflow-hidden relative z-10">
               {/* ใส่รูป Profile จริงของคุณ หรือใช้ Emoji ก่อนได้ */}
               <span className="text-5xl">👨‍💻</span>
            </div>
          </div>
          
          <div className="space-y-1">
            <h3 className="text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-main to-white">3+</h3>
            <p className="text-sm font-bold tracking-widest text-text-muted uppercase">Years Experience</p>
          </div>
        </BentoCard>
      </motion.div>
    </div>
  );
}

// ==========================================
// 2. SKILLS COMPONENT
// ==========================================
function SkillsSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="grid grid-cols-1"
    >
      <BentoCard className="bg-card/40 backdrop-blur-xl border-brand-main/20 shadow-2xl p-8 md:p-12 rounded-[2.5rem]">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-2xl bg-brand-main/20 text-brand-light">
            <Code2 className="w-6 h-6" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-black text-text-main uppercase tracking-tight">Software Arsenal</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <SkillIcon 
            name="Blender" 
            level={95} 
            description="Advanced modeling, sculpting, and geometry nodes." 
            color="bg-orange-500"
          />
          <SkillIcon 
            name="Maya" 
            level={90} 
            description="Industry standard rigging and animation workflows." 
            color="bg-cyan-500"
          />
          <SkillIcon 
            name="ZBrush" 
            level={85} 
            description="High-detail organic sculpting and character creation." 
            color="bg-purple-500"
          />
          <SkillIcon 
            name="Unreal Engine" 
            level={80} 
            description="Real-time Animation setup, lighting, and blueprints." 
            color="bg-[#313131] dark:bg-white" 
          />
          <SkillIcon 
            name="Substance" 
            level={90} 
            description="PBR texturing and material creation." 
            color="bg-[#E93B33]" 
          />
          <SkillIcon 
            name="Unity" 
            level={75} 
            description="Game asset integration and basic C# scripting." 
            color="bg-neutral-800 dark:bg-white"
          />
          <SkillIcon 
            name="After Effects" 
            level={70} 
            description="Compositing and motion graphics for showreels." 
            color="bg-[#9999FF]" 
          />
          <SkillIcon 
            name="Photoshop" 
            level={85} 
            description="Texture painting and post-processing." 
            color="bg-[#31A8FF]" 
          />
        </div>
      </BentoCard>
    </motion.div>
  );
}

// ==========================================
// 3. EDUCATION & RESUME COMPONENT
// ==========================================
function EducationAndResume() {
  return (
    <div className="w-full">
      
      {/* Education Timeline */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full h-full"
      >
        <BentoCard className="h-full bg-card/40 backdrop-blur-xl border-brand-main/20 shadow-2xl p-8 md:p-10 rounded-[2.5rem]">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-2xl bg-brand-main/20 text-brand-light">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="font-display text-3xl font-black text-text-main uppercase tracking-tight">Education</h2>
          </div>
          
          <div className="relative pl-8 border-l-2 border-brand-main/30 space-y-10">
            
            {/* Sripatum University */}
            <div className="relative">
              <div className="absolute w-4 h-4 rounded-full bg-brand-main left-[-41px] top-2 shadow-[0_0_15px_rgba(163,120,181,0.8)]" />
              <span className="inline-block px-3 py-1 bg-brand-main/10 text-brand-main text-xs font-bold tracking-widest uppercase rounded-full mb-3">
                2019 — 2023
              </span>
              <h3 className="text-2xl font-bold text-text-main font-display uppercase tracking-tight mb-1">Sripatum University</h3>
              <p className="text-lg font-medium text-brand-main mb-3">Bachelor of Fine Arts in Digital Media</p>
              <p className="text-text-muted leading-relaxed max-w-xl">
                Specialized in 3D Animation, Character Design, and Visual Effects. Graduated with honors, focusing on cinematic real-time rendering pipelines.
              </p>
            </div>

            {/* High Vocational Certificate (ปวส) */}
            <div className="relative">
              <div className="absolute w-4 h-4 rounded-full bg-brand-main/50 left-[-41px] top-2 border-2 border-brand-main/20" />
              <span className="inline-block px-3 py-1 bg-white/5 text-text-muted text-xs font-bold tracking-widest uppercase rounded-full mb-3">
                2017 — 2019
              </span>
              <h3 className="text-xl font-bold text-text-main font-display uppercase tracking-tight mb-1">Siam Business Administration Nonthaburi Technological College</h3>
              <p className="text-lg font-medium text-brand-main mb-3">High Vocational Certificate - Digital Business Technology</p>
              <p className="text-text-muted leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            {/* Vocational Certificate (ปวช) */}
            <div className="relative">
              <div className="absolute w-4 h-4 rounded-full bg-brand-main/30 left-[-41px] top-2 border-2 border-brand-main/10" />
              <span className="inline-block px-3 py-1 bg-white/5 text-text-muted text-xs font-bold tracking-widest uppercase rounded-full mb-3">
                2014 — 2017
              </span>
              <h3 className="text-xl font-bold text-text-main font-display uppercase tracking-tight mb-1">Siam Business Administration Nonthaburi Technological College</h3>
              <p className="text-lg font-medium text-brand-main mb-3">Vocational Certificate - Business Computer</p>
              <p className="text-text-muted leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

          </div>
        </BentoCard>
      </motion.div>
      
    </div>
  );
}

// ==========================================
// MAIN WRAPPER
// ==========================================
export default function About() {
  return (
    <div className="mx-auto max-w-[1400px] w-full pb-24 px-4 sm:px-6 md:px-8 mt-12 md:mt-24 space-y-8">
      <HeroProfile />
      <SkillsSection />
      <EducationAndResume />
    </div>
  );
}