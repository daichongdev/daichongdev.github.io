import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useRef } from 'react';

const Skills = () => {
  const { t } = useLanguage();
  const [, setHoveredIndex] = useState<number | null>(null);

  const skillCategories = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <rect x="2" y="3" width="20" height="18" rx="2" />
          <path d="M2 9h20M8 3v6M16 3v6" />
        </svg>
      ),
      title: t('Backend Development', '后端开发'),
      description: t('Multi-language server architecture', '多语言服务端架构'),
      skills: [
        { name: 'PHP / Laravel / Yii2', level: t('5 Years', '5年经验'), proficiency: 95 },
        { name: 'Java / Spring Boot', level: t('Advanced', '熟练'), proficiency: 90 },
        { name: 'Go / Gin', level: t('Microservices', '微服务'), proficiency: 85 },
      ],
      gradient: 'from-[#4648d4] to-[#6063ee]',
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          <path d="M7 19v-5M12 19v-9M17 19v-3" />
        </svg>
      ),
      title: t('Cloud Native & DevOps', '云原生与运维'),
      description: t('Container orchestration & automation', '容器编排与自动化'),
      skills: [
        { name: 'Kubernetes (K8s)', level: t('Production', '生产环境'), proficiency: 88 },
        { name: 'GitHub / CI/CD', level: t('Automation', '自动化'), proficiency: 92 },
        { name: 'Serverless / NLB', level: t('Auto-scaling', '自动伸缩'), proficiency: 85 },
      ],
      gradient: 'from-[#6063ee] to-[#904900]',
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      title: t('Database & Cache', '数据库与缓存'),
      description: t('High-concurrency data optimization', '高并发数据优化'),
      skills: [
        { name: 'MySQL', level: t('Master-Slave', '主从架构'), proficiency: 93 },
        { name: 'Redis Cluster', level: t('Advanced', '熟练'), proficiency: 90 },
        { name: 'Read-Write Split', level: t('High Concurrency', '高并发'), proficiency: 88 },
      ],
      gradient: 'from-[#904900] to-[#b55d00]',
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
        </svg>
      ),
      title: t('Frontend & Integration', '前端与集成'),
      description: t('Modern web & third-party services', '现代Web与第三方服务'),
      skills: [
        { name: 'React / Vue', level: t('Advanced', '熟练'), proficiency: 87 },
        { name: 'WeChat Mini Program', level: t('Advanced', '熟练'), proficiency: 90 },
        { name: 'RTC / Payment Gateway', level: t('Integration', '集成'), proficiency: 85 },
      ],
      gradient: 'from-[#b55d00] to-[#4648d4]',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#000000]">
      {/* Static background gradients - no animation */}
      <div
        className="absolute top-0 left-1/4 w-[800px] h-[800px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(70, 72, 212, 0.25), rgba(144, 73, 0, 0.15), transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(144, 73, 0, 0.3), rgba(181, 93, 0, 0.2), transparent 70%)',
        }}
      />

      {/* Double-Bezel Layout: Outer Container */}
      <div className="py-48 md:py-64">
        {/* Double-Bezel Layout: Inner Frame */}
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          {/* Hero Typography */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.2,
                },
              },
            }}
            className="text-center mb-32 md:mb-48"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
              }}
              className="font-headline text-7xl md:text-8xl font-bold mb-8"
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #C0C1FF 50%, #FFB783 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.03em',
                lineHeight: '0.95',
              }}
            >
              {t('Technical Ecosystem', '技术生态')}
            </motion.h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
              }}
              className="text-xl md:text-2xl max-w-3xl mx-auto"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              {t(
                'Multi-language expertise with production-grade cloud infrastructure and high-concurrency optimization.',
                '多语言开发能力，结合生产级云基础设施和高并发优化经验。'
              )}
            </motion.p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.3,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
          >
            {skillCategories.map((category, index) => (
              <MagneticSkillCard
                key={index}
                category={category}
                index={index}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface MagneticSkillCardProps {
  category: any;
  index: number;
  setHoveredIndex: (index: number | null) => void;
}

const MagneticSkillCard = ({ category, index, setHoveredIndex }: MagneticSkillCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 20, mass: 0.8 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < 100) {
      mouseX.set(distanceX * 0.2);
      mouseY.set(distanceY * 0.2);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredIndex(null);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={handleMouseLeave}
      className="relative group"
      style={{ x, y }}
    >
      {/* Simplified outer glow - no blur or animation */}
      <div
        className="absolute -inset-4 rounded-[32px] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, rgba(70, 72, 212, 0.3), rgba(144, 73, 0, 0.3))`,
        }}
      />

      {/* Double-Bezel: Outer Button Frame with Gradient Border */}
      <div
        className="relative p-[2px] rounded-[28px]"
        style={{
          background: `linear-gradient(135deg, rgba(70, 72, 212, 0.4), rgba(144, 73, 0, 0.4))`,
        }}
      >
        {/* Inner Card - removed backdrop-blur for performance */}
        <div
          className="relative rounded-[26px] p-12 md:p-16 overflow-hidden"
          style={{
            backgroundColor: 'rgba(15, 15, 15, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Removed shimmer sweep for performance */}

          {/* Simplified icon - no animation */}
          <div
            className="relative mb-8"
          >
            {/* Outer Icon Frame */}
            <div
              className={`inline-block p-[2px] rounded-2xl bg-gradient-to-br ${category.gradient}`}
            >
              {/* Inner Icon Container */}
              <div
                className="p-6 rounded-[14px]"
                style={{
                  backgroundColor: '#0A0A0A',
                  color: '#FFFFFF',
                }}
              >
                {category.icon}
              </div>
            </div>
          </div>

          {/* Title & Description */}
          <h3
            className="font-headline text-3xl md:text-4xl font-bold mb-3"
            style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}
          >
            {category.title}
          </h3>
          <p className="text-base mb-8" style={{ color: 'rgba(255, 255, 255, 0.60)' }}>
            {category.description}
          </p>

          {/* Skills List */}
          <div className="space-y-6">
            {category.skills.map((skill: any, idx: number) => (
              <div
                key={idx}
                className="relative"
              >
                {/* Skill Name & Level */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                    {skill.name}
                  </span>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, rgba(70, 72, 212, 0.2), rgba(144, 73, 0, 0.2))`,
                      color: '#FFFFFF',
                    }}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Proficiency Bar */}
                <div className="relative h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <motion.div
                    className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${category.gradient}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2,
                      duration: 1,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Removed particle system for performance */}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
