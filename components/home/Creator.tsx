"use client";
import { Container, Section } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Creator() {
    return (
        <Section id="team" className="bg-obsidian-950 border-t border-white/10 relative overflow-hidden py-32 md:py-48">
            {/* 1. Deep Layered Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Holographic Grid Matrix */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,243,255,0.03)_0%,transparent_40%),radial-gradient(circle_at_70%_80%,rgba(188,19,254,0.03)_0%,transparent_40%)]" />
                
                {/* Dynamic Pulse Orbs */}
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-neon-cyan/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-neon-violet/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
                
                {/* Scanning Beam */}
                <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
            </div>

            <Container className="relative z-10 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block mb-10 px-6 py-3 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl"
                    >
                        <span className="text-neon-cyan font-mono text-xs uppercase tracking-[0.4em] flex items-center gap-3">
                            <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
                            <Users size={16} className="text-neon-cyan" />
                            <span>Nexus Protocol // Team</span>
                        </span>
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter-refined mb-10 leading-[0.95]"
                    >
                        MEET THE{" "}
                        <span className="shimmer-text">ARCHITECTS</span>
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-16 max-w-2xl mx-auto font-sans"
                    >
                        The collective intelligence behind <span className="text-white border-b border-white/10">NextGenX</span> — engineers, designers, and visionaries crafting the future of digital experience.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link href="/team">
                            <motion.button
                                whileHover={{ 
                                    scale: 1.05,
                                    transition: { duration: 0.3, ease: "easeOut" }
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative inline-flex items-center gap-4 px-10 py-5 bg-transparent overflow-hidden rounded-full border border-white/10 hover:border-neon-cyan/50 transition-all duration-500"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 to-neon-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute inset-0 border border-white/5 rounded-full group-hover:border-neon-cyan/30 transition-colors" />
                                
                                <span className="relative font-heading font-bold text-white text-sm uppercase tracking-widest group-hover:text-neon-cyan transition-colors">
                                    Initialize Team Protocol
                                </span>
                                <ArrowRight className="relative w-5 h-5 text-white group-hover:text-neon-cyan group-hover:translate-x-2 transition-all duration-500" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </Container>
        </Section>
    );
}
