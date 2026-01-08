"use client";
import { Container, Section } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Creator() {
    return (
        <Section id="team" className="bg-black border-t border-cyan-500/20 relative overflow-hidden py-24">
            {/* Tech Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e910_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e910_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-50" />
            </div>

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="inline-block mb-6 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
                        <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                            <Users size={16} />
                            The Minds Behind NextGenX
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight">
                        Meet the{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                            Innovators
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-12 max-w-2xl mx-auto">
                        Get to know the passionate team of developers, designers, and visionaries dedicated to pushing the boundaries of what's possible.
                    </p>

                    <Link href="/team">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent overflow-hidden rounded-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 opacity-20 group-hover:opacity-30 transition-opacity" />
                            <div className="absolute inset-0 border border-cyan-500/50 rounded-full group-hover:border-cyan-400 transition-colors" />

                            <span className="relative font-heading font-bold text-white group-hover:text-cyan-100 transition-colors">
                                Meet the Team
                            </span>
                            <ArrowRight className="relative w-5 h-5 text-cyan-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </motion.button>
                    </Link>
                </motion.div>
            </Container>
        </Section>
    );
}
