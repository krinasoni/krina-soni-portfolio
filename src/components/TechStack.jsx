import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Server, 
  Smartphone, 
  Cpu, 
  Terminal, 
  Layers, 
  Database, 
  Sparkles,
  GitBranch,
  ShieldCheck,
  Zap
} from "lucide-react";
import { skillsData } from "../data/skillsData";

// Custom recognizable SVG icons for tech stack
const TechIcon = ({ name, className = "w-6 h-6" }) => {
  switch (name.toLowerCase()) {
    case "react.js":
      return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="#61DAFB">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case "javascript":
      return (
        <svg className={className} viewBox="0 0 630 630">
          <rect width="630" height="630" fill="#F7DF1E"/>
          <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-33.8 21.6c-11.85-21.15-24.5-29.2-50.3-29.2-22.84 0-35.1 11-35.1 26.2 0 18.2 13.5 24.96 38.9 35.95l14.8 6.35c49.9 21.57 76.5 43.6 76.5 93 0 53.3-41.9 83.3-95.2 83.3-53.7 0-88.8-27.9-106.6-63.5zm-177.3 3.4c8.46 15.23 16.1 28.34 35.1 28.34 18.19 0 30-7.6 30-37.2v-177.6h46.94v178.5c0 53.7-31.72 77.8-74.45 77.8-39.75 0-63.44-20.3-74.87-44.8z" fill="#000"/>
        </svg>
      );
    case "html5":
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none">
          <path fill="#E34F26" d="M71 460L30 0h452l-41 460-185 52z"/>
          <path fill="#EF652A" d="M256 472l149-41 35-391H256z"/>
          <path fill="#EBEBEB" d="M256 208h-74l-5-57h79V95H112l15 170h129zm0 152l-67-18-4-49h-57l8 97 120 33z"/>
          <path fill="#FFF" d="M256 208v-56h79l7-57H256V38h144l-14 170zm0 152v57l68-19 9-97h-57l-4 49z"/>
        </svg>
      );
    case "css3":
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none">
          <path fill="#1572B6" d="M71 460L30 0h452l-41 460-185 52z"/>
          <path fill="#33A9DC" d="M256 472l149-41 35-391H256z"/>
          <path fill="#EBEBEB" d="M256 208h-74l-5-57h79V95H112l15 170h129zm0 152l-67-18-4-49h-57l8 97 120 33z"/>
          <path fill="#FFF" d="M256 208v-56h79l7-57H256V38h144l-14 170zm0 152v57l68-19 9-97h-57l-4 49z"/>
        </svg>
      );
    case "redux":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#764ABC">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-9l7 4.5-7 4.5z"/>
        </svg>
      );
    case "flutter":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#02569B">
          <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zm-.014 11.072L7.857 17.5 14.3 23.945h7.385l-6.442-6.445 6.442-6.428h-7.385z"/>
        </svg>
      );
    case "kotlin":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#7F52FF">
          <path d="M24 24H0V0h24L12 12Z"/>
        </svg>
      );
    case "nodejs":
    case "node.js":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#339933">
          <path d="M12 2L3 7.2v10.4L12 22.8l9-5.2V7.2L12 2zm0 2.3l6.7 3.9-6.7 3.9-6.7-3.9L12 4.3z"/>
        </svg>
      );
    case "mongodb":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#47A248">
          <path d="M12 0s-5.6 4.3-5.6 11.4c0 4.6 2.6 8.7 5.6 12.6 3-3.9 5.6-8 5.6-12.6C17.6 4.3 12 0 12 0zm-.1 18.2c-.3 0-.6-.3-.6-.6V4.4c0-.3.3-.6.6-.6s.6.3.6.6v13.2c0 .3-.3.6-.6.6z"/>
        </svg>
      );
    case "sql":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#00758F">
          <path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.41 0 8 1.34 8 2s-3.59 2-8 2-8-1.34-8-2 3.59-2 8-2zm0 6c4.41 0 8 1.34 8 2s-3.59 2-8 2-8-1.34-8-2 3.59-2 8-2zm0 6c4.41 0 8 1.34 8 2s-3.59 2-8 2-8-1.34-8-2 3.59-2 8-2z"/>
        </svg>
      );
    case "firebase":
    case "firebase auth":
    case "firestore":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#FFCA28">
          <path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l3.543 6.643-6.923 8.741zm15.772 3.538l-1.92-11.895a.543.543 0 0 0-.928-.278L3.257 20.315l8.118 4.56a1.358 1.358 0 0 0 1.25 0l7.037-5.665z"/>
        </svg>
      );
    case "git":
    case "github":
      return <GitBranch className={className} style={{ color: "#F05032" }} />;
    case "ai integration":
    case "rag":
      return <Sparkles className={className} style={{ color: "#A855F7" }} />;
    default:
      return <Code2 className={className} style={{ color: "#8B5CF6" }} />;
  }
};

