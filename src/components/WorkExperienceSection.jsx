import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Mobile Applications Developer",
    company: "Hayahai",
    location: "Cebu, Philippines",
    period: "May 2025 - November 2025",
    description: [
      "Developed the mobile application for Hayahai, a system that provides an interface for logistics and management of partner seaborne travel companies.",
      "Worked closely with maintaining the initial admin portal for managing client shipping lines with NestJS for the backend API, Next.js for the frontend pages, and middleware, a PostgreSQL database with Prisma for Object-Relational Mapping.",
      "Helped in the development of the updated systems for the client-side management, admin, and booking technologies using NestJS for API development, Next.js for the frontend pages, and a PostgreSQL database with Kysely for Object-Relational Mapping.",
      "Lessened merge and migration conflicts by writing documentation for proper git branching strategies, pull request descriptions, Kysely migration workflows, and other related version control management strategies."
    ],
    tags: ["React Native", "NestJS", "Next.js", "PostgreSQL", "Prisma", "Kysely", "Azure DevOps"]
  },
  {
    id: 2,
    title: "Software Developer Intern",
    company: "Fullscale",
    location: "Cebu, Philippines",
    period: "September 2025 - January 2026",
    description: [
      "Maintained the backend API and frontend pages for the internal systems used by the sales team and management, using .NET (ASP.NET) for the backend API systems, Blazor Pages and Next.js for the frontend, and a MySQL database.",
      "Gained experience in working with developer teams through Jira, following Scrum methodology.",
      "Studied and experienced industry development strategies relating to CI/CD pipelines, Git branching strategies, production deployment strategies, SSH, developer pull request and commit conventions."
    ],
    tags: ["ASP.NET", "Blazor", "Next.js", "MySQL", "Jira", "Scrum", "CI/CD"]
  }
];

export const WorkExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Building real-world solutions and learning from industry professionals.
        </p>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="gradient-border p-6 card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-primary text-glow">
                      {experience.title}
                    </h3>
                    <p className="text-lg font-medium text-foreground">
                      {experience.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 text-muted-foreground text-sm md:text-right md:shrink-0">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin className="h-4 w-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              <ul className="text-muted-foreground text-left space-y-2 mb-4 ml-4">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-primary">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground transition-shadow duration-300 hover:text-primary hover:shadow-[0_0_10px_hsl(var(--primary))]"
                  >
                    {tag}
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

export default WorkExperienceSection;
