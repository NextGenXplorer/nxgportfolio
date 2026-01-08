import { Container, Section } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Users, Code2, Zap } from "lucide-react";
import Image from "next/image";
import { HoloCard } from "@/components/ui/HoloCard";

export default function TeamPage() {
    const admins = [
        {
            name: "Manvanth Gowda M",
            role: "Co-Founder",
            imgSrc: "/admin-photo.jpg",
            link: "https://www.instagram.com/appu_kannadigaa",
            color: "cyan",
            icon: Code2
        },
        {
            name: "Mithun Gowda B",
            role: "Co-Founder",
            imgSrc: "/admin-photo-2.jpg",
            link: "https://mithun50.vercel.app",
            color: "violet",
            icon: Zap
        }
    ];

    const teamMembers: Array<{
        name: string;
        role: string;
        imgSrc: string;
        link: string;
        color: string;
        icon: any;
    }> = [
            {
                name: "Nevil Anson Dsouza",
                role: "Team Member",
                imgSrc: "/nevil-photo.jpg",
                link: "https://portfolio-gules-xi-58.vercel.app/",
                color: "blue",
                icon: Users
            }
        ];

    return (
        <div className="min-h-screen bg-black">
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

            {/* Founders Section */}
            <Section className="bg-black relative overflow-hidden py-12">
                <Container className="relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-heading font-bold text-white mb-12 text-center"
                    >
                        Founders
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto px-4">
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
                                    <div className="relative p-4">
                                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-${admin.color}-500/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-${admin.color}-500/30 transition-colors duration-700`} />

                                        {/* Icon Badge */}
                                        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-full border-2 border-${admin.color}-500/50 bg-black group-hover:border-${admin.color}-500 transition-all duration-300`}>
                                            <admin.icon size={20} className={`text-${admin.color}-400`} />
                                        </div>

                                        <HoloCard
                                            name={admin.name}
                                            role={admin.role}
                                            imgSrc={admin.imgSrc}
                                            className={`z-10 border-2 border-${admin.color}-500/30 shadow-[0_0_40px_-10px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_60px_-5px_rgba(6,182,212,0.6)] transition-all duration-500`}
                                        />
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Team Members Section */}
            <Section className="bg-black relative overflow-hidden py-12">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf615_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf615_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                </div>

                <Container className="relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-heading font-bold text-white mb-12 text-center"
                    >
                        Core Team
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center justify-center"
                            >
                                <a
                                    href={member.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative group block w-full max-w-[340px] mx-auto"
                                >
                                    <div className="relative p-4">
                                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-${member.color}-500/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-${member.color}-500/30 transition-colors duration-700`} />

                                        {/* Corner Brackets */}
                                        <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-${member.color}-500/50 transition-all duration-300 group-hover:border-${member.color}-500`} />
                                        <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-${member.color}-500/50 transition-all duration-300 group-hover:border-${member.color}-500`} />
                                        <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-${member.color}-500/50 transition-all duration-300 group-hover:border-${member.color}-500`} />
                                        <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-${member.color}-500/50 transition-all duration-300 group-hover:border-${member.color}-500`} />

                                        {/* Icon Badge */}
                                        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-full border-2 border-${member.color}-500/50 bg-black group-hover:border-${member.color}-500 transition-all duration-300`}>
                                            <member.icon size={20} className={`text-${member.color}-400`} />
                                        </div>

                                        <HoloCard
                                            name={member.name}
                                            role={member.role}
                                            imgSrc={member.imgSrc}
                                            className={`z-10 border-2 border-${member.color}-500/30 shadow-[0_0_40px_-10px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_60px_-5px_rgba(6,182,212,0.6)] transition-all duration-500`}
                                        />
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    );
}
