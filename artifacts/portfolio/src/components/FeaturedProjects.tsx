import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const PROJECTS = [
  {
    id: 'ordering-app',
    title: 'QuickBite Distributed Ordering System',
    github: 'https://github.com/Rahmasamy/ordering-app',
    description: 'A multi-tenant food ordering microservices platform demonstrating distributed systems concepts: geographic sharding, monthly table partitioning, transactional outbox pattern with RabbitMQ, Redis caching, and real-time Socket.IO push.',
    tags: ['Microservices', 'Distributed Systems', 'RabbitMQ', 'Redis', 'PostgreSQL', 'Socket.IO'],
    imageGradient: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'musliem-community',
    title: 'Musliem Community Platform',
    github: 'https://github.com/Rahmasamy/Musliem-Community-Project',
    description: 'Full-stack community platform enabling group creation, event management, halal product marketplace, real-time Socket.io chat, membership subscriptions, and administrative content moderation.',
    tags: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Socket.io', 'Zustand'],
    imageGradient: 'from-purple-600 to-pink-500'
  },
   {
    id: 'shoes-website',
    title: 'Sole Haven — Premium E-Commerce',
    github: 'https://github.com/Rahmasamy/shoes-website',
    description: 'A modern, full-stack e-commerce application built with React, Express, and PostgreSQL. Features product filtering, user authentication, interactive cart & wishlist, Drizzle ORM, and full Docker containerization.',
    tags: ['React', 'Express', 'PostgreSQL', 'TypeScript', 'Tailwind CSS', 'Docker'],
    imageGradient: 'from-amber-500 to-rose-500'
  },
  {
    id: 'manasa-client',
    title: 'Manasa — E-Learning & Knowledge Platform',
    github: 'https://github.com/Rahmasamy/manasa-client',
    description: 'Educational e-learning platform frontend featuring structured course tracking, digital electronic library, certificates, instructor/admin dashboards, and internationalization with RTL support.',
    tags: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'Zustand', 'React Query'],
    imageGradient: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'tunisia-dashboard',
    title: 'Tunisia-Village-Dashboard',
    github: 'https://github.com/Rahmasamy/Tunisia-Village-Dashboard',
    description: 'A premium dashboard UI built with Next.js App Router and TypeScript. Featuring reusable select inputs, customizable multi-step dashboards, map rendering with custom search radii, and dynamic accordion schedules.',
    tags: ['Next.js', 'TypeScript', 'Dashboard', 'RTL'],
    imageGradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'event-system-gateway',
    title: 'Fincart Event Orchestration Gateway',
    github: 'https://github.com/Rahmasamy/Event-system-gateway',
    description: 'A high-concurrency, asynchronous event gateway built with Node.js, Express, BullMQ, Redis, and MongoDB. Absorbs massive traffic bursts with HMAC signature validation, Redis idempotency guards, Dead Letter Queues (DLQ), and exponential backoff retry mechanisms.',
    tags: ['Node.js', 'Express', 'BullMQ', 'Redis', 'MongoDB', 'System Design'],
    imageGradient: 'from-violet-600 to-indigo-600'
  },
  {
    id: 'lms-angular-laravel',
    title: 'LMS Platform — Angular & Laravel',
    github: 'https://github.com/Rahmasamy/LMS',
    description: 'Full-stack Learning Management System featuring course enrollment, secure payment processing, student progress tracking, category filtering, dynamic forms, and comprehensive instructor dashboards for managing lessons, quizzes, and reviews.',
    tags: ['Angular', 'Laravel', 'PHP', 'MySQL', 'REST API', 'TypeScript'],
    imageGradient: 'from-rose-500 to-orange-500'
  },
  {
    id: 'ecommerce-react-laravel',
    title: 'E-Commerce Platform — React & Laravel',
    github: 'https://github.com/Rahmasamy/Ecommerce-React-Laravel',
    description: 'Full-stack e-commerce web application featuring React single-page architecture with React Router, connected to a Laravel JWT-authenticated RESTful backend API with product carousels, quick view modals, and interactive shopping cart management.',
    tags: ['React', 'Laravel', 'PHP', 'JWT Auth', 'REST API', 'Tailwind CSS'],
    imageGradient: 'from-blue-500 to-teal-500'
  },
  {
    id: 'mean-stack-book-store',
    title: 'MEAN Stack Book Store',
    github: 'https://github.com/AhmedHussein70/mean-Stack-book-store',
    description: 'A full-stack online bookstore application built with Angular and Node.js. Features user authentication (registration & login), book catalog browsing, author profiles, category filtering, customer reviews, and testimonials.',
    tags: ['Angular', 'Node.js', 'Express', 'MongoDB', 'TypeScript'],
    imageGradient: 'from-amber-500 to-yellow-600'
  },
  {
    id: 'classpill-project',
    title: 'ClassPill — Gamified Learning System',
    github: 'https://github.com/Rahmasamy/classpill-Project',
    description: 'Interactive educational platform facilitating teacher-student engagement through educational mini-games, classroom interaction modules, progress tracking, and gamified study sessions.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Gamification', 'LMS'],
    imageGradient: 'from-fuchsia-500 to-purple-600'
  },
  {
    id: 'codequote-center',
    title: 'CodeQuote — Autism Center Platform',
    github: 'https://github.com/Rahmasamy/CodeQuoteCeneter',
    description: 'Dedicated web platform built for an autism care & educational center using PHP, HTML5, CSS3, and JavaScript. Designed to present center services, consultation scheduling, educational materials, and family support resources.',
    tags: ['PHP', 'JavaScript', 'HTML5', 'CSS3', 'Web Design'],
    imageGradient: 'from-teal-500 to-cyan-600'
  },
 
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
            href="https://github.com/Rahmasamy" 
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
