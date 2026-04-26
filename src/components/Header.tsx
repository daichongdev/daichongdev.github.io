import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 glass-nav"
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="text-xl font-black text-[#191c1d] tracking-tighter">
          daichongdev.github.io
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a
            className="text-[#4648d4] font-bold border-b-2 border-[#4648d4] pb-1 font-['Manrope'] tracking-tight"
            href="#work"
          >
            {t('Work', '项目')}
          </a>
          <a
            className="text-[#767586] font-medium hover:text-[#191c1d] transition-colors font-['Manrope'] tracking-tight"
            href="#about"
          >
            {t('About', '关于')}
          </a>
          <a
            className="text-[#767586] font-medium hover:text-[#191c1d] transition-colors font-['Manrope'] tracking-tight"
            href="#experience"
          >
            {t('Experience', '经历')}
          </a>
          <a
            className="text-[#767586] font-medium hover:text-[#191c1d] transition-colors font-['Manrope'] tracking-tight"
            href="#opensource"
          >
            {t('Open Source', '开源')}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="text-sm font-bold text-[#767586] hover:text-[#191c1d] transition-colors px-3 py-1 rounded-full border border-outline-variant/30 hover:bg-surface-container-high"
          >
            {language === 'en' ? 'EN' : '中文'}
          </button>
          <button className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-xl font-bold transition-all scale-95 active:scale-90 duration-200">
            {t('Contact', '联系我')}
          </button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
