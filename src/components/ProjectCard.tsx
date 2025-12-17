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
            <p>{description}</p>
        </div>
    );

    
}
export default ProjectCard;