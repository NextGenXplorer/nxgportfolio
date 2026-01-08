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
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    // Glare and sheen gradients
    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);

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
                "relative w-full max-w-[280px] md:max-w-[320px] aspect-[2/3] rounded-2xl bg-obsidian-900 border border-white/10 shadow-2xl overflow-hidden cursor-pointer perspective-1000 transform-gpu",
                className
            )}
            style={{
                transformStyle: "preserve-3d",
                // Only apply 3D rotation on desktop (pointer: fine)
                rotateX: "var(--rotate-x, 0deg)",
                rotateY: "var(--rotate-y, 0deg)",
            }}
        >
            {/* CSS variables for desktop-only 3D effect */}
            <style jsx>{`
                @media (pointer: fine) {
                    div {
                        --rotate-x: ${rotateX};
                        --rotate-y: ${rotateY};
                    }
                }
            `}</style>

            {/* 1. Profile Image */}
            <div className="absolute inset-0 z-10">
                <Image
                    src={imgSrc}
                    alt={name}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-transparent" />
            </div>

            {/* 2. Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-30">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">{name}</h3>
                <p className="text-xs md:text-sm text-violet-400 font-medium">{role}</p>
            </div>

            {/* 3. Holographic Glare (desktop only) */}
            <motion.div
                className="absolute inset-0 z-20 pointer-events-none hidden md:block"
                animate={{ opacity: isHovered ? 0.4 : 0 }}
                style={{
                    background: "linear-gradient(125deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,1) 45%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)",
                    backgroundSize: "250% 250%",
                    backgroundPositionX: glareX,
                }}
            />

            {/* 4. Border Glow */}
            <div className="absolute inset-0 border-2 border-white/10 rounded-2xl z-40 pointer-events-none" />

        </motion.div>
    );
}
