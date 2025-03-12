const AboutComponent: React.FC = () => {
  return (
    <section className='py-26 flex flex-col justify-center' id='about'>
      <h2 className='font-bold text-xl underline'>About</h2>
      <div className='mt-6 flex flex-col gap-3 sm:px-4'>
        <p className='tracking-wider text-pretty leading-relaxed sm:indent-8 md:text-base/6 text-justify hyphens-auto max-w-prose'>
          ¡Hola! Soy Ibrahim Almeyda, un desarrollador de software apasionado
          por la tecnología. Me especializo en el desarrollo frontend con React.
          Disfruto creando aplicaciones web interactivas y eficientes,
          enfocándome en una experiencia de usuario fluida. Actualmente, estoy
          ampliando mis conocimientos en TypeScript y Tailwind CSS.
        </p>
        <p className='tracking-wider text-pretty leading-relaxed sm:indent-8 md:text-base/6 text-justify hyphens-auto max-w-prose'>
          Mi objetivo es escribir código limpio y mantenible mientras sigo
          mejorando mis habilidades en resolución de problemas. Cuando no estoy
          programando, me gusta explorar nuevas tendencias tecnológicas,
          aprender sobre inteligencia artificial y diseñar interfaces creativas.
        </p>
      </div>
    </section>
  );
};

export default AboutComponent;
