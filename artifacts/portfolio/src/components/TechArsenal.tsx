import React from 'react';
import { motion } from 'framer-motion';
import { Database, LayoutTemplate, Layers } from 'lucide-react';
import { 
  SiNodedotjs, SiNestjs, SiExpress, SiPostgresql, SiMongodb, SiRedis, SiDocker,
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss
} from 'react-icons/si';

const ARSENAL_PILLARS = [
  {
    id: 'backend',
    title: 'Backend & Infrastructure',
    icon: <Database className="w-6 h-6 text-primary" />,
    description: 'Resilient, highly available systems designed for massive scale.',
    skills: [
      { name: 'Node.js / NestJS / Express', icons: [<SiNodedotjs key="1" />, <SiNestjs key="2" />, <SiExpress key="3" />] },
      { name: 'PostgreSQL / MongoDB / Redis', icons: [<SiPostgresql key="1" />, <SiMongodb key="2" />, <SiRedis key="3" />] },
      { name: 'Microservices Architecture' },
      { name: 'Docker / Local Dev Environments', icons: [<SiDocker key="1" />] },
      { name: 'Secure Identity & Access (IGA)' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend & Design Systems',
    icon: <LayoutTemplate className="w-6 h-6 text-primary" />,
    description: 'Pixel-perfect, interactive UIs built with rigorous attention to detail.',
    skills: [
      { name: 'React.js / Next.js (App Router)', icons: [<SiReact key="1" />, <SiNextdotjs key="2" />] },
      { name: 'TypeScript / JavaScript', icons: [<SiTypescript key="1" />, <SiJavascript key="2" />] },
      { name: 'Tailwind CSS / Premium Glassmorphism', icons: [<SiTailwindcss key="1" />] },
      { name: 'RTL Support / Multilingual UI' },
      { name: 'Reusable Design Components' }
    ]
  },
  {
    id: 'architecture',
    title: 'Architecture & Patterns',
    icon: <Layers className="w-6 h-6 text-primary" />,
    description: 'Complex problem-solving through proven architectural patterns.',
    skills: [
      { name: 'Region-Based DB Sharding' },
      { name: 'Transactional Outbox Pattern' },
      { name: 'Event-Driven Consistency' },
      { name: 'State Machine Workflow Engines' },
      { name: 'API Middleware & Security Layers' }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export function TechArsenal() {
  return (
    <section id="arsenal" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">01. Tech Arsenal</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">The Engine Room</h3>
          <div className="h-1 w-24 bg-primary mt-6 rounded-full shadow-[0_0_15px_hsl(var(--primary))]" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ARSENAL_PILLARS.map((pillar) => (
            <motion.div 
              key={pillar.id}
              variants={itemVariants}
              className="glass-panel rounded-2xl p-8 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500 flex flex-col h-full"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[0_0_20px_rgba(var(--primary),0.2)] transition-shadow duration-500">
                  {pillar.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">{pillar.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  {pillar.description}
                </p>
                
                <ul className="space-y-4 mt-auto">
                  {pillar.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary group-hover/item:shadow-[0_0_8px_hsl(var(--primary))] transition-all duration-300" />
                      <div className="flex-1">
                        <span className="text-sm font-medium text-white/80 group-hover/item:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                        {skill.icons && (
                          <div className="flex gap-2 mt-2 text-muted-foreground/60 group-hover/item:text-primary/80 transition-colors duration-300">
                            {skill.icons.map((Icon, i) => (
                              <div key={i} className="text-lg">{Icon}</div>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
