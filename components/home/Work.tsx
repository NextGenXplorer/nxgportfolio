"use client";
import Image from "next/image";
import { useState } from "react";
import projects from "@/data/projects.json";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Work() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <Section id="work" className="bg-black relative overflow-hidden">
            {/* Tech Grid Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf615_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf615_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
            </div>

            <Container className="relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16">
                    <div>
                        <div className="inline-block mb-3 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10">
                            <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">Portfolio</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-white mb-3 md:mb-4">
                            Selected <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                                Works
                            </span>
                        </h2>
                    </div>
                    <p className="text-sm md:text-base text-neutral-400 max-w-sm md:text-right mt-2 md:mt-0 md:pb-2">
                        A curation of digital products, interactive experiences, and experimental interfaces.
                    </p>
                </div>

                {/* Mobile-First Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px] md:auto-rows-[350px]">
                    {projects.map((project, i) => (
                        <Card
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className={cn(
                                "cursor-pointer group relative overflow-hidden transition-all duration-500 hover:scale-[1.02]",
                                i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1"
                            )}
                            spotlight={true}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 bg-obsidian-900 border-none transition-transform duration-700 group-hover:scale-110">
                                {project.image && project.image !== "/placeholder-project.jpg" ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                                    />
                                ) : (
                                    <div className="w-full h-full opacity-30 bg-[radial-gradient(#2e1065_1px,transparent_1px)] [background-size:16px_16px]" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-transparent z-10" />
                            </div>

                            <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end z-20">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex gap-2">
                                            {project.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="text-[10px] uppercase tracking-wider text-violet-300 bg-violet-500/10 px-2 py-1 rounded border border-violet-500/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                                    </div>
                                    <h3 className="text-3xl font-heading font-bold text-white mb-1 group-hover:text-violet-200 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-neutral-400 line-clamp-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-75 duration-300">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
                    {selectedProject && (
                        <div className="space-y-6">
                            <div className="aspect-video bg-obsidian-900 rounded-xl overflow-hidden relative border border-white/5 shadow-2xl">
                                <div className="w-full h-full flex items-center justify-center text-white/20 relative">
                                    {selectedProject.image && selectedProject.image !== "/placeholder-project.jpg" ? (
                                        <Image
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-shimmer opacity-10" />
                                            <span className="relative z-10 font-mono text-lg tracking-widest uppercase">Preview Unavailable</span>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div>
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h3 className="text-4xl font-heading font-bold text-white mb-2">{selectedProject.title}</h3>
                                        <p className="text-violet-400 text-lg">{selectedProject.category}</p>
                                    </div>
                                    <Button variant="secondary" onClick={() => window.open(selectedProject.link, '_blank')}>
                                        Visit Site <ExternalLink size={16} className="ml-2" />
                                    </Button>
                                </div>
                                <p className="text-neutral-300 mb-8 leading-relaxed text-lg border-l-2 border-violet-500/50 pl-6">
                                    {selectedProject.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-400">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </Modal>
            </Container>
        </Section>
    )
}
