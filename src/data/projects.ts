// src/data/projects.ts

export interface Project {
    id: number;
    title: string;
    description: string;
    techStack:string[];
    githubUrl: string;
    demoUrl: string;
    imageUrl: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase my projects and skills.",
        techStack: ["React", "Typescript", "Vite", "Vercel"],
        githubUrl: "https://github.com/Zevvdev",
        demoUrl: "https://zehk.site",
        imageUrl: ""
    }
]