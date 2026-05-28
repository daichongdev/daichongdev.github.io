import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';

const Projects = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.2);

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=2070&auto=format&fit=crop',
      tags: ['Java', 'PHP', 'Go', 'K8s'],
      title: t('Smart Wearable Ecosystem', '智能手表生态系统'),
      description: t(
        'Three independent systems (Private/Public/International) with real-time watch-app data sync. Sports data converts to points for offline purchases and online redemption. International version supports blockchain currency conversion. Includes dealer system with quick payment codes and supply chain synchronization.',
        '三个独立系统（私域版/公域版/国际版）实现智能手表与App数据实时互联。运动数据转化为积分，支持线下门店消费及线上兑换。国际版支持链上货币转化。包含经销商快速付款码下单系统和供应链实时同步。'
      ),
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      tags: ['Go', 'Microservices', 'Redis'],
      title: t('Check-in Ecosystem', '打卡生态系统'),
      description: t(
        'Multi-dimensional check-in points system (WeChat steps, water intake, meals, health monitoring). Serving 3000+ partner merchants in Zhejiang. Unified payment gateway supporting WeChat, Alipay, Tonglian, points, and coupons. Merchant dashboard and supply chain procurement management.',
        '微信步数、喝水、吃饭、健康监测等多维度打卡积分体系。服务浙江地区3000+合作商家。统一支付网关支持微信、支付宝、通联、积分、优惠券等。商家端数据看板+掌柜端供应链进货管理。'
      ),
    },
    {
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop',
      tags: ['PHP', 'Laravel', 'Agora RTC'],
      title: t('Live Streaming E-commerce', '直播电商系统'),
      description: t(
        'Comprehensive distributed live streaming platform with gift effects, red packet system, and multi-CDN intelligent switching. Integrated Agora RTC/RTM for 1v1 and 1vN video calls. High-concurrency message queue processing with object pool and Supervisor. Dynamic group buying and multi-payment gateway integration.',
        '完整的分布式直播电商平台，包含礼物特效、红包系统、多CDN智能切换。集成声网RTC/RTM支持1v1/1vN视频通话。高并发消息队列处理（对象池+Supervisor）。动态人数拼团和多支付通道集成。'
      ),
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      tags: ['Python', 'Task Engine', 'OSS'],
      title: t('Visual Task Management System', '可视化任务管理系统'),
      description: t(
        'Visual task flow engine supporting multi-modal content (files, images, videos). Python crawler cluster with OSS object storage for distributed data collection. Flexible workflow configuration for complex business scenarios with automated task scheduling and monitoring.',
        '可视化任务流引擎，支持文件/图片/视频多模态内容。Python爬虫集群+OSS对象存储实现分布式数据采集。灵活的工作流配置支持复杂业务场景，自动化任务调度和监控。'
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
