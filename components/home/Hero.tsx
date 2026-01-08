"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { Code2, Cpu, Network, Zap } from "lucide-react";

gsap.registerPlugin();

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Content fade-in
        gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
        );

        // Floating tech icons
        gsap.to(".tech-icon", {
            y: -15,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            stagger: 0.2
        });

        // Pulse animation for circuit nodes
        gsap.to(".circuit-node", {
            scale: 1.5,
            opacity: 0.8,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            stagger: 0.3
        });
    }, { scope: containerRef });

    // Binary rain effect
    useEffect(() => {
        const binaryChars = document.querySelectorAll('.binary-char');
        binaryChars.forEach((char, i) => {
            gsap.to(char, {
                y: 800,
                opacity: 0,
                duration: 4 + Math.random() * 3,
                repeat: -1,
                delay: i * 0.2,
                ease: "none"
            });
        });
    }, []);

    return (
        <Section
            ref={containerRef}
            className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center"
        >
            {/* Tech Background */}
            <div className="absolute inset-0 w-full h-full">
                {/* Dark gradient base */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black" />

                {/* Animated grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e920_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e920_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] animate-pulse" />

                {/* Circuit board pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                            <path d="M 0 100 L 50 100 L 50 50 L 150 50 L 150 150 L 100 150" stroke="#0ea5e9" strokeWidth="2" fill="none" />
                            <circle cx="50" cy="100" r="4" fill="#0ea5e9" className="circuit-node" />
                            <circle cx="50" cy="50" r="4" fill="#06b6d4" className="circuit-node" />
                            <circle cx="150" cy="50" r="4" fill="#8b5cf6" className="circuit-node" />
                            <circle cx="150" cy="150" r="4" fill="#0ea5e9" className="circuit-node" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit)" />
                </svg>

                {/* Glowing orbs */}
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

                {/* Binary rain */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            className="binary-char absolute text-cyan-400/30 font-mono text-xs"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: '-20px',
                            }}
                        >
                            {Math.random() > 0.5 ? '1' : '0'}
                        </div>
                    ))}
                </div>

                {/* Scanline effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-32 animate-scan" />
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute inset-0 pointer-events-none">
                <Code2 className="tech-icon absolute top-32 left-[10%] text-cyan-400 opacity-40" size={40} />
                <Cpu className="tech-icon absolute top-48 right-[12%] text-violet-400 opacity-40" size={36} />
                <Network className="tech-icon absolute bottom-40 left-[15%] text-blue-400 opacity-40" size={44} />
                <Zap className="tech-icon absolute bottom-32 right-[20%] text-cyan-400 opacity-40" size={32} />
            </div>

            {/* Content */}
            <Container className="relative z-10">
                <div ref={contentRef} className="max-w-4xl mx-auto text-center px-4">
                    {/* Tech Badge */}
                    <div className="inline-block mb-6 md:mb-8 px-5 py-2.5 rounded-full border-2 border-cyan-400/50 bg-cyan-500/10 backdrop-blur-md relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <span className="relative text-cyan-300 text-xs md:text-sm font-bold tracking-wider uppercase flex items-center gap-2">
                            <Code2 size={16} className="text-cyan-400" />
                            Next-Gen Technology
                        </span>
                    </div>

                    {/* Title with Holographic Effect */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-4 md:mb-6 leading-tight tracking-tight">
                        <span className="text-white">NEXT</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 relative">
                            GEN
                            <span className="absolute inset-0 blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-50" />
                        </span>
                        <span className="text-white">X</span>
                    </h1>

                    {/* Subtitle with Tech Accent */}
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-300 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
                        Building the <span className="text-cyan-400 font-bold">future</span> of digital experiences with{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-bold">
                            cutting-edge technology
                        </span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto sm:max-w-none">
                        <Button
                            variant="shimmer"
                            size="lg"
                            className="w-full sm:w-auto min-w-[200px] border-2 border-cyan-400/50 shadow-[0_0_30px_-5px_rgba(6,182,212,0.5)] hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.8)] transition-shadow"
                            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            <Cpu size={18} className="mr-2" />
                            Explore Work
                        </Button>
                        <Button
                            variant="ghost"
                            size="lg"
                            className="w-full sm:w-auto min-w-[200px] text-cyan-300 hover:text-white hover:bg-cyan-500/10 border-2 border-cyan-400/30 hover:border-cyan-400 shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.6)] transition-all"
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            <Network size={18} className="mr-2" />
                            Contact Us
                        </Button>
                    </div>
                </div>
            </Container>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
                <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2">
                    <div className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-violet-400 rounded-full animate-bounce" />
                </div>
            </div>
        </Section>
    );
}
