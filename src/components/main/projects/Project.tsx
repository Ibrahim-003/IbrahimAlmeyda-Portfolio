import { FaExternalLinkSquareAlt } from "react-icons/fa";
import ProjectFilter from "./ProjectFilter";
import ProjectList from "./ProjectList";
import { useProjectFilter } from "../../../hooks/useProjectFilter";
import { useProjects } from "../../../hooks/useProjects";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { projects, loading, error } = useProjects();
  const {
    allProjects,
    listTech,
    handleListTech,
    handleViewAll,
    filteredProjects,
    arrayTech,
  } = useProjectFilter(projects);
  const {t} = useTranslation();

  return (
    <section
      className='pt-20 pb-8 flex flex-col justify-center gap-6 lg:pt-26'
      id='projects'
    >
      <h2 className='font-bold text-xl mb-4 underline decoration-2 underline-offset-4'>
        {t('projects.title')}
      </h2>
      {loading && <p>{t('loading')}</p>}
      {error && <p>{error}</p>}
      {projects.length > 0 && (
        <>
          <ProjectFilter
            allProjects={allProjects}
            handleListTech={handleListTech}
            handleViewAll={handleViewAll}
            selectedTags={listTech}
            arrayTech={arrayTech}
          />
          <ProjectList reposMapped={filteredProjects} />
          <a
            href='https://github.com/Ibrahim-003?tab=repositories'
            target='_blank'
            rel='noopener noreferrer'
            className='w-max mx-auto bg-teal-primary mt-8 px-3 py-2 rounded-md flex items-center gap-3 hover:bg-teal-dark transition-colors duration-300 ease-in-out'
          >
            <span className='text-white dark:text-white/90'>
              {t('projects.viewAll')}
            </span>
            <FaExternalLinkSquareAlt className='text-white' />
          </a>
        </>
      )}
    </section>
  );
};

export default Project;
