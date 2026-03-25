'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { WireframeObject } from './WireframeObject';

export const Hero = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-end pt-32 pb-16 px-8 bg-surface overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <WireframeObject />
        </Canvas>
      </div>

      <div className="relative z-10 w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 150, skewY: 5 }}
          animate={{ opacity: 1, y: 0, skewY: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
          className="font-headline font-black uppercase text-7xl md:text-8xl lg:text-[10rem] text-bleed -ml-4 mb-12 select-none tracking-tighter"
        >
          YOUR<br />AI TEAM.
        </motion.h1>
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xl font-headline text-2xl uppercase font-bold text-on-surface-variant leading-tight"
          >
            We build high-frequency automation systems for teams that demand absolute operational dominance.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.5 }}
            className="bg-neon-green text-[#0e0e0e] px-10 py-6 text-xl font-headline font-black uppercase tracking-widest kinetic-border hover:bg-white transition-colors"
          >
            BOOK A CALL
          </motion.button>
        </div>
      </div>
    </section>
  );
};
