import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      period: t('2023.07 — Present', '2023年7月至今'),
      title: t('Full Stack Developer', '全栈开发工程师'),
      company: t('Health Tech Company', '健康科技公司'),
      description: t(
        'Leading development of smart wearable ecosystems (Private/Public/International versions) with real-time data synchronization between watches and apps. Built points system converting sports data to rewards, integrated blockchain currency, and developed supply chain systems. Tech stack: Java (core business) + PHP (e-commerce) + Go (microservices) + K8s deployment. Also built check-in ecosystem serving 3000+ merchants with unified payment gateway.',
        '负责智能手表生态系统开发（私域版/公域版/国际版），实现手表与App数据实时互联。构建运动数据转积分体系，支持线下消费及链上货币转化。开发经销商系统和供应链系统。技术栈：Java（核心业务）+ PHP（商城系统）+ Go（供应链微服务）+ K8s容器化部署。同时开发打卡生态系统，服务3000+合作商家，实现统一支付网关。'
      ),
      active: true,
    },
    {
      period: t('2020.03 — 2023.07', '2020年3月-2023年7月'),
      title: t('Full Stack Developer', '全栈开发工程师'),
      company: t('Social E-commerce Platform', '社交电商平台'),
      description: t(
        'Developed live streaming system with gift effects, red packet system, and multi-CDN switching. Integrated Agora RTC/RTM for 1v1 and 1vN video calls. Built e-commerce features including dynamic group buying, coupon verification, and multi-payment gateway integration. Developed task management system with visual workflow engine supporting multi-modal content (files/images/videos) and Python crawler cluster with OSS storage.',
        '开发直播系统，包含礼物特效、红包系统、多CDN智能切换。集成声网RTC/RTM实现1v1/1vN视频通话。构建电商系统，包括动态人数拼团、优惠券核销（三要素认证）、多支付通道集成。开发任务管理系统，支持可视化任务流引擎（文件/图片/视频多模态）和Python爬虫集群+OSS对象存储。'
      ),
      active: false,
      reverse: true,
    },
    {
      period: t('2019.07 — 2020.03', '2019年7月-2020年3月'),
      title: t('PHP Developer', 'PHP开发工程师'),
      company: t('EdTech Company', '在线教育公司'),
      description: t(
        'Developed online education platform with instructor course management, live streaming classes, and student learning system. Built on Edusoho framework with JPush integration for real-time notifications.',
        '开发在线教育平台，包含讲师课程管理、直播上课、学员学习系统。基于Edusoho框架开发，集成极光推送实现实时通知。'
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
