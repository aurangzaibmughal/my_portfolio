import { motion } from 'framer-motion';
import Logo from './Logo';

const About = () => {
  const skills = [
    'React', 'Next.js', 'Python', 'Claude API', 'FastAPI',
    'Framer Motion', 'Tailwind', 'MCP', 'Automation', 'TypeScript',
    'Docusaurus', 'Docker', 'Vercel', 'RAG Systems'
  ];

  const stats = [
    { icon: '🤖', label: 'AI Workflows' },
    { icon: '⚡', label: 'Web Dev' },
    { icon: '🎬', label: 'Kids Creator' },
  ];

  const infoGrid = [
    { icon: '📍', label: 'Karachi, Pakistan' },
    { icon: '💼', label: 'Hospital Billing + Dev' },
    { icon: '🎓', label: 'Gov. Sindh Initiative' },
    { icon: '🌐', label: 'Open to Remote Work' },
  ];

  return (
    <section id="about" className="relative py-12 sm:py-16 lg:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[60%_40%] gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* LEFT SIDE - Cinematic Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="space-y-1 sm:space-y-2">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none text-white"
              >
                Building
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none text-lime"
              >
                the Web.
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-3 sm:space-y-4 max-w-lg"
            >
              <p className="font-body text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed">
                I craft intelligent digital experiences at the intersection of
                AI automation and modern web development. Every pixel has purpose.
              </p>
              <p className="font-body text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed">
                From agentic AI workflows to full-stack applications —
                I build systems that think, adapt, and perform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="w-12 sm:w-16 h-0.5 bg-lime mb-4 sm:mb-6" />
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-lime/20 bg-dark-card/50 backdrop-blur-sm"
                  >
                    <span className="font-body text-xs sm:text-sm text-slate-300">
                      {stat.icon} {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl border border-lime/12 bg-dark-card p-4 sm:p-6 lg:p-8 hover:border-lime/30 hover:shadow-lime transition-all duration-300">
              {/* Profile Image Placeholder */}
              <motion.div
                whileHover={{ rotate: 0 }}
                className="w-full aspect-square rounded-xl bg-gradient-to-br from-lime/20 to-lime/5 border border-lime/20 mb-4 sm:mb-6 overflow-hidden relative flex items-center justify-center"
                style={{ rotate: '-2deg' }}
              >
                <Logo size="xl" className="drop-shadow-[0_0_20px_rgba(163,230,53,0.3)]" />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-lime/20 to-transparent" />
              </motion.div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                {infoGrid.map((info, index) => (
                  <div
                    key={index}
                    className="px-2 sm:px-3 py-2 sm:py-3 rounded-lg border border-lime/10 bg-dark/50 hover:border-lime/30 transition-all"
                  >
                    <p className="font-body text-[10px] sm:text-xs text-slate-400 break-words">
                      {info.icon} {info.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div>
                <p className="font-body text-[10px] sm:text-xs text-lime uppercase tracking-wider mb-2 sm:mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-lime/10 border border-lime/20 text-lime font-body text-[10px] sm:text-xs hover:bg-lime hover:text-black transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
