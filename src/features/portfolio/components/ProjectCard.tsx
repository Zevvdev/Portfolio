// src/components/ProjectCard.tsx

import type { Project } from "../data/projects";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {

    const { title, description, techStack, githubUrl, demoUrl, imageUrl } = project;

    return (

        <div className="project-card">
            {imageUrl && (
                <img
                src={imageUrl}
                alt={`${title} screenshot`}
                className="project-image"
                />
            )}

            <h3 className="project-title">{title}</h3>
            
            <p className="project-card">{description}</p>

            {techStack && techStack.length > 0 && (
                <div className="tech-stack">
                    {techStack.map((tech, index) => (
                        <span key={index} className="tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>
            )}
            <div className="githubUrl">
                {githubUrl && (
                    <a href={githubUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn github-link"
                    >
                        Github
                    </a>
                )}
            </div>

            <div className="demoUrl">
                {demoUrl && (
                    <a href={demoUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn demo-link"
                    >
                        Demo
                    </a>
                )}
            </div>

        </div>
    );

    
}
export default ProjectCard;