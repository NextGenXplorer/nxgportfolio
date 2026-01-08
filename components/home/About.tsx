"use client";
import siteData from "@/data/site.json";
import { Container, Section } from "@/components/ui/Container";
import { Cpu, Globe, Zap, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
    const features = [
        {
            icon: Globe,
            title: "Universal",
            desc: "Seamless across all devices",
            color: "from-cyan-500 to-blue-500",
            borderColor: "border-cyan-500/50",
            glowColor: "shadow-[0_0_30px_-5px_rgba(6,182,212,0.5)]"
        },
        {
            icon: Zap,
            title: "Performance",
            desc: "60FPS optimized interactions",
            color: "from-yellow-500 to-orange-500",
            borderColor: "border-yellow-500/50",
            glowColor: "shadow-[0_0_30px_-5px_rgba(234,179,8,0.5)]"
        },
        {
            icon: Cpu,
            title: "Intelligence",
            desc: "AI-driven adaptive interfaces",
            color: "from-violet-500 to-purple-500",
            borderColor: "border-violet-500/50",
            glowColor: "shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)]"
        },
        {
            icon: Smartphone,
            title: "Native Feel",
            desc: "PWA installable experience",
            color: "from-pink-500 to-rose-500",
            borderColor: "border-pink-500/50",
            glowColor: "shadow-[0_0_30px_-5px_rgba(236,72,153,0.5)]"
        }
    ];

    return (
        <Section id="about" className="bg-black relative overflow-hidden">
            {/* Tech Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e915_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e915_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            </div>

            <Container className="relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
                >
                    <div className="inline-block mb-4 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
                        <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">
                            Core Systems
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 md:mb-6 leading-tight">
                        <span className="text-white">Powered by </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                            Advanced Technology
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto">
                        {siteData.brand.description} Built on a foundation of performance, accessibility, and futuristic aesthetics.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {features.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className={`relative p-6 md:p-7 rounded-xl bg-black border-2 ${item.borderColor} hover:${item.glowColor} transition-all duration-300 group overflow-hidden`}
                        >
                            {/* Circuit corner decoration */}
                            <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <path d="M 0 0 L 100 0 L 100 50 L 50 50 L 50 100" stroke="currentColor" strokeWidth="2" fill="none" className={`text-${item.color.split('-')[1]}-500`} />
                                    <circle cx="50" cy="50" r="4" fill="currentColor" className={`text-${item.color.split('-')[1]}-500`} />
                                </svg>
                            </div>

                            {/* Animated gradient background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            {/* Holographic scan line */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-full translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />

                            {/* Icon with glow */}
                            <div className="relative z-10 mb-4">
                                <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} w-fit group-hover:scale-110 transition-transform duration-300 ${item.glowColor}`}>
                                    <item.icon size={20} className="md:w-6 md:h-6 text-white" />
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="relative z-10 text-base md:text-lg font-bold text-white mb-2 font-mono">{item.title}</h3>
                            <p className="relative z-10 text-xs md:text-sm text-neutral-400 leading-relaxed">{item.desc}</p>

                            {/* Corner accent */}
                            <div className={`absolute bottom-0 left-0 w-2 h-2 bg-gradient-to-br ${item.color}`} />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
