"use client";

import { Container, Section } from "@/components/ui/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Image from "next/image";

export default function TeamPage() {
    const teamMembers: Array<{
        name: string;
        role: string;
        imgSrc: string;
        link: string;
    }> = [
            {
                name: "Nevil Anson Dsouza",
                role: "Team Member",
                imgSrc: "/nevil-photo.jpg",
                link: "https://portfolio-gules-xi-58.vercel.app/"
            }
        ];

    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            {/* Hero Section */}
            <Section className="min-h-[60vh] relative overflow-hidden bg-black flex items-center justify-center pt-32">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e915_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e915_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
                </div>

                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-block mb-6 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
                            <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                                <Users size={16} />
                                Our Team
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                            Meet the{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                                Innovators
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                            A passionate team of developers, designers, and innovators building the future of digital experiences.
                        </p>
                    </motion.div>
                </Container>
            </Section>

            {/* Team Members Section */}
            <Section className="bg-black relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf615_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf615_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                </div>

                <Container className="relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <a
                                    href={member.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div className="relative h-[450px] rounded-xl overflow-hidden border-2 border-cyan-500/20 bg-black hover:border-cyan-500/50 transition-all duration-500 group-hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.4)]">
                                        {/* Corner Brackets */}
                                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 z-20" />
                                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/50 z-20" />
                                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/50 z-20" />
                                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50 z-20" />

                                        {/* Image */}
                                        <div className="absolute inset-0">
                                            <Image
                                                src={member.imgSrc}
                                                alt={member.name}
                                                fill
                                                className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                                        </div>

                                        {/* Scan Line */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent h-full opacity-0 group-hover:opacity-100 group-hover:translate-y-full transition-all duration-1000" />

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                            <h3 className="text-xl font-heading font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                                {member.name}
                                            </h3>
                                            <p className="text-sm text-cyan-400 font-mono">{member.role}</p>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            <Footer />
        </div>
    );
}
