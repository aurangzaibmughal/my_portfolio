import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: 'aurangzaib.mughal@gmail.com',
      link: 'mailto:aurangzaib.mughal@gmail.com',
    },
    {
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/aurangzaib-mughal-62746013b/',
    },
    {
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: 'GitHub',
      link: 'https://github.com/aurangzaibmughal',
    },
    {
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: 'Karachi, Pakistan',
      link: null,
    },
  ];

  return (
    <section id="contact" className="relative py-12 sm:py-16 lg:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6">
            <span className="text-white">Let's Build </span>
            <span
              className="inline-block"
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px #a3e635',
                textStroke: '2px #a3e635',
              }}
            >
              Something.
            </span>
          </h2>
          <p className="font-body text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto px-4">
            Available for freelance, collaboration, and full-time remote opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 sm:space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-lime/12 bg-dark-card hover:border-lime/40 hover:shadow-lime transition-all duration-300 group"
                  >
                    <div className="text-lime group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <span className="font-body text-sm sm:text-base text-slate-300 group-hover:text-lime transition-colors break-all">
                      {info.label}
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-lime/12 bg-dark-card">
                    <div className="text-lime">{info.icon}</div>
                    <span className="font-body text-sm sm:text-base text-slate-300">
                      {info.label}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-body text-xs sm:text-sm text-slate-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-dark-card border border-lime/12 text-white font-body text-sm sm:text-base focus:border-lime focus:outline-none focus:ring-2 focus:ring-lime/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-body text-xs sm:text-sm text-slate-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-dark-card border border-lime/12 text-white font-body text-sm sm:text-base focus:border-lime focus:outline-none focus:ring-2 focus:ring-lime/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-body text-xs sm:text-sm text-slate-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-dark-card border border-lime/12 text-white font-body text-sm sm:text-base focus:border-lime focus:outline-none focus:ring-2 focus:ring-lime/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-lime text-black font-body font-semibold text-sm sm:text-base hover:shadow-lime-glow transition-all"
              >
                Send Message →
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
