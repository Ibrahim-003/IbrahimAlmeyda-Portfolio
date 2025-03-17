import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss } from "react-icons/si";

const getTechIcon = (tech: string) => {
  const iconMap: { [key: string]: JSX.Element } = {
    html: <FaHtml5 className='text-[#E34F26] text-2xl' />,
    css: <FaCss3Alt className='text-[#1572B6] text-2xl' />,
    javascript: <SiJavascript className='text-[#F7DF1E] text-2xl' />,
    typescript: <SiTypescript className='text-[#3178C6] text-2xl' />,
    react: <FaReact className='text-[#61DAFB] text-2xl' />,
    tailwindcss: <SiTailwindcss className='text-[#06B6D4] text-2xl' />,
  };
  return iconMap[tech.toLowerCase()] || <span>{tech}</span>;
};

interface ProjectCardFooterProps {
  tags: string[];
  githubRepoUrl: string;
  demo: string;
}

const ProjectCardFooter: React.FC<ProjectCardFooterProps> = ({
  tags,
  githubRepoUrl,
  demo,
}) => {
  return (
    <footer>
      <div className='flex items-center gap-2'>
        {tags?.map((tag) => (
          <div key={tag} title={tag}>
            {getTechIcon(tag)}
          </div>
        ))}
      </div>
      <div className='flex items-center justify-end gap-3 px-2'>
        <a href={githubRepoUrl} target='_blank' rel='noreferrer'>
          <FaGithub className='text-2xl transform transition-transform duration-300 hover:scale-125' />
        </a>
        <a href={demo} target='_blank' rel='noreferrer'>
          <FaExternalLinkAlt className='text-2xl text-teal-primary hover:scale-125 transform transition-transform duration-300' />
        </a>
      </div>
    </footer>
  );
};

export default ProjectCardFooter;
