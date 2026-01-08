"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HoloCardProps {
    className?: string;
    imgSrc?: string;
    name?: string;
    role?: string;
}

export function HoloCard({
    className,
    imgSrc = "/avatar.png", // Default fallback
    name = "Admin",
    role = "Creator",
}: HoloCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Motion values for mouse position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for rotation
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // Calculate rotation based on mouse position
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    // Glare and sheen gradients
    // Glare moves opposite to rotation to simulate light source reflection
    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Normalize mouse position between -0.5 and 0.5 (center is 0)
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative w-[300px] h-[420px] rounded-xl bg-obsidian-900 border border-white/10 shadow-2xl overflow-hidden cursor-pointer touch-none perspective-1000 transform-gpu",
                className
            )}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            whileHover={{ scale: 1.05 }}
        >
            {/* 1. Base Content Layer */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 bg-obsidian-950/80 backdrop-blur-sm pointer-events-none">

                {/* Avatar Container */}
                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                    <Image
                        src={imgSrc}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-white tracking-wide">{name}</h3>
                    <p className="text-violet-400 font-medium tracking-widest text-sm uppercase">{role}</p>
                </div>

                {/* Decorative Chip */}
                <div className="mt-8 flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-neutral-400 font-mono">ONLINE</span>
                </div>

            </div>

            {/* 2. Holographic Gradient Overlay (Simulates the foil effect) */}
            <motion.div
                className="absolute inset-0 z-20 mix-blend-color-dodge pointer-events-none opacity-0 transition-opacity duration-300"
                animate={{ opacity: isHovered ? 0.3 : 0 }}
                style={{
                    backgroundImage: "linear-gradient(105deg, transparent 20%, #ff5790 30%, #5d4bdb 45%, #00e0ff 60%, transparent 80%)",
                    backgroundSize: "200% 200%",
                    backgroundPositionX: glareX,
                    backgroundPositionY: glareY,
                }}
            />

            {/* 3. Shine/Glare Overlay (Simulates direct light reflection) */}
            <motion.div
                className="absolute inset-0 z-30 mix-blend-overlay pointer-events-none opacity-0 transition-opacity duration-300"
                animate={{ opacity: isHovered ? 0.4 : 0 }}
                style={{
                    background: "linear-gradient(125deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,1) 45%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)",
                    backgroundSize: "250% 250%",
                    backgroundPositionX: glareX,
                }}
            />

            {/* 4. Border Glow */}
            <div className="absolute inset-0 border-2 border-white/10 rounded-xl z-40 pointer-events-none" />

        </motion.div>
    );
}
