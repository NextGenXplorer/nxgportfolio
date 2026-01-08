"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
    return (
        <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)} {...props}>
            {children}
        </div>
    );
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id?: string;
    children: React.ReactNode;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(({ children, className, id, ...props }, ref) => {
    return (
        <section ref={ref} id={id} className={cn("py-16 md:py-24 relative overflow-hidden", className)} {...props}>
            {children}
        </section>
    )
})
Section.displayName = "Section";
