import { motion } from "framer-motion";
import { GraduationCap, Code, Sparkles, Compass, Lightbulb, MapPin, Cpu, Layers } from "lucide-react";

export default function About() {
  const highlightCards = [
    {
      icon: GraduationCap,
      title: "Master's in Dublin, Ireland",
      subtitle: "Griffith College Dublin",
      description: "Pursuing advanced Computing Science, exploring cloud systems, distributed software, and scalable modern web platforms.",
      glow: "from-purple-500/20 to-indigo-500/10",
      accent: "#A855F7",
    },
    {
      icon: Code,
      title: "Full Stack & Mobile",
      subtitle: "Web & Native Ecosystems",
      description: "Crafting end-to-end applications with React, Node.js, Flutter, Kotlin, and Firebase with attention to performance and UX.",
      glow: "from-violet-500/20 to-fuchsia-500/10",
      accent: "#8B5CF6",
    },
    {
      icon: Cpu,
      title: "AI & Emerging Tech",
      subtitle: "LLMs, RAG & Automations",
      description: "Integrating intelligent AI workflows and retrieval-augmented systems to transform everyday software utility.",
      glow: "from-fuchsia-500/20 to-purple-500/10",
      accent: "#C4B5FD",
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solver",
      subtitle: "Human-Centric Engineering",
      description: "Passionate about turning abstract ideas into intuitive, elegant, and maintainable software experiences.",
      glow: "from-purple-500/20 to-pink-500/10",
      accent: "#EC4899",
    },
  ];

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="nebula-glow w-[550px] h-[550px] bg-[#8B5CF6]/10 top-1/3 -right-24"
        aria-hidden="true"
      />
      <div
        className="nebula-glow w-[450px] h-[450px] bg-[#A855F7]/10 -bottom-20 -left-20"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 text-xs font-medium text-[#C4B5FD] mb-4"
          >
            <Compass className="w-3.5 h-3.5 text-[#A855F7]" />
            <span>Discover The Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            A little about <span className="text-gradient-purple">my journey.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#A7A0B8] leading-relaxed"
          >
            From the foundational mechanics of Information Technology to advanced computing research in Dublin, my path is driven by continuous learning and the thrill of digital creation.
          </motion.p>
        </div>

        {/* Narrative & Floating Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Narrative Text Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-purple-500/20 relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-[#8B5CF6]/15 blur-3xl pointer-events-none group-hover:bg-[#8B5CF6]/25 transition-all duration-500" />
              
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C4B5FD] uppercase tracking-wider mb-4">
                <MapPin className="w-4 h-4 text-[#A855F7]" />
                <span>Dublin, Ireland & Global Horizons</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F3FF] leading-snug mb-5">
                Bridging analytical logic with creative digital craft.
              </h3>

              <div className="space-y-4 text-[#A7A0B8] text-base leading-relaxed">
                <p>
                  My fascination with technology began with curiosity: understanding not just how computers execute code, but how software can meaningfully connect and empower people. That spark guided me through a Diploma and a Bachelor's degree in Information Technology, where I built a rock-solid grasp of algorithms, databases, and software fundamentals.
                </p>
                <p>
                  Today, I am expanding my horizons in <span className="text-[#F5F3FF] font-medium">Dublin, Ireland</span>, pursuing my <span className="text-[#C4B5FD] font-semibold">Master's in Computing Science at Griffith College Dublin</span>. Living and studying in one of Europe's premier technology centers has enriched my technical perspective with global collaboration, distributed engineering practices, and cutting-edge paradigms.
                </p>
                <p>
                  Whether I am architecting full-stack web applications with <span className="text-[#C4B5FD]">React & Node.js</span>, crafting smooth mobile journeys with <span className="text-[#C4B5FD]">Flutter & Jetpack Compose</span>, or experimenting with intelligent <span className="text-[#C4B5FD]">AI & RAG systems</span>, I treat every project as an opportunity to build something purposeful, robust, and memorable.
                </p>
              </div>

              {/* Decorative mini bar */}
              <div className="mt-8 pt-6 border-t border-purple-500/15 flex items-center justify-between text-xs text-[#A7A0B8]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>Always curious, continuously shipping</span>
                </div>
                <span className="font-mono text-[#C4B5FD]">EST. 2020 — PRESENT</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Interactive Floating Pillar Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlightCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="glass-panel glass-panel-hover rounded-2xl p-6 border border-purple-500/20 relative group overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-purple-400/25 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                        style={{ backgroundColor: `${card.accent}15` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: card.accent }} />
                      </div>
                      <h4 className="text-lg font-bold text-[#F5F3FF] group-hover:text-white transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-xs font-semibold text-[#A855F7] mt-0.5 mb-3">
                        {card.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-[#A7A0B8] leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
