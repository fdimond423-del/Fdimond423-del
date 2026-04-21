import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [clicked, setClicked] = useState(false);
  const [progress, setProgress] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    const handleMouseMove = (e: MouseEvent) => {
      if (wrapRef.current) {
        const rect = wrapRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        wrapRef.current.style.setProperty('--mouse-x', `${x}px`);
        wrapRef.current.style.setProperty('--mouse-y', `${y}px`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const handleClick = () => {
    if (progress < 100) return;
    setClicked(true);
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return (
    <div className={`loading-screen ${clicked ? 'hidden-screen loader-out' : ''}`}>
      <div className="loaderGame-container hidden md:block">
        <div className="loaderGame-in">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="loaderGame-line"></div>
          ))}
        </div>
        <div className="loaderGame-ball"></div>
      </div>

      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden pointer-events-none opacity-5">
        <div className="marquee-content text-[150px] font-display font-bold uppercase whitespace-nowrap">
          <span className="mx-12">Digital Strategist</span> •
          <span className="mx-12">WordPress Expert</span> •
          <span className="mx-12">Meta Ads Pro</span> •
          <span className="mx-12">Conversion King</span> •
        </div>
      </div>

      <div className="absolute bottom-12 left-12 right-12 md:left-24 md:right-auto z-20">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-end gap-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold font-mono">System Initialization</span>
            <span className="text-2xl font-display font-bold text-[#ccff00]">{progress}%</span>
          </div>
          <div className="w-full md:w-[300px] h-[4px] bg-[#333] relative overflow-hidden brutal-border">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#ccff00]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
      
      <div 
        ref={wrapRef}
        className={`loading-wrap ${clicked ? 'loading-clicked' : ''} ${progress < 100 ? 'opacity-20 cursor-wait' : 'opacity-100 cursor-pointer'}`}
        onClick={handleClick}
      >
        <div className="loading-hover"></div>
        <button className="loading-button">
          <div className="loading-content2">
            <AnimatePresence mode="wait">
              {progress < 100 ? (
                <motion.span
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-xs uppercase tracking-widest font-mono"
                >
                  Loading
                </motion.span>
              ) : (
                <motion.span
                  key="enter"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 font-mono font-bold"
                >
                  Enter
                  <div className="w-[15px] h-[25px] bg-black animate-pulse"></div>
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </button>
      </div>
    </div>
  );
}
