import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnail?: string;
  github?: string;
  demo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  thumbnail,
  github,
  demo,
}) => {
  return (
    <div className="card">
      {thumbnail && (
        <Image
          src={thumbnail}
          alt={title}
          width={400}
          height={180}
          className="project-thumbnail"
        />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-button-wrapper">
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="project-button">
            Live Demo
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="project-button secondary">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;