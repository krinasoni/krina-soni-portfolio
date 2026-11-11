import { useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Award,
  Sparkles,
  BookOpen
} from "lucide-react";
import { educationData, trainingData } from "../data/timelineData";

export default function EducationExperience() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section id="education" className="relative py-28 overflow-hidden bg-[#090611]/50">
      {/* Background ambient lighting */}
      <div
        className="nebula-glow w-[550px] h-[550px] bg-[#8B5CF6]/10 top-1/4 left-1/3"
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
            <Award className="w-3.5 h-3.5 text-[#A855F7]" />
            <span>Academic & Professional Growth</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Education & <span className="text-gradient-purple">Specialized Training.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#A7A0B8] leading-relaxed"
          >
            A cohesive trajectory of academic rigor in Computing Science coupled with intensive full-stack and mobile engineering training programs.
          </motion.p>
        </div>

        {/* Two-Column Grid: Left Education, Right Training */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* COLUMN 1: Academic Education */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-purple-500/20">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-400/30 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-[#C4B5FD]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#F5F3FF]">Academic Credentials</h3>
                <span className="text-xs text-[#A855F7] font-medium">Higher Education Timeline</span>
              </div>
            </div>

            {/* Vertical Glowing Timeline */}
            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-[#8B5CF6] before:via-[#A855F7] before:to-purple-900/40">
              {educationData.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative group"
                >
                  {/* Glowing Node on Timeline */}
                  <div className="absolute -left-[30px] sm:-left-[38px] top-1.5 w-4 h-4 rounded-full bg-[#090611] border-2 border-[#A855F7] flex items-center justify-center shadow-[0_0_12px_#A855F7] group-hover:scale-125 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C4B5FD]" />
                  </div>

                  {/* Card */}
                  <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-purple-500/20 bg-[#0E0A1A]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/20 text-[#C4B5FD] border border-purple-400/30">
                        {item.period}
                      </span>
                      <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {item.status}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#F5F3FF] group-hover:text-white transition-colors">
                      {item.degree}
                    </h4>

                    <div className="flex items-center gap-2 text-xs font-semibold text-[#A855F7] mt-1 mb-3">
                      <span>{item.institution}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[#C4B5FD]">
                        <MapPin className="w-3 h-3 text-[#A855F7]" />
                        {item.location}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A7A0B8] leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-purple-500/10">
                      {item.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-purple-950/40 text-[#C4B5FD] border border-purple-500/15"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Experience & Training */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-purple-500/20">
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-400/30 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#C4B5FD]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#F5F3FF]">Specialized Training</h3>
                <span className="text-xs text-[#A855F7] font-medium">Hands-On Development Bootcamps</span>
              </div>
            </div>

            {/* Vertical Glowing Timeline for Training */}
            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-[#A855F7] before:via-[#8B5CF6] before:to-purple-900/40">
              {trainingData.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative group"
                >
                  {/* Glowing Node on Timeline */}
                  <div className="absolute -left-[30px] sm:-left-[38px] top-1.5 w-4 h-4 rounded-full bg-[#090611] border-2 border-[#8B5CF6] flex items-center justify-center shadow-[0_0_12px_#8B5CF6] group-hover:scale-125 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
                  </div>

                  {/* Card */}
                  <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-purple-500/20 bg-[#0E0A1A]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-violet-500/20 text-[#C4B5FD] border border-violet-400/30">
                        Duration: {item.duration}
                      </span>
                      <span className="text-xs font-semibold text-[#C4B5FD] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#A855F7]" />
                        {item.type}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#F5F3FF] group-hover:text-white transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#A7A0B8] leading-relaxed my-3">
                      {item.description}
                    </p>

                    <div className="pt-3 border-t border-purple-500/10">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#A855F7] block mb-2">
                        Technologies Mastered
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] px-2.5 py-1 rounded-md bg-[#110B20] text-[#F5F3FF] border border-purple-500/20 font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Informative Note */}
              <div className="p-4 rounded-2xl glass-panel border border-purple-500/15 bg-purple-950/10">
                <p className="text-xs text-[#A7A0B8] leading-relaxed flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#C4B5FD] flex-shrink-0 mt-0.5" />
                  <span>
                    Training entries reflect verified intensive hands-on development programs. Continuous personal project shipping and research continue alongside Master's studies in Dublin.
                  </span>
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
