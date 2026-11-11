import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FolderGit2, 
  ExternalLink, 
  Maximize2, 
  Sparkles, 
  Layers,
  ArrowUpRight 
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { projectsData } from "../data/projectsData";
import { 
  TravelPlannerMockup, 
  StudyAIMockup, 
  AlgoMedMockup, 
  SafeHerMockup 
} from "./ProjectMockups";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredProjects = projectsData.filter((p) => {
    if (filter === "all") return true;
    if (filter === "ai") return p.category.includes("AI") || p.badge.includes("AI") || p.technologies.some(t => t.includes("AI") || t.includes("NLP") || t.includes("LLM"));
    if (filter === "mobile") return p.category.includes("Mobile") || p.category.includes("Android") || p.category.includes("iOS");
    return true;
  });

  const renderMockup = (type) => {
    switch (type) {
      case "travel":
        return <TravelPlannerMockup />;
      case "studyai":
        return <StudyAIMockup />;
      case "algomed":
        return <AlgoMedMockup />;
      case "safeher":
        return <SafeHerMockup />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="nebula-glow w-[600px] h-[600px] bg-[#8B5CF6]/12 top-10 right-0"
        aria-hidden="true"
      />
      <div
        className="nebula-glow w-[500px] h-[500px] bg-[#A855F7]/12 bottom-0 left-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 text-xs font-medium text-[#C4B5FD] mb-4"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-[#A855F7]" />
            <span>Portfolio Showcase</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Featured <span className="text-gradient-purple">Projects.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#A7A0B8] leading-relaxed"
          >
            Carefully engineered applications combining aesthetic user interfaces, resilient server architectures, and impactful problem-solving.
          </motion.p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === "all"
                  ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                  : "glass-panel text-[#A7A0B8] hover:text-white"
              }`}
            >
              All Work ({projectsData.length})
            </button>
            <button
              onClick={() => setFilter("ai")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === "ai"
                  ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                  : "glass-panel text-[#A7A0B8] hover:text-white"
              }`}
            >
              AI & Intelligent Systems
            </button>
            <button
              onClick={() => setFilter("mobile")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === "mobile"
                  ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                  : "glass-panel text-[#A7A0B8] hover:text-white"
              }`}
            >
              Mobile & Native Apps
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group glass-panel rounded-3xl border border-purple-500/20 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-purple-400/40 hover:shadow-[0_15px_50px_rgba(139,92,246,0.25)] bg-[#0C0817]"
            >
              {/* Visual Mockup Preview Header */}
              <div 
                className="relative h-56 sm:h-64 w-full overflow-hidden border-b border-purple-500/20 cursor-pointer"
                onClick={() => setSelectedProject(project)}
                title="Click to view deep dive details"
              >
                {renderMockup(project.mockupType)}
                
                {/* Overlay hover prompt */}
                <div className="absolute inset-0 bg-[#090611]/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-xs">
                  <div className="px-4 py-2 rounded-full glass-panel border border-purple-400/50 flex items-center gap-2 shadow-lg">
                    <Maximize2 className="w-4 h-4 text-[#C4B5FD]" />
                    <span>View System Details</span>
                  </div>
                </div>
              </div>

              {/* Content Information */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/15 text-[#C4B5FD] border border-purple-400/20">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-semibold text-[#A855F7]">
                      {project.badge}
                    </span>
                  </div>

                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="text-xl sm:text-2xl font-bold text-[#F5F3FF] group-hover:text-white transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#A7A0B8] group-hover:text-[#C4B5FD] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>

                  <p className="text-xs font-medium text-[#C4B5FD] mt-0.5 mb-2.5">
                    {project.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#A7A0B8] leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-[#110B20] text-[#E0D8F0] border border-purple-500/20 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-[11px] px-2 py-1 rounded-md bg-purple-500/10 text-[#C4B5FD] border border-purple-500/20">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl glass-panel text-[#C4B5FD] hover:text-white hover:border-purple-400 border border-purple-500/20 transition-all hover:scale-105"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl glass-panel text-[#C4B5FD] hover:text-white hover:border-purple-400 border border-purple-500/20 transition-all hover:scale-105"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-[#C4B5FD] hover:text-white flex items-center gap-1 group-hover:underline underline-offset-4"
                  >
                    <span>Read Details</span>
                    <span>→</span>
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal deep dive */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
