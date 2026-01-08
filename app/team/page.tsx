"use client";

import { Container, Section } from "@/components/ui/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Users, Code2, Zap, Sparkles } from "lucide-react";

export default function TeamPage() {
    // Placeholder for team members - you can add your team here
    const teamMembers = [
        // Example structure - add your team members here
        // {
        //     name: "Team Member Name",
        //     role: "Position",
        //     imgSrc: "/team-member.jpg",
        //     link: "https://linkedin.com/in/member"
        // }
    ];

    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            {/* Hero Section */}
            <Section className="min-h-[60vh] relative overflow-hidden bg-black flex items-center justify-center pt-32">
                {/* Tech Background */}
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
                    {teamMembers.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={member.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative"
                                >
                                    {/* Team member card - you can customize this */}
                                    <div className="relative h-[400px] rounded-xl overflow-hidden border-2 border-cyan-500/20 bg-black hover:border-cyan-500/50 transition-all duration-500">
                                        {/* Add your team member card design here */}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-20"
                        >
                            <div className="inline-block p-8 rounded-2xl border-2 border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm">
                                <Sparkles size={48} className="text-cyan-400 mx-auto mb-4" />
                                <h3 className="text-2xl font-heading font-bold text-white mb-3">
                                    Team Members Coming Soon
                                </h3>
                                <p className="text-neutral-400 max-w-md mx-auto">
                                    We're building an amazing team. Check back soon to meet the talented individuals behind NextGenX!
                                </p>
                            </div>
                        </motion.div>
                    )}
                </Container>
            </Section>

            <Footer />
        </div>
    );
}
