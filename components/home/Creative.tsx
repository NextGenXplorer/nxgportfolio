"use client";
import creativeItems from "@/data/creative.json";
import { Container, Section } from "@/components/ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/Card";
import Image from "next/image";

export function Creative() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect for columns
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <Section id="creative" className="bg-obsidian-950 border-t border-white/5" ref={sectionRef}>
            <Container>
                <div className="text-center mb-16">
                    <span className="text-violet-500 font-mono text-xs uppercase tracking-widest mb-2 block">Playground</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Creative <span className="shimmer-text">Experiments</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <motion.div style={{ y: y1 }} className="space-y-6">
                        {creativeItems.filter((_, i) => i % 3 === 0).map((item, i) => <CreativeCard key={item.id} item={item} i={i} />)}
                    </motion.div>
                    <motion.div style={{ y: 0 }} className="space-y-6 md:pt-12">
                        {creativeItems.filter((_, i) => i % 3 === 1).map((item, i) => <CreativeCard key={item.id} item={item} i={i} />)}
                    </motion.div>
                    <motion.div style={{ y: y2 }} className="space-y-6">
                        {creativeItems.filter((_, i) => i % 3 === 2).map((item, i) => <CreativeCard key={item.id} item={item} i={i} />)}
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}

function CreativeCard({ item, i }: { item: any; i: number }) {
    return (
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full">
            <Card className="aspect-[4/5] p-0 group border-none bg-obsidian-900 cursor-pointer" spotlight={false}>
                <div className="absolute inset-0 bg-neutral-900 border-none transition-transform duration-700 group-hover:scale-110">
                    {item.src && item.src !== "/placeholder-art.jpg" && item.src !== "/placeholder-video.mp4" ? (
                        <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                        />
                    ) : (
                        <div className="w-full h-full opacity-40 bg-gradient-to-br from-violet-900/40 to-cyan-900/40 mix-blend-overlay" />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {!item.src.includes(".png") && !item.src.includes(".jpg") && (
                            <span className="text-white/10 font-bold text-4xl uppercase font-heading">{item.type}</span>
                        )}
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <h4 className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h4>
                    <p className="text-neutral-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.alt}</p>
                </div>
            </Card>
        </a>
    )
}
