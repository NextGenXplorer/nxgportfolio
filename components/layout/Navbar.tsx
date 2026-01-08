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

    // Close mobile menu on route change
    useEffect(() => {
        // eslint-disable-next-line
        setIsOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-40 transition-all duration-300 border-b border-transparent",
                scrolled ? "glass border-white/5 py-4" : "bg-transparent py-6"
            )}
        >
            <Container className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 z-50">
                    <div className="relative w-10 h-10">
                        <Image src="/logo.png" alt="NextGenX Logo" fill className="object-contain" />
                    </div>
                    <span className="font-heading text-xl font-bold tracking-tight text-white hidden sm:block">
                        Next<span className="text-neon-cyan">GenX</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
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
                    className="md:hidden z-50 p-2 text-white"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 20 }}
                            className="fixed inset-0 z-40 bg-navy-900 flex flex-col items-center justify-center space-y-8 md:hidden"
                        >
                            {siteData.nav.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-heading font-medium text-white hover:text-neon-cyan transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </header>
    );
}
