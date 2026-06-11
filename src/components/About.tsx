import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '9+', label: t('Years Experience', '年开发经验') },
    { value: '30M+', label: t('Users Served', '服务用户数') },
    { value: '100M+', label: t('Orders Processed', '订单处理量') },
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
                '9 years of Internet R&D experience with multi-language development capabilities in PHP, Go, and Java. Long-term experience in large-scale Internet system design and development. Project experience spans live streaming e-commerce, supply chain, local life services, hotel SaaS, and smart wearables, participating in and leading multiple projects serving tens of millions of users.',
                '9年互联网研发经验，具备 PHP、Go、Java 多语言开发能力，长期负责大型互联网系统设计与研发工作。拥有电商直播、供应链、本地生活、酒店SaaS、智能硬件等领域项目经验，参与并主导多个千万级用户规模项目建设。'
              )}
            </p>
            <p className="text-lg text-outline leading-relaxed">
              {t(
                'Proficient in microservices architecture, high-concurrency system design, MySQL/Redis performance optimization, message queues, Kubernetes cloud-native deployment, and DevOps automated delivery systems. Capable of complete project delivery from requirements analysis and architecture design to development and deployment. Continuously building open-source projects including Golang scaffolding, Redis desktop client, and browser automation plugins.',
                '熟悉微服务架构、高并发系统设计、MySQL/Redis性能优化、消息队列、Kubernetes 云原生部署及 DevOps 自动化交付体系，具备从需求分析、架构设计到开发上线的完整项目交付能力。同时持续进行开源项目建设，拥有 Golang 脚手架、Redis 桌面客户端、浏览器自动化插件等多个独立产品开发经验。'
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
