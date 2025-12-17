// src/pages/Home.tsx

import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";


function Home() {
    return <>
        <div className="home">
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    
    </>
}

export default Home;