import { motion, useMotionValue } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useRef } from 'react';

const Education = () => {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);

  // Magnetic hover effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const maxDistance = 200;

    if (distance < maxDistance) {
      mouseX.set(distanceX * 0.15);
      mouseY.set(distanceY * 0.15);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Ultra-light SVG icons
  const GraduationCapIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 14L6 22L24 30L42 22L24 14Z" stroke="url(#grad1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 22V30L24 38L42 30V22" stroke="url(#grad1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 26V34" stroke="url(#grad1)" strokeWidth="1.5" strokeLinecap="round"/>
      <defs>
        <linearGradient id="grad1" x1="6" y1="14" x2="42" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4648d4"/>
          <stop offset="100%" stopColor="#904900"/>
        </linearGradient>
      </defs>
    </svg>
  );

  const CertificateIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M15 18L17 22L19 20L21 22L19 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );

  const CodeBracketIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8L4 12L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 8L20 12L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 4L10 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  const LightbulbIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8V12" stroke="url(#grad2)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M44 12L42 14" stroke="url(#grad2)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M52 24H48" stroke="url(#grad2)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 24H12" stroke="url(#grad2)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 12L22 14" stroke="url(#grad2)" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="32" cy="26" r="10" stroke="url(#grad2)" strokeWidth="1.5"/>
      <path d="M26 36C26 36 26 40 26 42C26 44 28 46 30 46H34C36 46 38 44 38 42C38 40 38 36 38 36" stroke="url(#grad2)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M28 50H36" stroke="url(#grad2)" strokeWidth="1.5" strokeLinecap="round"/>
      <defs>
        <linearGradient id="grad2" x1="12" y1="8" x2="52" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6063ee"/>
          <stop offset="100%" stopColor="#b55d00"/>
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <section
      className="relative py-48 md:py-64 overflow-hidden"
      id="education"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Static radial glow background - no animation */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(70, 72, 212, 0.25), rgba(144, 73, 0, 0.15), transparent 70%)'
        }}
      />

      {/* Removed animated mesh gradient and particle system for performance */}

      {/* Double-bezel outer container */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        {/* Hero title with gradient text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-32"
        >
          <motion.h2
            className="font-headline text-7xl md:text-8xl font-bold mb-8"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #C0C1FF 50%, #FFB783 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.03em',
              lineHeight: '0.95'
            }}
          >
            {t('Education', '教育背景')}
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t(
              'Academic foundation in computer science and continuous learning.',
              '计算机科学学术基础与持续学习。'
            )}
          </motion.p>
        </motion.div>

        {/* Double-bezel inner frame */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative group perspective-[1000px]"
          >
            {/* Simplified glow layer - no blur for performance */}
            <div
              className="absolute -inset-1 rounded-[2rem] opacity-0 group-hover:opacity-30 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, #4648d4 0%, #6063ee 25%, #904900 75%, #b55d00 100%)',
              }}
            />

            {/* Glassmorphic card with double-bezel */}
            <div
              className="relative rounded-[2rem] p-[2px] overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(70, 72, 212, 0.4), rgba(144, 73, 0, 0.4))'
              }}
            >
              {/* Removed shimmer sweep effect for performance */}

              {/* Inner glass panel - removed backdrop-blur */}
              <div
                className="relative rounded-[calc(2rem-2px)] p-12 md:p-16 overflow-hidden"
                style={{
                  backgroundColor: 'rgba(15, 15, 15, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {/* Content grid */}
                <div
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-12"
                >
                  {/* Left content */}
                  <div className="flex-1 space-y-8">
                    {/* University header with icon */}
                    <div
                      className="flex items-start gap-6"
                    >
                      <div>
                        <GraduationCapIcon />
                      </div>
                      <div className="flex-1">
                        <h3
                          className="text-4xl md:text-5xl font-bold mb-3"
                          style={{
                            color: '#FFFFFF',
                            letterSpacing: '-0.01em',
                            lineHeight: '1.1'
                          }}
                        >
                          {t('Hangzhou Dianzi University', '杭州电子科技大学')}
                        </h3>
                        <p
                          className="text-xl md:text-2xl font-medium"
                          style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                        >
                          {t('Computer Science and Technology', '计算机科学与技术')}
                        </p>
                      </div>
                    </div>

                    {/* Badges with button-in-button style */}
                    <div
                      className="flex flex-wrap gap-6"
                    >
                      {/* Badge 1 */}
                      <div
                        className="group/badge relative"
                      >
                        <div
                          className="p-[1.5px] rounded-xl"
                          style={{
                            background: 'linear-gradient(135deg, rgba(70, 72, 212, 0.5), rgba(96, 99, 238, 0.5))'
                          }}
                        >
                          <div
                            className="flex items-center gap-3 px-6 py-4 rounded-[calc(0.75rem-1.5px)]"
                            style={{
                              backgroundColor: 'rgba(10, 10, 10, 0.8)',
                            }}
                          >
                            <CertificateIcon />
                            <span
                              className="font-medium"
                              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                            >
                              {t('Bachelor Degree', '本科学历')}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Badge 2 */}
                      <div
                        className="group/badge relative"
                      >
                        <div
                          className="p-[1.5px] rounded-xl"
                          style={{
                            background: 'linear-gradient(135deg, rgba(144, 73, 0, 0.5), rgba(181, 93, 0, 0.5))'
                          }}
                        >
                          <div
                            className="flex items-center gap-3 px-6 py-4 rounded-[calc(0.75rem-1.5px)]"
                            style={{
                              backgroundColor: 'rgba(10, 10, 10, 0.8)',
                            }}
                          >
                            <CodeBracketIcon />
                            <span
                              className="font-medium"
                              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                            >
                              {t('Software Engineering Focus', '软件工程方向')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right decorative element - simplified, no continuous rotation */}
                  <div
                    className="hidden md:flex items-center justify-center relative"
                  >
                    <div
                      className="relative w-40 h-40 flex items-center justify-center"
                    >
                      {/* Simplified orbital rings - no continuous animation */}
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute rounded-full"
                          style={{
                            width: 120 - i * 30,
                            height: 120 - i * 30,
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                          }}
                        />
                      ))}

                      {/* Static orbital particles - no animation */}
                      {[0, 120, 240].map((angle, i) => (
                        <div
                          key={i}
                          className="absolute w-3 h-3 rounded-full"
                          style={{
                            background: i === 0 ? '#4648d4' : i === 1 ? '#6063ee' : '#904900',
                            boxShadow: i === 0
                              ? '0 0 20px rgba(70, 72, 212, 0.8)'
                              : i === 1
                              ? '0 0 20px rgba(96, 99, 238, 0.8)'
                              : '0 0 20px rgba(144, 73, 0, 0.8)',
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -50%) translate(${Math.cos((angle * Math.PI) / 180) * 50}px, ${Math.sin((angle * Math.PI) / 180) * 50}px)`
                          }}
                        />
                      ))}

                      {/* Center icon - no rotation */}
                      <div className="relative z-10">
                        <LightbulbIcon />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[1px]"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(70, 72, 212, 0.5), rgba(144, 73, 0, 0.5), transparent)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
