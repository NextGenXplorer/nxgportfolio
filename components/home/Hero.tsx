"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { Sparkles, Zap, Rocket } from "lucide-react";

gsap.registerPlugin();

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Fade-in animation for content
        gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
        );

        // Floating animation for icons
        gsap.to(".floating-icon", {
            y: -20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            stagger: 0.3
        });
    }, { scope: containerRef });

    // Create floating particles
    useEffect(() => {
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, i) => {
            gsap.to(particle, {
                y: -100 - (i * 20),
                x: Math.random() * 100 - 50,
                opacity: 0,
                duration: 3 + Math.random() * 2,
                repeat: -1,
                delay: i * 0.3,
                ease: "power1.out"
            });
        });
    }, []);

    return (
        <Section
            ref={containerRef}
            className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-obsidian-950 to-cyan-900 flex items-center justify-center"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 w-full h-full">
                {/* Vibrant Gradient Orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 rounded-full blur-3xl opacity-20" />

                {/* Animated Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf620_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf620_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="particle absolute w-1 h-1 bg-white rounded-full opacity-60"
                        style={{
                            left: `${Math.random() * 100}%`,
                            bottom: '0%',
                        }}
                    />
                ))}
            </div>

            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none">
                <Sparkles className="floating-icon absolute top-20 left-[10%] text-yellow-400 opacity-60" size={32} />
                <Zap className="floating-icon absolute top-40 right-[15%] text-cyan-400 opacity-60" size={28} />
                <Rocket className="floating-icon absolute bottom-40 left-[20%] text-violet-400 opacity-60" size={36} />
                <Sparkles className="floating-icon absolute bottom-32 right-[25%] text-pink-400 opacity-60" size={24} />
            </div>

            {/* Content */}
            <Container className="relative z-10">
                <div ref={contentRef} className="max-w-4xl mx-auto text-center px-4">
                    {/* Badge with Shimmer */}
                    <div className="inline-block mb-6 md:mb-8 px-5 py-2.5 rounded-full border-2 border-violet-400/50 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-md relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <span className="relative text-violet-200 text-xs md:text-sm font-bold tracking-wider uppercase flex items-center gap-2">
                            <Sparkles size={16} className="text-yellow-400" />
                            Redefining Digital Reality
                        </span>
                    </div>

                    {/* Title with Gradient */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black text-white mb-4 md:mb-6 leading-tight tracking-tight">
                        NEXT
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 animate-gradient-x">
                            GEN
                        </span>
                        X
                    </h1>

                    {/* Subtitle with Glow */}
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-200 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
                        Crafting <span className="text-white font-bold text-glow">universal experiences</span> at the edge of{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 font-bold">
                            possibility
                        </span>
                    </p>

                    {/* CTA Buttons with Glow */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto sm:max-w-none">
                        <Button
                            variant="shimmer"
                            size="lg"
                            className="w-full sm:w-auto min-w-[200px] shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)] hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.8)] transition-shadow"
                            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            <Rocket size={18} className="mr-2" />
                            Explore Work
                        </Button>
                        <Button
                            variant="ghost"
                            size="lg"
                            className="w-full sm:w-auto min-w-[200px] text-white hover:bg-white/10 border-2 border-cyan-400/50 hover:border-cyan-400 shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.6)] transition-all"
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            <Zap size={18} className="mr-2" />
                            Contact Us
                        </Button>
                    </div>
                </div>
            </Container>

            {/* Scroll Indicator with Animation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
                <div className="w-6 h-10 border-2 border-violet-400/50 rounded-full flex items-start justify-center p-2">
                    <div className="w-1.5 h-3 bg-gradient-to-b from-violet-400 to-cyan-400 rounded-full animate-bounce" />
                </div>
            </div>
        </Section>
    );
}
