import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Network, Lock, Server, Database, Zap, Cog } from 'lucide-react';

export function ArchitectureDiagram() {
  // Arrow paths
  const clientToGateway = "M 150 150 L 300 150";
  const gatewayToAuth = "M 300 120 L 300 80 L 450 80";
  const gatewayToCoring = "M 420 150 L 550 150";
  const coringToRegionA = "M 670 120 L 670 80 L 800 80";
  const coringToRedis = "M 610 180 L 610 240 L 700 240";
  const redisToOrdering = "M 820 240 L 910 240";
  const orderingToRegionB = "M 970 210 L 970 150 L 1050 150";

  const drawVariant = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { duration: 1.5, ease: "easeInOut" as const }, opacity: { duration: 0.5 } }
    }
  };

  const FlowParticle = ({ path, delay }: { path: string, delay: number }) => (
    <motion.circle
      r="4"
      fill="#06b6d4" // Primary cyan
      className="filter drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]"
      initial={{ offsetDistance: "0%", opacity: 0 }}
      animate={{ 
        offsetDistance: "100%", 
        opacity: [0, 1, 1, 0],
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        ease: "linear",
        delay 
      }}
      style={{ offsetPath: `path('${path}')` }}
    />
  );

  return (
    <section id="architecture" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-secondary/20 blur-[150px] -z-10 pointer-events-none rounded-[100%]" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">03. Systems Design</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Microservices Data Flow</h3>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto md:mx-0 text-lg">
            A live visualization of the event-driven architecture, featuring region-based sharding and the transactional outbox pattern.
          </p>
          <div className="h-1 w-24 bg-primary mt-6 rounded-full shadow-[0_0_15px_hsl(var(--primary))] mx-auto md:mx-0" />
        </motion.div>

        <div className="w-full overflow-x-auto pb-10 hide-scrollbar">
          <div className="min-w-[1200px] h-[350px] relative mx-auto bg-black/40 rounded-3xl border border-white/10 p-8 glass-panel">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMCA0MGw0MCAwTTAgMGwwIDQwIi8+PC9nPjwvc3ZnPg==')] opacity-50 rounded-3xl z-0" />

            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 1200 350">
              {/* Definitions for arrowheads */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.2)" />
                </marker>
                <marker id="arrowhead-active" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#06b6d4" />
                </marker>
              </defs>

              {/* Paths */}
              <motion.g variants={{ visible: { transition: { staggerChildren: 0.2 } } }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                <motion.path d={clientToGateway} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />
                <motion.path d={clientToGateway} fill="none" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead-active)" variants={drawVariant} />
                
                <motion.path d={gatewayToAuth} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />
                <motion.path d={gatewayToAuth} fill="none" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowhead-active)" variants={drawVariant} />
                
                <motion.path d={gatewayToCoring} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />
                <motion.path d={gatewayToCoring} fill="none" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead-active)" variants={drawVariant} />
                
                <motion.path d={coringToRegionA} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />
                <motion.path d={coringToRegionA} fill="none" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowhead-active)" variants={drawVariant} />
                
                <motion.path d={coringToRedis} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />
                <motion.path d={coringToRedis} fill="none" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowhead-active)" variants={drawVariant} />
                
                <motion.path d={redisToOrdering} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />
                <motion.path d={redisToOrdering} fill="none" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowhead-active)" variants={drawVariant} />

                <motion.path d={orderingToRegionB} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />
                <motion.path d={orderingToRegionB} fill="none" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowhead-active)" variants={drawVariant} />
              </motion.g>

              {/* Animated Particles flowing along paths */}
              <FlowParticle path={clientToGateway} delay={0} />
              <FlowParticle path={clientToGateway} delay={1} />
              
              <FlowParticle path={gatewayToAuth} delay={0.5} />
              
              <FlowParticle path={gatewayToCoring} delay={0.2} />
              <FlowParticle path={gatewayToCoring} delay={1.2} />

              <FlowParticle path={coringToRegionA} delay={0.8} />
              
              <FlowParticle path={coringToRedis} delay={0.4} />
              <FlowParticle path={redisToOrdering} delay={0.9} />
              
              <FlowParticle path={orderingToRegionB} delay={1.4} />
            </svg>

            {/* Nodes */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <Node x={50} y={115} width={100} height={70} title="Client App" color="border-cyan-500/50" bg="bg-cyan-500/10" icon={<Monitor className="w-6 h-6 mb-1 text-cyan-500/70" />} />
              
              <Node x={300} y={115} width={120} height={70} title="API Gateway" color="border-blue-500/50" bg="bg-blue-500/10" shadow="shadow-[0_0_30px_rgba(59,130,246,0.2)]" icon={<Network className="w-6 h-6 mb-1 text-blue-500/70" />} />
              
              <Node x={450} y={45} width={150} height={70} title="Auth & Identity" color="border-purple-500/50" bg="bg-purple-500/10" icon={<Lock className="w-6 h-6 mb-1 text-purple-500/70" />} />
              
              <Node x={550} y={115} width={120} height={70} title="Coring Services" color="border-cyan-500/80" bg="bg-cyan-500/20" shadow="shadow-[0_0_40px_rgba(6,182,212,0.3)]" icon={<Server className="w-6 h-6 mb-1 text-cyan-500/80" />} />
              
              <Node x={800} y={45} width={130} height={70} title="Sharded DB (A)" color="border-emerald-500/50" bg="bg-emerald-500/10" icon={<Database className="w-6 h-6 mb-1 text-emerald-500/70" />} />
              
              <Node x={700} y={205} width={120} height={70} title="Redis Queue" color="border-amber-500/50" bg="bg-amber-500/10" icon={<Zap className="w-6 h-6 mb-1 text-amber-500/70" />} />
              
              <Node x={910} y={205} width={120} height={70} title="Ordering Svc" color="border-cyan-500/50" bg="bg-cyan-500/10" icon={<Cog className="w-6 h-6 mb-1 text-cyan-500/70" />} />
              
              <Node x={1050} y={115} width={130} height={70} title="Sharded DB (B)" color="border-emerald-500/50" bg="bg-emerald-500/10" icon={<Database className="w-6 h-6 mb-1 text-emerald-500/70" />} />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

function Node({ x, y, width, height, title, color, bg, shadow = "", icon }: any) {
  return (
    <motion.div 
      className={`absolute flex flex-col items-center justify-center border-2 rounded-xl backdrop-blur-md pointer-events-auto cursor-pointer transition-colors duration-300 ${color} ${bg} ${shadow}`}
      style={{ left: x, top: y, width, height }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.05, zIndex: 30 }}
    >
      {icon}
      <span className="text-xs font-mono font-bold text-white text-center px-2">{title}</span>
    </motion.div>
  );
}
