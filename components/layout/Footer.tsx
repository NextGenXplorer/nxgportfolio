"use client";

import { ArrowUp } from "lucide-react";
import siteData from "@/data/site.json";
import { Container } from "@/components/ui/Container";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-navy-900 border-t border-white/5 py-12 relative overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-heading font-bold text-white mb-2">
                            {siteData.brand.name}
                        </h3>
                        <p className="text-neutral-400 text-sm max-w-xs">
                            {siteData.brand.description}
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4">
                        <button
                            onClick={scrollToTop}
                            className="p-3 bg-white/5 hover:bg-neon-cyan hover:text-navy-900 rounded-full transition-all group"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                        <p className="text-neutral-500 text-xs">
                            © {new Date().getFullYear()} {siteData.brand.name}. All rights reserved.
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
