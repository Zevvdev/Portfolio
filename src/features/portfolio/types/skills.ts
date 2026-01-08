// src/data/skills.ts

export type skill = {
    name: string;
    level: number; // 0 to 100
}

export const skills: skill[] = [
    { name: "Java", level: 80 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 65 },
    { name: "Node.js", level: 60 },
    { name: "TypeScript", level: 50 },
];
