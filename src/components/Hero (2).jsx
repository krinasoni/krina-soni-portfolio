import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ExternalLink, Sparkles, Code2, Compass } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";


const ROLES = [
  "Full Stack Developer",
  "Mobile App Developer",
  "Creative Problem Solver",
  "Technology Enthusiast",
];

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: GithubIcon,
    href: "https://github.com/krinasoni",
    label: "Explore GitHub Repositories",
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/krina-soni-8599992a5",
    label: "Connect on LinkedIn",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/krina.codes",
    label: "Follow on Instagram",
  },
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Cosmic background ambient glow spots */}
      <div
        className="nebula-glow w-[500px] h-[500px] bg-[#8B5CF6]/15 -top-20 -left-20"
        aria-hidden="true"
      />
      <div
        className="nebula-glow w-[600px] h-[600px] bg-[#A855F7]/10 bottom-0 right-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Identity */}
          <div className="lg:col-span-10 lg:col-start-2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-purple-500/30 text-xs font-medium text-[#C4B5FD] shadow-[0_0_20px_rgba(139,92,246,0.2)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B5CF6]"></span>
              </span>
              <span>MSc Computing Science • Dublin, Ireland</span>
            </motion.div>

            {/* Name with Animated Reveal */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
              >
                <span className="text-[#F5F3FF]">KRINA </span>
                <span className="text-gradient-purple drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]">
                  SONI
                </span>
              </motion.h1>
            </div>

            {/* Cycling Dynamic Roles */}
            <div className="h-10 sm:h-12 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="flex items-center gap-2.5 text-lg sm:text-2xl font-semibold text-[#C4B5FD]"
                >
                  <Sparkles className="w-5 h-5 text-[#A855F7] flex-shrink-0" />
                  <span className="tracking-wide">{ROLES[currentRoleIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F3FF] leading-snug"
            >
              "Creating experiences. Building possibilities."
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base sm:text-lg text-[#A7A0B8] max-w-xl leading-relaxed font-normal"
            >
              I'm a software developer passionate about transforming creative ideas into meaningful digital experiences through web development, mobile applications, and emerging technologies.
            </motion.p>

            {/* Call to Actions & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full"
            >
              {/* Primary CTA: Explore My Work */}
              <button
                onClick={() => handleScrollTo("projects")}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#7C3AED] hover:from-[#9333EA] hover:to-[#6D28D9] shadow-[0_0_30px_rgba(168,85,247,0.45)] hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Compass className="w-4 h-4 text-[#F5F3FF] transition-transform group-hover:rotate-45" />
                <span>Explore My Work</span>
              </button>

              {/* Secondary CTA: Let's Connect */}
              <button
                onClick={() => handleScrollTo("contact")}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#F5F3FF] glass-panel border border-purple-400/30 hover:border-purple-300 hover:bg-purple-500/15 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                <Sparkles className="w-4 h-4 text-[#C4B5FD] transition-transform group-hover:rotate-12" />
                <span>Let's Connect</span>
              </button>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5 ml-0 lg:ml-3 pt-2 lg:pt-0">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass-panel border border-purple-500/25 text-[#C4B5FD] hover:text-[#F5F3FF] hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300 hover:scale-110 shadow-md"
                      aria-label={social.label}
                      title={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => handleScrollTo("about")}
        >
          <span className="text-[11px] tracking-widest uppercase text-[#A7A0B8] group-hover:text-[#C4B5FD] transition-colors">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border border-purple-400/30 flex items-start justify-center p-1 group-hover:border-purple-400 transition-colors">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#A855F7] shadow-[0_0_8px_#A855F7]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
