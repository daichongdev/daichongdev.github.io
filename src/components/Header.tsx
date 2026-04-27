import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect } from 'react';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(248, 249, 250, 0.8)', 'rgba(248, 249, 250, 0.95)']
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ['0px 0px 0px rgba(0,0,0,0)', '0px 10px 30px rgba(0,0,0,0.1)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor: headerBackground,
        boxShadow: headerShadow,
      }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-outline-variant/10"
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <motion.div
          className="text-xl font-black text-[#191c1d] tracking-tighter relative"
          whileHover={{ scale: 1.05 }}
        >
          <motion.span
            className="absolute -inset-2 bg-primary/5 rounded-lg blur-lg opacity-0 group-hover:opacity-100"
            animate={isScrolled ? {} : { scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="relative">daichongdev.github.io</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-10">
          {[
            { href: '#work', label: t('Work', '项目') },
            { href: '#about', label: t('About', '关于') },
            { href: '#experience', label: t('Experience', '经历') },
            { href: '#opensource', label: t('Open Source', '开源') },
          ].map((item, index) => (
            <motion.a
              key={item.href}
              className="text-[#767586] font-medium hover:text-[#4648d4] transition-colors font-['Manrope'] tracking-tight relative group"
              href={item.href}
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {item.label}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
              />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm font-bold text-[#767586] hover:text-[#191c1d] transition-colors px-3 py-1 rounded-full border border-outline-variant/30 hover:bg-surface-container-high relative overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <span className="relative">{language === 'en' ? 'EN' : '中文'}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-xl font-bold transition-all relative overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
            <span className="relative">{t('Contact', '联系我')}</span>
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
