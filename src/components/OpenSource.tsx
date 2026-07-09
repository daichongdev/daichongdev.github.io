import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useRef, useState } from 'react';

const OpenSource = () => {
  const { t } = useLanguage();

  const projects = [
    {
      name: 'Redis Desktop Client',
      title: t('High-Performance Redis Desktop Client', '高性能 Redis 桌面客户端'),
      description: t(
        'A high-performance desktop client designed for architects. Manage your data clusters with precision, speed, and a beautiful interface that stays out of your way.',
        '专为架构师设计的高性能桌面客户端。以精准、快速和简洁优雅的界面管理您的数据集群。'
      ),
      githubUrl: 'https://github.com/daichongdev/rrdis-web',
      featured: true,
    },
    {
      name: 'Auto Login Pro',
      title: t('Browser automated login plugin', '浏览器自动化登录插件'),
      description: t(
        'One-click automatic login to any mainstream website, AI-powered intelligent form recognition, and secure local storage of account credentials, boosting work efficiency by 80%.',
        '一键自动登录任意主流网站，AI 智能识别表单，本地安全存储账号密码，提升 80% 工作效率。'
      ),
      githubUrl: 'https://github.com/daichongdev/Smart-Form-Filler',
      featured: true,
    },
    {
      name: 'GoFlow',
      title: t('Gin Web API Framework', 'Golang Web API 脚手架'),
      description: t(
        'GoFlow - Golang Gin Backend Scaffold with Redis Rate Limiter, JWT Auth, and Clean Architecture.',
        'GoFlow 是一个面向生产环境的 Golang 后端脚手架，基于 Gin + GORM + Redis + MySQL，内置 IP + 路由限流（Redis Lua）、JWT 认证、结构化日志、消息队列、多语言校验、优雅停机。'
      ),
      githubUrl: 'https://github.com/daichongdev/Gonio',
      featured: false,
    },
    {
      name: 'Dev-notes',
      title: t('Dev-notes', '代码笔记'),
      description: t(
        'DevNotes is a code note management tool specifically designed for developers. It assists you in saving code snippets, learning notes, and technical documents directly to a GitHub repository, enabling versioned management and cloud synchronization of code knowledge.',
        'DevNotes 是一个专为开发者设计的代码笔记管理工具，帮助您将代码片段、学习笔记和技术文档直接保存到GitHub仓库中，实现代码知识的版本化管理和云端同步。'
      ),
      githubUrl: 'https://github.com/daichongdev/dev-notes',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative bg-[#000000] py-48 md:py-64 overflow-hidden" id="opensource">
      {/* Static background glow - no animation */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(70, 72, 212, 0.25), rgba(144, 73, 0, 0.15), transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(144, 73, 0, 0.2), rgba(70, 72, 212, 0.1), transparent 70%)',
          }}
        />
      </div>

      {/* Double Bezel Container */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-24 md:mb-32 max-w-4xl"
        >
          <motion.h2
            className="font-headline font-bold mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: '1.05',
              letterSpacing: '-0.015em',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #C0C1FF 50%, #FFB783 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t('Open Source Contributions', '开源贡献')}
          </motion.h2>
          <p
            className="text-xl md:text-2xl font-body"
            style={{ color: 'rgba(255, 255, 255, 0.60)' }}
          >
            {t('Giving back to the tools that build the web.', '回馈构建Web的工具生态。')}
          </p>
        </motion.div>

        {/* Projects Grid - Asymmetric Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Project Card Component with Magnetic Hover
const ProjectCard = ({ project }: { project: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 20, mass: 0.8 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = (event.clientX - centerX) * 0.03;
    const offsetY = (event.clientY - centerY) * 0.03;

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        x: xSpring,
        y: ySpring,
      }}
      className="group relative"
    >
      {/* Simplified gradient border - no blur */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, #4648d4 0%, #6063ee 25%, #904900 75%, #b55d00 100%)',
          padding: '2px',
        }}
      >
        <div className="w-full h-full rounded-3xl" style={{ background: '#0A0A0A' }} />
      </div>

      {/* Card - removed backdrop-blur for performance */}
      <div
        className="relative rounded-3xl p-10 md:p-12 border transition-all duration-300"
        style={{
          background: 'rgba(15, 15, 15, 0.8)',
          borderColor: isHovered ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Icon & Name */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              background: isHovered ? 'rgba(70, 72, 212, 0.15)' : 'rgba(255, 255, 255, 0.05)',
            }}
          >
            <BookIcon className="w-6 h-6" color={isHovered ? '#6063ee' : 'rgba(255, 255, 255, 0.6)'} />
          </div>
          <span
            className="text-sm font-bold tracking-wide uppercase font-headline"
            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
          >
            {project.name}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-2xl md:text-3xl font-headline font-bold mb-4 transition-colors duration-300"
          style={{
            color: isHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.85)',
            letterSpacing: '-0.01em',
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-base md:text-lg font-body leading-relaxed mb-8"
          style={{ color: 'rgba(255, 255, 255, 0.60)' }}
        >
          {project.description}
        </p>

        {/* Button-in-Button CTA - simplified */}
        <div
          className="inline-block"
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-block"
          >
            {/* Simplified outer glow - no blur */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, #4648d4 0%, #6063ee 50%, #904900 100%)',
              }}
            />

            {/* Button Container with Gradient Border */}
            <div
              className="relative rounded-2xl p-[2px] transition-all duration-300"
              style={{
                background: isHovered
                  ? 'linear-gradient(135deg, #4648d4 0%, #6063ee 50%, #904900 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Inner Button */}
              <div
                className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-300"
                style={{
                  background: '#0A0A0A',
                  color: isHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.85)',
                }}
              >
                <GitHubIcon className="w-5 h-5" color={isHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.85)'} />
                <span>View on GitHub</span>
                <ArrowIcon className="w-4 h-4" color={isHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.85)'} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Ultra-Light SVG Icons
const BookIcon = ({ className, color }: { className?: string; color: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const GitHubIcon = ({ className, color }: { className?: string; color: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill={color}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const ArrowIcon = ({ className, color }: { className?: string; color: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default OpenSource;
