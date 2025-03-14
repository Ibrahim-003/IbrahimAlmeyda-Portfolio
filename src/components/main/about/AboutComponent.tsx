import { useTranslation } from "react-i18next";

const AboutComponent: React.FC = () => {
    const {t} = useTranslation();

  return (
    <section
      className='pt-20 pb-8 flex flex-col justify-center lg:pt-26'
      id='about'
    >
      <h2 className='font-bold text-xl underline decoration-2 underline-offset-4'>
        {t("about.title")}
      </h2>
      <div className='mt-6 flex flex-col gap-3 sm:px-4'>
        <p className='tracking-wider text-pretty sm:indent-8 md:text-base text-justify hyphens-auto max-w-prose'>
          {t("about.description.0")}
        </p>
        <p className='tracking-wider text-pretty sm:indent-8 md:text-base text-justify hyphens-auto max-w-prose'>
          {t("about.description.1")}
        </p>
      </div>
    </section>
  );
};

export default AboutComponent;
