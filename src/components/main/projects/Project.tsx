import { FaExternalLinkSquareAlt } from "react-icons/fa";
import ProjectFilter from "./ProjectFilter";
import ProjectList from "./ProjectList";
import { useProjectFilter } from "../../../hooks/useProjectFilter";
import { useProjects } from "../../../hooks/useProjects";

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

  return (
    <section className='py-26 flex flex-col justify-center gap-6' id='projects'>
      <h2 className='font-bold text-xl underline mb-6'>Projects</h2>
      {loading && <p>Cargando...</p>}
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
            href="https://github.com/Ibrahim-003"
            target="_blank"
            rel="noopener noreferrer"
            className='w-max mx-auto bg-teal-primary mt-8 px-3 py-2 rounded-md flex items-center gap-3 hover:bg-teal-dark transition-colors duration-300 ease-in-out '
          >
            <span className='text-white dark:text-white/90'>
              View All Projects
            </span>
            <FaExternalLinkSquareAlt className='text-white dark:text-white/80' />
          </a>
        </>
      )}
    </section>
  );
};

export default Project;
