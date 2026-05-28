import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '5+', label: t('Years Experience', '年开发经验') },
    { value: '3000+', label: t('Partner Merchants', '合作商家') },
    { value: '3', label: t('Ecosystem Platforms', '生态系统平台') },
    { value: 'K8s', label: t('Cloud Native', '云原生部署') },
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
                'Building Scalable Systems with the Right Technology',
                '用合适的技术解决实际业务问题'
              )}
            </h2>
            <p className="text-lg text-outline leading-relaxed mb-6">
              {t(
                'With over 5 years of professional experience, I specialize in multi-language development (PHP, Go, Java) and choose the best technology for each business requirement. From smart wearable ecosystems to high-concurrency e-commerce platforms, I focus on system architecture design, performance optimization, and cloud-native deployment.',
                '拥有超过5年的专业经验，专注于PHP、Go、Java多语言开发，能够根据业务需求选择最佳技术方案。从智能穿戴生态到高并发电商平台，在系统架构设计、性能优化、云原生部署和自动化运维方面有丰富实践经验。'
              )}
            </p>
            <p className="text-lg text-outline leading-relaxed">
              {t(
                'Currently building smart wearable ecosystems, managing three independent systems with real-time data synchronization, blockchain integration, and K8s containerized deployment. Previously developed live-streaming e-commerce and check-in systems serving 3000+ partner merchants.',
                '目前负责智能手表生态系统开发，管理三个独立系统实现实时数据互联、链上货币转化和K8s容器化部署。曾开发直播电商系统和打卡生态系统，服务3000+合作商家。'
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
