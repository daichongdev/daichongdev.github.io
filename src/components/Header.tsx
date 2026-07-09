import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect, useRef } from 'react';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { scrollY, scrollYProgress } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Magnetic hover effect for logo
  const logoRef = useRef<HTMLDivElement>(null);
  const logoX = useMotionValue(0);
  const logoY = useMotionValue(0);
  const logoSpringX = useSpring(logoX, { stiffness: 300, damping: 20, mass: 0.8 });
  const logoSpringY = useSpring(logoY, { stiffness: 300, damping: 20, mass: 0.8 });

  // Magnetic hover effect for CTA button
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaX = useMotionValue(0);
  const ctaY = useMotionValue(0);
  const ctaSpringX = useSpring(ctaX, { stiffness: 300, damping: 20, mass: 0.8 });
  const ctaSpringY = useSpring(ctaY, { stiffness: 300, damping: 20, mass: 0.8 });

  useEffect(() => {
    // Scroll handling can be added here if needed
  }, []);

  // Magnetic hover handler
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    ref: React.RefObject<HTMLDivElement>,
    xValue: any,
    yValue: any
  ) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < 100) {
      xValue.set(distanceX * 0.2);
      yValue.set(distanceY * 0.2);
    } else {
      xValue.set(0);
      yValue.set(0);
    }
  };

  const handleMouseLeave = (xValue: any, yValue: any) => {
    xValue.set(0);
    yValue.set(0);
  };

  const navigationItems = [
    { href: '#work', label: t('Work', '项目') },
    { href: '#about', label: t('About', '关于') },
    { href: '#experience', label: t('Experience', '经历') },
    { href: '#opensource', label: t('Open Source', '开源') },
  ];

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4648d4] via-[#6063ee] to-[#904900] origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 w-full z-50"
      >
        {/* Glassmorphic container with double-bezel architecture */}
        <motion.div
          style={{
            backgroundColor: useTransform(
              scrollY,
              [0, 100],
              ['rgba(0, 0, 0, 0.3)', 'rgba(10, 10, 10, 0.95)']
            ),
            backdropFilter: useTransform(
              scrollY,
              [0, 100],
              ['blur(20px) saturate(180%)', 'blur(40px) saturate(180%)']
            ),
            borderColor: useTransform(
              scrollY,
              [0, 100],
              ['rgba(255, 255, 255, 0.05)', 'rgba(255, 255, 255, 0.12)']
            ),
          }}
          className="border-b transition-all duration-700"
        >
          {/* Inner frame - double bezel */}
          <nav className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-16">
            <div className="flex justify-between items-center h-20 md:h-24">

              {/* Logo with magnetic hover */}
              <motion.div
                ref={logoRef}
                style={{ x: logoSpringX, y: logoSpringY }}
                onMouseMove={(e) => handleMouseMove(e, logoRef, logoX, logoY)}
                onMouseLeave={() => handleMouseLeave(logoX, logoY)}
                className="relative cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Simplified glow effect - no continuous animation */}
                <div
                  className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(70, 72, 212, 0.25), transparent 70%)',
                  }}
                />

                {/* Logo text with gradient */}
                <motion.a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="relative text-lg md:text-xl font-bold tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #C0C1FF 50%, #FFB783 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  daichongdev.github.io
                </motion.a>
              </motion.div>

              {/* Desktop Navigation */}
              <motion.div
                className="hidden lg:flex items-center gap-8 xl:gap-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, staggerChildren: 0.08, delayChildren: 0.4 }}
              >
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="relative text-sm xl:text-base font-medium text-white/85 hover:text-white transition-all duration-700 ease-[0.25,0.46,0.45,0.94] group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.4 + index * 0.08,
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    whileHover={{ y: -2 }}
                  >
                    {item.label}

                    {/* Underline effect */}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-[#4648d4] to-[#6063ee] group-hover:w-full transition-all duration-500 ease-[0.25,0.46,0.45,0.94]"
                    />

                    {/* Glow effect on hover - simplified */}
                    <span
                      className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                      style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(70, 72, 212, 0.15), transparent 70%)',
                      }}
                    />
                  </motion.a>
                ))}
              </motion.div>

              {/* Right side controls */}
              <div className="flex items-center gap-3 md:gap-4">

                {/* Language Toggle with glassmorphic design - simplified shimmer */}
                <motion.button
                  onClick={toggleLanguage}
                  className="relative px-4 md:px-5 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-bold text-white/85 hover:text-white overflow-hidden group"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(40px) saturate(180%)',
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {/* Removed continuous shimmer animation for performance */}
                  <span className="relative z-10">{language === 'en' ? 'EN' : '中文'}</span>
                </motion.button>

                {/* Button-in-Button CTA with magnetic hover - simplified animations */}
                <motion.div
                  ref={ctaRef}
                  style={{ x: ctaSpringX, y: ctaSpringY }}
                  onMouseMove={(e) => handleMouseMove(e, ctaRef, ctaX, ctaY)}
                  onMouseLeave={() => handleMouseLeave(ctaX, ctaY)}
                  className="relative hidden md:block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {/* Outer button with gradient border */}
                  <motion.div
                    className="p-[2px] rounded-2xl relative overflow-hidden group cursor-pointer"
                    style={{
                      background: 'linear-gradient(135deg, #4648d4 0%, #6063ee 25%, #904900 75%, #b55d00 100%)',
                    }}
                  >
                    {/* Inner button */}
                    <motion.button
                      className="relative w-full px-8 md:px-10 py-3 md:py-4 bg-[#000000] rounded-2xl text-sm md:text-base font-bold text-white overflow-hidden"
                      whileHover={{ backgroundColor: '#0A0A0A' }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Removed continuous shimmer for performance */}
                      <span className="relative z-10">{t('Contact', '联系我')}</span>
                    </motion.button>
                  </motion.div>

                  {/* Removed pulsing glow effect for performance */}
                </motion.div>

                {/* Mobile CTA (simplified) */}
                <motion.button
                  className="md:hidden relative px-6 py-2.5 rounded-xl text-xs font-bold text-white overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #4648d4 0%, #6063ee 100%)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">{t('Contact', '联系')}</span>
                </motion.button>

                {/* Mobile Menu Toggle */}
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden relative p-2 rounded-xl text-white/85"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {isMobileMenuOpen ? (
                      <>
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </>
                    ) : (
                      <>
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                      </>
                    )}
                  </svg>
                </motion.button>
              </div>
            </div>
          </nav>
        </motion.div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? '0%' : '100%',
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="lg:hidden fixed inset-0 z-40 pointer-events-none"
        style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80"
          style={{ backdropFilter: 'blur(40px) saturate(180%)' }}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <motion.div
          className="absolute right-0 top-20 bottom-0 w-full max-w-sm"
          style={{
            backgroundColor: 'rgba(10, 10, 10, 0.98)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(40px) saturate(180%)',
          }}
        >
          <div className="flex flex-col gap-2 p-8">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative px-6 py-4 rounded-xl text-lg font-medium text-white/85 hover:text-white transition-all duration-500 group"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : 50,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  x: 4,
                }}
              >
                {item.label}

                {/* Glow effect - simplified */}
                <span
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(70, 72, 212, 0.15), transparent 70%)',
                  }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Header;
