import ProjectFilter from "./ProjectFilter";
import ProjectList from "./ProjectList";
import { useProjectFilter } from "../../../hooks/useProjectFilter";
import { useProjects } from "../../../hooks/useProjects";

const Project = () => {
    const {projects, loading, error} = useProjects();
    const {allProjects, listTech, handleListTech, handleViewAll, filteredProjects, arrayTech} = useProjectFilter(projects);

    return (
        <section className='py-26 flex flex-col justify-center gap-6' id='projects'>
            <h2 className='font-bold text-xl underline mb-6'>Projects</h2>
            {loading && <p>Cargando...</p>}
            {error && <p>{error}</p>}
            {projects.length > 0 && (
                <>
                    <ProjectFilter allProjects={allProjects} handleListTech={handleListTech} handleViewAll={handleViewAll} selectedTags={listTech} arrayTech={arrayTech} />
                    <ProjectList reposMapped={filteredProjects} />
                </>
            )}
        </section>
    )
}

export default Project;
