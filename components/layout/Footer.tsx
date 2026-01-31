"use client";

import { ArrowUp, Instagram, Youtube, Gamepad2, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import siteData from "@/data/site.json";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="bg-black border-t border-orange-600/20 py-24 relative overflow-hidden">
            {/* Premium Orange Accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent blur-sm" />

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                                <Image
                                    src="/logo.png"
                                    alt="NextGenX Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-heading text-2xl font-bold tracking-tighter text-white">
                                NEXTGEN<span className="text-orange-400">X</span>
                            </span>
                        </div>
                        <p className="text-gray-500 max-w-sm text-lg leading-relaxed">
                            {siteData.brand.description}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-mono text-xs uppercase tracking-[0.3em] mb-6">Network</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Architecture</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Laboratory</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Neural Grid</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-mono text-xs uppercase tracking-[0.3em] mb-6">Connect</h4>
                        <div className="flex gap-4">
                            {siteData.socials.map((social, index) => (
                                <SocialLink
                                    key={index}
                                    icon={getSocialIcon(social.icon)}
                                    href={social.url}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-gray-800/50 gap-6">
                    <p className="text-gray-600 text-xs font-mono uppercase tracking-widest">
                        © {new Date().getFullYear()} {siteData.brand.name}. FORGED IN ENERGY.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-3 text-white/40 hover:text-orange-400 transition-colors"
                    >
                        <span className="text-[10px] font-mono uppercase tracking-widest">Back to Origin</span>
                        <div className="p-3 bg-gray-900/50 group-hover:bg-orange-500/10 rounded-full border border-gray-700/50 group-hover:border-orange-500/30 transition-all">
                            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                        </div>
                    </button>
                </div>
            </Container>
        </footer>
    );
}

function SocialLink({ icon, href }: { icon: React.ReactNode, href: string }) {
    return (
        <a
            href={href}
            target={href.startsWith('http') ? '_blank' : '_self'}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="w-12 h-12 rounded-xl bg-gray-900/50 border border-gray-700/50 flex items-center justify-center text-white/50 hover:text-orange-400 hover:border-orange-500/30 transition-all group"
        >
            <div className="group-hover:scale-110 transition-transform">{icon}</div>
        </a>
    );
}

function getSocialIcon(iconName: string) {
    const size = 20;
    switch (iconName) {
        case 'Instagram':
            return <Instagram size={size} />;
        case 'Youtube':
            return <Youtube size={size} />;
        case 'Gamepad2':
            return <Gamepad2 size={size} />;
        case 'Linkedin':
            return <Linkedin size={size} />;
        case 'Mail':
            return <Mail size={size} />;
        default:
            return <Mail size={size} />;
    }
}
