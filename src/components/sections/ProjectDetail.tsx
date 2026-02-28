import React from "react";
import { Project } from "@/types";
import { BentoCard } from "@/components/ui/BentoCard";
import { CompareSlider } from "@/components/ui/CompareSlider";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar, User } from "lucide-react";
import { motion } from "motion/react";
import Image from "@/components/ui/Image";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
        <ArrowLeft className="h-4 w-4" /> BACK TO PROJECTS
      </Link>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
            {/* Compare Slider */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <CompareSlider 
                    renderUrl={project.renderUrl} 
                    wireframeUrl={project.wireframeUrl} 
                    alt={project.title} 
                />
            </motion.div>

            {/* Video Player Section */}
            {project.videoUrl && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="relative aspect-video w-full overflow-hidden rounded-3xl border border-border-subtle bg-card shadow-2xl"
                >
                    <iframe
                        src={project.videoUrl}
                        title={`${project.title} Video`}
                        className="absolute inset-0 h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </motion.div>
            )}
        </div>

        {/* Project Details Sidebar */}
        <div className="space-y-6">
            <BentoCard className="bg-card">
                <div className="space-y-6">
                    <div>
                        <span className="mb-2 inline-block rounded-md bg-brand-dark dark:bg-brand-main px-3 py-1 text-xs font-bold uppercase text-white dark:text-black">
                            {project.category}
                        </span>
                        <h1 className="font-display text-3xl font-bold text-text-main md:text-4xl">{project.title}</h1>
                    </div>

                    <p className="text-lg text-text-muted leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tools.map(tool => (
                            <span key={tool} className="rounded-md border border-border-subtle bg-page px-3 py-1 text-xs font-medium text-text-muted">
                                {tool}
                            </span>
                        ))}
                    </div>

                    <div className="space-y-4 border-t border-border-subtle pt-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-text-muted">
                                <Calendar className="h-4 w-4" />
                                <span className="text-sm">Year</span>
                            </div>
                            <span className="font-bold text-text-main">2023</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-text-muted">
                                <User className="h-4 w-4" />
                                <span className="text-sm">Client</span>
                            </div>
                            <span className="font-bold text-text-main">Personal Project</span>
                        </div>
                    </div>

                    {project.link && (
                        <a 
                            href={project.link} 
                            target="_blank" 
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-text-main py-4 font-bold text-page transition-transform hover:scale-[1.02]"
                        >
                            LIVE PREVIEW <ExternalLink className="h-4 w-4" />
                        </a>
                    )}
                </div>
            </BentoCard>
        </div>
      </div>
    </div>
  );
}
