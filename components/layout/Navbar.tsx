"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "glass border-white/5 py-3 md:py-4" : "bg-transparent py-4 md:py-6"
            )}
        >
            <Container className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50 relative">
                    <div className="relative w-8 h-8 md:w-10 md:h-10">
                        <Image src="/logo.png" alt="NextGenX Logo" fill className="object-contain" />
                    </div>
                    <span className="font-heading text-lg md:text-xl font-bold tracking-tight text-white">
                        Next<span className="text-neon-cyan">GenX</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                    {siteData.nav.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-neutral-400 hover:text-neon-cyan transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-50 p-2 text-white relative"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                                onClick={() => setIsOpen(false)}
                            />

                            {/* Menu Panel */}
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed right-0 top-0 bottom-0 w-[280px] bg-obsidian-950 border-l border-white/10 z-40 md:hidden overflow-y-auto"
                            >
                                <div className="flex flex-col p-6 pt-20 space-y-6">
                                    {siteData.nav.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-xl font-heading font-medium text-white hover:text-neon-cyan transition-colors py-2"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </Container>
        </header>
    );
}
