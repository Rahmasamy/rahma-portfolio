import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const PROJECTS = [
  {
    id: 'tunisia-dashboard',
    title: 'Tunisia-Village-Dashboard',
    github: 'https://github.com/Rahma/Tunisia-Village-Dashboard',
    description: 'A premium dashboard UI built with Next.js App Router and TypeScript. Featuring reusable select inputs, customizable multi-step dashboards, map rendering with custom search radii, and dynamic accordion schedules.',
    tags: ['Next.js', 'TypeScript', 'Dashboard', 'RTL'],
    imageGradient: 'from-blue-600 to-cyan-500'
  },
  {
    id: 'coring-services',
    title: 'Coring & Ordering Services',
    github: 'https://github.com/Rahma/coring-services',
    description: 'A distributed backend engine featuring region-based sharding, transaction outboxing, authentication middleware, status change triggers, and Redis-backed caching strategies.',
    tags: ['Node.js', 'Redis', 'Microservices', 'PostgreSQL'],
    imageGradient: 'from-purple-600 to-indigo-500'
  }
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-32 relative bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">04. Selected Works</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Featured Projects</h3>
            <div className="h-1 w-24 bg-primary mt-6 rounded-full shadow-[0_0_15px_hsl(var(--primary))]" />
          </div>
          <a 
            href="https://github.com/Rahma" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-white font-mono text-sm transition-colors"
          >
            <Github className="w-4 h-4" />
            View GitHub Profile
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="group flex flex-col h-full rounded-3xl overflow-hidden glass-panel border-white/10 hover:border-primary/40 transition-all duration-500"
            >
              {/* Abstract Cover Image */}
              <div className="h-48 md:h-64 relative overflow-hidden bg-black flex items-center justify-center p-8">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.imageGradient} opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMCA0MGw0MCAwTTAgMGwwIDQwIi8+PC9nPjwvc3ZnPg==')] opacity-30" />
                
                <Code2 className="w-20 h-20 text-white/20 relative z-10 group-hover:scale-110 group-hover:text-white/40 transition-all duration-700" />
                
                <div className="absolute top-4 right-4 flex gap-3 z-20 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 bg-black/50 backdrop-blur-md rounded-full text-white/70 hover:text-white hover:bg-black border border-white/10 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed mb-8 flex-1 text-sm md:text-base">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-white/80 group-hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
