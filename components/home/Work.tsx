"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import projects from "@/data/projects.json";
import { Container, Section } from "@/components/ui/Container";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { ExternalLink, ArrowUpRight, Github } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { slideUp, staggerContainer, fadeIn } from "@/lib/animations";

export function Work() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <Section id="work" className="bg-black relative overflow-hidden py-32 md:py-48">
            {/* 1. Deep Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 right-[-10%] w-[60%] h-[60%] bg-orange-500/5 rounded-full blur-[180px] animate-pulse" />
                <div className="absolute bottom-1/4 left-[-10%] w-[60%] h-[60%] bg-red-500/5 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: '3s' }} />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/5 to-transparent opacity-20" />
            </div>

            <Container className="relative z-10 px-6">
                {/* Header */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-20 md:mb-32"
                >
                    <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-gradient-to-r from-orange-400 to-transparent" />
                        <span className="text-orange-400 font-mono text-xs uppercase tracking-[0.4em] font-bold">Archive 2026</span>
                    </motion.div>
                    
                    <motion.h2 variants={slideUp} className="text-5xl md:text-8xl font-heading font-bold text-white tracking-tighter-refined mb-10 leading-[0.9]">
                        SELECTED <span className="orange-text italic font-normal">WORKS</span>
                    </motion.h2>
                    
                    <motion.p variants={fadeIn} className="text-gray-400 max-w-2xl text-base md:text-xl leading-relaxed font-sans">
                        Engineering digital ecosystems where <span className="text-white">form follows function</span> through experimental interfaces and high-performance architectures.
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            index={index} 
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </Container>

            {/* Premium Modal */}
            <AnimatePresence mode="wait">
                {selectedProject && (
                    <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="space-y-10"
                        >
                            <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 glass-premium group shadow-2xl">
                                <Image
                                    src={projectImage(selectedProject.image)}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                
                                {/* Overlay Technical Deco */}
                                <div className="absolute top-6 left-6 flex items-center gap-3">
                                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping" />
                                    <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Live System Status: Optimal</span>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                    <div className="space-y-2">
                                        <div className="flex gap-2">
                                            {selectedProject.tags.map(tag => (
                                                <span key={tag} className="text-[9px] font-mono uppercase tracking-widest text-orange-400/60">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tighter leading-tight">{selectedProject.title}</h2>
                                    </div>
                                    <div className="flex gap-4">
                                        <motion.a 
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            href={selectedProject.link} 
                                            target="_blank" 
                                            className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-400/50 transition-colors text-white"
                                        >
                                            <Github size={24} />
                                        </motion.a>
                                        <motion.a 
                                            whileHover={{ scale: 1.1, rotate: -5 }}
                                            href={selectedProject.link} 
                                            target="_blank" 
                                            className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-400/50 transition-colors text-white"
                                        >
                                            <ExternalLink size={24} />
                                        </motion.a>
                                    </div>
                                </div>
                                
                                <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-sans border-l-2 border-orange-400/20 pl-6">
                                    {selectedProject.description}
                                </p>
                                
                                <div className="pt-10 flex flex-wrap gap-4">
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        className="rounded-full px-10 h-14"
                                        onClick={() => window.open(selectedProject.link, '_blank')}
                                    >
                                        <span className="font-bold tracking-widest uppercase text-xs">Access Project Archive</span>
                                        <ArrowUpRight size={18} className="ml-2" />
                                    </Button>
                                    <button 
                                        onClick={() => setSelectedProject(null)}
                                        className="px-10 h-14 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all font-mono text-xs uppercase tracking-widest"
                                    >
                                        Return to Nexus
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </Modal>
                )}
            </AnimatePresence>
        </Section>
    );
}

function projectImage(img?: string) {
    return img && img !== "/placeholder-project.jpg" ? img : "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop";
}

function ProjectCard({ project, index, onClick }: { project: any, index: number, onClick: () => void }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse tracking for 3D tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
    
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            className="group cursor-pointer relative block perspective-1000"
        >
            <motion.div 
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative aspect-[16/10] sm:aspect-[4/3] md:aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden glass-card transform-gpu transition-shadow duration-500 group-hover:shadow-[0_20px_80px_-20px_rgba(0,243,255,0.2)]"
            >
                {/* 1. Base Image Layer */}
                <Image
                    src={projectImage(project.image)}
                    alt={project.title}
                    fill
                    className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out will-change-transform"
                />
                
                {/* 2. Advanced Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-10 mix-blend-overlay" />
                
                {/* 3. Holographic Glare */}
                <motion.div
                    className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-40 mix-blend-soft-light"
                    style={{
                        background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.8) 0%, transparent 60%)`,
                    }}
                />

                {/* 4. Interactive Scanning Line */}
                <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-full h-[1px] bg-neon-cyan/40 absolute top-0 animate-scan shadow-[0_0_15px_rgba(0,243,255,0.4)]" />
                </div>
                
                {/* 5. UI Content Overlay */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end translate-z-[40px]">
                    <div className="space-y-4 md:space-y-6">
                        <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 3).map((tag: string, i: number) => (
                                <motion.span 
                                    key={tag} 
                                    initial={false}
                                    animate={{ 
                                        opacity: isHovered ? 1 : 0.6,
                                        y: isHovered ? 0 : 5
                                    }}
                                    transition={{ delay: i * 0.05 }}
                                    className="text-[8px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-white border border-white/10 bg-white/5 px-3 py-1.5 rounded-full group-hover:border-neon-cyan/40 group-hover:text-neon-cyan transition-colors"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                        
                        <div className="space-y-2">
                            <h3 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white tracking-tighter leading-none transition-transform duration-500 group-hover:translate-x-3">
                                {project.title}
                            </h3>
                            <p className="text-white/40 text-xs md:text-sm font-mono uppercase tracking-[0.4em] translate-x-1 group-hover:translate-x-4 transition-transform duration-500">
                                Protocol // Archive_{project.id.slice(0,4)}
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-4 text-white font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                            <span className="w-8 h-px bg-neon-cyan" />
                            <span>Initialize Deployment</span>
                            <ArrowUpRight size={16} className="text-neon-cyan animate-pulse" />
                        </div>
                    </div>
                </div>

                {/* 6. Technical Corner Frame */}
                <div className="absolute top-8 right-8 w-16 h-16 pointer-events-none">
                    <div className="absolute top-0 right-0 w-full h-full border-t border-r border-white/10 group-hover:border-neon-cyan/40 transition-colors duration-500 rounded-tr-[2rem]" />
                    <div className="absolute top-2 right-2 w-2 h-2 bg-white/10 group-hover:bg-neon-cyan/40 rounded-full transition-colors" />
                </div>
            </motion.div>
        </motion.div>
    );
}

