import { FaHtml5, FaCss3Alt, FaReact, FaFigma, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss } from "react-icons/si";
import { useTranslation } from 'react-i18next';

const SkillsComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      className='pt-20 pb-8 flex flex-col justify-center lg:pt-26'
      id='skills'
    >
      <h2 className='font-bold text-xl underline decoration-2 underline-offset-4'>
        {t('skills.title')}
      </h2>
      <div className='mt-6 grid gap-4 sm:px-4 sm:grid-cols-2 md:gap-x-8'>
        <div className='w-full max-w-[324px] bg-light-ivory dark:bg-white/20 px-2 py-2 rounded-md flex items-center gap-3'>
          <FaHtml5 className='text-[#E34F26] text-2xl' />
          <h4 className='font-medium'>{t('skills.html')}</h4>
        </div>
        <div className='w-full max-w-[324px] bg-light-ivory dark:bg-white/20 px-2 py-2 rounded-md flex items-center gap-3'>
          <FaCss3Alt className='text-[#1572B6] text-2xl' />
          <h4 className='font-medium'>{t('skills.css')}</h4>
        </div>
        <div className='w-full max-w-[324px] bg-light-ivory dark:bg-white/20 px-2 py-2 rounded-md flex items-center gap-3'>
          <SiJavascript className='text-[#F7DF1E] text-2xl' />
          <h4 className='font-medium'>{t('skills.javascript')}</h4>
        </div>
        <div className='w-full max-w-[324px] bg-light-ivory dark:bg-white/20 px-2 py-2 rounded-md flex items-center gap-3'>
          <FaReact className='text-[#61DAFB] text-2xl' />
          <h4 className='font-medium'>{t('skills.react')}</h4>
        </div>
        <div className='w-full max-w-[324px] bg-light-ivory dark:bg-white/20 px-2 py-2 rounded-md flex items-center gap-3'>
          <SiTypescript className='text-[#3178C6] text-2xl' />
          <h4 className='font-medium'>{t('skills.typescript')}</h4>
        </div>
        <div className=' w-full max-w-[324px] bg-light-ivory dark:bg-white/20 px-2 py-2 rounded-md flex items-center gap-3'>
          <SiTailwindcss className='text-[#06B6D4] text-2xl' />
          <h4 className='font-medium'>{t('skills.tailwindcss')}</h4>
        </div>
        <div className='w-full max-w-[324px] bg-light-ivory dark:bg-white/20 px-2 py-2 rounded-md flex items-center gap-3'>
          <FaFigma className='text-[#F24E1E] text-2xl' />
          <h4 className='font-medium'>{t('skills.figma')}</h4>
        </div>
        <div className='w-full max-w-[324px] bg-light-ivory dark:bg-white/20 px-2 py-2 rounded-md flex items-center gap-3'>
          <FaGitAlt className='text-[#F24E1E] text-2xl' />
          <h4 className='font-medium'>{t('skills.git')}</h4>
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;
