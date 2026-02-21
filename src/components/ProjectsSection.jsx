import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CookFlow",
    description:
      "A recipe sharing platform with a cooking assistant featuring smart timers, voice guidance via Groq SDK, and ingredients & progress tracking.",
    image: "/projects/cookflow.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Supabase", "Groq SDK", "Framer Motion"],
    demoUrl: "https://cookflow-two.vercel.app/",
    githubUrl: "https://github.com/rei-naissance/cookflow",
  },
  {
    id: 2,
    title: "CNPI",
    description:
      "A URL shortener with custom aliases, QR code generation, click analytics tracking, and a centralized management dashboard.",
    image: "/projects/cnpi.png",
    tags: ["React", "TypeScript", "Vite", "Supabase", "TailwindCSS", "Radix UI"],
    demoUrl: "https://cnpi.vercel.app/",
    githubUrl: "https://github.com/rei-naissance/cnpi",
  },
  {
    id: 3,
    title: "PillPal",
    description:
      "An AI-powered healthcare assistant that analyzes symptoms and suggests OTC medications, prescriptions, and home remedies via HuggingFace.",
    image: "/projects/pillpal.png",
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "HuggingFace"],
    demoUrl: "https://pillpal-three.vercel.app/",
    githubUrl: "https://github.com/rei-naissance/PillPal",
  },
  {
    id: 4,
    title: "Churn Risk Detector",
    description:
      "A scikit-learn powered model that predicts customer churn risk from free-text shipping complaints using TF-IDF + Random Forest with a Gradio web UI.",
    image: "/projects/churn-risk-detector.png",
    tags: ["Python", "scikit-learn", "Gradio", "HuggingFace"],
    demoUrl: "https://huggingface.co/spaces/reinaissanced/churn-risk-detector",
    githubUrl: "https://github.com/rei-naissance/Churn-Risk-Detector",
  },
  {
    id: 5,
    title: "IMDB Sentiment Model",
    description:
      "An LSTM-based sentiment classifier for IMDB movie reviews with a Streamlit web app, built with TensorFlow/Keras and running on CPU.",
    image: "/projects/imdb-sentiment.png",
    tags: ["Python", "TensorFlow", "Keras", "Streamlit"],
    demoUrl: "#",
    githubUrl: "https://github.com/rei-naissance/imdb-sentiment-analysis",
  },
  {
    id: 6,
    title: "Portfolio",
    description:
      "A portfolio website to showcase my skills, projects, and experience.",
    image: "/projects/portfolio.png",
    tags: ["React", "TailwindCSS", "Vite"],
    demoUrl: "https://portfolio-tau-liard-17.vercel.app/",
    githubUrl: "https://github.com/rei-naissance/portfolio",
  },
  {
    id: 7,
    title: "Litterbox",
    description:
      "A community-driven forum platform for CIT-U students to keep track of events, announcements, and activities.",
    image: "/projects/litterbox.png",
    tags: ["HTML", "CSS", "JavaScript", "TailwindCSS", "Django", "SQLite"],
    demoUrl: "#",
    githubUrl: "https://github.com/rei-naissance/Litterbox",
  },
  {
    id: 8,
    title: "Huggle",
    description:
      "An e-commerce platform for goods with low visibility with a buyer mobile application, seller mobile application, and admin dashboard.",
    image: "/projects/huggle.png",
    tags: ["React", "React Native", "TailwindCSS", "Firebase", "Clerk", "ASP.NET"],
    demoUrl: "#",
    githubUrl: "https://github.com/rei-naissance/Huggle-Backend",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          My <span className="text-primary"> Work </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Clean code, clever solutions, and interfaces that just work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col relative"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground transition-shadow duration-300 hover:text-primary hover:shadow-[0_0_10px_hsl(var(--primary))]"
                    >
                      {tag}{" "}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-primary text-glow"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-8">
                  {project.description}
                </p>
                {/* Spacer to push icons to bottom */}
                <div className="flex-1" />
                <div className="absolute left-6 bottom-6 flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/rei-naissance"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};