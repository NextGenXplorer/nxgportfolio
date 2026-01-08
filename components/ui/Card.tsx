"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { MouseEvent } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    spotlight?: boolean;
}

export function Card({ children, className, spotlight = true, ...props }: CardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        if (!spotlight) return;
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                "group relative border border-white/10 bg-obsidian-900/50 overflow-hidden rounded-xl",
                className
            )}
            onMouseMove={handleMouseMove}
            {...props}
        >
            {/* Spotlight Gradient */}
            {spotlight && (
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(139, 92, 246, 0.15),
                transparent 80%
              )
            `,
                    }}
                />
            )}

            {/* Content */}
            <div className="relative h-full">{children}</div>

            {/* Inner Glow Border */}
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-transparent group-hover:ring-white/10 transition-all duration-300" />
        </div>
    );
}
