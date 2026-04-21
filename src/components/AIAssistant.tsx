import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Sparkles, Send } from "lucide-react";

const TIPS = [
  "Hi! I'm Fenil's AI assistant. Need help navigating?",
  "Check out the 'Device Experience' section to see high-converting landing pages.",
  "Fenil specializes in Meta Ads and WordPress development.",
  "Did you know Fenil is certified in Google Search and Display Ads?",
  "You can interact with the services balls below. Try dragging them!",
  "Looking for a high-converting website? Fenil is your guy.",
];

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);
  const [showTip, setShowTip] = useState(false);
  const [messages, setMessages] = useState<{ role: "ai" | "user"; text: string }[]>([
    { role: "ai", text: "Hello! I'm Fenil's AI assistant. How can I help you today?" },
    { role: "ai", text: "I can tell you about Fenil's experience, skills, or help you book a consultation." },
  ]);
  const [inputValue, setInputValue] = useState("");
  const tipTimeout = useRef<NodeJS.Timeout | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setShowTip(true);
      tipTimeout.current = setTimeout(() => setShowTip(false), 8000);
    }, 5000);

    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % TIPS.length);
      setShowTip(true);
      if (tipTimeout.current) clearTimeout(tipTimeout.current);
      tipTimeout.current = setTimeout(() => setShowTip(false), 8000);
    }, 20000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
      if (tipTimeout.current) clearTimeout(tipTimeout.current);
    };
  }, []);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInputValue("");

    // Simulate AI thinking
    setTimeout(() => {
      let aiResponse = "That's interesting! Fenil would love to discuss this further. I've noted your interest and will notify him at fdimond423@gmail.com.";
      
      if (userMessage.toLowerCase().includes("experience")) {
        aiResponse = "Fenil has extensive experience in WordPress development and Meta Ads. He's been working as a freelancer since 2025, delivering high-converting solutions.";
      } else if (userMessage.toLowerCase().includes("contact") || userMessage.toLowerCase().includes("email")) {
        aiResponse = "You can reach Fenil directly at fdimond423@gmail.com or call him at +91 82000 95497.";
      } else if (userMessage.toLowerCase().includes("service")) {
        aiResponse = "Fenil offers WordPress development, Meta Ads management, SEO, and high-converting landing page design. Check out the 'Strategic Solutions' section for more!";
      }

      setMessages((prev) => [...prev, { role: "ai", text: aiResponse }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {showTip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-[#ccff00] text-black p-4 brutal-border max-w-[250px] relative"
          >
            <div className="absolute -bottom-3 right-4 w-4 h-4 bg-[#ccff00] rotate-45 border-r-4 border-b-4 border-black" />
            <p className="text-sm font-bold leading-tight font-mono">{TIPS[currentTip]}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-[#111] brutal-border w-[320px] shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="p-6 bg-[#00f0ff] text-black flex justify-between items-center brutal-border border-x-0 border-t-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#000] flex items-center justify-center text-[#00f0ff] brutal-border">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-tighter text-sm font-mono">Fenil AI</h4>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-600 animate-pulse brutal-border" />
                    <span className="text-[10px] uppercase font-bold opacity-60 font-mono">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X size={20} />
              </button>
            </div>

            <div className="p-6 h-[350px] overflow-y-auto space-y-4 flex flex-col bg-[#000]">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`${
                    msg.role === "ai" 
                      ? "bg-[#111] text-white self-start" 
                      : "bg-[#ccff00] text-black self-end"
                  } p-4 max-w-[85%] brutal-border`}
                >
                  <p className="text-sm leading-relaxed font-mono">{msg.text}</p>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            <div className="p-4 border-t-4 border-[#333] flex gap-2 bg-[#111]">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me something..."
                className="flex-1 bg-[#000] border-2 border-[#333] px-4 py-2 text-sm focus:outline-none focus:border-[#00f0ff] transition-colors text-white font-mono brutal-border"
              />
              <button 
                onClick={handleSendMessage}
                className="w-12 h-12 bg-[#00f0ff] text-black flex items-center justify-center hover:bg-[#ccff00] transition-colors brutal-border"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#00f0ff] text-black shadow-2xl flex items-center justify-center relative group overflow-hidden brutal-border"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
}
