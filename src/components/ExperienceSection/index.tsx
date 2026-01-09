import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { companyDetails } from '../../config';

const ExperienceSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

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
            Experience
          </h2>
          <div className="h-1 w-32 bg-white mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Company List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 space-y-2"
          >
            {companyDetails.map((company, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`w-full text-left p-4 border-2 transition-all duration-300 font-mono ${
                  selectedIndex === index
                    ? 'border-white bg-white text-black'
                    : 'border-gray-600 bg-transparent text-white hover:border-white'
                }`}
              >
                <div className="text-sm uppercase tracking-wider font-bold">
                  {company.name.split(' - ')[1] || company.name}
                </div>
                <div className="text-xs opacity-70 mt-1">
                  {company.startDate} - {company.endDate}
                </div>
              </button>
            ))}
          </motion.div>

          {/* Company Details */}
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 border-2 border-white p-8 bg-black/50"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
                  {companyDetails[selectedIndex].name.split(' - ')[1] || companyDetails[selectedIndex].name}
                </h3>
                <p className="text-gray-400 font-mono text-sm mt-2">
                  {companyDetails[selectedIndex].name.split(' - ')[0]}
                </p>
                <p className="text-white font-mono text-sm mt-1">
                  {companyDetails[selectedIndex].startDate} - {companyDetails[selectedIndex].endDate}
                </p>
              </div>

              <div className="space-y-4">
                {companyDetails[selectedIndex].content.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex gap-3"
                  >
                    <span className="text-white font-bold mt-1">▸</span>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
