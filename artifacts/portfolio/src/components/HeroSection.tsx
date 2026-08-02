import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Terminal } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15] pointer-events-none"
        style={{ backgroundImage: "url('/hero_background.png')" }}
      />
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              SYSTEM ONLINE
            </div>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight"
          >
            Hi, I'm <span className="text-white">Rahma</span>
            <br />
            <span className="text-muted-foreground text-3xl md:text-5xl lg:text-6xl font-medium mt-2 block">
               Full-Stack Engineer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-muted-foreground font-light mb-8 max-w-2xl leading-relaxed"
          >
            Distributed Systems & High-Fidelity UI/UX Specialist.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-6 md:p-8 rounded-2xl mb-12 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Terminal className="absolute top-6 right-6 w-8 h-8 text-white/10" />
            <p className="text-lg md:text-xl font-mono text-white/90 leading-relaxed italic border-l-2 border-primary pl-6">
              "Writing code is not just about making it work; it's about making it resilient, scalable, and delightful."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 md:gap-6"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full overflow-hidden flex items-center gap-3 transition-transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 font-mono">View My Work</span>
              <ArrowDownRight className="w-5 h-5 relative z-10 group-hover:rotate-[-45deg] transition-transform duration-300" />
            </a>
            
            <a
              href="#contact"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium rounded-full transition-all duration-300 hover:border-primary/50 font-mono flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>

   
    </section>
  );
}
