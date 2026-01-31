"use client";

import React, { useRef, useState } from "react";
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
    imgSrc = "/avatar.png",
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

    // Calculate rotation based on mouse position (desktop only)
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

    // Glare and sheen gradients
    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["-20%", "120%"]);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["-20%", "120%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Normalize mouse position between -0.5 and 0.5
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
                "relative w-full max-w-[280px] md:max-w-[320px] aspect-[2/3] rounded-2xl bg-obsidian-900 border border-white/10 shadow-2xl overflow-hidden cursor-pointer perspective-1000 transform-gpu group",
                className
            )}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
        >
            {/* 1. Profile Image */}
            <div className="absolute inset-0 z-10">
                <Image
                    src={imgSrc}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent z-20" />
                <div className="absolute inset-0 bg-neon-cyan/5 mix-blend-overlay z-20" />
            </div>

            {/* 2. Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-30 translate-z-[50px]">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-1"
                >
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-white tracking-tight">{name}</h3>
                    <p className="text-xs md:text-sm text-neon-cyan font-mono uppercase tracking-widest">{role}</p>
                </motion.div>
            </div>

            {/* 3. Holographic Glare (desktop only) */}
            <motion.div
                className="absolute inset-0 z-20 pointer-events-none hidden md:block mix-blend-overlay"
                animate={{ opacity: isHovered ? 0.6 : 0 }}
                style={{
                    background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.8) 0%, transparent 60%)`,
                }}
            />

            {/* 4. Scanning Line */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-full h-[2px] bg-neon-cyan/30 absolute top-0 animate-scan shadow-[0_0_15px_rgba(0,243,255,0.5)]" />
            </div>

            {/* 5. Border Glow */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl z-40 pointer-events-none group-hover:border-neon-cyan/50 transition-colors duration-500" />

        </motion.div>
    );
}
