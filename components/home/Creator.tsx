"use client";
import siteData from "@/data/site.json";
import { Container, Section } from "@/components/ui/Container";
import { HoloCard } from "@/components/ui/HoloCard";

export function Creator() {
    return (
        <Section id="creator" className="bg-black border-t border-cyan-500/20 relative overflow-hidden">
            {/* Tech Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e910_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e910_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                {/* Glowing orbs */}
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
            </div>

            <Container className="relative z-10">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                    <div className="inline-block mb-4 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
                        <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">
                            System Architects
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4 md:mb-6 leading-tight">
                        Crafted with <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                            Passion & Precision
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed">
                        Meet the creative force driving NextGenX. We are dedicated to pushing the boundaries of what is possible on the web.
                    </p>
                </div>

                {/* Admin Cards - Mobile Optimized */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">

                    {/* Admin 1 - Manvanth */}
                    <div className="flex items-center justify-center perspective-1000">
                        <a
                            href="https://www.instagram.com/appu_kannadigaa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group block w-full max-w-[320px] mx-auto"
                        >
                            {/* Tech Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[350px] md:h-[350px] bg-cyan-500/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none group-hover:bg-cyan-500/30 transition-colors duration-700" />

                            {/* Border decoration */}
                            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-500/50" />
                            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-500/50" />
                            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-500/50" />
                            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-500/50" />

                            <HoloCard
                                name="Manvanth Gowda M"
                                role="Admin & Creator"
                                imgSrc="/admin-photo.jpg"
                                className="z-10 border-2 border-cyan-500/30 shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]"
                            />
                        </a>
                    </div>

                    {/* Admin 2 - Mithun */}
                    <div className="flex items-center justify-center perspective-1000">
                        <a
                            href="https://mithun50.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group block w-full max-w-[320px] mx-auto"
                        >
                            {/* Tech Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[350px] md:h-[350px] bg-violet-500/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none group-hover:bg-violet-500/30 transition-colors duration-700" />

                            {/* Border decoration */}
                            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-violet-500/50" />
                            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-violet-500/50" />
                            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-violet-500/50" />
                            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-violet-500/50" />

                            <HoloCard
                                name="Mithun Gowda B"
                                role="Admin & Creator"
                                imgSrc="/admin-photo-2.jpg"
                                className="z-10 border-2 border-violet-500/30 shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]"
                            />
                        </a>
                    </div>

                </div>
            </Container>
        </Section>
    )
}
