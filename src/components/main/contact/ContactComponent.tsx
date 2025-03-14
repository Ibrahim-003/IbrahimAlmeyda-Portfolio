import Form from "./Form";
import SocialMedia from "./SocialMedia";
import { useTranslation } from "react-i18next";

const ContactComponent: React.FC = () => {
    const {t} = useTranslation();
  return (
    <section id='contact' className='pt-20 flex justify-center flex-col gap-6'>
      <h2 className='font-bold text-xl underline decoration-2 underline-offset-4'>
        {t('contact.title')}
      </h2>
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row-reverse md:items-start md:px-4">
        <Form />
        <SocialMedia />
      </div>
    </section>
  );
};

export default ContactComponent;
