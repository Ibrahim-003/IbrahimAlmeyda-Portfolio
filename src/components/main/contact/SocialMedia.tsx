import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const SocialMedia: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className='w-full max-w-[400px]'>
      <h3 className='font-normal'>
        {t('contact.socialTitle')}
      </h3>
      <div className='mt-4 flex justify-center items-center gap-4 md:justify-start'>
        <a
          href='https://github.com/Ibrahim-003'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-600 dark:text-white/50 hover:text-teal-primary transition-colors duration-300'
        >
          <FaGithub size={32} />
        </a>
        <a
          href='https://www.linkedin.com/in/ibrahim-almeyda/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-600 dark:text-white/50 hover:text-teal-primary transition-colors duration-300'
        >
          <FaLinkedin size={32} />
        </a>
      </div>
    </section>
  );
};

export default SocialMedia;
