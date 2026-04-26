import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface-bright py-16 px-8 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-lg font-bold text-[#191c1d]">Chong Dai</div>
          <p className="text-[#767586] text-sm max-w-xs text-center md:text-left">
            {t(
              'Building scalable and intelligent systems. Built with intentional asymmetry.',
              '构建可扩展的智能系统。采用有意的非对称设计。'
            )}
          </p>
        </div>
        <div className="flex items-center gap-10">
          <a
            className="text-[#767586] hover:text-[#4648d4] text-sm transition-colors font-medium underline decoration-[#4648d4]/30 underline-offset-4"
            href="#"
          >
            Twitter
          </a>
          <a
            className="text-[#767586] hover:text-[#4648d4] text-sm transition-colors font-medium underline decoration-[#4648d4]/30 underline-offset-4"
            href="https://github.com/daichongdev"
          >
            GitHub
          </a>
          <a
            className="text-[#767586] hover:text-[#4648d4] text-sm transition-colors font-medium underline decoration-[#4648d4]/30 underline-offset-4"
            href="#"
          >
            LinkedIn
          </a>
        </div>
        <div className="text-[#767586] text-sm">
          {t('© 2024 Chong Dai. All rights reserved.', '© 2024 Chong Dai. 版权所有。')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
