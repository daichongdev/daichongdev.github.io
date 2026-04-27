import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';

const Projects = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.2);

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
    <section className="py-24 md:py-32 relative" id="work" ref={ref}>
      {/* Background Decoration */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="font-headline text-4xl font-bold tracking-tight mb-4 inline-block"
            whileHover={{ scale: 1.05 }}
          >
            {t('Selected Works', '精选作品')}
            <motion.div
              className="h-1 bg-gradient-to-r from-primary to-tertiary rounded-full mt-2"
              initial={{ width: 0 }}
              animate={isVisible ? { width: '100%' } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.h2>
          <p className="text-outline">
            {t('Focusing on high-impact solutions and technical depth.', '专注于高影响力的解决方案和技术深度。')}
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow flex flex-col relative"
    >
      {/* Glow Effect on Hover */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary-container/20 to-tertiary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
        animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div className="relative h-64 overflow-hidden">
        <motion.img
          animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full object-cover"
          src={project.image}
          alt={project.title}
          style={{ transform: 'translateZ(20px)' }}
        />

        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          animate={isHovered ? { opacity: 0.8 } : { opacity: 0.4 }}
        />

        {/* Tags */}
        <div className="absolute top-4 right-4 flex gap-2">
          {project.tags.map((tag: string, idx: number) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + idx * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary shadow-lg"
              style={{ transform: 'translateZ(30px)' }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={isHovered ? { x: ['-100%', '200%'] } : {}}
          transition={{ duration: 1.5 }}
        />
      </div>

      <div className="p-8 relative" style={{ transform: 'translateZ(40px)' }}>
        <h3 className="font-headline text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-outline mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>

        {/* Hover Arrow */}
        <motion.div
          className="flex items-center gap-2 text-primary font-bold"
          initial={{ opacity: 0, x: -10 }}
          animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
        >
          <span>View Details</span>
          <motion.span
            animate={isHovered ? { x: [0, 5, 0] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
