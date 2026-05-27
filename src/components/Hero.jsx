import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import Logo from './Logo';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: 'easeOut' },
    }),
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT SIDE - Text Content */}
          <div className="relative z-10 text-left order-2 lg:order-1">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={heroVariants}
              className="mb-3 sm:mb-4"
            >
              <p className="font-body text-xs sm:text-sm tracking-[0.3em] uppercase text-lime">
                Aurangzaib Mughal
              </p>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={heroVariants}
              className="font-display text-[clamp(48px,10vw,120px)] leading-none text-white mb-1 sm:mb-2"
            >
              CREATIVE
            </motion.h1>

            <motion.h1
              custom={2}
              initial="hidden"
              animate="visible"
              variants={heroVariants}
              className="font-display text-[clamp(48px,10vw,120px)] leading-none mb-6 sm:mb-8"
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px #a3e635',
                textStroke: '2px #a3e635',
              }}
            >
              DEVELOPER
            </motion.h1>

            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={heroVariants}
              className="font-body text-sm sm:text-base lg:text-lg text-slate-400 mb-8 sm:mb-10 max-w-lg"
            >
              AI Automation Engineer · Full Stack Dev · Based in Karachi, PK 🇵🇰
            </motion.p>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={heroVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 mb-12 sm:mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-lime text-black font-body font-semibold text-sm sm:text-base hover:shadow-lime-glow transition-all"
              >
                View Projects →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-lime text-lime font-body font-semibold text-sm sm:text-base hover:bg-lime hover:text-black transition-all"
              >
                Download CV
              </motion.button>
            </motion.div>

            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={heroVariants}
              className="hidden lg:flex flex-col items-start gap-2"
            >
              <p className="font-body text-xs text-slate-500 uppercase tracking-wider">Scroll Down</p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowDown className="w-5 h-5 text-lime" />
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Particle Animation + Logo */}
          <div className="relative h-[350px] sm:h-[400px] lg:h-[600px] order-1 lg:order-2">
            {/* Particle Background */}
            <ParticleBackground />

            {/* Decorative Elements with Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Rotating Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full border-2 border-lime/20"
              />

              {/* Rotating Inner Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-36 h-36 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-full border border-lime/10"
              />

              {/* Center Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative z-10"
              >
                <Logo size="2xl" className="drop-shadow-[0_0_30px_rgba(163,230,53,0.4)]" />
              </motion.div>

              {/* Orbiting Dots */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
              >
                <div className="absolute top-0 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-lime rounded-full -translate-x-1/2 shadow-lime-glow" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-lime rounded-full -translate-x-1/2 shadow-lime-glow" />
                <div className="absolute left-0 top-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-lime rounded-full -translate-y-1/2 shadow-lime-glow" />
                <div className="absolute right-0 top-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-lime rounded-full -translate-y-1/2 shadow-lime-glow" />
              </motion.div>

              {/* Corner Accents - Hidden on mobile */}
              <div className="hidden sm:block absolute top-10 right-10 w-16 h-16 lg:w-20 lg:h-20 border-t-2 border-r-2 border-lime/20 rounded-tr-3xl" />
              <div className="hidden sm:block absolute bottom-10 left-10 w-16 h-16 lg:w-20 lg:h-20 border-b-2 border-l-2 border-lime/20 rounded-bl-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
