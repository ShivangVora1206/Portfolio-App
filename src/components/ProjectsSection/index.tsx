import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../config';

interface ProjectModalProps {
  project: typeof projects[0];
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="bg-black border-4 border-white max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter brutalist-text">
            {project.name}
          </h3>
          <button
            onClick={onClose}
            className="text-white text-3xl hover:rotate-90 transition-transform duration-300"
          >
            ×
          </button>
        </div>

        <div className="space-y-6">
          <div className="aspect-video bg-gray-900 border-2 border-white overflow-hidden">
            <img
              src={`/${project.image}`}
              alt={project.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="border-l-4 border-white pl-6">
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 border-2 border-white text-white font-mono text-xs uppercase"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-white text-white font-mono uppercase hover:bg-white hover:text-black transition-colors duration-300"
            >
              View Project →
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
            Projects
          </h2>
          <div className="h-1 w-32 bg-white mt-4"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="border-2 border-white bg-black overflow-hidden">
                {/* Project Image */}
                <div className="aspect-video overflow-hidden bg-gray-900 relative">
                  <img
                    src={`/${project.image}`}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-mono text-lg uppercase">
                      View Details →
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 border-t-2 border-white">
                  <h3 className="text-xl md:text-2xl font-bold text-white uppercase mb-3 tracking-tight">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                    {project.description.split('\n')[0]}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 border border-gray-600 text-gray-400 font-mono text-xs uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-2 py-1 text-gray-400 font-mono text-xs">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover Line Effect */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="h-1 bg-white origin-left mt-2"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
