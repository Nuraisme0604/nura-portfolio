"use client";

import { ExternalLink, Github, FileText, Folder } from "lucide-react";
import { PROJECTS, type Project } from "@/constants";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-surface border border-border rounded-lg p-6 glow-hover">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Folder className="text-primary" size={24} />
          <h3 className="text-xl font-mono font-bold text-white">{project.title}</h3>
        </div>
      </div>

      <p className="text-dim mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-background border border-border text-primary text-xs font-mono rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 pt-4 border-t border-border">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-dim hover:text-primary transition-colors text-sm"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-dim hover:text-primary transition-colors text-sm"
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </a>
        )}
        {project.links.writeup && (
          <a
            href={project.links.writeup}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-dim hover:text-primary transition-colors text-sm"
          >
            <FileText size={16} />
            <span>Report</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-dim text-lg">Showcase of my security research and development work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
