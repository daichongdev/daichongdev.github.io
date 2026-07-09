'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Footer = () => {
  const { t } = useLanguage();
  const [isInView, setIsInView] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  // Magnetic hover effect state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 20, mass: 0.8 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    mouseX.set(distanceX * 0.2);
    mouseY.set(distanceY * 0.2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const socialLinks = [
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/daichongdev',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#000000] py-32 md:py-48 px-8 md:px-16 overflow-hidden"
    >
      {/* Ethereal Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(70, 72, 212, 0.25), rgba(144, 73, 0, 0.15), transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(144, 73, 0, 0.2), rgba(70, 72, 212, 0.1), transparent 70%)',
          }}
        />
      </div>

      {/* Double Bezel Container */}
      <motion.div
        className="relative max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Glassmorphic Main Card */}
        <motion.div
          variants={itemVariants}
          className="relative bg-white/[0.03] backdrop-blur-[40px] border border-white/[0.08] rounded-[32px] p-12 md:p-16 lg:p-20"
          style={{
            boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.6)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
            {/* Brand Section - Hero Scale Typography */}
            <motion.div variants={itemVariants} className="md:col-span-5 space-y-8">
              <h2
                className="font-headline font-bold text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-[-0.02em] bg-gradient-to-r from-white via-[#C0C1FF] to-[#FFB783] bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(70, 72, 212, 0.3)',
                }}
              >
                Chong Dai
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-[1.6] max-w-md font-body">
                {t(
                  'Building scalable and intelligent systems. Built with intentional asymmetry.',
                  '构建可扩展的智能系统。采用有意的非对称设计。'
                )}
              </p>

              {/* Decorative Accent Line */}
              <motion.div
                className="w-24 h-[2px] rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #4648d4, #904900)',
                  boxShadow: '0 0 20px rgba(70, 72, 212, 0.6)',
                }}
                initial={{ width: 0 }}
                animate={isInView ? { width: 96 } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </motion.div>

            {/* Social Links - Button-in-Button with Magnetic Hover */}
            <motion.div variants={itemVariants} className="md:col-span-7 flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                {socialLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="relative group"
                  >
                    {/* Outer Glow Container */}
                    <motion.div
                      className="relative p-[1.5px] rounded-2xl overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(70, 72, 212, 0.4), rgba(144, 73, 0, 0.4))',
                      }}
                    >
                      {/* Shimmer Effect on Hover */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
                          backgroundSize: '200% 100%',
                        }}
                        animate={{
                          backgroundPosition: ['200% center', '-200% center'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />

                      {/* Inner Button */}
                      <motion.a
                        href={link.href}
                        style={{ x, y }}
                        className="relative flex items-center justify-center gap-3 px-8 py-5 bg-[#0A0A0A] rounded-2xl text-white/85 font-headline font-medium text-sm tracking-wide overflow-hidden group-hover:bg-[#121212] transition-colors duration-700"
                      >
                        <motion.div
                          className="relative z-10"
                          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.1, 1.1, 1.1, 1] }}
                          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                        >
                          {link.icon}
                        </motion.div>
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                          {link.name}
                        </span>

                        {/* Glow Effect on Hover */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: 'radial-gradient(circle at 50% 50%, rgba(70, 72, 212, 0.15), transparent 70%)',
                          }}
                        />
                      </motion.a>
                    </motion.div>

                    {/* Outer Shadow Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(135deg, rgba(70, 72, 212, 0.3), rgba(144, 73, 0, 0.3))',
                        zIndex: -1,
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider with Gradient */}
          <motion.div
            variants={itemVariants}
            className="mt-16 md:mt-20 mb-12 md:mb-16 h-[1px] w-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1) 50%, transparent)',
            }}
          />

          {/* Copyright Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/38 text-sm font-body"
          >
            <p>
              {t('© 2024 Chong Dai. All rights reserved.', '© 2024 Chong Dai. 版权所有。')}
            </p>
            <motion.p
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <span>Crafted with</span>
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                ✦
              </motion.span>
              <span>and precision</span>
            </motion.p>
          </motion.div>

          {/* Floating Orbital Decorations */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 rounded-full border border-white/10"
            animate={{
              rotate: 360,
              x: [0, 10, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full border border-white/[0.05]"
            animate={{
              rotate: -360,
              x: [0, -15, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
