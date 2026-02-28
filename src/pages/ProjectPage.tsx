import React from "react";
import { projects } from "@/lib/data";
import { Link, useParams } from "react-router-dom";
import { ProjectDetail } from "@/components/sections/ProjectDetail";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">Project Not Found</h1>
        <Link to="/" className="mt-4 text-brand-main hover:underline">Return Home</Link>
      </div>
    );
  }

  return <ProjectDetail project={project} />;
}
