import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

const Skills = () => {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skillCategories = [
    {
      icon: 'dashboard',
      title: t('Frontend', '前端开发'),
      skills: [
        { name: 'React', level: t('Senior', '高级') },
        { name: 'Vue', level: t('Advanced', '熟练') },
        { name: 'Tailwind CSS', level: t('Advanced', '熟练') },
      ],
    },
    {
      icon: 'dns',
      title: t('Backend', '后端开发'),
      skills: [
        { name: 'GO / Gin', level: t('Advanced', '熟练') },
        { name: 'Java / Spring', level: t('Senior', '高级') },
        { name: 'PHP / Laravel', level: t('Advanced', '熟练') },
      ],
    },
    {
      icon: 'smart_toy',
      title: t('AI / Automation', 'AI 与自动化'),
      skills: [
        { name: 'Python / PyTorch', level: t('Advanced', '熟练') },
        { name: 'OpenAI / LangChain', level: t('Advanced', '熟练') },
        { name: 'n8n / Zapier', level: t('Advanced', '熟练') },
      ],
    },
    {
      icon: 'settings_ethernet',
      title: t('Infrastructure', '基础设施'),
      skills: [
        { name: 'Docker / K8s', level: t('Advanced', '熟练') },
        { name: 'Git / CI/CD', level: t('Advanced', '熟练') },
        { name: 'AWS / GCP', level: t('Advanced', '熟练') },
      ],
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-8 text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-4xl font-bold tracking-tight mb-4"
        >
          {t('Technical Ecosystem', '技术生态')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-outline max-w-xl mx-auto"
        >
          {t(
            'A modern stack designed for speed, intelligence, and maintainability.',
            '专为速度、智能和可维护性设计的现代技术栈。'
          )}
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative group"
          >
            {/* Glow Effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-tertiary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
              animate={hoveredIndex === index ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10 shadow-lg overflow-hidden"
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(70, 72, 212, 0.3), transparent)',
                }}
                animate={hoveredIndex === index ? { x: ['-100%', '200%'] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              />

              {/* Icon with Animation */}
              <motion.div
                className="relative"
                animate={hoveredIndex === index ? { rotate: [0, 10, -10, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                <motion.span
                  className="material-symbols-outlined text-primary mb-4 inline-block"
                  style={{ fontSize: 32 }}
                  animate={hoveredIndex === index ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {category.icon}
                </motion.span>
              </motion.div>

              <h3 className="font-bold text-lg mb-4 relative">{category.title}</h3>

              <ul className="space-y-3 text-sm text-outline relative">
                {category.skills.map((skill, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                    className="flex justify-between items-center group/item"
                  >
                    <span className="group-hover/item:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <motion.span
                      className="text-primary/60 font-medium"
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill.level}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>

              {/* Particle Effect on Hover */}
              {hoveredIndex === index && (
                <>
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -50],
                        opacity: [1, 0],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
