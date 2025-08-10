import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // Frontend
    { name: "HTML", level: 90, category: "frontend" },
    { name: "CSS", level: 80, category: "frontend" },
    { name: "JavaScript", level: 85, category: "frontend" },
    { name: "TypeScript", level: 80, category: "frontend" },
    { name: "React", level: 85, category: "frontend" },
    { name: "React Native", level: 80, category: "frontend" },
    { name: "Next.js", level: 75, category: "frontend" },
    { name: "Bootstrap", level: 80, category: "frontend" },
    { name: "TailwindCSS", level: 85, category: "frontend" },

    // Backend
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express.js", level: 75, category: "backend" },
    { name: "Django", level: 80, category: "backend" },
    { name: "ASP.NET", level: 75, category: "backend" },
    { name: "PHP", level: 70, category: "backend" },
    { name: "C#", level: 75, category: "backend" },

    // Databases
    { name: "Firebase", level: 85, category: "database" },
    { name: "MongoDB", level: 80, category: "database" },
    { name: "SQLite", level: 75, category: "database" },
    { name: "MariaDB", level: 70, category: "database" },
    { name: "Supabase", level: 75, category: "database" },

    // Tools
    { name: "Git", level: 90, category: "tools" },
    { name: "Linux", level: 60, category: "tools" },
    { name: "Figma", level: 75, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
    { name: "Android Studio", level: 70, category: "tools" },
    { name: "XAMPP", level: 65, category: "tools" },

    // Languages
    { name: "Python", level: 90, category: "language" },
    { name: "Java", level: 85, category: "language" },
    { name: "C", level: 80, category: "language" },
    { name: "C++", level: 75, category: "language" }
];

const categories = ["all", "frontend", "backend", "tools", "language"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
                <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                    "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                    activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-forefround hover:bd-secondary"
                )}
                >
                {category}
                </button>
            ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, key) => (
                <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
                >
                <div className="text-left mb-4">
                    <h3 className="font-semibold text-lg"> {skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + "%" }}
                    />
                </div>

                <div className="text-right mt-1">
                    <span className="text-sm text-muted-foreground">
                    {skill.level}%
                    </span>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};