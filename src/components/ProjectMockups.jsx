import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  GraduationCap, 
  BookOpen, 
  FileText, 
  Headphones, 
  PieChart, 
  CheckCircle2, 
  HelpCircle,
  Clock,
  ArrowRight,
  ShieldAlert,
  Navigation,
  HeartPulse,
  Stethoscope,
  CalendarCheck,
  MessageCircle,
  Activity
} from "lucide-react";

export function TravelPlannerMockup() {
  return (
    <div className="w-full h-full bg-[#110B20] p-4 sm:p-5 flex flex-col justify-between select-none overflow-hidden relative font-sans">
      <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="text-[11px] font-mono text-[#C4B5FD] ml-2">ai-travel-planner.app</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-[10px] text-[#F5F3FF]">
          <Sparkles className="w-3 h-3 text-[#C4B5FD]" />
          <span>AI Generator Active</span>
        </div>
      </div>

      <div className="my-3 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#A855F7]" />
            <span className="text-xs font-bold text-[#F5F3FF]">Dublin & Wild Atlantic Way</span>
          </div>
          <span className="text-[10px] font-mono text-[#A7A0B8]">Invite: #TRIP-8492</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="glass-panel p-2 rounded-lg border border-purple-500/20">
            <span className="text-[9px] text-[#A7A0B8] block">Day 1</span>
            <span className="text-[11px] font-semibold text-[#F5F3FF] truncate block">Trinity & Castles</span>
            <span className="text-[8px] text-[#A855F7]">100% Curated</span>
          </div>
          <div className="glass-panel p-2 rounded-lg border border-purple-500/20">
            <span className="text-[9px] text-[#A7A0B8] block">Day 2</span>
            <span className="text-[11px] font-semibold text-[#F5F3FF] truncate block">Cliffs of Moher</span>
            <span className="text-[8px] text-[#A855F7]">Scenic Route</span>
          </div>
          <div className="glass-panel p-2 rounded-lg border border-purple-500/20 bg-purple-500/10">
            <span className="text-[9px] text-[#C4B5FD] block">Day 3</span>
            <span className="text-[11px] font-semibold text-[#F5F3FF] truncate block">Galway Cultural</span>
            <span className="text-[8px] text-[#10B981]">Collaborative</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-purple-500/15 text-[10px] text-[#A7A0B8]">
        <div className="flex items-center gap-1.5">
          <Users className="w-3 h-3 text-[#A855F7]" />
          <span>4 Members Joined</span>
        </div>
        <div className="flex -space-x-1.5">
          <div className="w-5 h-5 rounded-full bg-purple-600 border border-[#090611] flex items-center justify-center text-[8px] font-bold">KS</div>
          <div className="w-5 h-5 rounded-full bg-indigo-600 border border-[#090611] flex items-center justify-center text-[8px] font-bold">AL</div>
          <div className="w-5 h-5 rounded-full bg-pink-600 border border-[#090611] flex items-center justify-center text-[8px] font-bold">+2</div>
        </div>
      </div>
    </div>
  );
}

export function StudyAIMockup() {
  return (
    <div className="w-full h-full bg-[#0D091B] p-4 sm:p-5 flex flex-col justify-between select-none overflow-hidden relative font-sans border-t-2 border-purple-500/50">
      <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500/30 to-violet-600/30 flex items-center justify-center border border-purple-400/40">
            <BookOpen className="w-3.5 h-3.5 text-[#C4B5FD]" />
          </div>
          <span className="text-xs font-bold text-white tracking-wide">StudyAI iOS</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-[10px] text-[#F5F3FF]">
          <Sparkles className="w-3 h-3 text-[#C4B5FD]" />
          <span>FastAPI + AI/NLP</span>
        </div>
      </div>

      <div className="my-3 space-y-2.5">
        {/* Uploaded Lecture PDF / Voice Recording Banner */}
        <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/25 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-purple-900/40 flex items-center justify-center flex-shrink-0">
              <FileText className="w-3.5 h-3.5 text-[#A855F7]" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-semibold text-[#F5F3FF] truncate block">
                Lecture_Slides &amp; VoiceNotes.pdf
              </span>
              <span className="text-[9px] text-[#A7A0B8]">PDF &amp; Voice Ingestion • Structured</span>
            </div>
          </div>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold flex-shrink-0">
            Processed
          </span>
        </div>

        {/* Generated Modules */}
        <div className="grid grid-cols-3 gap-2">
          <div className="glass-panel p-2 rounded-xl border border-purple-500/20 bg-purple-950/20">
            <div className="flex items-center gap-1 mb-1 text-[9px] text-[#C4B5FD]">
              <Sparkles className="w-3 h-3 text-[#A855F7]" />
              <span className="font-semibold">Summaries</span>
            </div>
            <span className="text-[11px] font-bold text-white block">Key Concepts</span>
            <span className="text-[8px] text-[#A7A0B8]">AI-extracted core</span>
          </div>

          <div className="glass-panel p-2 rounded-xl border border-purple-500/20 bg-purple-950/20">
            <div className="flex items-center gap-1 mb-1 text-[9px] text-[#C4B5FD]">
              <BookOpen className="w-3 h-3 text-[#A855F7]" />
              <span className="font-semibold">Flashcards</span>
            </div>
            <span className="text-[11px] font-bold text-white block">Smart Decks</span>
            <span className="text-[8px] text-emerald-400">Spaced revision</span>
          </div>

          <div className="glass-panel p-2 rounded-xl border border-purple-500/20 bg-purple-950/20">
            <div className="flex items-center gap-1 mb-1 text-[9px] text-[#C4B5FD]">
              <CheckCircle2 className="w-3 h-3 text-[#A855F7]" />
              <span className="font-semibold">Cloud Sync</span>
            </div>
            <span className="text-[11px] font-bold text-white block">Firestore</span>
            <span className="text-[8px] text-[#C4B5FD]">Core Data offline</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-purple-500/15 text-[10px] text-[#A7A0B8]">
        <span className="font-mono text-[#C4B5FD]">SwiftUI • Python FastAPI</span>
        <span className="text-[#A855F7] font-mono">Firebase Realtime Sync</span>
      </div>
    </div>
  );
}

export function AlgoMedMockup() {
  return (
    <div className="w-full h-full bg-[#071A1A] p-4 sm:p-5 flex flex-col justify-between select-none overflow-hidden relative font-sans border-t-2 border-teal-400/50">
      <div className="flex items-center justify-between border-b border-teal-400/20 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-teal-400/15 flex items-center justify-center border border-teal-300/30">
            <HeartPulse className="w-4 h-4 text-teal-300" />
          </div>
          <div>
            <span className="text-xs font-bold text-white tracking-wide block">AlgoMed</span>
            <span className="text-[8px] text-teal-200/70">Connected care</span>
          </div>
        </div>
        <span className="text-[9px] px-2 py-1 rounded-full bg-teal-400/10 text-teal-200 border border-teal-300/20 font-mono">
          HEALTHCARE PLATFORM
        </span>
      </div>

      <div className="my-3 grid grid-cols-2 gap-2.5">
        <div className="rounded-xl bg-teal-950/40 border border-teal-300/20 p-3">
          <div className="flex items-center gap-2 text-teal-200 mb-2">
            <Stethoscope className="w-4 h-4" />
            <span className="text-[9px] font-semibold">Find a doctor</span>
          </div>
          <span className="text-[11px] font-bold text-white block">Care, connected.</span>
          <span className="text-[8px] text-teal-100/60">Explore professionals</span>
        </div>
        <div className="rounded-xl bg-[#102526] border border-teal-300/20 p-3">
          <div className="flex items-center gap-2 text-teal-200 mb-2">
            <CalendarCheck className="w-4 h-4" />
            <span className="text-[9px] font-semibold">Appointments</span>
          </div>
          <span className="text-[11px] font-bold text-white block">Easy scheduling</span>
          <span className="text-[8px] text-teal-100/60">Plan a consultation</span>
        </div>
        <div className="rounded-xl bg-[#102526] border border-teal-300/20 p-3">
          <div className="flex items-center gap-2 text-teal-200 mb-2">
            <MessageCircle className="w-4 h-4" />
            <span className="text-[9px] font-semibold">Communication</span>
          </div>
          <span className="text-[11px] font-bold text-white block">Patient support</span>
          <span className="text-[8px] text-teal-100/60">Online connection</span>
        </div>
        <div className="rounded-xl bg-[#102526] border border-teal-300/20 p-3">
          <div className="flex items-center gap-2 text-teal-200 mb-2">
            <Activity className="w-4 h-4" />
            <span className="text-[9px] font-semibold">AI assistance</span>
          </div>
          <span className="text-[11px] font-bold text-white block">Clinical workflow</span>
          <span className="text-[8px] text-teal-100/60">AI-enabled services</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-teal-400/20 text-[10px] text-teal-100/60">
        <span className="font-mono">React • Node.js • Express</span>
        <span className="text-teal-200 font-mono">MongoDB • AI</span>
      </div>
    </div>
  );
}

export function SafeHerMockup() {
  return (
    <div className="w-full h-full bg-[#180A14] p-4 sm:p-5 flex flex-col justify-between select-none overflow-hidden relative font-sans border-t-2 border-rose-500/50">
      <div className="flex items-center justify-between border-b border-rose-500/20 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-rose-500/20 flex items-center justify-center border border-rose-500/40">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
          </div>
          <span className="text-xs font-bold text-white tracking-wide">SafeHer Android</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-[10px] text-[#F5F3FF]">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
          <span>GPS Live • Armed</span>
        </div>
      </div>

      <div className="my-3 space-y-2.5">
        {/* Active Journey Card */}
        <div className="p-2.5 rounded-xl bg-rose-950/30 border border-rose-500/30 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-rose-900/40 flex items-center justify-center flex-shrink-0">
              <Navigation className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-semibold text-[#F5F3FF] truncate block">
                Journey Monitor: Campus to Home
              </span>
              <span className="text-[9px] text-[#A7A0B8]">Live GPS Breadcrumbs • Accuracy ±3m</span>
            </div>
          </div>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-semibold flex-shrink-0">
            Safe
          </span>
        </div>

        {/* SOS Alert & Quick Emergency Modules */}
        <div className="grid grid-cols-3 gap-2">
          <div className="glass-panel p-2 rounded-xl border border-rose-500/20 bg-rose-950/20">
            <div className="flex items-center gap-1 mb-1 text-[9px] text-rose-300">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
              <span className="font-semibold">SOS Alert</span>
            </div>
            <span className="text-[11px] font-bold text-white block">One-Tap Ready</span>
            <span className="text-[8px] text-[#A7A0B8]">Instant broadcast</span>
          </div>

          <div className="glass-panel p-2 rounded-xl border border-rose-500/20 bg-rose-950/20">
            <div className="flex items-center gap-1 mb-1 text-[9px] text-rose-300">
              <Clock className="w-3.5 h-3.5 text-rose-400" />
              <span className="font-semibold">Check-in</span>
            </div>
            <span className="text-[11px] font-bold text-white block">14:30 min</span>
            <span className="text-[8px] text-emerald-400">Timer active</span>
          </div>

          <div className="glass-panel p-2 rounded-xl border border-rose-500/20 bg-rose-950/20">
            <div className="flex items-center gap-1 mb-1 text-[9px] text-rose-300">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span className="font-semibold">Nearby</span>
            </div>
            <span className="text-[11px] font-bold text-white block">3 Hospitals</span>
            <span className="text-[8px] text-[#C4B5FD]">1 Police station</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-rose-500/15 text-[10px] text-[#A7A0B8]">
        <span className="font-mono text-rose-300">WorkManager • Room DB</span>
        <span className="text-white font-mono">Google Maps SDK</span>
      </div>
    </div>
  );
}
