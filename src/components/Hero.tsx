import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useParallax } from '../hooks/useScrollAnimation';
import { useRef } from 'react';

const Hero = () => {
  const { t } = useLanguage();
  const parallaxOffset = useParallax(0.3);
  const parallaxFast = useParallax(0.7);

  // 3D Tilt Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  // Magnetic Button Effect
  const magneticRef = useRef<HTMLDivElement>(null);
  const magneticX = useMotionValue(0);
  const magneticY = useMotionValue(0);
  const springConfig = { stiffness: 300, damping: 20, mass: 0.8 };
  const magneticSpringX = useSpring(magneticX, springConfig);
  const magneticSpringY = useSpring(magneticY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleMagneticMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!magneticRef.current) return;
    const rect = magneticRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < 100) {
      magneticX.set(distanceX * 0.2);
      magneticY.set(distanceY * 0.2);
    }
  };

  const handleMagneticLeave = () => {
    magneticX.set(0);
    magneticY.set(0);
  };

  // Animation Variants
  const containerVariants = {
    hidden: {},
    visible: {
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

  return (
    <section className="relative min-h-screen flex items-center py-48 md:py-64 lg:py-80 overflow-hidden bg-[#000000]">
      {/* Ethereal Gradient Background */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(70, 72, 212, 0.25), rgba(144, 73, 0, 0.15), transparent 70%)',
            y: parallaxOffset,
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(144, 73, 0, 0.3), rgba(70, 72, 212, 0.15), transparent 70%)',
            y: parallaxFast,
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Animated Mesh Gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'conic-gradient(from 180deg at 50% 50%, #4648d4 0deg, #6063ee 90deg, #904900 180deg, #b55d00 270deg, #4648d4 360deg)',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Double-Bezel Container */}
      <div className="relative w-full max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center"
          >
            {/* Profile Image Section - Asymmetric Grid 5/12 */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-5 flex justify-center md:justify-start"
            >
              <motion.div
                className="relative group perspective-1000"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ y: parallaxOffset }}
              >
                {/* Glassmorphic Outer Ring */}
                <motion.div
                  className="absolute -inset-12 rounded-full border-2 backdrop-blur-[40px]"
                  style={{
                    borderImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02)) 1',
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    rotateX,
                    rotateY,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />

                {/* Inner Ring with Glow */}
                <motion.div
                  className="absolute -inset-8 rounded-full border"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.05)',
                    rotateX: useTransform(rotateX, (v) => v * 0.5),
                    rotateY: useTransform(rotateY, (v) => v * 0.5),
                    boxShadow: '0 0 40px rgba(70, 72, 212, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
                  }}
                  animate={{
                    boxShadow: [
                      '0 0 40px rgba(70, 72, 212, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
                      '0 0 60px rgba(70, 72, 212, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)',
                      '0 0 40px rgba(70, 72, 212, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                />

                {/* Radial Glow Effect */}
                <motion.div
                  className="absolute -inset-6 rounded-full blur-3xl"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(70, 72, 212, 0.3), rgba(144, 73, 0, 0.2), transparent 70%)',
                  }}
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.6, 0.9, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Profile Image with 3D Transform */}
                <motion.div
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    {/* Glassmorphic Border */}
                    <div
                      className="absolute inset-0 rounded-full p-[2px]"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.03))',
                      }}
                    >
                      <div className="w-full h-full rounded-full bg-[#0A0A0A] p-1">
                        <img
                          className="w-full h-full rounded-full object-cover"
                          src="/profile.jpg"
                          alt="Professional portrait"
                          style={{ transform: 'translateZ(50px)' }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Orbital Decorations - Enhanced */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                      background: i % 2 === 0
                        ? 'linear-gradient(135deg, #4648d4, #6063ee)'
                        : 'linear-gradient(135deg, #904900, #b55d00)',
                      boxShadow: i % 2 === 0
                        ? '0 0 20px rgba(70, 72, 212, 0.8)'
                        : '0 0 20px rgba(144, 73, 0, 0.8)',
                    }}
                    animate={{
                      rotate: 360,
                      x: Math.cos((i * 2 * Math.PI) / 5) * (160 + i * 10),
                      y: Math.sin((i * 2 * Math.PI) / 5) * (160 + i * 10),
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 12 + i * 2,
                        repeat: Infinity,
                        ease: 'linear',
                      },
                      x: {
                        duration: 12 + i * 2,
                        repeat: Infinity,
                        ease: 'linear',
                      },
                      y: {
                        duration: 12 + i * 2,
                        repeat: Infinity,
                        ease: 'linear',
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Content Section - Asymmetric Grid 7/12 */}
            <div className="md:col-span-7">
              <motion.div variants={itemVariants}>
                {/* Badge with Glassmorphism */}
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8 backdrop-blur-[40px] border"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #4648d4, #6063ee)',
                      boxShadow: '0 0 20px rgba(70, 72, 212, 0.8)',
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  <span
                    className="text-xs font-bold tracking-[0.15em] uppercase"
                    style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                  >
                    {t('DAI CHONG', '戴崇')}
                  </span>
                </div>
              </motion.div>

              {/* Massive Hero Typography */}
              <motion.h1
                variants={itemVariants}
                className="font-bold tracking-tight mb-8 leading-[0.95]"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                }}
              >
                {t('Senior Backend', '高级后端')}<br />
                {t('Engineer', '工程师')}
              </motion.h1>

              {/* Gradient Tech Stack */}
              <motion.div
                variants={itemVariants}
                className="mb-10"
              >
                <motion.span
                  className="inline-block font-bold tracking-tight"
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    lineHeight: '1.1',
                    letterSpacing: '-0.01em',
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #C0C1FF 50%, #FFB783 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '200% auto',
                  }}
                  animate={{
                    backgroundPosition: ['0% center', '200% center'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {t('PHP / Go / Java', 'PHP / Go / Java')}
                </motion.span>
              </motion.div>

              {/* Description with Double Bezel */}
              <motion.div
                variants={itemVariants}
                className="mb-12"
              >
                <div
                  className="p-[1px] rounded-3xl backdrop-blur-[40px]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
                  }}
                >
                  <div
                    className="px-8 py-6 rounded-3xl backdrop-blur-[40px]"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <p
                      className="text-lg md:text-xl leading-relaxed max-w-2xl"
                      style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                    >
                      {t(
                        '9 years of experience in multi-language development (PHP/Go/Java), microservices architecture, and high-concurrency systems. Expertise in live streaming e-commerce, supply chain, local life services, hotel SaaS, and smart wearables with projects serving tens of millions of users.',
                        '9年多语言开发经验（PHP/Go/Java），专注微服务架构、高并发系统设计。拥有电商直播、供应链、本地生活、酒店SaaS、智能硬件等领域千万级用户规模项目经验。'
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons - Button-in-Button Design */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-6"
              >
                {/* Primary CTA - Magnetic Button-in-Button */}
                <motion.div
                  ref={magneticRef}
                  onMouseMove={handleMagneticMove}
                  onMouseLeave={handleMagneticLeave}
                  style={{
                    x: magneticSpringX,
                    y: magneticSpringY,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div
                    className="p-[2px] rounded-2xl relative overflow-hidden group cursor-pointer"
                    style={{
                      background: 'linear-gradient(135deg, #4648d4 0%, #6063ee 25%, #904900 75%, #b55d00 100%)',
                      boxShadow: '0 0 40px rgba(70, 72, 212, 0.6), 0 0 80px rgba(70, 72, 212, 0.3)',
                    }}
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
                        backgroundSize: '200% 100%',
                      }}
                      animate={{
                        backgroundPosition: ['-200% center', '200% center'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />

                    <a
                      className="relative flex items-center gap-3 px-12 py-6 bg-[#000000] rounded-2xl font-bold text-lg transition-all duration-700"
                      style={{
                        color: '#FFFFFF',
                        transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)',
                      }}
                      href="#work"
                    >
                      <span>{t('View Projects', '查看项目')}</span>

                      {/* Custom SVG Arrow Icon */}
                      <motion.svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </motion.svg>
                    </a>
                  </div>
                </motion.div>

                {/* Secondary CTA - Glassmorphic */}
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <a
                    className="flex items-center gap-3 px-12 py-6 rounded-2xl font-bold text-lg border backdrop-blur-[40px] transition-all duration-700"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderColor: 'rgba(255, 255, 255, 0.08)',
                      color: '#FFFFFF',
                      boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
                      transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)',
                    }}
                    href="#contact"
                  >
                    <span>{t('Contact', '联系我')}</span>

                    {/* Custom SVG Mail Icon */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span
            className="text-xs font-medium tracking-wider uppercase"
            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
          >
            {t('Scroll', '滚动')}
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
