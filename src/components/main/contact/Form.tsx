import { useContactForm } from "../../../hooks/useContactForm";
import { useTranslation } from "react-i18next";

const Form: React.FC = () => {
    const {t} = useTranslation();

  const { formData, errors, status, handleChange, handleSubmit } =
    useContactForm();

  return (
    <section className='relative w-full max-w-[400px]'>
      <h3 className='font-normal'>
        {t('contact.formTitle')}
      </h3>
      <form
        onSubmit={handleSubmit}
        className='max-w-lg mt-4 mx-auto flex flex-col gap-7'
      >
        <div className='relative'>
          <input
            type='text'
            name='name'
            placeholder={t('contact.namePlaceholder')}
            value={formData.name}
            onChange={handleChange}
            className='w-full p-2 bg-white border-none outline-none rounded-md focus:ring focus:ring-teal-primary placeholder:text-dark-charcoal/80 dark:text-dark-charcoal'
            required
          />
          {errors.name && (
            <p className='absolute -bottom-5 right-0 text-red-500 text-sm'>
              {errors.name}
            </p>
          )}
        </div>
        <div className='relative'>
          <input
            type='email'
            name='email'
            placeholder= {t("contact.emailPlaceholder")}
            value={formData.email}
            onChange={handleChange}
            className='w-full p-2 bg-white border-none outline-none rounded-md focus:ring focus:ring-teal-primary placeholder:text-dark-charcoal/80 dark:text-dark-charcoal'
            required
          />
          {errors.email && (
            <p className='absolute -bottom-5 right-0 text-red-500 text-sm'>
              {errors.email}
            </p>
          )}
        </div>
        <div className='relative'>
          <textarea
            name='message'
            placeholder={t("contact.messagePlaceholder")}
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className='w-full p-2 bg-white border-none outline-none rounded-md focus:ring focus:ring-teal-primary placeholder:text-dark-charcoal/80 dark:text-dark-charcoal'
            required
          ></textarea>
          {errors.message && (
            <p className='absolute -bottom-4 right-0 text-red-500 text-sm mt-1'>
              {errors.message}
            </p>
          )}
        </div>
        <button
          type='submit'
          className='w-max mx-auto px-4 py-2 bg-teal-primary text-white rounded-lg hover:bg-teal-dark transition-colors duration-300 ease-in-out'
        >
          {t("contact.submit")}
        </button>
      </form>
      {status && (
        <p className='absolute right-0 bottom-12 mt-2 text-right text-green-600'>
          {status}
        </p>
      )}
    </section>
  );
};

export default Form;
