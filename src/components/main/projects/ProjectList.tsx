import ProjectCard from "./ProjectCard";
import { MappedRepo } from "../../../types/types";

interface ProjectListProps {
  reposMapped: MappedRepo[];
}

const ProjectList:React.FC<ProjectListProps> = ({reposMapped}) => {
  return (
    <section className="md:px-4">
      <div className="rounded px-1 py-2 grid grid-cols-1 md:grid-cols-2 gap-6 h-[900px] overflow-auto scrollbar-none sm:scrollbar-thin sm:scrollbar-track-light-beige dark:sm:scrollbar-track-dark-charcoal dark:sm:scrollbar-thumb-white/30 md:px-3">
        {reposMapped?.map((repo) => (
            <ProjectCard
              key={repo.id}
              title={repo.title}
              description={repo.description}
              githubRepoUrl={repo.githubRepoUrl}
              demo={repo.demo}
              tags={repo.tags}
            />
          ))
        }
      </div>
    </section>
  );
};

export default ProjectList;
