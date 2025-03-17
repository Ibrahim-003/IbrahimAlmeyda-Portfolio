import { MappedRepo } from "../../../types/types";
import ProjectCardHeader from "./ProjectCardHeader";
import ProjectCardContent from "./ProjectCardContent";
import ProjectCardFooter from "./ProjectCardFooter";

const ProjectCard: React.FC<MappedRepo> = ({
  title,
  description,
  githubRepoUrl,
  demo,
  tags,
}) => {

  return (
    <article className="w-full max-w-[350px] mx-auto py-4 bg-light-cream dark:bg-white/10 rounded-lg shadow-lg flex flex-col justify-between gap-5 sm:px-4 md:max-w-[400px]">
      <ProjectCardHeader title={title} />
      <ProjectCardContent title={title} description={description} />
      <ProjectCardFooter tags={tags} githubRepoUrl={githubRepoUrl} demo={demo} />
    </article>
  );
};

export default ProjectCard;
