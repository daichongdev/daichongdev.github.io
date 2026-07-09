import { motion, useMotionValue } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useRef } from 'react';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      period: t('2023.07 — Present', '2023年7月至今'),
      title: t('Senior Backend Engineer', '高级后端工程师'),
      company: t('Health Tech Company', '健康科技公司'),
      description: t(
        'Leading development of local life + merchant platform and smart wearable system. Built unified membership system with multi-scenario check-in (water, meals, steps, health monitoring), merchant QR code redemption, prepaid value & rebate system, and online mall with social features. Independently developed smart watch system (private/public/international versions) with real-time health data monitoring, points conversion, and blockchain NFT integration. Designed and developed unified payment gateway supporting WeChat Pay, Alipay, LianLian, Tonglian, and Sande payment channels. Built points mall with order management, shopping cart, and marketing tools. Tech stack: Go + Gin, Java + Spring Boot, PHP + Yii/Laravel, deployed via Alibaba Cloud DevOps + Serverless + K8s.',
        '负责本地生活+商家端项目和智能穿戴系统开发。构建统一会员系统，实现多场景签到打卡（喝水、吃饭、步数、健康监测、到店打卡）、商家扫码核销、会员储值与返利、线上商城及拼团预定等功能。独立开发智能手表系统（私域版/公域版/国际版），实现运动与健康数据实时监测，运动表现转积分，积分兑换商城商品及区块链数字藏品。独立设计开发统一支付中台，接入微信支付、支付宝、连连支付、通联支付、衫德支付等多渠道，支持支付/退款/分账/回调等标准化能力。开发积分商城，包含订单流程、购物车、优惠券、拼团、秒杀等营销工具。技术栈：Go + Gin、Java + Spring Boot、PHP + Yii/Laravel，采用阿里云效+Serverless+K8s自动化部署。'
      ),
      active: true,
      metrics: ['30M+ Users', '100M+ Orders', '600K Peak Daily'],
      techStack: ['Go', 'Java', 'PHP', 'K8s', 'Serverless'],
    },
    {
      period: t('2020.03 — 2023.07', '2020年3月-2023年7月'),
      title: t('Backend Engineer', '后端工程师'),
      company: t('Live Streaming E-commerce Platform', '电商直播平台'),
      description: t(
        'Developed core modules for private live streaming e-commerce platform serving 30M+ registered users with 100M+ orders and 600k+ daily peak orders. Led live streaming system development with unified service provider integration layer supporting Tencent Cloud, Alibaba Cloud, Qiniu, and Huawei Cloud. Built live room features including red packets, gifts, coupons, real-name authentication, and deposit management. Developed real-time product shelf management system enabling hosts to instantly add/remove/sort products during live streams with millisecond synchronization to viewers. Optimized system performance with Redis + RabbitMQ for high-concurrency activity traffic shaving and K8s HPA auto-scaling. Tech stack: Laravel + Redis + RabbitMQ + MySQL + Kubernetes.',
        '负责私域直播电商平台核心模块研发，累计注册用户超3000万，订单数据超1亿条，峰值日订单量60万+。主导直播系统开发，设计统一直播服务商接入层，支持腾讯云、阿里云、七牛云、华为云推拉流服务。负责直播间红包、礼物、优惠券、实名认证、保证金等核心业务开发。开发直播带货系统，实现主播端实时管理商品池，一键上架/下架/置顶/调整排序，用户端毫秒级同步商品状态，支持"边播边卖、即上即售"。基于Redis + RabbitMQ实现高并发活动削峰与异步处理，通过K8s HPA自动扩容支撑大型直播活动流量峰值。技术栈：Laravel + Redis + RabbitMQ + MySQL + Kubernetes。'
      ),
      active: false,
      metrics: ['30M Users', '100M Orders', '600K Peak'],
      techStack: ['Laravel', 'Redis', 'RabbitMQ', 'MySQL', 'K8s'],
    },
    {
      period: t('2017.09 — 2020.03', '2017年9月-2020年3月'),
      title: t('PHP Developer', 'PHP开发工程师'),
      company: t('Hotel SaaS Company', '酒店SaaS公司'),
      description: t(
        'Developed all-in-one digital operation platform for hotel groups covering room reservation, dining management, conference management, long-term rental, mall operations, and owner management. Led development of reservation center, dining management, and conference management modules. Participated in core business model design for orders, inventory, and room status. Optimized high-concurrency inventory and order processing performance. Tech stack: ThinkPHP + Redis + MySQL.',
        '负责酒店集团一站式数字化运营平台开发，涵盖客房预订、餐饮管理、会议管理、长租业务、商城运营及业主管理等核心场景。负责预订中心、餐饮管理、会议管理等核心模块研发，参与订单、库存、房态等核心业务模型设计，推动多业务系统数据打通与统一运营管理，优化高并发场景下库存与订单处理性能。技术栈：ThinkPHP + Redis + MySQL。'
      ),
      active: false,
      metrics: ['Multi-module', 'High Concurrency', 'Inventory Optimization'],
      techStack: ['ThinkPHP', 'Redis', 'MySQL'],
    },
  ];

  return (
    <section className="relative bg-[#000000] py-48 md:py-64 overflow-hidden" id="experience">
      {/* Background Ethereal Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#4648d4] rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#904900] rounded-full blur-[150px] opacity-20" />
      </div>

      {/* Double Bezel Container */}
      <div className="relative max-w-7xl mx-auto px-8 md:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-32 md:mb-48"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4648d4] via-[#6063ee] to-[#904900] blur-xl opacity-40" />
              <svg className="relative w-16 h-16 md:w-20 md:h-20" viewBox="0 0 80 80" fill="none">
                <motion.path
                  d="M20 30 L40 10 L60 30 M20 30 L20 70 M60 30 L60 70 M20 70 L60 70 M30 45 L50 45"
                  stroke="url(#timeline-gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                <defs>
                  <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4648d4" />
                    <stop offset="50%" stopColor="#6063ee" />
                    <stop offset="100%" stopColor="#904900" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          <h2 className="font-headline text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 bg-gradient-to-r from-white via-[#C0C1FF] to-[#FFB783] bg-clip-text text-transparent leading-[1.1]">
            {t('Career Journey', '工作经历')}
          </h2>

          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            {t(
              'From business delivery to architectural evolution, continuously polishing the quality of engineering systems: observability, scalability, and performance baselines.',
              '从业务交付到架构演进，持续打磨工程系统的质量：可观测性、可扩展性与性能基线。'
            )}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#4648d4] via-[#6063ee] to-[#904900] opacity-30" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-[#4648d4] to-[#904900]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ transformOrigin: 'top' }}
            />
          </motion.div>

          {/* Experience Cards */}
          <div className="space-y-24 md:space-y-32">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                experience={exp}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: any;
  index: number;
  isEven: boolean;
}

