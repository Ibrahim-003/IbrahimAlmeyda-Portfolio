interface ProjectCardContentProps {
  title: string;
  description: string;
}

const ProjectCardContent: React.FC<ProjectCardContentProps> = ({
  title,
  description,

}) => {
  return (
    <div>
      <h3 className="text-lg">{title.split("-").join(" ")}</h3>
      <p className="mt-2 max-h-24 overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded-md">{description}</p>
    </div>
  );
};

export default ProjectCardContent;
