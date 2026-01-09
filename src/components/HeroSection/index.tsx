import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { firstName, lastName, aboutText, socialConstants } from '../../config';
import DisintegratingText from '../DisintegratingText';
import GridParticleField from '../GridParticleField';

interface HeroSectionProps {
  globalMousePosition: { x: number; y: number };
}

const HeroSection: React.FC<HeroSectionProps> = ({ globalMousePosition }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMousePosition(globalMousePosition);
  }, [globalMousePosition]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Name with Disintegration Effect */}
          <div className="overflow-visible relative">
            {/* Grid Particle Field Background */}
            <div className="absolute inset-0 -inset-x-20 -inset-y-10 opacity-40">
              <GridParticleField mousePosition={mousePosition} />
            </div>
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-black leading-none tracking-tighter"
            >
              <DisintegratingText
                text={firstName.toUpperCase()}
                className="block brutalist-text text-white"
                mousePosition={mousePosition}
                disintegrationRadius={180}
              />
              <DisintegratingText
                text={lastName.toUpperCase()}
                className="block brutalist-text text-white"
                mousePosition={mousePosition}
                disintegrationRadius={180}
              />
            </motion.h1>
          </div>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="border-l-4 border-white pl-6"
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-mono text-white uppercase tracking-wider">
              Software Engineer
            </p>
            <p className="text-lg md:text-xl text-gray-400 font-mono mt-2">
              Developer | AI Enthusiast
            </p>
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
              {aboutText}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex gap-6 items-center"
          >
            <a
              href={socialConstants.github}
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-link text-white text-lg font-mono uppercase hover:translate-x-2 transition-transform duration-300"
            >
              [Github]
            </a>
            <a
              href={socialConstants.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-link text-white text-lg font-mono uppercase hover:translate-x-2 transition-transform duration-300"
            >
              [LinkedIn]
            </a>
            <a
              href={socialConstants.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-link text-white text-lg font-mono uppercase hover:translate-x-2 transition-transform duration-300"
            >
              [Instagram]
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-white text-xs font-mono uppercase tracking-widest">Scroll</span>
              <div className="w-px h-12 bg-white"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
