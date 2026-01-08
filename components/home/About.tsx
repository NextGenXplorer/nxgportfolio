"use client";
import siteData from "@/data/site.json";
import { Container, Section } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Cpu, Globe, Zap, Smartphone } from "lucide-react";

export function About() {
    return (
        <Section id="about" className="bg-obsidian-950 relative">
            <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <Container>
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-medium text-neutral-400 mb-6">
                        We bridge the gap between <span className="text-white">imagination</span> and <span className="text-white">execution</span>.
                    </h2>
                    <p className="text-neutral-500 text-lg leading-relaxed">
                        {siteData.brand.description} Built on a foundation of performance, accessibility, and futuristic aesthetics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Globe, title: "Universal", desc: "Seamless across all devices." },
                        { icon: Zap, title: "Performance", desc: "60FPS optimized interactions." },
                        { icon: Cpu, title: "Intelligence", desc: "AI-driven adaptive interfaces." },
                        { icon: Smartphone, title: "Native Feel", desc: "PWA installable experience." }
                    ].map((item, i) => (
                        <div
                            key={item.title}
                            className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
                        >
                            <div className="mb-4 p-3 rounded-lg bg-black/50 w-fit text-violet-400 group-hover:text-white group-hover:bg-violet-500 transition-all duration-300">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-neutral-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
