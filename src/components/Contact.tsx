import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

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
              {t(
                <>
                  Let's build something <br className="hidden md:block" />
                  remarkable.
                </>,
                <>
                  让我们一起构建
                  <br className="hidden md:block" />
                  非凡之作。
                </>
              )}
            </h2>
            <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
              {t('Currently accepting new projects and consulting opportunities.', '目前接受新项目和咨询机会。')}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-12 py-5 rounded-2xl font-bold text-xl shadow-xl"
                href="mailto:daichongdev@gmail.com"
              >
                {t('Get in Touch', '联系我')}
              </motion.a>
              <div className="flex gap-6 mt-8 md:mt-0">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  className="text-white/80 hover:text-white transition-colors"
                  href="#"
                  title="LinkedIn"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 32 }}>
                    person_add
                  </span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  className="text-white/80 hover:text-white transition-colors"
                  href="#"
                  title="GitHub"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 32 }}>
                    code
                  </span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  className="text-white/80 hover:text-white transition-colors"
                  href="#"
                  title="Telegram"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 32 }}>
                    send
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
