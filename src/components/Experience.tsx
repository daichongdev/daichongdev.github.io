import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      period: t('2022 — Present', '2022年至今'),
      title: t('Senior Full Stack Developer', '高级全栈开发工程师'),
      company: t('Tech Innovation Co.', '科技创新公司'),
      description: t(
        'Responsible for the architecture design and development of core business systems. Built high-performance microservices architecture using Go and React, optimizing system performance by over 50%. Led the team in delivering multiple key projects.',
        '负责核心业务系统的架构设计与开发，使用Go和React构建高性能微服务架构，优化系统性能提升50%以上。领导团队完成多个重要项目的交付。'
      ),
      active: true,
    },
    {
      period: t('2020 — 2022', '2020-2022年'),
      title: t('Full Stack Developer', '全栈开发工程师'),
      company: t('Internet Co.', '互联网公司'),
      description: t(
        'Participated in the development and maintenance of e-commerce platforms using Java Spring Boot and Vue.js tech stack. Responsible for the development of core modules such as user systems and order systems, handling performance optimization in high-concurrency scenarios.',
        '参与电商平台的开发与维护，使用Java Spring Boot和Vue.js技术栈。负责用户系统、订单系统等核心模块的开发，处理高并发场景下的性能优化。'
      ),
      active: false,
      reverse: true,
    },
    {
      period: t('2018 — 2020', '2018-2020年'),
      title: t('PHP Developer', 'PHP开发工程师'),
      company: t('Software Development Co.', '软件开发公司'),
      description: t(
        'Developed enterprise-level Web applications using PHP Laravel framework. Responsible for CMS systems and API development. Accumulated rich experience in database design and performance optimization.',
        '使用PHP Laravel框架开发企业级Web应用，负责CMS系统、API接口开发。积累了丰富的数据库设计和性能优化经验。'
      ),
      active: false,
    },
  ];

  return (
    <section className="bg-surface-container py-24 md:py-32" id="experience">
      <div className="max-w-4xl mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-4xl font-bold tracking-tight mb-4 text-center"
        >
          {t('Career Journey', '工作经历')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-outline text-center mb-16 max-w-2xl mx-auto"
        >
          {t(
            'From business delivery to architectural evolution, continuously polishing the quality of engineering systems: observability, scalability, and performance baselines.',
            '从业务交付到架构演进，持续打磨工程系统的质量：可观测性、可扩展性与性能基线。'
          )}
        </motion.p>
        <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:w-px before:h-full before:bg-outline-variant/30">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: exp.reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative md:flex items-center justify-between gap-16 group ${
                exp.reverse ? 'flex-row-reverse' : ''
              }`}
            >
              <div className={`md:w-1/2 ${exp.reverse ? '' : 'md:text-right'}`}>
                <div className="mb-2 text-primary font-bold">{exp.period}</div>
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <div className="text-outline-variant font-medium">{exp.company}</div>
              </div>
              <div
                className={`absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${
                  exp.active ? 'bg-primary' : 'bg-outline-variant'
                } border-4 border-surface ${exp.active ? 'ring-4 ring-primary/10' : ''}`}
              />
              <div className="md:w-1/2 mt-4 md:mt-0 bg-surface-container-lowest p-6 rounded-2xl soft-glow opacity-60 group-hover:opacity-100 transition-opacity">
                <p className="text-sm text-outline">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
