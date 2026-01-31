"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion, useSpring, useMotionValue, HTMLMotionProps } from "framer-motion";

const buttonVariants = cva(
    "relative inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden active:scale-95 group",
    {
        variants: {
            variant: {
                primary:
                    "bg-white text-black hover:bg-neutral-100 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]",
                secondary:
                    "bg-obsidian-800 text-white border border-white/10 hover:border-white/20 glass-premium",
                shimmer:
                    "text-white border border-neon-cyan/50 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors animate-shimmer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
                ghost: "text-neutral-400 hover:text-white hover:bg-white/5",
            },
            size: {
                default: "h-12 px-8 py-2 text-sm",
                sm: "h-10 px-6 py-2 text-xs",
                lg: "h-14 md:h-16 px-10 md:px-12 py-3 text-sm md:text-base tracking-widest-refined font-bold",
                icon: "h-12 w-12",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends Omit<HTMLMotionProps<"button">, "ref" | "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart">,
    VariantProps<typeof buttonVariants> { 
    isMagnetic?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, children, isMagnetic = true, ...props }, ref) => {
        const x = useMotionValue(0);
        const y = useMotionValue(0);

        const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
        const springX = useSpring(x, springConfig);
        const springY = useSpring(y, springConfig);

        const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (!isMagnetic) return;
            const { currentTarget } = e;
            const { left, top, width, height } = currentTarget.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;
            x.set(distanceX * 0.35);
            y.set(distanceY * 0.35);
        };

        const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
            x.set(0);
            y.set(0);
            if (props.onMouseLeave) {
                (props.onMouseLeave as any)(e);
            }
        };

        return (
            <motion.button
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    x: springX,
                    y: springY,
                }}
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...(props as any)}
            >
                {/* Text Content */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {children as React.ReactNode}
                </span>

                {/* Animated Shine Effect */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
