import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-32 md:py-48 bg-surface" id="contact">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary to-primary-container rounded-[2.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative z-10">
            <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
              {language === 'en' ? (
                <>
                  Let's build something <br className="hidden md:block" />
                  remarkable.
                </>
              ) : (
                <>
                  让我们一起构建
                  <br className="hidden md:block" />
                  非凡之作。
                </>
              )}
            </h2>
            <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
              {t(
                'Open to new opportunities and technical collaborations. Feel free to reach out!',
                '期待新的机会和技术合作，欢迎随时联系！'
              )}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-12 py-5 rounded-2xl font-bold text-xl shadow-xl"
                href="mailto:daichongweb@gmail.com"
              >
                {t('Get in Touch', '联系我')}
              </motion.a>
              <div className="flex gap-6">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  className="text-white/80 hover:text-white transition-colors"
                  href="https://github.com/daichongweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub (daichongweb)"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 32 }}>
                    code
                  </span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  className="text-white/80 hover:text-white transition-colors"
                  href="https://github.com/daichongdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub (daichongdev)"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 32 }}>
                    terminal
                  </span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  className="text-white/80 hover:text-white transition-colors"
                  href="http://www.daichongweb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t('Tech Blog', '技术博客')}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 32 }}>
                    article
                  </span>
                </motion.a>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">phone</span>
                <span>18338392479</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span>daichongweb@gmail.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
