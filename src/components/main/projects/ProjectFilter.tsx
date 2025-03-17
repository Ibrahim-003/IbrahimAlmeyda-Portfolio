import { FaBorderAll } from "react-icons/fa";

interface ProjectFilterProps {
  handleListTech: (tag: string) => void;
  handleViewAll: () => void;
  allProjects: boolean;
  selectedTags: string[];
  arrayTech: string[];
}

const getTechBackground = (tech: string) => {
  switch (tech) {
    case "html":
      return "bg-[#E34F26] text-white";
      break;
    case "css":
      return "bg-[#1572B6] text-white";
      break;
    case "javascript":
      return "bg-[#F7DF1E] text-white";
      break;
    case "typescript":
      return "bg-[#3178C6] text-white";
      break;
    case "react":
      return "bg-[#61DAFB] text-white";
      break;
    case "tailwindcss":
      return "bg-[#06B6D4] text-white";
      break;
    default:
      return "bg-gray-300 text-white";
  }
};

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  allProjects,
  handleListTech,
  handleViewAll,
  selectedTags,
  arrayTech,
}) => {
  return (
    <article className='select-none flex flex-col items-start gap-3 overflow-hidden sm:flex-row sm:items-center sm:justify-center md:p-4'>
      <button
        onClick={handleViewAll}
        className={`p-2 rounded-md ${
          allProjects ? "bg-teal-primary/30 dark:bg-teal-primary/40" : "bg-white/90 dark:bg-white/20"
        }`}
      >
        <FaBorderAll className='text-2xl text-teal-primary' />
      </button>
      <div className='h-1 w-full mt-3 rounded-full bg-teal-primary sm:mt-0'></div>
      <div className='w-full py-3 px-1 flex items-center gap-4 overflow-x-auto md:overflow-clip scrollbar-thin scrollbar-thumb-dark-charcoal/40 scrollbar-track-light-beige sm:px-0 dark:scrollbar-thumb-white/30 dark:scrollbar-track-dark-charcoal'>
        {arrayTech.map((tag) => (
          <button
            key={tag}
            className={`px-3 py-1 rounded-md ${
              selectedTags.includes(tag)
                ? getTechBackground(tag)
                : "bg-white/90 dark:bg-white/20"
            }`}
            onClick={() => handleListTech(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </article>
  );
};

export default ProjectFilter;
