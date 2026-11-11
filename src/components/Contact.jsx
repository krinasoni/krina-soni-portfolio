import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Sparkles, 
  AlertCircle, 
  ExternalLink, 
  MessageSquare 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submissionReady, setSubmissionReady] = useState(false);
  const [copiedPayload, setCopiedPayload] = useState(false);

  const contactEmail = "krina.soni.dev@example.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please provide a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a brief message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmissionReady(true);
    }
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const body = encodeURIComponent(
      `Hello Krina,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleCopyFormattedMessage = () => {
    const formatted = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.message}`;
    navigator.clipboard.writeText(formatted);
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="nebula-glow w-[600px] h-[600px] bg-[#8B5CF6]/15 top-1/2 -left-32"
        aria-hidden="true"
      />
      <div
        className="nebula-glow w-[500px] h-[500px] bg-[#A855F7]/12 bottom-0 right-0"
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
            <Sparkles className="w-3.5 h-3.5 text-[#A855F7]" />
            <span>Direct Inquiry</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Let's create something <span className="text-gradient-purple">extraordinary.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#A7A0B8] leading-relaxed"
          >
            Have an interesting idea, opportunity, or project in mind? I'd love to hear about it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Contact Cards & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary Email Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/20 bg-[#0E091A] relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-400/30 flex items-center justify-center mb-5 shadow-lg">
                <Mail className="w-6 h-6 text-[#C4B5FD]" />
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-[#A855F7] block mb-1">
                Direct Email
              </span>
              <h3 className="text-xl font-bold text-[#F5F3FF] mb-2">
                Say Hello Anytime
              </h3>
              <p className="text-xs sm:text-sm text-[#A7A0B8] leading-relaxed mb-6">
                Whether you have an inquiry regarding full-stack roles, mobile development collaborations, or research topics in Dublin, my inbox is always open.
              </p>

              {/* Copy Email Box */}
              <div className="p-3 rounded-xl bg-[#110B20] border border-purple-500/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-xs sm:text-sm font-mono text-[#F5F3FF] truncate">
                    {contactEmail}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg glass-panel border border-purple-400/30 text-xs font-medium text-[#C4B5FD] hover:text-white hover:border-purple-300 flex items-center gap-1.5 transition-all flex-shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Social Connections */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/20 bg-[#0E091A] space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-950/40 border border-purple-500/25 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#C4B5FD]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#F5F3FF]">Location</h4>
                  <p className="text-xs text-[#A7A0B8]">Dublin, Ireland (UTC+0 / UTC+1)</p>
                </div>
              </div>

              <div className="pt-4 border-t border-purple-500/15">
                <span className="text-xs font-mono uppercase tracking-wider text-[#A855F7] block mb-3">
                  Professional Networks
                </span>
                <div className="flex flex-col gap-2.5">
                  <a
                    href="https://github.com/krinasoni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl glass-panel border border-purple-500/20 text-xs font-medium text-[#F5F3FF] hover:border-purple-400 hover:bg-purple-500/10 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4 text-[#C4B5FD]" />
                      <span>GitHub</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#A7A0B8] group-hover:text-white transition-colors" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/krina-soni-8599992a5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl glass-panel border border-purple-500/20 text-xs font-medium text-[#F5F3FF] hover:border-purple-400 hover:bg-purple-500/10 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4 text-[#C4B5FD]" />
                      <span>LinkedIn</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#A7A0B8] group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

          {/* RIGHT: Validated Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-purple-500/20 bg-[#0E091A]">
              
              <h3 className="text-xl font-bold text-[#F5F3FF] mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#A7A0B8] mb-8">
                Fill in the details below to initiate a conversation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#C4B5FD] uppercase tracking-wider mb-2">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-[#110B20] text-[#F5F3FF] placeholder-[#A7A0B8]/50 border transition-all duration-200 outline-none ${
                        errors.name
                          ? "border-rose-500/80 shadow-[0_0_10px_rgba(244,63,94,0.3)]"
                          : "border-purple-500/30 focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#C4B5FD] uppercase tracking-wider mb-2">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      placeholder="alex@domain.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#110B20] text-[#F5F3FF] placeholder-[#A7A0B8]/50 border transition-all duration-200 outline-none ${
                        errors.email
                          ? "border-rose-500/80 shadow-[0_0_10px_rgba(244,63,94,0.3)]"
                          : "border-purple-500/30 focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-[#C4B5FD] uppercase tracking-wider mb-2">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: null });
                    }}
                    placeholder="Project Inquiry, Full-Stack Opportunity, etc."
                    className={`w-full px-4 py-3 rounded-xl bg-[#110B20] text-[#F5F3FF] placeholder-[#A7A0B8]/50 border transition-all duration-200 outline-none ${
                      errors.subject
                        ? "border-rose-500/80 shadow-[0_0_10px_rgba(244,63,94,0.3)]"
                        : "border-purple-500/30 focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#C4B5FD] uppercase tracking-wider mb-2">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    placeholder="Tell me a bit about what you'd like to collaborate on..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#110B20] text-[#F5F3FF] placeholder-[#A7A0B8]/50 border transition-all duration-200 outline-none resize-none ${
                      errors.message
                        ? "border-rose-500/80 shadow-[0_0_10px_rgba(244,63,94,0.3)]"
                        : "border-purple-500/30 focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#7C3AED] hover:from-[#9333EA] hover:to-[#6D28D9] shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>

              {/* Informative Submission Feedback Modal / Card */}
              <AnimatePresence>
                {submissionReady && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="mt-6 p-5 rounded-2xl glass-panel border border-emerald-500/40 bg-emerald-950/20 space-y-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          Inquiry Prepared & Validated!
                        </h4>
                        <p className="text-xs text-[#A7A0B8] mt-1 leading-relaxed">
                          Your message is validated and formatted. Since this static portfolio connects directly to your preferred client, choose how you want to deliver it:
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-1">
                      <button
                        type="button"
                        onClick={handleOpenMailto}
                        className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 transition-all shadow-md"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Open in Email App</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleCopyFormattedMessage}
                        className="px-4 py-2 rounded-xl text-xs font-semibold glass-panel border border-purple-400/30 text-[#C4B5FD] hover:text-white flex items-center gap-1.5 transition-all"
                      >
                        {copiedPayload ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Formatted Message</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => setSubmissionReady(false)}
                        className="px-3 py-2 rounded-xl text-xs text-[#A7A0B8] hover:text-white ml-auto"
                      >
                        Dismiss
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
