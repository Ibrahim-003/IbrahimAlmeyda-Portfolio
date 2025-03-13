import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactComponent: React.FC = () => {
  return (
    <section id='contact' className="flex justify-center items-center">
      <div className='flex gap-4'>
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

export default ContactComponent;
