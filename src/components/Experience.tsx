import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

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
      reverse: true,
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
