"use client";
import siteData from "@/data/site.json";
import { Container, Section } from "@/components/ui/Container";
import { HoloCard } from "@/components/ui/HoloCard";

export function Creator() {
    return (
        <Section id="creator" className="bg-obsidian-950 border-t border-white/5 relative overflow-hidden">
            <Container>
                {/* Content */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-violet-500 font-mono text-xs uppercase tracking-widest mb-4 block">Behind the Code</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                        Crafted with <br />
                        <span className="text-white">Passion & Precision</span>
                    </h2>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        Meet the creative force driving NextGenX. We are dedicated to pushing the boundaries of what is possible on the web, one pixel at a time.
                    </p>
                </div>

                {/* Admin Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">

                    {/* Admin 1 - Manvanth */}
                    <div className="flex items-center justify-center perspective-1000">
                        <a
                            href="https://www.instagram.com/appu_kannadigaa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group block"
                        >
                            {/* Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-violet-500/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-cyan-500/20 transition-colors duration-700" />

                            <HoloCard
                                name="Manvanth Gowda M"
                                role="Admin & Creator"
                                imgSrc="/admin-photo.jpg"
                                className="z-10"
                            />
                        </a>
                    </div>

                    {/* Admin 2 - Mithun */}
                    <div className="flex items-center justify-center perspective-1000">
                        <a
                            href="https://mithun50.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group block"
                        >
                            {/* Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-violet-500/20 transition-colors duration-700" />

                            <HoloCard
                                name="Mithun Gowda B"
                                role="Admin & Creator"
                                imgSrc="/admin-photo-2.jpg"
                                className="z-10"
                            />
                        </a>
                    </div>

                </div>
            </Container>
        </Section>
    )
}
