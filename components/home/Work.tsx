"use client";
import Image from "next/image";
import { useState } from "react";
import projects from "@/data/projects.json";
import { Container, Section } from "@/components/ui/Container";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                >
                    <div className="inline-block mb-4 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10">
                        <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">Portfolio</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-white mb-4">
                        Selected{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                            Works
                        </span>
                    </h2>
                    <p className="text-sm md:text-base text-neutral-400">
                        A curation of digital products, interactive experiences, and experimental interfaces.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedProject(project)}
                            className="group cursor-pointer relative"
                        >
                            {/* Card Container */}
                            <div className="relative h-[400px] rounded-xl overflow-hidden border-2 border-cyan-500/20 bg-black hover:border-cyan-500/50 transition-all duration-500 shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_-5px_rgba(6,182,212,0.6)]">

                                {/* Corner Brackets */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 z-20" />
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/50 z-20" />
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/50 z-20" />
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50 z-20" />

                                {/* Animated Border */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

                                {/* Image */}
                                <div className="absolute inset-0">
                                    {project.image && project.image !== "/placeholder-project.jpg" ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-violet-500/10" />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                                </div>

                                {/* Scan Line Effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-32 opacity-0 group-hover:opacity-100 group-hover:translate-y-full transition-all duration-1000" />

                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                                    {/* Tags */}
                                    <div className="flex gap-2 mb-3 flex-wrap">
                                        {project.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="text-[10px] uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/30 font-mono">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-neutral-400 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {project.description}
                                    </p>

                                    {/* View Button */}
                                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span>View Project</span>
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>

            {/* Modal */}
            <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
                {selectedProject && (
                    <div className="space-y-6">
                        {selectedProject.image && selectedProject.image !== "/placeholder-project.jpg" && (
                            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden border-2 border-cyan-500/30">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-white mb-4">{selectedProject.title}</h2>
                            <p className="text-neutral-400 mb-6">{selectedProject.description}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {selectedProject.tags.map(tag => (
                                    <span key={tag} className="text-xs uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded border border-cyan-500/30">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                {selectedProject.links.live && (
                                    <Button variant="shimmer" size="lg" onClick={() => window.open(selectedProject.links.live, '_blank')}>
                                        <ExternalLink size={18} className="mr-2" />
                                        Live Demo
                                    </Button>
                                )}
                                {selectedProject.links.github && (
                                    <Button variant="ghost" size="lg" className="border-cyan-500/30 text-cyan-400" onClick={() => window.open(selectedProject.links.github, '_blank')}>
                                        <Github size={18} className="mr-2" />
                                        Source Code
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </Section>
    );
}
