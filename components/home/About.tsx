"use client";
import siteData from "@/data/site.json";
import { Container, Section } from "@/components/ui/Container";
import { Cpu, Globe, Zap, Smartphone } from "lucide-react";

export function About() {
    return (
        <Section id="about" className="bg-obsidian-950 relative">
            <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <Container>
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                    <span className="text-violet-500 font-mono text-xs uppercase tracking-widest mb-3 md:mb-4 block">
                        Who We Are
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium text-neutral-300 mb-4 md:mb-6 leading-tight">
                        We bridge the gap between <span className="text-white font-bold">imagination</span> and <span className="text-white font-bold">execution</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto">
                        {siteData.brand.description} Built on a foundation of performance, accessibility, and futuristic aesthetics.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {[
                        { icon: Globe, title: "Universal", desc: "Seamless across all devices" },
                        { icon: Zap, title: "Performance", desc: "60FPS optimized interactions" },
                        { icon: Cpu, title: "Intelligence", desc: "AI-driven adaptive interfaces" },
                        { icon: Smartphone, title: "Native Feel", desc: "PWA installable experience" }
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className="mb-4 p-3 rounded-lg bg-black/50 w-fit text-violet-400 group-hover:text-white group-hover:bg-violet-500 transition-all duration-300">
                                <item.icon size={20} className="md:w-6 md:h-6" />
                            </div>
                            <h3 className="text-base md:text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
