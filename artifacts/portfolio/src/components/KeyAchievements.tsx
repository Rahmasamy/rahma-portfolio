import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Sparkles, Map, Network, ArrowRightLeft, Layout } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    id: 'backend',
    category: 'Backend & Infrastructure',
    title: 'Distributed Microservices & Eventual Consistency',
    color: 'from-blue-500/20 to-primary/20',
    borderColor: 'group-hover:border-primary/50',
    items: [
      {
        title: 'Region-Based Sharding',
        icon: <Map className="w-5 h-5 text-blue-400" />,
        description: "Designed and developed region-based database sharding logic to partition load and minimize request latency for microservice ecosystems (coring-services and ordering-service)."
      },
      {
        title: 'Transactional Outboxing',
        icon: <ArrowRightLeft className="w-5 h-5 text-emerald-400" />,
        description: "Eliminated dual-write risks by implementing the Transactional Outbox pattern, routing event streams through Redis-backed brokers for reliable, eventual data consistency."
      },
      {
        title: 'Complex Workflow Engines',
        icon: <Workflow className="w-5 h-5 text-purple-400" />,
        description: "Crafted collaborative workflow engines featuring automated state transitions (e.g. 'ready_for_review'), notification dispatches, and robust query fallback mechanisms."
      }
    ]
  },
  {
    id: 'frontend',
    category: 'Frontend & UI/UX',
    title: 'Premium Dashboards & Interactive Interfaces',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'group-hover:border-purple-500/50',
    items: [
      {
        title: 'Design Systems (@/shared/components)',
        icon: <Sparkles className="w-5 h-5 text-pink-400" />,
        description: "Built modular, reusable UI design system atoms (dynamic buttons, starred multi-select fields, badges, custom input components) with pixel-perfect attention to micro-animations and accessibility."
      },
      {
        title: 'Complex Multi-step Wizards',
        icon: <Network className="w-5 h-5 text-orange-400" />,
        description: "Built advanced product builder wizards with live visual simulators (interactive SVG geographic radius map widgets, customized RTL schedules/days timeline accordion builders)."
      },
      {
        title: 'RTL Layout Optimization',
        icon: <Layout className="w-5 h-5 text-yellow-400" />,
        description: "Specialized in building native Right-to-Left (RTL) Arabic web layouts with clean user flows and transition animations."
      }
    ]
  }
];

export function KeyAchievements() {
  return (
    <section id="achievements" className="py-32 relative bg-black/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">02. Key Achievements</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Engineering Milestones</h3>
          <div className="h-1 w-24 bg-primary mt-6 rounded-full shadow-[0_0_15px_hsl(var(--primary))]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {ACHIEVEMENTS.map((group, groupIdx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, x: groupIdx === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden group transition-all duration-700 hover:shadow-2xl ${group.borderColor}`}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${group.color} blur-[80px] -z-10 opacity-30 group-hover:opacity-60 transition-opacity duration-700`} />
              
              <div className="mb-10">
                <span className="text-xs font-mono font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4 inline-block">
                  {group.category}
                </span>
                <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight mt-2">
                  {group.title}
                </h4>
              </div>

              <div className="space-y-8">
                {group.items.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="flex gap-5"
                  >
                    <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:bg-white/10 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-white/90 mb-2">{item.title}</h5>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
