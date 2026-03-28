'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-md flex justify-between items-center px-4 md:px-8 py-4 md:py-6">
        <div className="text-xl md:text-2xl font-black tracking-tighter text-white font-headline uppercase z-50 relative">
          ARCHITECT
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 items-center">
          <a className="font-headline font-extrabold uppercase tracking-tighter text-white/70 hover:text-[#f3ffca] hover:-translate-y-1 transition-transform" href="#">
            PROTOCOL
          </a>
          <a className="font-headline font-extrabold uppercase tracking-tighter text-white/70 hover:text-[#f3ffca] hover:-translate-y-1 transition-transform" href="#">
            SYSTEMS
          </a>
          <a className="font-headline font-extrabold uppercase tracking-tighter text-white/70 hover:text-[#f3ffca] hover:-translate-y-1 transition-transform" href="#">
            SERVICES
          </a>
          <a className="font-headline font-extrabold uppercase tracking-tighter text-white/70 hover:text-[#f3ffca] hover:-translate-y-1 transition-transform" href="#">
            PRICING
          </a>
          <button className="bg-neon-green text-[#0e0e0e] px-8 py-2 font-headline font-black uppercase tracking-tighter active:scale-95 transition-transform hover:bg-white">
            START
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50 relative bg-neon-green p-2 active:scale-95"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div 
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-full h-1 bg-black"
          />
          <motion.div 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-full h-1 bg-black"
          />
          <motion.div 
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-full h-1 bg-black"
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 bg-[#0e0e0e] z-40 flex flex-col justify-center items-center gap-8 px-4"
          >
            <motion.a 
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
              className="text-4xl font-headline font-black uppercase text-neon-green" href="#" onClick={() => setIsOpen(false)}
            >
              PROTOCOL
            </motion.a>
            <motion.a 
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-4xl font-headline font-black uppercase text-white" href="#" onClick={() => setIsOpen(false)}
            >
              SYSTEMS
            </motion.a>
            <motion.a 
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-4xl font-headline font-black uppercase text-neon-pink" href="#" onClick={() => setIsOpen(false)}
            >
              SERVICES
            </motion.a>
            <motion.a 
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
              className="text-4xl font-headline font-black uppercase text-white" href="#" onClick={() => setIsOpen(false)}
            >
              PRICING
            </motion.a>
            
            <motion.button 
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
              onClick={() => setIsOpen(false)}
              className="mt-8 bg-neon-green text-[#0e0e0e] w-full max-w-sm py-6 text-2xl font-headline font-black uppercase tracking-widest active:scale-95 transition-transform"
            >
              START NOW
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
