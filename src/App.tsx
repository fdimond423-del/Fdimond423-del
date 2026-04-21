import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Twitter, ExternalLink, Phone, MapPin, CheckCircle2, Send, X, Instagram } from "lucide-react";
import { useState, useEffect, ReactNode, FormEvent } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Resume } from "./components/Resume";
import { ServicesGame } from "./components/ServicesGame";
import { AIAssistant } from "./components/AIAssistant";

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#ccff00] pointer-events-none z-[100] mix-blend-difference hidden md:block"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isHovering ? 1.5 : 1,
        backgroundColor: isHovering
          ? "rgba(204, 255, 0, 1)"
          : "rgba(204, 255, 0, 0)",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
}

function AmbientBackground() {
  return (
    <div className="ambient-bg">
      <div
        className="ambient-circle w-[400px] h-[400px] bg-[#ccff00]/20 top-[-10%] left-[-5%]"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="ambient-circle w-[500px] h-[500px] bg-[#00f0ff]/10 bottom-[-10%] right-[-5%]"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="ambient-circle w-[300px] h-[300px] bg-[#ccff00]/15 top-[40%] right-[10%]"
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
}

function DeviceFrame({ children, type = "browser" }: { children: ReactNode; type?: "browser" | "phone" }) {
  if (type === "phone") {
    return (
      <div className="relative mx-auto bg-[#111] border-4 border-[#333] h-[600px] w-[300px] overflow-hidden brutal-border">
        <div className="w-[148px] h-[18px] bg-[#333] top-0 left-1/2 -translate-x-1/2 absolute z-20 brutal-border border-t-0"></div>
        <div className="h-[46px] w-[8px] bg-[#333] absolute -left-[12px] top-[124px] brutal-border border-r-0"></div>
        <div className="h-[46px] w-[8px] bg-[#333] absolute -left-[12px] top-[178px] brutal-border border-r-0"></div>
        <div className="h-[64px] w-[8px] bg-[#333] absolute -right-[12px] top-[142px] brutal-border border-l-0"></div>
        <div className="overflow-hidden w-full h-full bg-[#000]">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto bg-[#111] border-4 border-[#333] border-t-[24px] overflow-hidden w-full aspect-video brutal-border">
      <div className="absolute top-[-18px] left-4 flex gap-2 z-20">
        <div className="w-3 h-3 bg-[#ff5f56] brutal-border"></div>
        <div className="w-3 h-3 bg-[#ffbd2e] brutal-border"></div>
        <div className="w-3 h-3 bg-[#27c93f] brutal-border"></div>
      </div>
      <div className="w-full h-full bg-[#000]">
        {children}
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    title: "WordPress Development",
    category: "Web Engineering",
    description: "Developing responsive WordPress websites with modern design and optimized performance. Focused on creating high-converting digital ecosystems that deliver real results for businesses.",
    type: "browser",
  },
  {
    title: "Meta Ads Management",
    category: "Performance Marketing",
    description: "Managing Facebook & Instagram ad campaigns with a focus on ROI. Expertly testing creatives, audience targeting, and optimizing for maximum conversion performance.",
    type: "browser",
  },
  {
    title: "Conversion Landing Pages",
    category: "Direct Response Design",
    description: "Designing high-converting landing pages using Canva and modern web techniques. Every element is crafted to guide users toward a specific action and drive business growth.",
    type: "phone",
  },
  {
    title: "SEO & Performance",
    category: "Search Optimization",
    description: "Implementing advanced On-Page and Off-Page SEO techniques. Analyzing campaign performance and optimizing website structure to achieve and maintain top search rankings.",
    type: "browser",
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#000000]/80 backdrop-blur-xl brutal-border px-8 py-4"
          : "bg-transparent px-6 py-4"
      }`}
    >
      <div className="flex justify-between items-center gap-8 md:gap-12">
        <a
          href="#"
          className="text-lg font-bold tracking-tighter text-[#ccff00] font-display uppercase hidden md:block"
        >
          Fenil_
        </a>
        <div className="flex gap-6 md:gap-8 text-xs md:text-sm font-bold uppercase tracking-widest text-white">
          <a href="#about" className="hover:text-[#ccff00] transition-colors">
            About
          </a>
          <a href="#work" className="hover:text-[#00f0ff] transition-colors">
            Work
          </a>
          <a href="#resume" className="hover:text-[#ccff00] transition-colors">
            Resume
          </a>
          <a href="#contact" className="hover:text-[#00f0ff] transition-colors">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

function SplitText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </span>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#000000] py-20">
      <AmbientBackground />
      
      {/* 3D Character - Top & Moving - Improved Visibility */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ 
            y: [0, -30, 0],
            opacity: 1 
          }}
          transition={{ 
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: {
              duration: 1.5,
              ease: "easeOut"
            }
          }}
          className="absolute right-[-10%] md:right-[-5%] top-[-5%] w-[120%] md:w-[100%] h-[100%] opacity-90 md:opacity-100"
        >
          <iframe 
            src="https://my.spline.design/robotfollowcursor-863a354117812920268560938e55850e/" 
            frameBorder="0" 
            width="100%" 
            height="100%"
            className="w-full h-full scale-[2.5] md:scale-150 origin-top-right"
          ></iframe>
        </motion.div>

        {/* Second Floating 3D Element for Hero */}
        <motion.div
          animate={{ 
            x: [0, 20, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-10%] bottom-[-10%] w-[50%] h-[50%] opacity-30"
        >
          <iframe 
            src="https://my.spline.design/abstractshapes-91a182042940656645938e55850e/" 
            frameBorder="0" 
            width="100%" 
            height="100%"
            className="scale-125"
          ></iframe>
        </motion.div>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-6 md:px-12 relative z-10 pt-32"
      >
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-16 h-[2px] bg-[#ccff00]" />
            <span className="text-[#ccff00] uppercase tracking-[0.3em] text-xs font-bold">
              System.Init(2026)
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-9xl lg:text-[140px] font-bold tracking-tighter text-white leading-[0.85] mb-12 font-display uppercase">
            <SplitText text="Fenil" delay={0.4} /> <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #ccff00" }}>
              <SplitText text="Limbachiya" delay={0.6} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-2xl text-white/80 max-w-3xl mb-16 font-mono leading-tight tracking-tight"
          >
            &gt; Digital Marketing Expert & WordPress Developer_ <br className="hidden md:block" /> 
            &gt; Specializing in high-converting digital ecosystems.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-6 items-center"
          >
            <a href="#work" className="px-8 py-4 bg-[#ccff00] text-[#000000] font-bold uppercase tracking-widest text-sm brutal-border hover:bg-[#00f0ff] transition-colors">
              Execute_Work
            </a>
            <a href="#contact" className="px-8 py-4 bg-transparent text-white font-bold uppercase tracking-widest text-sm brutal-border hover:bg-white hover:text-black transition-colors">
              Connect()
            </a>

            {/* Floating ROI Badge */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden md:flex ml-8 items-center gap-4 bg-[#000000] brutal-border px-6 py-3"
            >
              <div className="w-10 h-10 bg-[#ccff00] flex items-center justify-center text-black">
                <ArrowRight size={20} className="-rotate-45" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-[#00f0ff]">Client Results</div>
                <div className="text-sm font-bold text-white">300% ROI Increase</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-48 bg-[#000000] text-white overflow-hidden relative border-t-4 border-[#333]">
      {/* Secondary 3D Character for About Section */}
      <div className="absolute right-[-10%] bottom-0 w-[60%] h-[60%] opacity-20 pointer-events-none z-0">
        <iframe 
          src="https://my.spline.design/abstractshapes-91a182042940656645938e55850e/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
        ></iframe>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12 font-display uppercase leading-none">
              Digital <br />
              <span className="text-[#ccff00]">Strategist</span>
            </h2>
            <p className="text-2xl text-white font-medium mb-8 leading-tight font-mono">
              &gt; I am a motivated and passionate digital marketing professional with strong skills in WordPress website development and Meta Ads management.
            </p>
            <p className="text-lg text-white/60 leading-relaxed mb-12 font-mono">
              I have completed an AI-Driven Digital Marketing course from ASDM, where I gained practical knowledge of creating high-converting websites and running effective ad campaigns. I enjoy designing creatives, building landing pages, and optimizing campaigns for better results. I am always eager to learn new strategies, improve my skills, and deliver impactful digital solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="flex items-start gap-4 brutal-border p-4 bg-[#111]">
                <div className="w-10 h-10 bg-[#ccff00] flex items-center justify-center text-black shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-[#00f0ff]">Strategy First</h4>
                  <p className="text-sm text-white/60 font-mono">Data-driven approaches to every campaign and design.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 brutal-border p-4 bg-[#111]">
                <div className="w-10 h-10 bg-[#00f0ff] flex items-center justify-center text-black shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-[#ccff00]">Conversion Focused</h4>
                  <p className="text-sm text-white/60 font-mono">Websites designed to turn visitors into loyal customers.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm uppercase tracking-widest text-[#ccff00] mb-12 font-mono">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#ccff00]" />
                English
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#00f0ff]" />
                Hindi
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#ccff00]" />
                Gujarati
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[500px] md:h-[600px]"
          >
            <div className="w-full h-full brutal-border overflow-hidden bg-[#111] relative">
              <iframe 
                src="https://my.spline.design/robotfollowcursor-863a354117812920268560938e55850e/" 
                frameBorder="0" 
                width="100%" 
                height="100%"
                className="w-full h-full scale-125 origin-center"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#ccff00] -z-10 blur-3xl opacity-20" />
          </motion.div>
        </div>

        <div className="mt-48 relative">
          {/* Floating 3D Element for Services */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -right-12 w-48 h-48 opacity-40 pointer-events-none z-10 hidden lg:block"
          >
            <iframe 
              src="https://my.spline.design/abstractshapes-91a182042940656645938e55850e/" 
              frameBorder="0" 
              width="100%" 
              height="100%"
            ></iframe>
          </motion.div>
          <ServicesGame />
        </div>
      </div>
    </section>
  );
}

function Work() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section id="work" className="py-48 bg-[#000000] text-white relative overflow-hidden border-t-4 border-[#333]">
      {/* Background Character for Work Section */}
      <div className="absolute left-[-10%] top-1/4 w-[60%] h-[60%] opacity-20 pointer-events-none z-0">
        <iframe 
          src="https://my.spline.design/clonex-994344498306915645938e55850e/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          className="scale-150"
        ></iframe>
      </div>
      
      {/* Secondary Floating 3D Element for Work Section */}
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-5%] bottom-[10%] w-[40%] h-[40%] opacity-30 pointer-events-none z-0"
      >
        <iframe 
          src="https://my.spline.design/abstractshapes-91a182042940656645938e55850e/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          className="scale-125"
        ></iframe>
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 font-display uppercase leading-none">
              Strategic <br />
              <span className="text-[#00f0ff]">Solutions</span>
            </h2>
            <p className="text-xl text-white/60 font-mono">
              &gt; High-converting landing pages and performance-driven ad campaigns designed for maximum ROI.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-40">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                  whileHover={{ scale: 1.05, rotateY: 10, rotateX: -10 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="perspective-1000"
                >
                  <DeviceFrame type={project.type as "browser" | "phone"}>
                    <div className="w-full h-full bg-[#111] flex items-center justify-center p-12 brutal-border">
                      <div className="text-center">
                        <h4 className="text-2xl md:text-3xl font-display font-bold uppercase text-[#00f0ff] mb-4">{project.title}</h4>
                        <p className="text-xs text-white/40 uppercase tracking-widest font-mono">Interactive Experience</p>
                      </div>
                    </div>
                  </DeviceFrame>
                </motion.div>
                
                <div className="max-w-xl">
                  <span className="text-[#00f0ff] uppercase tracking-[0.3em] text-xs font-bold mb-6 block font-mono">
                    {project.category}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 font-display uppercase leading-none">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 font-mono">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="px-8 py-4 bg-[#00f0ff] text-black font-bold uppercase tracking-widest text-xs brutal-border hover:bg-white transition-colors flex items-center gap-2"
                    >
                      View Project <ExternalLink size={14} />
                    </button>
                    <div className="px-6 py-3 bg-[#111] brutal-border text-[10px] uppercase tracking-widest font-bold flex items-center text-white">
                      Strategy
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#000000]/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#111] brutal-border w-full max-w-4xl overflow-hidden relative"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 w-12 h-12 bg-[#000] brutal-border flex items-center justify-center text-white hover:bg-[#00f0ff] hover:text-black transition-all z-10"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-12 bg-[#000] flex items-center justify-center min-h-[300px] border-r-4 border-[#333]">
                  <DeviceFrame type={selectedProject.type as "browser" | "phone"}>
                    <div className="w-full h-full flex items-center justify-center text-center p-8 bg-[#111] brutal-border">
                      <h4 className="text-2xl font-display font-bold uppercase text-[#00f0ff]">{selectedProject.title}</h4>
                    </div>
                  </DeviceFrame>
                </div>
                <div className="p-12 space-y-8 bg-[#111]">
                  <div>
                    <span className="text-[#00f0ff] uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block font-mono">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tighter font-display uppercase leading-none mb-6 text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed font-mono">
                      {selectedProject.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-[#ccff00] font-mono">Key Features</h4>
                    <ul className="space-y-2">
                      {["Conversion Optimized", "Mobile Responsive", "SEO Ready", "Fast Loading"].map((feat, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-white font-mono">
                          <CheckCircle2 size={16} className="text-[#00f0ff]" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full py-5 bg-[#ccff00] text-black brutal-border font-bold uppercase tracking-widest text-xs hover:bg-[#00f0ff] transition-colors">
                    Launch Live Site
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 2000);
  };

  return (
    <section
      id="contact"
      className="py-48 bg-[#000000] text-white relative overflow-hidden border-t-4 border-[#333]"
    >
      {/* 3D Character for Contact Section */}
      <div className="absolute right-[-10%] top-0 w-[60%] h-[60%] opacity-30 pointer-events-none z-0">
        <iframe 
          src="https://my.spline.design/clonex-994344498306915645938e55850e/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          className="scale-150"
        ></iframe>
      </div>

      {/* Secondary 3D Element for Contact Section */}
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-5%] bottom-[-5%] w-[40%] h-[40%] opacity-20 pointer-events-none z-0"
      >
        <iframe 
          src="https://my.spline.design/abstractshapes-91a182042940656645938e55850e/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          className="scale-125"
        ></iframe>
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12 font-display uppercase leading-none">
              Let's <br />
              <span className="text-[#00f0ff]">Connect</span>
            </h2>
            <p className="text-2xl text-white/60 font-mono mb-12 max-w-md">
              &gt; Ready to scale your digital presence? Reach out for a consultation.
            </p>
            
            <div className="space-y-8">
              <a href="mailto:fdimond423@gmail.com" className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-[#ccff00] flex items-center justify-center text-black brutal-border group-hover:bg-[#00f0ff] transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-1 font-mono">Email Me</p>
                  <p className="text-xl font-bold text-[#ccff00] group-hover:text-[#00f0ff] transition-colors">fdimond423@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-[#00f0ff] flex items-center justify-center text-black brutal-border">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-1 font-mono">Call Me</p>
                  <p className="text-xl font-bold text-[#00f0ff]">+91 82000 95497</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-[#ccff00] flex items-center justify-center text-black brutal-border">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-1 font-mono">Address</p>
                  <p className="text-sm font-bold max-w-[250px] text-white">304, Ashirwad Flat, Sankdi Sheri, Manekchowk Ahmedabad – 380001</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-6">
              <a href="https://www.linkedin.com/in/fenil-limbachiya-bb39a8280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#111] brutal-border flex items-center justify-center hover:bg-[#00f0ff] hover:text-black transition-colors text-white">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/Fenildigital" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#111] brutal-border flex items-center justify-center hover:bg-[#ccff00] hover:text-black transition-colors text-white">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/thefenillimbachiya?igsh=NGJmdDBxc3lnZDZo" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#111] brutal-border flex items-center justify-center hover:bg-[#00f0ff] hover:text-black transition-colors text-white">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#111] p-12 brutal-border"
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-[#ccff00] text-black flex items-center justify-center mb-6 brutal-border">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Message Sent!</h3>
                <p className="text-white/60 font-mono">Thank you for reaching out. I'll get back to you shortly.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-[#00f0ff] uppercase tracking-widest text-xs font-bold font-mono"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#00f0ff] font-bold font-mono">Full Name</label>
                    <input required type="text" className="w-full bg-transparent border-b-2 border-[#333] py-4 focus:border-[#ccff00] outline-none transition-colors text-white font-mono" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#00f0ff] font-bold font-mono">Email Address</label>
                    <input required type="email" className="w-full bg-transparent border-b-2 border-[#333] py-4 focus:border-[#ccff00] outline-none transition-colors text-white font-mono" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#00f0ff] font-bold font-mono">Subject</label>
                  <input required type="text" className="w-full bg-transparent border-b-2 border-[#333] py-4 focus:border-[#ccff00] outline-none transition-colors text-white font-mono" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#00f0ff] font-bold font-mono">Message</label>
                  <textarea required className="w-full bg-transparent border-b-2 border-[#333] py-4 focus:border-[#ccff00] outline-none transition-colors min-h-[150px] resize-none text-white font-mono" placeholder="Tell me about your project..."></textarea>
                </div>
                <button 
                  disabled={status === "loading"}
                  className="w-full py-6 bg-[#ccff00] text-black font-bold uppercase tracking-widest text-sm brutal-border hover:bg-[#00f0ff] transition-colors flex items-center justify-center gap-3"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 bg-[#000000] text-white/40 border-t-4 border-[#333] relative overflow-hidden">
      {/* Small 3D Element for Footer */}
      <div className="absolute right-0 bottom-0 w-32 h-32 opacity-20 pointer-events-none">
        <iframe 
          src="https://my.spline.design/abstractshapes-91a182042940656645938e55850e/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
        ></iframe>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="text-sm uppercase tracking-widest">
          © 2026 Fenil Limbachiya. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/fenil-limbachiya-bb39a8280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f0ff] transition-colors"><Linkedin size={18} /></a>
          <a href="https://x.com/Fenildigital" target="_blank" rel="noopener noreferrer" className="hover:text-[#ccff00] transition-colors"><Twitter size={18} /></a>
          <a href="https://www.instagram.com/thefenillimbachiya?igsh=NGJmdDBxc3lnZDZo" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f0ff] transition-colors"><Instagram size={18} /></a>
        </div>
        <div className="flex gap-8 text-sm uppercase tracking-widest">
          <span>Ahmedabad, India</span>
          <span>IST</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <div
        className={`bg-[#000000] min-h-screen font-sans selection:bg-[#ccff00] selection:text-black transition-opacity duration-1000 ${
          loading ? "opacity-0 h-screen overflow-hidden" : "opacity-100"
        }`}
      >
        <div className="noise-bg" />
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Resume />
          <Work />
          <Contact />
        </main>
        <Footer />
        <AIAssistant />
      </div>
    </>
  );
}

