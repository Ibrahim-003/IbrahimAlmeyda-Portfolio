import { FaFileDownload } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const PresentationComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      className='relative pt-26 pb-8 flex flex-col justify-center'
      id='home'
    >
      <h2 className='text-(length:--my-name-size) text-greeting dark:text-white/50'>
        {t("presentation.title1")}
      </h2>
      <h1 className='text-(length:--my-name-size) text-teal-primary'>
        {t("presentation.title2")}
      </h1>
      <h3 className='text-(length:--my-name-size) text-job dark:text-white/70'>
        {t("presentation.title3")}
      </h3>
      <img
        src='/profile-picture.webp'
        width={120}
        height={120}
        className='mt-4 rounded-full'
        alt='profile picture'
      />
      <a
        href='/RESUME.pdf'
        download='IbrahimAlmeyda_CV.pdf'
        className='w-max bg-teal-primary mt-8 px-3 py-2 rounded-md flex items-center gap-3 hover:bg-teal-dark transition-colors duration-300 ease-in-out '
      >
        <span className='text-white dark:text-white/90'>
          {t("presentation.downloadBtn")}
        </span>
        <FaFileDownload className='text-white animate-bounce' />
      </a>
    </section>
  );
};

export default PresentationComponent;
