import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

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
    },
    {
      name: 'Auto Login Pro',
      title: t('Browser automated login plugin', '浏览器自动化登录插件'),
      description: t(
        'One-click automatic login to any mainstream website, AI-powered intelligent form recognition, and secure local storage of account credentials, boosting work efficiency by 80%.',
        '一键自动登录任意主流网站，AI 智能识别表单，本地安全存储账号密码，提升 80% 工作效率。'
      ),
      githubUrl: 'https://github.com/daichongdev/Smart-Form-Filler',
    },
    {
      name: 'GoFlow',
      title: t('Gin Web API Framework', 'Golang Web API 脚手架'),
      description: t(
        'GoFlow - Golang Gin Backend Scaffold with Redis Rate Limiter, JWT Auth, and Clean Architecture.',
        'GoFlow 是一个面向生产环境的 Golang 后端脚手架，基于 Gin + GORM + Redis + MySQL，内置 IP + 路由限流（Redis Lua）、JWT 认证、结构化日志、消息队列、多语言校验、优雅停机。'
      ),
      githubUrl: 'https://github.com/daichongdev/Gonio',
    },
    {
      name: 'Dev-notes',
      title: t('Dev-notes', '代码笔记'),
      description: t(
        'DevNotes is a code note management tool specifically designed for developers. It assists you in saving code snippets, learning notes, and technical documents directly to a GitHub repository, enabling versioned management and cloud synchronization of code knowledge.',
        'DevNotes 是一个专为开发者设计的代码笔记管理工具，帮助您将代码片段、学习笔记和技术文档直接保存到GitHub仓库中，实现代码知识的版本化管理和云端同步。'
      ),
      githubUrl: 'https://github.com/daichongdev/dev-notes',
    },
  ];

  return (
    <section className="bg-surface-container-low py-24 md:py-32" id="opensource">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">
            {t('Open Source Contributions', '开源贡献')}
          </h2>
          <p className="text-outline">{t('Giving back to the tools that build the web.', '回馈构建Web的工具生态。')}</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-outline mb-4">
                  <span className="material-symbols-outlined text-[20px]">book</span>
                  <span className="text-sm font-bold">{project.name}</span>
                </div>
                <h4 className="font-bold mb-2">{project.title}</h4>
                <p className="text-sm text-outline mb-6">{project.description}</p>
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold text-sm flex items-center gap-1 hover:text-primary/80 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">code</span>
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
