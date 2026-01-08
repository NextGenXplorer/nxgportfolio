"use client";

import { useRouter, usePathname } from "next/navigation";
import { Component as CircularMenu, CommandItem } from "@/components/ui/circular-command-menu";
import { Info, Briefcase, Palette, Users, Mail, Home } from "lucide-react";

export function Navbar() {
    const router = useRouter();
    const pathname = usePathname();

    const handleNavigation = (href: string) => {
        if (href.startsWith('#')) {
            if (pathname === '/') {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                window.location.href = `/${href}`;
            }
        } else {
            router.push(href);
        }
    };

    const navItems: CommandItem[] = [
        {
            id: "about",
            label: "About",
            icon: <Info size={20} />,
            onClick: () => handleNavigation("#about")
        },
        {
            id: "work",
            label: "Work",
            icon: <Briefcase size={20} />,
            onClick: () => handleNavigation("#work")
        },
        {
            id: "creative",
            label: "Creative",
            icon: <Palette size={20} />,
            onClick: () => handleNavigation("#creative")
        },
        {
            id: "team",
            label: "Team",
            icon: <Users size={20} />,
            onClick: () => handleNavigation("/team")
        },
        {
            id: "contact",
            label: "Contact",
            icon: <Mail size={20} />,
            onClick: () => handleNavigation("#contact")
        },
    ];

    return (
        <>
            {/* Top Header - Logo Only */}
            <header className="fixed top-0 w-full z-40 py-6 px-6 pointer-events-none">
                <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
                    <div
                        onClick={() => handleNavigation('/')}
                        className="flex items-center gap-3 relative group cursor-pointer"
                    >
                        <div className="absolute -inset-2 bg-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative w-10 h-10">
                            <img src="/logo.png" alt="NextGenX Logo" className="object-contain w-full h-full" />
                            {/* Tech Corners */}
                            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-cyan-500/50" />
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-cyan-500/50" />
                        </div>

                        <div className="flex flex-col">
                            <span className="font-heading text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                                Next<span className="text-cyan-400">GenX</span>
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Bottom Right Navigation */}
            <div className="fixed bottom-6 right-6 z-50">
                <CircularMenu
                    items={navItems}
                    radius={135}
                    startAngle={170}
                    endAngle={280}
                />
            </div>
        </>
    );
}
