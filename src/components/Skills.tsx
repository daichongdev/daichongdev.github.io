import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

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
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-8 text-center mb-16">
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
      <div className="max-w-7xl mx-auto px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10 soft-glow"
          >
            <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: 32 }}>
              {category.icon}
            </span>
            <h3 className="font-bold text-lg mb-4">{category.title}</h3>
            <ul className="space-y-3 text-sm text-outline">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="flex justify-between items-center">
                  <span>{skill.name}</span>
                  <span className="text-primary/60">{skill.level}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
