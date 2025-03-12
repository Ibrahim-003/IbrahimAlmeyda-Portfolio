import ProjectCard from "./ProjectCard";
import { MappedRepo } from "../../../types/types";

interface ProjectListProps {
  reposMapped: MappedRepo[];
}

const ProjectList:React.FC<ProjectListProps> = ({reposMapped}) => {
  return (
    <section className="md:px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
