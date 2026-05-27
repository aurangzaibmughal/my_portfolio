import { motion } from 'framer-motion';

const Logo = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-10 h-10 text-base',
    md: 'w-14 h-14 text-xl',
    lg: 'w-20 h-20 text-3xl',
    xl: 'w-32 h-32 text-5xl',
    '2xl': 'w-48 h-48 text-7xl',
  };

  return (
    <div className={`relative ${sizes[size]} ${className}`}>
      {/* Outer Hexagon Border */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a3e635" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#84cc16" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {/* Hexagon Shape */}
          <polygon
            points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            className="drop-shadow-[0_0_8px_rgba(163,230,53,0.5)]"
          />
          {/* Inner Hexagon */}
          <polygon
            points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5"
            fill="rgba(163,230,53,0.05)"
            stroke="#a3e635"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
        </svg>
      </div>

      {/* Center AM Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-lime relative z-10"
          style={{
            textShadow: '0 0 20px rgba(163, 230, 53, 0.5), 0 0 40px rgba(163, 230, 53, 0.3)',
            letterSpacing: '0.05em',
          }}
        >
          AM
        </motion.span>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-2 h-2 bg-lime rounded-full opacity-60" />
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-lime rounded-full opacity-60" />
    </div>
  );
};

export default Logo;
