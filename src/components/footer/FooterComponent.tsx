import { useTranslation } from "react-i18next";

const FooterComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className='px-4 pb-8'>
      <p className='font-medium text-sm text-center dark:text-white/40'>
        {t('footer.copyright')}
      </p>
    </footer>
  );
};

export default FooterComponent;
