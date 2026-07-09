import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative py-32 md:py-48 bg-[#050505] overflow-hidden" id="contact">
      {/* Radial Mesh Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[100px]" />
      </div>

      {/* Film Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="flex justify-center mb-8"
        >
          <span className="rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium bg-white/5 text-white/60 border border-white/10">
            {t('Get in Touch', '联系方式')}
          </span>
        </motion.div>

        {/* Double-Bezel Card Architecture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="relative"
        >
          {/* Outer Shell */}
          <div className="bg-white/[0.02] p-2 rounded-[2.5rem] ring-1 ring-white/10 backdrop-blur-xl">
            {/* Inner Core */}
            <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-[calc(2.5rem-0.5rem)] p-12 md:p-20 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
              {/* Subtle Grid Pattern */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '48px 48px',
                }}
              />

              {/* Content Grid - Editorial Split on Desktop */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
                {/* Left: Massive Typography */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
                  className="md:col-span-7"
                >
                  <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-6">
                    {language === 'en' ? (
                      <>
                        Let's build
                        <br />
                        something
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">
                          remarkable
                        </span>
                      </>
                    ) : (
                      <>
                        让我们一起
                        <br />
                        构建
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">
                          非凡之作
                        </span>
                      </>
                    )}
                  </h2>
                  <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl">
                    {t(
                      'Open to new opportunities and technical collaborations. Feel free to reach out!',
                      '期待新的机会和技术合作，欢迎随时联系！'
                    )}
                  </p>
                </motion.div>

                {/* Right: Interactive Contact Cards */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  className="md:col-span-5 space-y-6"
                >
                  {/* Primary CTA - Magnetic Button with Nested Icon */}
                  <motion.a
                    href="mailto:daichongweb@gmail.com"
                    className="group relative flex items-center justify-between w-full bg-white hover:bg-white/95 text-black px-8 py-5 rounded-full font-semibold text-lg transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-[0_8px_32px_rgba(255,255,255,0.1)] hover:shadow-[0_16px_48px_rgba(255,255,255,0.15)] active:scale-[0.98]"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{t('Get in Touch', '联系我')}</span>
                    {/* Button-in-Button Nested Icon */}
                    <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[2px] group-hover:scale-105">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 15L15 1M15 1H5M15 1V11" />
                      </svg>
                    </div>
                  </motion.a>

                  {/* Email Display Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-sm"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/40">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7L13.03 12.7C12.71 12.89 12.36 13 12 13C11.64 13 11.29 12.89 10.97 12.7L2 7" />
                    </svg>
                    <span className="text-white/70 text-sm font-medium">daichongweb@gmail.com</span>
                  </motion.div>

                  {/* Social Links - Staggered Reveal */}
                  <div className="flex gap-3">
                    {[
                      {
                        href: 'https://github.com/daichongweb',
                        label: 'GitHub (daichongweb)',
                        icon: (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 18L22 12L16 6M8 6L2 12L8 18" />
                          </svg>
                        ),
                        delay: 0.6
                      },
                      {
                        href: 'https://github.com/daichongdev',
                        label: 'GitHub (daichongdev)',
                        icon: (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="4 17 10 11 4 5" />
                            <line x1="12" y1="19" x2="20" y2="19" />
                          </svg>
                        ),
                        delay: 0.7
                      },
                      {
                        href: 'http://www.daichongweb.com',
                        label: t('Tech Blog', '技术博客'),
                        icon: (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" />
                            <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" />
                          </svg>
                        ),
                        delay: 0.8
                      }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.label}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: social.delay, ease: [0.32, 0.72, 0, 1] }}
                        className="group flex-1 flex items-center justify-center bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-2xl p-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-95"
                        whileHover={{ y: -4 }}
                      >
                        <div className="text-white/60 group-hover:text-white transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                          {social.icon}
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
