import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      tags: ['Golang', 'Stripe'],
      title: t('Microservices e-commerce', '微服务电商项目'),
      description: t(
        'I designed and implemented a distributed e-commerce platform that supports high-concurrency access, encompassing multiple microservice modules such as user service, product service, and order service.',
        '设计并实现了分布式电商平台，支持高并发访问，包含用户服务、商品服务、订单服务等多个微服务模块。'
      ),
    },
    {
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop',
      tags: ['Java', 'SpringBoot'],
      title: t('Enterprise management system', '企业管理系统'),
      description: t(
        'We have developed a comprehensive enterprise management system that encompasses functions such as permission management, data statistics, and report generation, and supports a multi-tenant architecture.',
        '开发了完整的企业管理系统，包含权限管理、数据统计、报表生成等功能，支持多租户架构。'
      ),
    },
    {
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
      tags: ['Java', 'PHP', 'Yii2', 'SpringBoot'],
      title: t('Video lecture system', '视频讲座系统'),
      description: t(
        'Design and develop a lecture system from scratch, encompassing features such as live broadcast push notifications, paid viewing, and simulated classroom events for rooms, both on the APP and Web platforms.',
        '从0-1设计并开发讲座系统，包含APP和Web的开播推送、付费观看、房间模拟上课事件等。'
      ),
    },
    {
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
      tags: ['PHP', 'Laravel'],
      title: t('Live Streaming E-commerce', '直播电商'),
      description: t(
        'We have developed a comprehensive distributed live streaming e-commerce system, encompassing push and pull streaming, live streaming data reporting, red packet snatching in live streaming rooms, and anchor registration, among other features.',
        '开发了完整的分布式直播电商系统，包含推拉流、直播数据报表、直播间抢红包，主播入驻等。'
      ),
    },
  ];

  return (
    <section className="py-24 md:py-32" id="work">
      <div className="max-w-7xl mx-auto px-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">
            {t('Selected Works', '精选作品')}
          </h2>
          <p className="text-outline">
            {t('Focusing on high-impact solutions and technical depth.', '专注于高影响力的解决方案和技术深度。')}
          </p>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="group bg-surface-container-lowest rounded-3xl overflow-hidden soft-glow flex flex-col"
          >
            <div className="relative h-64 overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover"
                src={project.image}
                alt={project.title}
              />
              <div className="absolute top-4 right-4 flex gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-headline text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-outline mb-6 flex-grow">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
