"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Simple fade-in animation for content
        gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
        );
    }, { scope: containerRef });

    return (
        <Section
            ref={containerRef}
            className="min-h-screen relative overflow-hidden bg-obsidian-950 flex items-center justify-center"
        >
            {/* Animated Gradient Background - Mobile Optimized */}
            <div className="absolute inset-0 w-full h-full">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-obsidian-950 via-obsidian-900 to-obsidian-950" />

                {/* Animated orbs */}
                <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] bg-violet-500/10 rounded-full blur-3xl" />

                {/* Noise texture overlay */}
                <div className="absolute inset-0 bg-noise opacity-30" />
            </div>

            {/* Content */}
            <Container className="relative z-10">
                <div ref={contentRef} className="max-w-4xl mx-auto text-center px-4">
                    {/* Badge */}
                    <div className="inline-block mb-6 md:mb-8 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-200 text-xs md:text-sm font-medium tracking-wider uppercase backdrop-blur-md">
                        Redefining Digital Reality
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight">
                        NEXT<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">GEN</span>X
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                        Crafting <span className="text-white font-semibold">universal experiences</span> at the edge of <span className="text-white font-semibold">possibility</span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto sm:max-w-none">
                        <Button
                            variant="shimmer"
                            size="lg"
                            className="w-full sm:w-auto min-w-[200px]"
                            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Explore Work
                        </Button>
                        <Button
                            variant="ghost"
                            size="lg"
                            className="w-full sm:w-auto min-w-[200px] text-white hover:bg-white/10 border-white/20"
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Contact Us
                        </Button>
                    </div>
                </div>
            </Container>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
                </div>
            </div>
        </Section>
    );
}
