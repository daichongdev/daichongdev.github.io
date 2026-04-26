import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-8 mb-32 md:mb-48">
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-primary-container/20 rounded-full blur-2xl transition-all group-hover:blur-3xl" />
          <img
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-surface-container-lowest soft-glow"
            src="/profile.jpg"
            alt="Professional portrait"
          />
        </motion.div>
        <div className="flex-1 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-primary font-label text-xs tracking-[0.1em] font-bold mb-4"
          >
            ALEX CHEN
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            {t('Full Stack Developer', '全栈开发工程师')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
              {t('& AI Engineer', '& AI 工程师')}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-outline mb-10 max-w-2xl leading-relaxed"
          >
            {t(
              'Building intelligent systems with a focus on automation and scalable architectures.',
              '专注于构建自动化和可扩展架构的智能系统。'
            )}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <a
              className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-all flex items-center gap-2"
              href="#work"
            >
              {t('View Projects', '查看项目')}
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </a>
            <a
              className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-high transition-all"
              href="#contact"
            >
              {t('Contact', '联系我')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
