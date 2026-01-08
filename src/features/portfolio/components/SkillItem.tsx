// src/components/SkillItem.tsx

type SkillItemProps = {
    name: string;
    level: number;
};

export default function SkillItem({ name, level }: SkillItemProps) {
    return (
        <div className="skill">
            <span>{name}</span>
            <input 
                type="range" 
                className="form-range" 
                min="0" 
                max="100" 
                value={level} 
                disabled 
            />
        </div>
    );
}