import { motion } from 'framer-motion';
import { educationData } from '../data/education';

const Education = () => {
  return (
    <section id="education" className="relative py-12 sm:py-16 lg:py-32 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <p className="font-body text-[10px] sm:text-xs tracking-[0.3em] uppercase text-lime mb-3 sm:mb-4">
            EDUCATION
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white">
            My Learning Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-lime/20 hidden md:block" />

          {/* Education Cards */}
          <div className="space-y-6 sm:space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-lime border-4 border-dark hidden md:block" />

                {/* Card */}
                <div className="group p-4 sm:p-6 lg:p-8 rounded-2xl bg-dark-card border-l-4 border-lime hover:shadow-lime transition-all duration-300">
                  {/* Year Badge */}
                  <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-lime/10 border border-lime/20 mb-3 sm:mb-4">
                    <span className="font-mono text-[10px] sm:text-xs text-lime font-semibold">
                      {edu.year}
                    </span>
                  </div>

                  {/* Institution */}
                  <h3 className="font-body text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                    {edu.institution}
                  </h3>

                  {/* Program */}
                  <p className="font-body text-xs sm:text-sm lg:text-base text-lime mb-2 sm:mb-3">
                    {edu.program}
                  </p>

                  {/* Description */}
                  <p className="font-body text-xs sm:text-sm lg:text-base text-slate-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