const ExperienceCard = ({ experience, index, isEven }: ExperienceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) / rect.width;
    const distanceY = (e.clientY - centerY) / rect.height;
    mouseX.set(distanceX);
    mouseY.set(distanceY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start`}
    >
      {/* Timeline Dot with Button-in-Button Design */}
      <motion.div
        className="absolute left-8 md:left-1/2 top-8 md:-translate-x-1/2 z-10"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: index * 0.15 + 0.2,
          ease: [0.34, 1.56, 0.64, 1]
        }}
      >
        {/* Outer Glow Container */}
        <motion.div
          className="relative p-[3px] rounded-full"
          style={{
            background: experience.active
              ? 'linear-gradient(135deg, #4648d4 0%, #6063ee 50%, #904900 100%)'
              : 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
          }}
          animate={experience.active ? {
            boxShadow: [
              '0 0 20px rgba(70, 72, 212, 0.4)',
              '0 0 40px rgba(70, 72, 212, 0.6)',
              '0 0 20px rgba(70, 72, 212, 0.4)',
            ],
          } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Inner Dot */}
          <div className={`w-6 h-6 rounded-full ${experience.active ? 'bg-[#4648d4]' : 'bg-white/20'} backdrop-blur-sm`} />
        </motion.div>

        {/* Active Pulse Rings */}
        {experience.active && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#4648d4]"
              animate={{ scale: [1, 2, 2], opacity: [0.5, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#6063ee]"
              animate={{ scale: [1, 2.5, 2.5], opacity: [0.5, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
            />
          </>
        )}
      </motion.div>

      {/* Period & Title (Left on even, Right on odd for desktop) */}
      <motion.div
        className={`md:${isEven ? 'text-right pr-8' : 'text-left pl-8 md:col-start-2'} pl-20 md:pl-0`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: index * 0.15 + 0.3,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <div className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-[#4648d4]/10 to-[#904900]/10 border border-[#4648d4]/20">
          <span className="text-sm md:text-base font-bold bg-gradient-to-r from-[#4648d4] to-[#904900] bg-clip-text text-transparent">
            {experience.period}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
          {experience.title}
        </h3>

        <div className="flex items-center gap-3 text-white/60 text-lg md:text-xl mb-6">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-medium">{experience.company}</span>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 justify-start md:justify-end">
          {experience.techStack?.map((tech: string, i: number) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.4 + i * 0.05 }}
              className="px-3 py-1 text-xs font-medium text-white/70 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Description Card (Right on even, Left on odd for desktop) */}
      <div
        ref={cardRef}
        className={`${isEven ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'} pl-20 md:pl-0`}
        style={{
          perspective: '1000px',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Outer Bezel with Gradient Border - removed backdrop-blur */}
        <div
          className="p-[2px] rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(70, 72, 212, 0.3) 0%, rgba(144, 73, 0, 0.3) 100%)',
          }}
        >
          {/* Inner Glassmorphic Card - removed backdrop-blur for performance */}
          <div
            className="relative rounded-3xl p-8 md:p-12 overflow-hidden"
            style={{
              backgroundColor: 'rgba(15, 15, 15, 0.7)',
              transformStyle: 'preserve-3d',
              transform: 'translateZ(20px)',
            }}
          >
            {/* Removed shimmer effect for performance */}

            <div className="relative z-10">
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
                {experience.description}
              </p>

              {/* Metrics */}
              {experience.metrics && (
                <div className="grid grid-cols-3 gap-4">
                  {experience.metrics.map((metric: string, i: number) => (
                    <div
                      key={i}
                      className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="text-sm font-bold bg-gradient-to-r from-[#4648d4] to-[#904900] bg-clip-text text-transparent">
                        {metric}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;