const CATEGORIES = [
  { id: "all", label: "All Technologies", icon: Layers },
  { id: "frontend", label: "Frontend", icon: Code2 },
  { id: "backend", label: "Backend & Databases", icon: Server },
  { id: "mobile", label: "Mobile Development", icon: Smartphone },
  { id: "other", label: "DevOps, APIs & AI", icon: Cpu },
];

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const getAllSkills = () => {
    return [
      ...skillsData.frontend,
      ...skillsData.backend,
      ...skillsData.mobile,
      ...skillsData.other,
    ];
  };

  const currentSkills =
    selectedCategory === "all"
      ? getAllSkills()
      : skillsData[selectedCategory] || [];

  return (
    <section id="skills" className="relative py-28 overflow-hidden bg-[#090611]/60">
      {/* Background Glow */}
      <div
        className="nebula-glow w-[500px] h-[500px] bg-[#8B5CF6]/12 top-20 left-10"
        aria-hidden="true"
      />
      <div
        className="nebula-glow w-[500px] h-[500px] bg-[#A855F7]/12 bottom-10 right-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 text-xs font-medium text-[#C4B5FD] mb-4"
          >
            <Zap className="w-3.5 h-3.5 text-[#A855F7]" />
            <span>Interactive Tech Matrix</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Technologies <span className="text-gradient-purple">I build with.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#A7A0B8] leading-relaxed"
          >
            A curated stack spanning modern frontend architectures, robust server microservices, native and cross-platform mobile apps, and intelligent AI workflows.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                  isSelected
                    ? "bg-gradient-to-r from-[#8B5CF6]/30 via-[#A855F7]/30 to-[#8B5CF6]/30 border-purple-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.35)] scale-105"
                    : "glass-panel border-purple-500/20 text-[#A7A0B8] hover:text-white hover:border-purple-500/40"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-[#C4B5FD]" : "text-[#A7A0B8]"}`} />
                <span>{cat.label}</span>
                {isSelected && (
                  <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded-full bg-purple-500/30 text-[#C4B5FD]">
                    {currentSkills.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {currentSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="group relative glass-panel glass-panel-hover rounded-2xl p-5 border border-purple-500/20 overflow-hidden flex flex-col justify-between"
              >
                {/* Ambient glow on hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#110B20] border border-purple-500/20 flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-110 shadow-inner group-hover:border-purple-400/50">
                      <TechIcon name={skill.name} className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-400/25 text-[#C4B5FD]">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#F5F3FF] group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-[11px] font-medium text-[#A855F7] mb-2">
                    {skill.category}
                  </p>
                  <p className="text-xs text-[#A7A0B8] leading-relaxed line-clamp-2">
                    {skill.description}
                  </p>
                </div>

                <div className="relative z-10 pt-4 mt-3 border-t border-purple-500/10 flex items-center justify-between text-[11px] text-[#A7A0B8]">
                  <span className="group-hover:text-[#C4B5FD] transition-colors">Production Ready</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] group-hover:shadow-[0_0_8px_#A855F7] transition-all" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Quality Highlight Note */}
        <div className="mt-14 text-center">
          <p className="text-xs text-[#A7A0B8]/80 max-w-xl mx-auto flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C4B5FD]" />
            <span>Focused on clean architecture, type safety, modular design systems, and maintainable software engineering.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
