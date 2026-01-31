"use client";
import creativeItems from "@/data/creative.json";
import { Container, Section } from "@/components/ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";

export function Creative() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <Section id="creative" className="bg-black py-32 relative overflow-hidden" ref={sectionRef}>
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-orange-900/5 to-transparent" />

            <Container>
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-[1px] w-12 bg-white/20" />
                            <span className="text-white/40 font-mono text-xs uppercase tracking-[0.3em]">Experimental</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tighter-refined">
                            CREATIVE <span className="orange-text">PLAYGROUND</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 max-w-sm text-sm md:text-base mb-2">
                        A curation of visual research, motion studies, and architectural prototypes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div style={{ y: y1 }} className="space-y-8">
                        {creativeItems.filter((_, i) => i % 3 === 0).map((item, i) => <CreativeCard key={item.id} item={item} />)}
                    </motion.div>
                    <motion.div style={{ y: 0 }} className="space-y-8 md:pt-24">
                        {creativeItems.filter((_, i) => i % 3 === 1).map((item, i) => <CreativeCard key={item.id} item={item} />)}
                    </motion.div>
                    <motion.div style={{ y: y2 }} className="space-y-8">
                        {creativeItems.filter((_, i) => i % 3 === 2).map((item, i) => <CreativeCard key={item.id} item={item} />)}
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}

function CreativeCard({ item }: { item: any }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden bg-black border border-white/5 shadow-2xl transform-gpu will-change-transform"
        >
            <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                    src={creativeImage(item.src)}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100 will-change-transform"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Interaction Indicator */}
                <div className="absolute top-6 right-6 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                    <ArrowUpRight size={18} className="text-white" />
                </div>

                {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-orange-400/20 group-hover:border-orange-400/40 transition-all">
                            <Play size={24} className="text-white fill-current translate-x-0.5" />
                        </div>
                    </div>
                )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-orange-400/70 mb-2 block">{item.type}</span>
                <h4 className="text-xl font-heading font-bold text-white tracking-tight">{item.title}</h4>
                <div className="h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-orange-400 to-transparent transition-all duration-700 mt-4" />
            </div>
        </motion.div>
    );
}

function creativeImage(src: string) {
    if (src && src !== "/placeholder-art.jpg" && !src.endsWith(".mp4")) return src;
    return "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1974&auto=format&fit=crop";
}
