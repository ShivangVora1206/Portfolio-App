import React, { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { techStackList, iconsPathMap } from '../../config';
import Icon from '@mdi/react';

const TechStackSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    <section className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter brutalist-text">
            Tech Stack
          </h2>
          <div className="h-1 w-32 bg-white mt-4"></div>
        </motion.div>

        {/* Tech Grid */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4"
        >
          {techStackList.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative group"
            >
              <div className={`aspect-square border-2 border-white ${tech.bgtailwind} flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:border-4`}>
                {/* Icon */}
                <div className="text-white mb-2">
                  {typeof iconsPathMap[tech.name] === 'string' ? (
                    <Icon 
                      path={iconsPathMap[tech.name] as string} 
                      size={2}
                    />
                  ) : (
                    iconsPathMap[tech.name]
                  )}
                </div>
                
                {/* Tech Name */}
                <span className="text-white font-mono text-xs uppercase text-center group-hover:font-bold transition-all">
                  {tech.name}
                </span>

                {/* Hover Effect Line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-white origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Glitch Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 border-2 border-red-500 translate-x-1 translate-y-1 mix-blend-screen"></div>
                <div className="absolute inset-0 border-2 border-blue-500 -translate-x-1 -translate-y-1 mix-blend-screen"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          <div className="border-2 border-white p-8 text-center">
            <div className="text-5xl font-black text-white mb-2">{techStackList.length}+</div>
            <div className="text-gray-400 font-mono uppercase text-sm">Technologies</div>
          </div>
          <div className="border-2 border-white p-8 text-center">
            <div className="text-5xl font-black text-white mb-2">5+</div>
            <div className="text-gray-400 font-mono uppercase text-sm">Years Experience</div>
          </div>
          <div className="border-2 border-white p-8 text-center">
            <div className="text-5xl font-black text-white mb-2">20+</div>
            <div className="text-gray-400 font-mono uppercase text-sm">Projects Completed</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
