import { motion, useMotionValue, useTransform, useSpring, animate, useInView } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useRef, useEffect, useState } from 'react';

const About = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Spotlight effect following cursor
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const stats = [
    { value: 9, suffix: '+', label: t('Years Experience', '年开发经验'), icon: <TimeIcon /> },
    { value: 30, suffix: 'M+', label: t('Users Served', '服务用户数'), icon: <UsersIcon /> },
    { value: 100, suffix: 'M+', label: t('Orders Processed', '订单处理量'), icon: <OrdersIcon /> },
    { value: 8, suffix: '', label: t('Cloud Native', '云原生部署'), displayValue: 'K8s', icon: <CloudIcon /> },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative bg-[#000000] py-48 md:py-64 overflow-hidden"
    >
      {/* Static gradient background - no animation for performance */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(70, 72, 212, 0.4), transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(144, 73, 0, 0.3), transparent 70%)',
          }}
        />
      </div>

      {/* Spotlight effect */}
      <motion.div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(70, 72, 212, 0.15), transparent 40%)`,
        }}
      />

      {/* Double-Bezel: Outer container */}
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Double-Bezel: Inner frame */}
        <div className="grid lg:grid-cols-12 gap-24 md:gap-32 items-start">
          {/* Content Column */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Massive Typography Hero */}
            <motion.h2
              className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-12 md:mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #FFFFFF 0%, #C0C1FF 50%, #FFB783 100%)',
                  backgroundSize: '200% auto',
                }}
              >
                {t(
                  'Building Scalable Systems with the Right Technology',
                  '用合适的技术解决实际业务问题'
                )}
              </span>
            </motion.h2>

            {/* Body Text with Glassmorphism */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative group">
                {/* Removed backdrop-blur for performance - only solid background */}
                <div className="relative bg-[rgba(15,15,15,0.6)] border border-[rgba(255,255,255,0.08)] rounded-3xl p-10 md:p-12 hover:bg-[rgba(20,20,20,0.7)] hover:border-[rgba(255,255,255,0.12)] transition-colors duration-300">
                  <p className="text-lg md:text-xl leading-relaxed text-[rgba(255,255,255,0.85)]">
                    {t(
                      '9 years of Internet R&D experience with multi-language development capabilities in PHP, Go, and Java. Long-term experience in large-scale Internet system design and development. Project experience spans live streaming e-commerce, supply chain, local life services, hotel SaaS, and smart wearables, participating in and leading multiple projects serving tens of millions of users.',
                      '9年互联网研发经验，具备 PHP、Go、Java 多语言开发能力，长期负责大型互联网系统设计与研发工作。拥有电商直播、供应链、本地生活、酒店SaaS、智能硬件等领域项目经验，参与并主导多个千万级用户规模项目建设。'
                    )}
                  </p>
                </div>
              </div>

              <div className="relative group">
                {/* Removed backdrop-blur for performance - only solid background */}
                <div className="relative bg-[rgba(15,15,15,0.6)] border border-[rgba(255,255,255,0.08)] rounded-3xl p-10 md:p-12 hover:bg-[rgba(20,20,20,0.7)] hover:border-[rgba(255,255,255,0.12)] transition-colors duration-300">
                  <p className="text-lg md:text-xl leading-relaxed text-[rgba(255,255,255,0.85)]">
                    {t(
                      'Proficient in microservices architecture, high-concurrency system design, MySQL/Redis performance optimization, message queues, Kubernetes cloud-native deployment, and DevOps automated delivery systems. Capable of complete project delivery from requirements analysis and architecture design to development and deployment. Continuously building open-source projects including Golang scaffolding, Redis desktop client, and browser automation plugins.',
                      '熟悉微服务架构、高并发系统设计、MySQL/Redis性能优化、消息队列、Kubernetes 云原生部署及 DevOps 自动化交付体系，具备从需求分析、架构设计到开发上线的完整项目交付能力。同时持续进行开源项目建设，拥有 Golang 脚手架、Redis 桌面客户端、浏览器自动化插件等多个独立产品开发经验。'
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Grid with Magnetic Hover */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <MagneticStatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>

        {/* Animated accent lines connecting cards */}
        <svg className="absolute top-1/2 right-1/4 w-64 h-64 opacity-20 pointer-events-none hidden lg:block">
          <motion.path
            d="M 0 128 Q 64 64, 128 128 T 256 128"
            stroke="url(#line-gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4648d4" />
              <stop offset="50%" stopColor="#6063ee" />
              <stop offset="100%" stopColor="#904900" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

// Magnetic Stat Card Component with Animated Counter
const MagneticStatCard = ({ stat, index }: { stat: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(counterRef, { once: true, margin: '-100px' });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cardX = useSpring(useTransform(mouseX, [-100, 100], [-20, 20]), {
    stiffness: 300,
    damping: 20,
  });
  const cardY = useSpring(useTransform(mouseY, [-100, 100], [-20, 20]), {
    stiffness: 300,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Animated counter
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (isInView) {
      if (stat.displayValue) {
        setDisplayValue(stat.displayValue);
      } else {
        const controls = animate(count, stat.value, {
          duration: 2,
          ease: [0.19, 1, 0.22, 1],
        });

        const unsubscribe = rounded.on('change', (latest) => {
          setDisplayValue(latest + stat.suffix);
        });

        return () => {
          controls.stop();
          unsubscribe();
        };
      }
    }
  }, [isInView, stat.value, stat.suffix, stat.displayValue, count, rounded]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{ x: cardX, y: cardY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-pointer"
    >
      {/* Simplified hover glow - no blur filter */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, #4648d4 0%, #6063ee 25%, #904900 75%, #b55d00 100%)',
        }}
      />

      {/* Inner card - removed backdrop-blur for performance */}
      <div
        className="relative bg-[rgba(15,15,15,0.6)] border border-[rgba(255,255,255,0.08)] rounded-3xl p-10 md:p-12 h-full flex flex-col justify-between overflow-hidden hover:bg-[rgba(20,20,20,0.7)] hover:border-[rgba(255,255,255,0.15)] transition-colors duration-300"
      >
        {/* Shimmer effect on hover - removed for performance */}

        {/* Icon with simplified hover effect */}
        <div
          className="relative mb-6"
        >
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            {/* Inner icon container - removed backdrop-blur */}
            <div className="relative bg-[rgba(30,30,30,0.8)] border border-[rgba(255,255,255,0.1)] rounded-2xl w-full h-full flex items-center justify-center group-hover:bg-[rgba(40,40,40,0.9)] transition-colors duration-300">
              {stat.icon}
            </div>
          </div>
        </div>

        {/* Counter Value */}
        <div ref={counterRef}>
          <div
            className="text-4xl md:text-5xl font-black mb-3 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #FFFFFF 0%, #C0C1FF 70%)',
            }}
          >
            {displayValue}
          </div>
          <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[rgba(255,255,255,0.60)]">
            {stat.label}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Ultra-light SVG line icons
const TimeIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#6063ee]"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const UsersIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#6063ee]"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const OrdersIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#904900]"
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const CloudIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#904900]"
  >
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    <polyline points="8 14 12 10 16 14" />
    <line x1="12" y1="10" x2="12" y2="20" />
  </svg>
);

export default About;
