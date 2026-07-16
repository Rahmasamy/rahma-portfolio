import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto glass-panel rounded-[3rem] p-10 md:p-20 text-center border-white/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50" />
          
          <div className="relative z-10">
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-6">05. What's Next?</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
              Let's build something <br className="hidden md:block" />
              <span className="text-gradient">extraordinary.</span>
            </h3>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
              Whether you need a resilient backend architecture, a pixel-perfect user interface, or someone who can orchestrate both perfectly — my inbox is always open.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
              <a 
                href="mailto:rahmasamy949@gmail.com"
                className="group w-full sm:w-auto px-8 py-5 bg-white text-black font-semibold rounded-full flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <Mail className="w-5 h-5" />
                <span>Say Hello</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/rahma-samy-34046a296/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-8 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-full flex items-center justify-center gap-3 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 group-hover:text-[#0A66C2] transition-colors" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>

              <a 
                href="https://github.com/Rahmasamy"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-8 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-full flex items-center justify-center gap-3 transition-all duration-300"
              >
                <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                <span>GitHub</span>
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-32 text-center flex flex-col items-center"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center mb-6">
            <span className="text-primary font-mono text-xs">&gt;_</span>
          </div>
          <p className="text-muted-foreground text-sm font-mono uppercase tracking-widest">
            Designed & Engineered by Rahma
          </p>
          <p className="text-muted-foreground/50 text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
