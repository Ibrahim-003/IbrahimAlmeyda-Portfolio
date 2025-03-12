interface ProjectCardHeaderProps {
    title: string;
}

const ProjectCardHeader: React.FC<ProjectCardHeaderProps> = ({title}) => {
    return (
      <header>
        <img src={`https://raw.githubusercontent.com/Ibrahim-003/${title}/main/src/assets/images/desktop-preview.webp`} alt={title} className="rounded-lg shadow" />
      </header>
    );
}

export default ProjectCardHeader;
