"use client";

import { Container, Section } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Users, Code2, Zap, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { HoloCard } from "@/components/ui/HoloCard";
import { slideUp, staggerContainer, fadeIn } from "@/lib/animations";

export default function TeamPage() {
    const admins = [
        {
            name: "Manvanth Gowda M",
            role: "Co-Founder",
            imgSrc: "/admin-photo.jpg",
            link: "https://manvanthgowdam.vercel.app",
            color: "neon-cyan",
            icon: Code2
        },
        {
            name: "Mithun Gowda B",
            role: "Co-Founder",
            imgSrc: "/admin-photo-2.jpg",
            link: "https://mithun50.vercel.app",
            color: "neon-cyan",
            icon: Zap
        }
    ];

    const teamMembers = [
        {
            name: "Nevil Anson Dsouza",
            role: "Team Member",
            imgSrc: "/nevil-photo.jpg",
            link: "https://portfolio-gules-xi-58.vercel.app/",
            color: "neon-violet",
            icon: Users
        }
    ];

    return (
        <div className="min-h-screen bg-obsidian-950 text-white">
            {/* Background Texture */}
            <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none" />

            {/* Back Button */}
            <div className="fixed top-24 left-8 z-50">
                <Link href="/">
                    <motion.div 
                        whileHover={{ x: -5 }}
                        className="flex items-center gap-2 text-white/40 hover:text-neon-cyan transition-colors font-mono text-xs uppercase tracking-widest"
                    >
                        <ArrowLeft size={16} />
                        <span>Return to Hub</span>
                    </motion.div>
                </Link>
            </div>

            {/* Hero Section */}
            <Section className="min-h-[60vh] flex items-center justify-center relative pt-40">
                <Container className="relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.div variants={fadeIn} className="flex justify-center mb-8">
                            <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2">
                                <Users size={14} className="text-neon-cyan" />
                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/70">Neural Network</span>
                            </div>
                        </motion.div>

                        <motion.h1 variants={slideUp} className="text-5xl md:text-8xl font-heading font-bold tracking-tighter-refined mb-8">
                            THE <span className="shimmer-text">ARCHITECTS</span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                            A decentralized collective of developers and designers pushing the boundaries of digital reality.
                        </motion.p>
                    </motion.div>
                </Container>
            </Section>

            {/* Founders Section */}
            <Section className="py-24">
                <Container>
                    <div className="flex items-center gap-4 mb-16 justify-center">
                        <div className="h-[1px] w-12 bg-white/10" />
                        <h2 className="text-white font-mono text-xs uppercase tracking-[0.4em]">Core nodes</h2>
                        <div className="h-[1px] w-12 bg-white/10" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {admins.map((admin, index) => (
                            <motion.div
                                key={admin.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="flex justify-center"
                            >
                                <a href={admin.link} target="_blank" className="relative group block w-full max-w-[340px]">
                                    <div className="relative p-2">
                                        <div className="absolute inset-0 bg-neon-cyan/5 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                        <HoloCard
                                            name={admin.name}
                                            role={admin.role}
                                            imgSrc={admin.imgSrc}
                                            className="group-hover:border-neon-cyan/50 transition-colors"
                                        />
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Team Members Section */}
            <Section className="py-24 border-t border-white/5 bg-white/[0.01]">
                <Container>
                    <div className="flex items-center gap-4 mb-16 justify-center">
                        <div className="h-[1px] w-12 bg-white/10" />
                        <h2 className="text-white font-mono text-xs uppercase tracking-[0.4em]">Sync nodes</h2>
                        <div className="h-[1px] w-12 bg-white/10" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="flex justify-center"
                            >
                                <a href={member.link} target="_blank" className="relative group block w-full max-w-[300px]">
                                    <HoloCard
                                        name={member.name}
                                        role={member.role}
                                        imgSrc={member.imgSrc}
                                        className="group-hover:border-neon-violet/50 transition-colors"
                                    />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    );
}
