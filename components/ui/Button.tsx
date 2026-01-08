"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "relative inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-500 disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
    {
        variants: {
            variant: {
                primary:
                    "bg-white text-black hover:bg-neutral-200 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]",
                secondary:
                    "bg-obsidian-800 text-white border border-white/10 hover:bg-obsidian-700 hover:border-white/20",
                shimmer:
                    "text-white border border-violet-500/50 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors animate-shimmer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
                ghost: "text-neutral-400 hover:text-white hover:bg-white/5",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-14 rounded-lg px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends Omit<HTMLMotionProps<"button">, "variant">,
    VariantProps<typeof buttonVariants> {
    children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, children, ...props }, ref) => {
        return (
            <motion.button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {/* Text Content */}
                <span className="relative z-10 flex items-center gap-2">{children}</span>

                {/* Background Glow for secondary/ghost */}
                {variant === 'secondary' && (
                    <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                )}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
