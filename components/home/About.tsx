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
            color: "from-blue-500 to-cyan-500",
            glow: "group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.6)]"
        },
        {
            icon: Zap,
            title: "Performance",
            desc: "60FPS optimized interactions",
            color: "from-yellow-500 to-orange-500",
            glow: "group-hover:shadow-[0_0_30px_-5px_rgba(251,191,36,0.6)]"
        },
        {
            icon: Cpu,
            title: "Intelligence",
            desc: "AI-driven adaptive interfaces",
            color: "from-violet-500 to-purple-500",
            glow: "group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.6)]"
        },
        {
            icon: Smartphone,
            title: "Native Feel",
            desc: "PWA installable experience",
            color: "from-pink-500 to-rose-500",
            glow: "group-hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.6)]"
        }
    ];

    return (
        <Section id="about" className="bg-gradient-to-b from-obsidian-950 via-purple-950/20 to-obsidian-950 relative">
            <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
                >
                    <span className="text-violet-400 font-mono text-xs uppercase tracking-widest mb-3 md:mb-4 block">
                        Who We Are
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium text-neutral-300 mb-4 md:mb-6 leading-tight">
                        We bridge the gap between{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 font-bold">
                            imagination
                        </span>{" "}
                        and{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 font-bold">
                            execution
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
                            whileHover={{ y: -5, scale: 1.02 }}
                            className={`p-6 md:p-7 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 group relative overflow-hidden ${item.glow}`}
                        >
                            {/* Animated Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            {/* Icon */}
                            <div className={`mb-4 p-3 rounded-xl bg-gradient-to-br ${item.color} w-fit relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon size={20} className="md:w-6 md:h-6 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-base md:text-lg font-bold text-white mb-2 relative z-10">{item.title}</h3>
                            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed relative z-10">{item.desc}</p>

                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
