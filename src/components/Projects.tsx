import { motion, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useRef } from 'react';

const Projects = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=2070&auto=format&fit=crop',
      tags: ['Java', 'PHP', 'Go', 'K8s'],
      title: t('Smart Wearable Ecosystem', '智能手表生态系统'),
      description: t(
        'Three independent systems (Private/Public/International) with real-time watch-app data sync. Sports data converts to points for offline purchases and online redemption. International version supports blockchain currency conversion. Includes dealer system with quick payment codes and supply chain synchronization.',
        '三个独立系统（私域版/公域版/国际版）实现智能手表与App数据实时互联。运动数据转化为积分，支持线下门店消费及线上兑换。国际版支持链上货币转化。包含经销商快速付款码下单系统和供应链实时同步。'
      ),
      stats: { users: '30M+', orders: '100M+' },
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      tags: ['Go', 'Microservices', 'Redis'],
      title: t('Check-in Ecosystem', '打卡生态系统'),
      description: t(
        'Multi-dimensional check-in points system (WeChat steps, water intake, meals, health monitoring). Serving 3000+ partner merchants in Zhejiang. Unified payment gateway supporting WeChat, Alipay, Tonglian, points, and coupons. Merchant dashboard and supply chain procurement management.',
        '微信步数、喝水、吃饭、健康监测等多维度打卡积分体系。服务浙江地区3000+合作商家。统一支付网关支持微信、支付宝、通联、积分、优惠券等。商家端数据看板+掌柜端供应链进货管理。'
      ),
      stats: { merchants: '3000+', transactions: '50M+' },
    },
    {
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop',
      tags: ['PHP', 'Laravel', 'Agora RTC'],
      title: t('Live Streaming E-commerce', '直播电商系统'),
      description: t(
        'Comprehensive distributed live streaming platform with gift effects, red packet system, and multi-CDN intelligent switching. Integrated Agora RTC/RTM for 1v1 and 1vN video calls. High-concurrency message queue processing with object pool and Supervisor. Dynamic group buying and multi-payment gateway integration.',
        '完整的分布式直播电商平台，包含礼物特效、红包系统、多CDN智能切换。集成声网RTC/RTM支持1v1/1vN视频通话。高并发消息队列处理（对象池+Supervisor）。动态人数拼团和多支付通道集成。'
      ),
      stats: { concurrent: '10K+', uptime: '99.9%' },
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      tags: ['Python', 'Task Engine', 'OSS'],
      title: t('Visual Task Management System', '可视化任务管理系统'),
      description: t(
        'Visual task flow engine supporting multi-modal content (files, images, videos). Python crawler cluster with OSS object storage for distributed data collection. Flexible workflow configuration for complex business scenarios with automated task scheduling and monitoring.',
        '可视化任务流引擎，支持文件/图片/视频多模态内容。Python爬虫集群+OSS对象存储实现分布式数据采集。灵活的工作流配置支持复杂业务场景，自动化任务调度和监控。'
      ),
      stats: { tasks: '1M+', automation: '85%' },
    },
  ];

  return (
    <section
      className="relative py-48 md:py-64 overflow-hidden bg-[#000000]"
      id="work"
      ref={sectionRef}
    >
      {/* Static background gradients - no animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(70, 72, 212, 0.25), rgba(144, 73, 0, 0.15), transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(144, 73, 0, 0.3), rgba(70, 72, 212, 0.15), transparent 70%)',
          }}
        />
      </div>

      {/* Double Bezel Container */}
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Section Header with Massive Typography */}
        <motion.div
          className="mb-32 md:mb-48"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Ultra-light SVG Icon */}
            <svg
              className="w-16 h-16 md:w-20 md:h-20 mb-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="0.5"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4648d4" />
                  <stop offset="50%" stopColor="#6063ee" />
                  <stop offset="100%" stopColor="#b55d00" />
                </linearGradient>
              </defs>
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8" />
              <path d="M12 17v4" />
              <path d="M7 8h10" />
              <path d="M7 12h6" />
            </svg>
          </motion.div>

          <h2
            className="font-headline text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #C0C1FF 50%, #FFB783 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1',
              letterSpacing: '-0.02em',
            }}
          >
            {t('Selected Works', '精选作品')}
          </h2>

          <motion.p
            className="text-xl md:text-2xl text-white/60 max-w-3xl font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t(
              'Architecting high-impact solutions at scale. From distributed systems to real-time ecosystems.',
              '构建大规模高影响力解决方案。从分布式系统到实时生态。'
            )}
          </motion.p>

          {/* Animated Accent Line */}
          <motion.div
            className="h-[2px] mt-12 rounded-full"
            style={{
              background: 'linear-gradient(90deg, #4648d4 0%, #6063ee 25%, #904900 75%, #b55d00 100%)',
              maxWidth: '200px',
            }}
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: '200px', opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  // Magnetic Hover Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 20, mass: 0.8 };
  const x = useSpring(useTransform(mouseX, [-100, 100], [-8, 8]), springConfig);
  const y = useSpring(useTransform(mouseY, [-100, 100], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    // Magnetic effect within radius
    const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
    const maxDistance = 100;

    if (distance < maxDistance) {
      mouseX.set(offsetX);
      mouseY.set(offsetY);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x,
        y,
      }}
      className="group relative"
    >
      {/* Simplified outer glow - no blur or continuous animation */}
      <div
        className="absolute -inset-[2px] rounded-[32px] opacity-0 group-hover:opacity-30 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, #4648d4 0%, #6063ee 25%, #904900 75%, #b55d00 100%)',
        }}
      />

      {/* Double Bezel Outer Frame */}
      <div
        className="relative rounded-[28px] p-[2px] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(70, 72, 212, 0.3), rgba(96, 99, 238, 0.2), rgba(144, 73, 0, 0.3), rgba(181, 93, 0, 0.2))',
        }}
      >
        {/* Glass Panel - removed backdrop-blur */}
        <div
          className="relative bg-[#0A0A0A] rounded-[26px] overflow-hidden"
          style={{
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Removed shimmer sweep for performance */}

          {/* Image Container - simplified, no scale animation */}
          <div className="relative h-72 md:h-80 overflow-hidden">
            <div
              className="absolute inset-0"
            >
              <img
                className="w-full h-full object-cover"
                src={project.image}
                alt={project.title}
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)',
                }}
              />
            </div>

            {/* Floating Tags - simplified animations */}
            <div className="absolute top-6 right-6 flex flex-wrap gap-3 max-w-[60%] justify-end">
              {project.tags.map((tag: string, idx: number) => (
                <div
                  key={idx}
                  className="relative group/tag"
                >
                  {/* Outer Button Container */}
                  <div
                    className="relative p-[1px] rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, rgba(70, 72, 212, 0.6), rgba(181, 93, 0, 0.6))',
                    }}
                  >
                    {/* Inner Button - removed backdrop-blur */}
                    <div
                      className="px-4 py-1.5 rounded-full text-xs font-bold text-white/90 relative overflow-hidden"
                      style={{
                        background: 'rgba(10, 10, 10, 0.95)',
                      }}
                    >
                      {tag}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Overlay - simplified */}
            <div className="absolute bottom-6 left-6 flex gap-6">
              {Object.entries(project.stats).map(([key, value]) => (
                <div
                  key={key}
                  className="relative"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {value as string}
                  </div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">
                    {key}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Area with Enhanced Padding */}
          <div className="relative p-8 md:p-12">
            <h3
              className="font-headline text-2xl md:text-3xl font-bold mb-6 leading-tight"
              style={{
                color: '#FFFFFF',
              }}
            >
              {project.title}
            </h3>

            <p className="text-base md:text-lg leading-relaxed mb-8 text-white/70">
              {project.description}
            </p>

            {/* Simplified CTA button - removed complex animations */}
            <div
              className="relative inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div
                className="relative p-[2px] rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #4648d4, #6063ee, #904900, #b55d00)',
                }}
              >
                <div
                  className="px-8 py-4 rounded-2xl font-bold text-white flex items-center gap-3"
                  style={{
                    background: '#000000',
                  }}
                >
                  <span>{t('Explore Project', '探索项目')}</span>

                  {/* Arrow Icon */}
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Glass Highlight Effect */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px]"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
