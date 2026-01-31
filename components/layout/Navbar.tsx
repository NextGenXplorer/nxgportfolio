"use client";

import { useRouter, usePathname } from "next/navigation";
import { Component as CircularMenu, CommandItem } from "@/components/ui/circular-command-menu";
import { Info, Briefcase, Palette, Users, Mail, Home } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const { scrollY } = useScroll();

    const headerBg = useTransform(scrollY, [0, 100], ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]);
    const headerBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]);
    const headerBorder = useTransform(scrollY, [0, 100], ["rgba(255, 140, 0, 0)", "rgba(255, 140, 0, 0.2)"]);

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
            id: "home",
            label: "Launch",
            icon: <Home size={18} />,
            onClick: () => handleNavigation("/")
        },
        {
            id: "about",
            label: "Systems",
            icon: <Info size={18} />,
            onClick: () => handleNavigation("#about")
        },
        {
            id: "work",
            label: "Projects",
            icon: <Briefcase size={18} />,
            onClick: () => handleNavigation("#work")
        },
        {
            id: "creative",
            label: "Lab",
            icon: <Palette size={18} />,
            onClick: () => handleNavigation("#creative")
        },
        {
            id: "team",
            label: "Nodes",
            icon: <Users size={18} />,
            onClick: () => handleNavigation("/team")
        },
    ];

    return (
        <>
            <motion.header 
                style={{ 
                    backgroundColor: headerBg, 
                    backdropFilter: headerBlur,
                    borderBottomColor: headerBorder 
                }}
                className="fixed top-0 w-full z-40 py-4 px-6 border-b border-transparent transition-colors duration-300"
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div
                        onClick={() => handleNavigation('/')}
                        className="flex items-center gap-4 relative group cursor-pointer"
                    >
                        <div className="relative w-10 h-10 flex items-center justify-center">
                            <div className="absolute inset-0 bg-orange-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 p-[1px]">
                                <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center overflow-hidden">
                                    <span className="text-white font-heading font-black text-sm">X</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <span className="font-heading text-xl font-bold tracking-tighter text-white group-hover:text-orange-400 transition-colors">
                                NEXTGEN<span className="text-orange-400">X</span>
                            </span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={item.onClick}
                                className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 hover:text-orange-400 transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </motion.header>

            {/* Bottom Right Navigation for Mobile/Interactive */}
            <div className="fixed bottom-8 right-8 z-50 md:hidden">
                <CircularMenu
                    items={navItems}
                    radius={120}
                    startAngle={180}
                    endAngle={270}
                />
            </div>
        </>
    );
}
