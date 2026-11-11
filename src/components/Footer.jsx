import { ArrowUp, Heart, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-purple-500/15 bg-[#07040D] py-14 overflow-hidden">
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/50 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand & Signature */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#C4B5FD] p-[1px]">
                <div className="w-full h-full bg-[#090611] rounded-[7px] flex items-center justify-center">
                  <span className="text-xs font-bold text-gradient">KS</span>
                </div>
              </div>
              <span className="text-base font-bold text-[#F5F3FF]">Krina Soni</span>
            </div>
            
            <p className="text-xs sm:text-sm text-[#A7A0B8]">
              Designed &amp; Developed with <Heart className="w-3.5 h-3.5 text-rose-400 inline mx-0.5 fill-rose-400" /> by <span className="text-[#F5F3FF] font-medium">Krina Soni</span>
            </p>
            <p className="text-[11px] text-[#A7A0B8]/60">
              © {currentYear} Krina Soni. All rights reserved. • Dublin, Ireland
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/krinasoni"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full glass-panel text-[#C4B5FD] hover:text-white hover:border-purple-400 border border-purple-500/20 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/krina-soni-8599992a5"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full glass-panel text-[#C4B5FD] hover:text-white hover:border-purple-400 border border-purple-500/20 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-purple-500/25 text-xs font-medium text-[#C4B5FD] hover:text-white hover:border-purple-400 transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
