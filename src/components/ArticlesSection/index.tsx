import React from 'react';
import { motion } from 'framer-motion';
import { articles } from '../../config';

const ArticlesSection: React.FC = () => {
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
            Articles
          </h2>
          <div className="h-1 w-32 bg-white mt-4"></div>
          <p className="text-gray-400 font-mono text-sm mt-6 uppercase">
            Technical writings and insights
          </p>
        </motion.div>

        {/* Articles List */}
        <div className="space-y-6">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block"
            >
              <div className="border-2 border-white p-6 md:p-8 bg-black hover:bg-white transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Article Title and Number */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      {/* Number */}
                      <span className="text-4xl md:text-5xl font-black text-white group-hover:text-black transition-colors duration-300 font-mono">
                        [{(index + 1).toString().length === 1 ? '0' : ''}{index + 1}]
                      </span>
                      
                      {/* Title */}
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-black transition-colors duration-300 uppercase leading-tight">
                          {article.title}
                        </h3>
                        
                        {/* Dev.to Badge */}
                        <div className="mt-3 inline-flex items-center gap-2 border-2 border-gray-600 group-hover:border-black px-3 py-1 transition-colors duration-300">
                          <svg 
                            className="w-4 h-4 fill-gray-400 group-hover:fill-black transition-colors duration-300" 
                            viewBox="0 0 24 24"
                          >
                            <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/>
                          </svg>
                          <span className="text-xs font-mono text-gray-400 group-hover:text-black uppercase transition-colors duration-300">
                            Read on {(article.source) ? article.source : 'dev.to'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="self-end md:self-center">
                    <div className="w-12 h-12 border-2 border-white group-hover:border-black flex items-center justify-center transition-all duration-300 group-hover:translate-x-2">
                      <svg 
                        className="w-6 h-6 stroke-white group-hover:stroke-black transition-colors duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2}
                      >
                        <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover Line Effect */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-1 bg-black mt-6 origin-left"
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 border-2 border-white p-8 text-center"
        >
          <p className="text-white font-mono text-lg mb-4 uppercase">
            Want to read more?
          </p>
          <a
            href="https://dev.to/shivangvora1206"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border-2 border-white bg-transparent text-white font-mono uppercase hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base"
          >
            Visit My Dev.to Profile →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;
