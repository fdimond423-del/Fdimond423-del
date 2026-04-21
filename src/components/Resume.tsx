import { motion } from "motion/react";
import { Download, Briefcase, GraduationCap, Award, Languages, Wrench, Code, Cpu } from "lucide-react";

const EXPERIENCE = [
  {
    title: "WordPress Developer & Graphic Designer",
    company: "Freelance",
    period: "2025",
    description: "Developed responsive WordPress websites with modern design. Designed creatives using Canva for branding. Created high-converting landing pages. Implemented SEO techniques. Optimized website performance. Managed Facebook & Instagram ad campaigns. Optimized ads for better conversions and ROI. Tested creatives and audience targeting. Analyzed campaign performance.",
    skills: ["WordPress", "Canva", "Meta Ads", "SEO", "Landing Pages"],
  },
];

const EDUCATION = [
  {
    title: "AI-Driven Digital Marketing Course",
    institution: "Ahmedabad School of Digital Marketing (ASDM)",
    period: "2025",
    description: "Gained practical knowledge of creating high-converting websites and running effective ad campaigns on Meta and Google Ads.",
  },
  {
    title: "Higher Secondary 12th (Commerce)",
    institution: "Kum Kum School",
    period: "2025",
    description: "Completed secondary education with a focus on commerce and business studies.",
  },
];

const CODING_LANGUAGES = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "PHP",
  "MySQL",
  "React.js",
  "Tailwind CSS"
];

const AI_MODULES = [
  "ChatGPT Plus",
  "Claude 3 Opus",
  "Midjourney v6",
  "Gemini Advanced",
  "GitHub Copilot"
];

const TOOLS = [
  "WordPress",
  "Canva",
  "Meta Ads Manager",
  "Facebook Business Manager",
  "Instagram Ads",
  "Google Chrome",
  "MS Excel"
];

const CERTIFICATIONS = [
  "Google Ads",
  "Meta Ads",
  "WordPress Website Development",
  "Google Search Ads",
  "Google Display Ads",
  "Born on Instagram",
  "Search Engine Optimization (SEO)",
];

export function Resume() {
  return (
    <section id="resume" className="py-48 bg-[#000000] text-white relative overflow-hidden border-t-4 border-[#333]">
      {/* 3D Character for Resume Section */}
      <div className="absolute left-[-10%] bottom-0 w-[60%] h-[60%] opacity-20 pointer-events-none z-0">
        <iframe 
          src="https://my.spline.design/abstractshapes-91a182042940656645938e55850e/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          className="scale-125"
        ></iframe>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 font-display uppercase leading-none">
              Powerful <br />
              <span className="text-[#ccff00]">Resume</span>
            </h2>
            <p className="text-xl text-white/60 font-mono">
              &gt; A comprehensive look at my professional journey, skills, and educational background.
            </p>
          </div>
          <motion.a
            href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            download="Fenil_Limbachiya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-[#ccff00] text-black font-bold uppercase tracking-widest text-sm flex items-center gap-3 cursor-pointer brutal-border hover:bg-[#00f0ff] transition-colors"
          >
            <Download size={20} />
            Download CV
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left Column: Experience & Education */}
          <div className="lg:col-span-8 space-y-24">
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-[#ccff00] flex items-center justify-center text-black brutal-border">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-3xl font-display font-bold uppercase tracking-tight text-[#00f0ff]">Work Experience</h3>
              </div>
              <div className="space-y-12 border-l-4 border-[#333] pl-8 ml-6">
                {EXPERIENCE.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="relative bg-[#111] p-8 brutal-border"
                  >
                    <div className="absolute -left-[46px] top-8 w-6 h-6 bg-[#ccff00] border-4 border-[#000]" />
                    <div className="mb-2 flex justify-between items-start flex-wrap gap-2">
                      <h4 className="text-2xl font-bold text-white">{item.title}</h4>
                      <span className="text-[#00f0ff] font-mono text-sm uppercase tracking-widest bg-[#00f0ff]/10 px-3 py-1">{item.period}</span>
                    </div>
                    <p className="text-[#ccff00] font-bold mb-4 uppercase tracking-widest text-sm">{item.company}</p>
                    <p className="text-white/60 leading-relaxed mb-6 max-w-2xl font-mono">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, j) => (
                        <span key={j} className="px-3 py-1 bg-[#333] text-white text-xs uppercase tracking-widest brutal-border">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-[#00f0ff] flex items-center justify-center text-black brutal-border">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-3xl font-display font-bold uppercase tracking-tight text-[#ccff00]">Education</h3>
              </div>
              <div className="space-y-12 border-l-4 border-[#333] pl-8 ml-6">
                {EDUCATION.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="relative bg-[#111] p-8 brutal-border"
                  >
                    <div className="absolute -left-[46px] top-8 w-6 h-6 bg-[#00f0ff] border-4 border-[#000]" />
                    <div className="mb-2 flex justify-between items-start flex-wrap gap-2">
                      <h4 className="text-2xl font-bold text-white">{item.title}</h4>
                      <span className="text-[#ccff00] font-mono text-sm uppercase tracking-widest bg-[#ccff00]/10 px-3 py-1">{item.period}</span>
                    </div>
                    <p className="text-[#00f0ff] font-bold mb-4 uppercase tracking-widest text-sm">{item.institution}</p>
                    <p className="text-white/60 leading-relaxed max-w-2xl font-mono">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Certs, Tools & Languages */}
          <div className="lg:col-span-4 space-y-20">
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 bg-[#ccff00] flex items-center justify-center text-black brutal-border">
                  <Code size={20} />
                </div>
                <h3 className="text-xl font-display font-bold uppercase tracking-tight text-[#00f0ff]">Coding Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {CODING_LANGUAGES.map((lang, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="px-4 py-2 bg-[#111] brutal-border text-sm font-bold text-[#ccff00]"
                  >
                    {lang}
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 bg-[#00f0ff] flex items-center justify-center text-black brutal-border">
                  <Cpu size={20} />
                </div>
                <h3 className="text-xl font-display font-bold uppercase tracking-tight text-[#ccff00]">AI Modules</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {AI_MODULES.map((module, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="px-4 py-2 bg-[#111] brutal-border text-sm font-bold text-[#00f0ff]"
                  >
                    {module}
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 bg-[#ccff00] flex items-center justify-center text-black brutal-border">
                  <Wrench size={20} />
                </div>
                <h3 className="text-xl font-display font-bold uppercase tracking-tight text-[#00f0ff]">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {TOOLS.map((tool, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="px-4 py-2 bg-[#111] brutal-border text-sm font-bold text-white"
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 bg-[#00f0ff] flex items-center justify-center text-black brutal-border">
                  <Award size={20} />
                </div>
                <h3 className="text-xl font-display font-bold uppercase tracking-tight text-[#ccff00]">Certifications</h3>
              </div>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="p-4 bg-[#111] brutal-border hover:bg-[#00f0ff] hover:text-black transition-colors group"
                  >
                    <p className="text-sm font-medium text-white/80 group-hover:text-black font-mono">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 bg-[#ccff00] flex items-center justify-center text-black brutal-border">
                  <Languages size={20} />
                </div>
                <h3 className="text-xl font-display font-bold uppercase tracking-tight text-[#00f0ff]">Languages</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {["English", "Hindi", "Gujarati"].map((lang, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-[#111] brutal-border">
                    <span className="text-sm font-bold uppercase tracking-widest text-[#ccff00]">{lang}</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div key={dot} className={`w-3 h-3 ${dot <= (lang === "English" ? 4 : 5) ? "bg-[#00f0ff]" : "bg-[#333]"}`} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

