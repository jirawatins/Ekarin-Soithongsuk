import React, { useState } from "react";
import { projects } from "@/lib/data";
import Image from "@/components/ui/Image";
import { ArrowUpRight} from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export default function Portfolio() {

    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isLoading, setIsLoading] = useState(false);

    const categories = ["All", "Modeling", "Animation"];

    const handleFilter = (category: string) => {
        if (selectedCategory === category) return;
        setIsLoading(true);
        setSelectedCategory(category);
        setTimeout(() => setIsLoading(false), 600);
    };

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter((project) => project.category === selectedCategory);

    return (
        <section id="portfolio" className="space-y-10 px-2 md:px-0 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-brand-main/20 pb-8">
                <div>
                    <h2 className="font-display text-4xl md:text-5xl font-black text-text-main tracking-tighter uppercase">The Projects</h2>
                    <p className="text-text-muted mt-2 font-medium">Select a project to view detailed breakdowns and renders.</p>
                </div>

                <div className="flex flex-wrap gap-2 bg-card/60 backdrop-blur-md p-2 rounded-2xl border border-brand-main/20 shadow-lg">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleFilter(category)}
                            disabled={isLoading}
                            className={cn(
                                "rounded-xl px-6 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300",
                                selectedCategory === category
                                    ? "bg-brand-main text-white shadow-lg shadow-brand-main/40 scale-105"
                                    : "text-text-muted hover:text-text-main hover:bg-brand-main/10",
                                isLoading && "opacity-50 cursor-not-allowed"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-[600px] flex items-center justify-center rounded-[3rem] border border-brand-main/20 bg-card/20 backdrop-blur-md"
                    >
                        <div className="flex flex-col items-center gap-6">
                            <div className="h-16 w-16 animate-spin rounded-full border-4 border-brand-main/20 border-t-brand-main shadow-[0_0_30px_rgba(163,120,181,0.5)]" />
                            <p className="text-sm font-bold text-brand-main tracking-widest uppercase animate-pulse">Initializing Assets...</p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[320px] gap-6"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                                onClick={() => navigate(`/projects/${project.id}`)}
                                className={cn(
                                    "group relative rounded-[2.5rem] overflow-hidden cursor-pointer border border-brand-main/20 bg-card/20 shadow-xl h-full w-full",
                                    project.bentoSize === "large" && "md:col-span-2 lg:col-span-2 row-span-2",
                                    project.bentoSize === "wide" && "md:col-span-2 lg:col-span-2 row-span-1",
                                    project.bentoSize === "tall" && "col-span-1 row-span-2",
                                    project.bentoSize === "small" && "col-span-1 row-span-1"
                                )}
                            >
                                <Image
                                    src={project.renderUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                                    <div className="relative z-10 w-full transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
                                        <span className="mb-3 inline-block text-[10px] font-black uppercase tracking-widest text-brand-light drop-shadow-md bg-brand-main/30 border border-brand-main/40 px-3 py-1 rounded-full backdrop-blur-sm">
                                            {project.category}
                                        </span>
                                        <h3 className="font-display text-2xl md:text-3xl font-black leading-tight text-white uppercase tracking-tight line-clamp-2 drop-shadow-lg">
                                            {project.title}
                                        </h3>
                                        <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-out mt-3">
                                            <div className="overflow-hidden">
                                                <p className="text-sm text-white/70 line-clamp-2 mb-4 font-medium leading-relaxed">
                                                    {project.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tools.slice(0, 3).map(tool => (
                                                        <span key={tool} className="text-[10px] font-bold tracking-wider text-white border border-white/20 bg-white/10 px-3 py-1.5 rounded-lg uppercase backdrop-blur-md">
                                                            {tool}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    <ArrowUpRight className="w-6 h-6 text-white" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}