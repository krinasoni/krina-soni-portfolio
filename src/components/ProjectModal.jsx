import { motion, AnimatePresence } from "framer-motion";
import { 
  X,  
  CheckCircle2, 
  Cpu, 
  Layers, 
  Sparkles
} from "lucide-react";
import { 
  TravelPlannerMockup, 
  StudyAIMockup, 
  AlgoMedMockup, 
  SafeHerMockup 
} from "./ProjectMockups";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

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
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#090611]/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-3xl glass-panel rounded-3xl border border-purple-500/30 shadow-[0_20px_70px_rgba(0,0,0,0.8)] overflow-hidden z-10 bg-[#0E091A] my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full glass-panel text-[#A7A0B8] hover:text-white hover:border-purple-400 border border-purple-500/30 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header / Visual Mockup Preview */}
          <div className="w-full h-56 sm:h-64 border-b border-purple-500/20 relative">
            {renderMockup(project.mockupType)}
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-16rem)] overflow-y-auto">
            
            {/* Title & Category */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-purple-500/20 text-[#C4B5FD] border border-purple-400/30">
                  {project.category}
                </span>
                <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-[#F5F3FF] border border-purple-400/20">
                  {project.badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F3FF]">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base font-medium text-[#C4B5FD] mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Full Summary */}
            <p className="text-sm sm:text-base text-[#A7A0B8] leading-relaxed">
              {project.summary}
            </p>

            {/* Key Features */}
            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-[#C4B5FD] mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#A855F7]" />
                <span>Key Capabilities & Highlights</span>
              </h4>
              <ul className="space-y-2.5">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F3FF]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#A855F7] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architectural Overview */}
            <div className="p-4 rounded-2xl glass-panel border border-purple-500/20 bg-purple-950/20">
              <h4 className="text-xs uppercase font-mono tracking-wider text-[#C4B5FD] mb-2 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-[#A855F7]" />
                <span>Architecture & Engineering Design</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#A7A0B8] leading-relaxed">
                {project.architecture}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-[#C4B5FD] mb-2.5 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#A855F7]" />
                <span>Tech Stack & Tools</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#110B20] text-[#F5F3FF] border border-purple-500/20 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
