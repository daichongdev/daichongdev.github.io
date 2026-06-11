import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useParallax } from '../hooks/useScrollAnimation';
import { useMagneticEffect } from '../hooks/useMagneticEffect';

const Hero = () => {
  const { t } = useLanguage();
  const parallaxOffset = useParallax(0.3);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

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
  };

  const magneticButton = useMagneticEffect(0.2);

  return (
    <section className="max-w-7xl mx-auto px-8 mb-32 md:mb-48 relative">
      {/* Floating Elements */}
      <motion.div
        className="absolute -left-20 top-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -right-20 bottom-20 w-60 h-60 bg-tertiary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ y: parallaxOffset }}
        >
          {/* 3D Rotating Ring */}
          <motion.div
            className="absolute -inset-8 rounded-full border-2 border-primary/20"
            style={{
              rotateX,
              rotateY,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
          <motion.div
            className="absolute -inset-12 rounded-full border border-primary/10"
            style={{
              rotateX: useTransform(rotateX, (v) => v * 0.5),
              rotateY: useTransform(rotateY, (v) => v * 0.5),
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />

          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-primary-container/30 rounded-full blur-2xl transition-all group-hover:blur-3xl group-hover:scale-110" />

          {/* Profile Image with 3D Effect */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <img
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-surface-container-lowest shadow-2xl"
              src="/profile.jpg"
              alt="Professional portrait"
              style={{ transform: 'translateZ(50px)' }}
            />
          </motion.div>

          {/* Orbiting Dots */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-primary rounded-full"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                rotate: 360,
                x: Math.cos((i * 2 * Math.PI) / 3) * 150,
                y: Math.sin((i * 2 * Math.PI) / 3) * 150,
              }}
              transition={{
                rotate: {
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                },
                x: {
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                },
                y: {
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            />
          ))}
        </motion.div>
        <div className="flex-1 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-primary font-label text-xs tracking-[0.1em] font-bold mb-4 relative"
          >
            <motion.span
              className="absolute inset-0 bg-primary/10 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <span className="relative">{t('DAI CHONG', '戴崇')}</span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            {t('Senior Backend Engineer', '高级后端工程师')} <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-tertiary inline-block"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              {t('PHP / Go / Java', 'PHP / Go / Java')}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-outline mb-10 max-w-2xl leading-relaxed"
          >
            {t(
              '9 years of experience in multi-language development (PHP/Go/Java), microservices architecture, and high-concurrency systems. Expertise in live streaming e-commerce, supply chain, local life services, hotel SaaS, and smart wearables with projects serving tens of millions of users.',
              '9年多语言开发经验（PHP/Go/Java），专注微服务架构、高并发系统设计。拥有电商直播、供应链、本地生活、酒店SaaS、智能硬件等领域千万级用户规模项目经验。'
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <motion.div
              ref={magneticButton.ref}
              onMouseMove={magneticButton.handleMouseMove}
              onMouseLeave={magneticButton.handleMouseLeave}
              style={{
                x: magneticButton.position.x,
                y: magneticButton.position.y,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <a
                className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-all flex items-center gap-2 relative overflow-hidden group"
                href="#work"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
                <span className="relative">{t('View Projects', '查看项目')}</span>
                <motion.span
                  className="material-symbols-outlined text-[20px] relative"
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  arrow_forward
                </motion.span>
              </a>
            </motion.div>

            <a
              className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-high transition-all hover:scale-105 active:scale-95"
              href="#contact"
            >
              {t('Contact', '联系我')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
