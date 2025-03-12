import { FaFileDownload } from "react-icons/fa";

const PresentationComponent: React.FC = () => {
  return (
    <section className='py-26 flex flex-col justify-center' id='home'>
      <h2 className='text-(length:--my-name-size) text-greeting dark:text-white/50'>
        Hi, This is
      </h2>
      <h1 className='text-(length:--my-name-size) text-teal-primary'>
        Ibrahim Almeyda
      </h1>
      <h3 className='text-(length:--my-name-size) text-job dark:text-white/70'>
        I'm a Frontend Developer.
      </h3>
      <button className="w-max bg-teal-primary mt-6 px-3 py-2 rounded-md flex items-center gap-3 hover:bg-teal-primary/80 transition-colors duration-300 ease-in-out ">
        <span className="text-white dark:text-white/80">Download CV</span>
        <FaFileDownload className="text-white animate-bounce dark:text-white/80" />
      </button>
    </section>
  );
};

export default PresentationComponent;
