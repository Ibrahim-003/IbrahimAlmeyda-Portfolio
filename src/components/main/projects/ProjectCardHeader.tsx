interface ProjectCardHeaderProps {
    title: string;
}

const ProjectCardHeader: React.FC<ProjectCardHeaderProps> = ({title}) => {
    return (
      <header className='shadow-md rounded-lg'>
        <img
          src={`https://raw.githubusercontent.com/Ibrahim-003/${title}/main/src/assets/images/desktop-preview.webp`}
          alt={title}
          className='rounded-lg'
        />
      </header>
    );
}

export default ProjectCardHeader;
