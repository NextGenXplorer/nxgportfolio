"use client";
import siteData from "@/data/site.json";
import { Container, Section } from "@/components/ui/Container";
import { Instagram, Youtube, Mail, Gamepad2, Linkedin, type LucideIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const iconMap: Record<string, LucideIcon> = {
    Instagram,
    Youtube,
    Mail,
    Gamepad2,
    Linkedin
};

export function Socials() {
    return (
        <Section id="contact" className="bg-obsidian-950 border-t border-white/5 overflow-hidden">
            <Container>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                            Ready to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Collaborate?</span>
                        </h2>
                        <p className="text-neutral-400 mb-10 text-lg max-w-md">
                            We are always looking for new challenges and visionary partners. Reach out and let&apos;s build the future together.
                        </p>

                        <div className="flex flex-col gap-4">
                            {siteData.socials.map((social) => {
                                const Icon = iconMap[social.icon] || Mail;
                                return (
                                    <a
                                        key={social.platform}
                                        href={social.url}
                                        target="_blank"
                                        className="group flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all hover:pl-6"
                                    >
                                        <div className="flex items-center gap-4">
                                            <Icon className="text-neutral-400 group-hover:text-white transition-colors" size={20} />
                                            <span className="text-white font-medium">{social.platform}</span>
                                        </div>
                                        <ArrowRight className="text-neutral-500 group-hover:text-violet-400 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" size={20} />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    <div className="relative h-full min-h-[400px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 blur-[100px] rounded-full opacity-50 pointer-events-none" />
                        <div className="glass-premium p-10 rounded-2xl w-full max-w-md text-center relative z-10 border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-4">Subscribe to Updates</h3>
                            <p className="text-neutral-400 text-sm mb-6">Get the latest insights on AI and WebGL experiments directly to your inbox.</p>
                            <div className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors placeholder:text-neutral-600"
                                />
                                <Button variant="shimmer" className="w-full">
                                    Join Waitlist
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
