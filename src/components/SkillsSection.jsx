import { Code, Database, Globe, Terminal, Cpu, Layout, Server, GitBranch } from "lucide-react";

const skillCategories = [
    {
        id: "frontend",
        title: "Frontend & Mobile",
        icon: <Layout className="w-6 h-6 text-primary" />,
        description: "Crafting responsive, interactive, and seamless user interfaces.",
        skills: [
            "React", "Next.js", "React Native", "TypeScript",
            "TailwindCSS", "JavaScript", "HTML5", "CSS3", "Framer Motion"
        ]
    },
    {
        id: "backend",
        title: "Backend & Architecture",
        icon: <Server className="w-6 h-6 text-primary" />,
        description: "Building scalable APIs, microservices, and robust server logic.",
        skills: [
            "NestJS", "Node.js", "ASP.NET Core", "C#",
            "Express.js", "Python", "Django", "REST APIs"
        ]
    },
    {
        id: "database",
        title: "Database & Cloud",
        icon: <Database className="w-6 h-6 text-primary" />,
        description: "Managing data persistence, ORMs, and cloud infrastructure.",
        skills: [
            "PostgreSQL", "MySQL", "Prisma", "Kysely",
            "Supabase", "Firebase", "SQLite", "MariaDB"
        ]
    },
    {
        id: "tools",
        title: "DevOps & Tools",
        icon: <Terminal className="w-6 h-6 text-primary" />,
        description: "Streamlining development workflows and version control.",
        skills: [
            "Git", "GitHub", "Azure DevOps", "Linux",
            "Docker", "Jira", "VS Code", "Postman", "CI/CD"
        ]
    }
];

export const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="text-primary">Repertoire</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A list of technologies I use to build robust and scalable digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category) => (
                        <div
                            key={category.id}
                            className="gradient-border p-8 card-hover group bg-card/50 backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                    {category.icon}
                                </div>
                                <div className="text-left">
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                        {category.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {category.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-sm font-medium border rounded-full bg-secondary text-secondary-foreground 
                                                 transition-all duration-300 hover:text-primary hover:shadow-[0_0_10px_hsl(var(--primary))] 
                                                 cursor-default select-none"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};