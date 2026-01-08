"use client";
import { Container, Section } from "@/components/ui/Container";
import { HoloCard } from "@/components/ui/HoloCard";
import { motion } from "framer-motion";
import { Code2, Zap } from "lucide-react";

export function Creator() {
    const admins = [
        {
            name: "Manvanth Gowda M",
            role: "Lead Architect",
            imgSrc: "/admin-photo.jpg",
            link: "https://www.instagram.com/appu_kannadigaa",
            color: "cyan",
            icon: Code2
        },
        {
            name: "Mithun Gowda B",
            role: "System Engineer",
            imgSrc: "/admin-photo-2.jpg",
            link: "https://mithun50.vercel.app",
            color: "violet",
            icon: Zap
        }
    ];

    return (
        <Section id="creator" className="bg-black border-t border-cyan-500/20 relative overflow-hidden">
            {/* Tech Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e910_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e910_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
            </div>

            <Container className="relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
                >
                    <div className="inline-block mb-4 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
                        <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">
                            System Architects
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4 md:mb-6 leading-tight">
                        Crafted with{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                            Passion & Precision
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed px-4">
                        Meet the creative force driving NextGenX. We are dedicated to pushing the boundaries of what is possible on the web.
                    </p>
                </motion.div>

                {/* Admin Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto px-4">
                    {admins.map((admin, index) => (
                        <motion.div
                            key={admin.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex items-center justify-center"
                        >
                            <a
                                href={admin.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group block w-full max-w-[340px] mx-auto"
                            >
                                {/* Outer Container with Padding */}
                                <div className="relative p-4">
                                    {/* Tech Glow */}
                                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[380px] md:h-[380px] bg-${admin.color}-500/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-${admin.color}-500/30 transition-colors duration-700`} />

                                    {/* Corner Brackets - Larger */}
                                    <div className={`absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-${admin.color}-500/50 transition-all duration-300 group-hover:border-${admin.color}-500`} />
                                    <div className={`absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-${admin.color}-500/50 transition-all duration-300 group-hover:border-${admin.color}-500`} />
                                    <div className={`absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-${admin.color}-500/50 transition-all duration-300 group-hover:border-${admin.color}-500`} />
                                    <div className={`absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-${admin.color}-500/50 transition-all duration-300 group-hover:border-${admin.color}-500`} />

                                    {/* Icon Badge */}
                                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-full border-2 border-${admin.color}-500/50 bg-black group-hover:border-${admin.color}-500 transition-all duration-300`}>
                                        <admin.icon size={20} className={`text-${admin.color}-400`} />
                                    </div>

                                    {/* HoloCard */}
                                    <HoloCard
                                        name={admin.name}
                                        role={admin.role}
                                        imgSrc={admin.imgSrc}
                                        className={`z-10 border-2 border-${admin.color}-500/30 shadow-[0_0_40px_-10px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_60px_-5px_rgba(6,182,212,0.6)] transition-all duration-500`}
                                    />

                                    {/* Scan Line */}
                                    <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-${admin.color}-500/20 to-transparent h-full opacity-0 group-hover:opacity-100 group-hover:translate-y-full transition-all duration-1000 pointer-events-none`} />
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
