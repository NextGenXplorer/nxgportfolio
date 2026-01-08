"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import siteData from "@/data/site.json";
import { Container } from "@/components/ui/Container";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const handleNavClick = (href: string) => {
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 py-3 md:py-4 shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)]"
                    : "bg-transparent py-4 md:py-6"
            )}
        >
            {/* Tech Grid Background (when scrolled) */}
            {scrolled && (
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e910_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e910_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
            )}

            <Container className="flex items-center justify-between relative z-10">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 z-50 relative group">
                    <div className="absolute -inset-2 bg-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative w-10 h-10 md:w-12 md:h-12">
                        <Image src="/logo.png" alt="NextGenX Logo" fill className="object-contain" />
                        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-500/50" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-500/50" />
                        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-cyan-500/50" />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-500/50" />
                    </div>

                    <div className="flex flex-col">
                        <span className="font-heading text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                            Next<span className="text-cyan-400">GenX</span>
                        </span>
                        <span className="text-[8px] md:text-[10px] text-cyan-400/60 font-mono uppercase tracking-widest">
                            Tech Innovation
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {siteData.nav.map((item) => {
                        const isHashLink = item.href.startsWith('#');

                        if (isHashLink) {
                            return (
                                <button
                                    key={item.label}
                                    onClick={() => handleNavClick(item.href)}
                                    className="relative px-4 py-2 text-sm font-medium text-neutral-400 hover:text-cyan-400 transition-colors group"
                                >
                                    <span className="relative z-10">{item.label}</span>
                                    <div className="absolute inset-0 bg-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 group-hover:w-full transition-all duration-300" />
                                </button>
                            );
                        }

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="relative px-4 py-2 text-sm font-medium text-neutral-400 hover:text-cyan-400 transition-colors group"
                            >
                                <span className="relative z-10">{item.label}</span>
                                <div className="absolute inset-0 bg-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 group-hover:w-full transition-all duration-300" />
                            </Link>
                        );
                    })}

                    {/* CTA Button */}
                    <button
                        onClick={() => handleNavClick('#contact')}
                        className="ml-4 px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-sm font-bold hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.6)] transition-all duration-300 relative overflow-hidden group"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <Zap size={16} />
                            Contact
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-50 p-2 text-white relative group"
                    aria-label="Toggle Menu"
                >
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    {isOpen ? <X size={24} className="relative z-10" /> : <Menu size={24} className="relative z-10" />}
                </button>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
                                onClick={() => setIsOpen(false)}
                            />

                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed right-0 top-0 bottom-0 w-[280px] bg-black border-l-2 border-cyan-500/30 z-40 md:hidden overflow-y-auto"
                            >
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e910_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e910_1px,transparent_1px)] bg-[size:2rem_2rem]" />

                                <div className="relative z-10 flex flex-col p-6 pt-24 space-y-2">
                                    {siteData.nav.map((item) => {
                                        const isHashLink = item.href.startsWith('#');

                                        if (isHashLink) {
                                            return (
                                                <button
                                                    key={item.label}
                                                    onClick={() => {
                                                        handleNavClick(item.href);
                                                        setIsOpen(false);
                                                    }}
                                                    className="relative px-4 py-3 text-lg font-heading font-medium text-white hover:text-cyan-400 transition-colors group rounded-lg text-left"
                                                >
                                                    <span className="relative z-10">{item.label}</span>
                                                    <div className="absolute inset-0 bg-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 bg-cyan-500 group-hover:w-1 group-hover:h-full transition-all duration-300 rounded-r" />
                                                </button>
                                            );
                                        }

                                        return (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="relative px-4 py-3 text-lg font-heading font-medium text-white hover:text-cyan-400 transition-colors group rounded-lg"
                                            >
                                                <span className="relative z-10">{item.label}</span>
                                                <div className="absolute inset-0 bg-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 bg-cyan-500 group-hover:w-1 group-hover:h-full transition-all duration-300 rounded-r" />
                                            </Link>
                                        );
                                    })}

                                    <button
                                        onClick={() => {
                                            handleNavClick('#contact');
                                            setIsOpen(false);
                                        }}
                                        className="mt-4 px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-center font-bold shadow-[0_0_30px_-5px_rgba(6,182,212,0.6)] relative overflow-hidden group"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            <Zap size={18} />
                                            Get in Touch
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                    </button>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </Container>
        </header>
    );
}
