import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="relative py-12 sm:py-16 lg:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <p className="font-body text-[10px] sm:text-xs tracking-[0.3em] uppercase text-lime mb-3 sm:mb-4">
            SELECTED WORK
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
            <span className="text-white">Projects that </span>
            <span
              className="inline-block"
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px #a3e635',
                textStroke: '2px #a3e635',
              }}
            >
              Matter.
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group relative rounded-2xl bg-dark-card border border-lime/12 overflow-hidden hover:border-lime/40 hover:shadow-lime transition-all duration-300 ${project.size}`}
            >
              {/* Decorative Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 sm:py-1 rounded-md bg-lime/10 border border-lime/20 text-lime font-mono text-[10px] sm:text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-body text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-lime transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-body text-xs sm:text-sm lg:text-base text-slate-400 leading-relaxed mb-4 sm:mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-3 sm:gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 text-lime hover:text-lime-dark transition-colors group/link"
                    >
                      <span className="font-body text-xs sm:text-sm font-medium">View Project</span>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-lime transition-colors"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
