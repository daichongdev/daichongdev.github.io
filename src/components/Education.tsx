import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-surface-container-low py-24 md:py-32" id="education">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">
            {t('Education', '教育背景')}
          </h2>
          <p className="text-outline max-w-2xl mx-auto">
            {t(
              'Academic foundation in computer science and continuous learning.',
              '计算机科学学术基础与持续学习。'
            )}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl border border-outline-variant/20 shadow-xl relative overflow-hidden group"
          >
            {/* Glow Effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-tertiary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Content */}
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <motion.div
                  className="flex items-center gap-3 mb-4"
                  whileHover={{ x: 5 }}
                >
                  <span className="material-symbols-outlined text-primary text-3xl">
                    school
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold">
                      {t('Hangzhou Dianzi University', '杭州电子科技大学')}
                    </h3>
                    <p className="text-outline-variant font-medium">
                      {t('Computer Science and Technology', '计算机科学与技术')}
                    </p>
                  </div>
                </motion.div>

                <div className="flex flex-wrap gap-4 text-sm">
                  <motion.div
                    className="flex items-center gap-2 text-outline"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                    <span>{t('Bachelor Degree', '本科学历')}</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 text-outline"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="material-symbols-outlined text-[18px]">code</span>
                    <span>{t('Software Engineering Focus', '软件工程方向')}</span>
                  </motion.div>
                </div>
              </div>

              {/* Decorative Element */}
              <motion.div
                className="hidden md:block"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-tertiary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    emoji_objects
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Particle Effects */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/40 rounded-full"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${20 + i * 20}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
