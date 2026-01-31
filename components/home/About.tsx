"use client";
import siteData from "@/data/site.json";
import { Container, Section } from "@/components/ui/Container";
import { Cpu, Globe, Zap, Smartphone, Layers, ShieldCheck, ZapIcon, BarChart3, Activity, Terminal } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { slideUp, staggerContainer, fadeIn, scaleIn } from "@/lib/animations";
import { useRef, useState } from "react";

export function About() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const yContent = useTransform(scrollYProgress, [0, 0.4], [100, 0]);

    const features = [
        {
            icon: Globe,
            title: "Global Mesh",
            desc: "Next-gen distributed networking for ultra-low latency.",
            color: "orange-400",
            label: "NETWORK"
        },
        {
            icon: Zap,
            title: "Phase Sync",
            desc: "Synchronized animations at true 120Hz refresh rates.",
            color: "red-400",
            label: "VELOCITY"
        },
        {
            icon: Cpu,
            title: "Core Logic",
            desc: "Neural-inspired architectures for complex systems.",
            color: "orange-400",
            label: "PROCESS"
        },
        {
            icon: Smartphone,
            title: "Haptic UI",
            desc: "Tactile, responsive interfaces that feel alive.",
            color: "red-400",
            label: "INTERFACE"
        }
    ];

    return (
        <Section id="about" className="bg-black relative py-32 md:py-48 overflow-hidden" ref={sectionRef}>
            {/* 1. Deep Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Modern Tech Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px] mask-radial opacity-40" />
                
                {/* Massive Ambient Orbs */}
                <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-orange-500/5 rounded-full blur-[180px] animate-pulse" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-red-500/5 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: '3s' }} />
                
                {/* Horizontal Scanning Beams */}
                <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"
                />
            </div>

            <Container className="relative z-10 px-6">
                <motion.div 
                    style={{ scale, opacity, y: yContent }}
                    className="flex flex-col lg:flex-row gap-12 md:gap-20 lg:gap-32 items-center"
                >
                    {/* Visual Asset Side: The "Neural Core" */}
                    <div className="flex-1 relative order-2 lg:order-1 group w-full">
                        <div className="relative w-full aspect-square max-w-[280px] sm:max-w-md lg:max-w-lg mx-auto">
                            {/* Outer Decorative Rings */}
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-white/5 shadow-[0_0_100px_rgba(255,140,0,0.05)]"
                            />
                            <motion.div 
                                animate={{ rotate: -360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-8 rounded-full border border-dashed border-orange-400/10"
                            />
                            
                            {/* Data Points / Nodes */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ 
                                        rotate: 360,
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{ 
                                        rotate: { duration: 30 + i * 5, repeat: Infinity, ease: "linear" },
                                        scale: { duration: 2, repeat: Infinity, delay: i * 0.5 }
                                    }}
                                    className="absolute inset-[-10px] pointer-events-none"
                                >
                                    <div 
                                        className="w-1.5 h-1.5 bg-orange-400 rounded-full absolute shadow-[0_0_8px_rgba(255,140,0,1)]" 
                                        style={{ top: '50%', left: 0 }}
                                    />
                                </motion.div>
                            ))}

                            {/* Center Core HUD */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    className="relative glass-premium p-6 md:p-12 rounded-3xl md:rounded-[3rem] border-white/10 shadow-3xl text-center group-hover:border-orange-400/30 transition-colors duration-500"
                                >
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-orange-400/10 text-orange-400 text-[10px] font-mono px-3 py-1 rounded-full border border-orange-400/20 animate-bounce whitespace-nowrap">
                                        LIVE_FEED
                                    </div>
                                    
                                    <div className="mb-4 md:mb-6 relative">
                                        <Activity className="mx-auto text-orange-400 group-hover:animate-pulse w-8 h-8 md:w-10 md:h-10" />
                                        <div className="absolute inset-0 bg-orange-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    
                                    <div className="space-y-1">
                                        <div className="text-3xl md:text-5xl font-heading font-black text-white tracking-tighter">0.02<span className="text-orange-400 text-lg md:text-2xl ml-1">ms</span></div>
                                        <div className="text-[9px] md:text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] md:tracking-[0.3em]">Latency Response</div>
                                    </div>

                                    {/* Tech Readout Lines */}
                                    <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/5 space-y-2">
                                        <div className="flex justify-between text-[9px] font-mono text-white/30 uppercase">
                                            <span>Uptime</span>
                                            <span className="text-orange-400">99.99%</span>
                                        </div>
                                        <div className="flex justify-between text-[9px] font-mono text-white/30 uppercase">
                                            <span>Packets</span>
                                            <span className="text-orange-400">Secure</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content Side */}
                    <div className="flex-1 order-1 lg:order-2">
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
                                <div className="h-[1px] w-12 bg-gradient-to-r from-red-400 to-transparent" />
                                <span className="text-red-400 font-mono text-xs uppercase tracking-[0.4em] font-bold">Protocol Alpha</span>
                            </motion.div>
                            
                            <motion.h2 variants={slideUp} className="text-4xl md:text-7xl font-heading font-bold text-white tracking-tighter-refined mb-6 md:mb-10 leading-[0.95]">
                                COGNITIVE <span className="orange-text">ARCHITECTURES</span> FOR THE NEW WEB.
                            </motion.h2>

                            <motion.p variants={fadeIn} className="text-gray-400 text-base md:text-xl leading-relaxed mb-10 md:mb-16 font-sans max-w-2xl">
                                NextGenX engineered systems aren't built; they're cultivated. We fuse <span className="text-white border-b border-white/10">mathematical precision</span> with aesthetic intuition to create digital organisms that outperform static code.
                            </motion.p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                                {features.map((item, index) => (
                                    <FeatureCard key={item.title} item={item} />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}

function FeatureCard({ item }: { item: any }) {
    return (
        <motion.div
            variants={fadeIn}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
        >
            {/* Card Background Glow */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                    <div className={`p-2 md:p-3 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 group-hover:border-${item.color}/50 transition-colors`}>
                        <item.icon className={`text-${item.color} group-hover:scale-110 transition-transform duration-500 w-5 h-5 md:w-6 md:h-6`} />
                    </div>
                    <span className="text-[8px] md:text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] group-hover:text-white/40 transition-colors">
                        {item.label}
                    </span>
                </div>
                
                <h3 className="text-white text-lg md:text-xl font-heading font-bold mb-1 md:mb-2 group-hover:text-neon-cyan transition-colors">{item.title}</h3>
                <p className="text-neutral-500 text-xs md:text-sm leading-relaxed group-hover:text-neutral-400 transition-colors">{item.desc}</p>
            </div>

            {/* Corner Deco */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
        </motion.div>
    );
}
