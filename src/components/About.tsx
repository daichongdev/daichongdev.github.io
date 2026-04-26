import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '5+', label: t('Years Experience', '年开发经验') },
    { value: '40+', label: t('Projects Delivered', '交付项目') },
    { value: '12', label: t('AI Automations', 'AI 自动化方案') },
    { value: '99%', label: t('Uptime Target', '目标正常运行时间') },
  ];

  return (
    <section className="bg-surface-container-low py-24 md:py-32" id="about">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-headline text-4xl font-bold tracking-tight mb-8">
              {t(
                'Crafting Digital Excellence Through Intelligent Code',
                '通过智能代码打造卓越数字体验'
              )}
            </h2>
            <p className="text-lg text-outline leading-relaxed mb-6">
              {t(
                'With over 5 years of professional experience, I have dedicated my career to bridging the gap between sophisticated AI models and practical, high-performance web applications. My approach combines the structural integrity of enterprise systems with the agility of modern AI automation.',
                '拥有超过5年的专业经验，我致力于将复杂的AI模型与实用、高性能的Web应用相结合。我的开发方法结合了企业级系统的结构完整性与现代AI自动化的敏捷性。'
              )}
            </p>
            <p className="text-lg text-outline leading-relaxed">
              {t(
                "Based at the intersection of e-commerce and machine learning, I help brands scale by building tools that don't just process data—they understand it.",
                '立足于电子商务与机器学习的交汇点，我通过构建不仅能处理数据、更能理解数据的工具来帮助品牌扩展业务。'
              )}
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-surface-container-lowest p-8 rounded-2xl soft-glow"
              >
                <div className="text-primary text-3xl font-black mb-2">{stat.value}</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-outline">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
