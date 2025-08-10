import { Code, User, Briefcase, BrainCircuit } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Full-Stack Developer, UX & AI Enthusiast
                    </h3>

                    <p className="text-muted-foreground">
                        As a senior Computer Science scholar and hands-on developer of 4 years, I build digital experiences that bridge technical excellence with human needs.
                        My work spans from crafting intuitive UIs to architecting scalable backends—always with a focus on creating solutions that feel effortless and meaningful.
                    </p>

                    <p className="text-muted-foreground">
                        What drives me is the intersection of functionality and emotion:
                        whether developing maritime booking systems for underserved communities or designing student collaboration tools,
                        I believe technology should empower first and impress second. 
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>

                        <a
                            href="/Philippe-Andrei-Dael_Resume.pdf"
                            download
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                                <p className="text-muted-foreground">
                                    Building robust web applications from frontend to backend
                                    using modern technologies and frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <BrainCircuit className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Artificial Intelligence</h4>
                                <p className="text-muted-foreground">
                                     Exploring intelligent systems and integrating AI models
                                     into real-world applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foreground">
                                    Designing intuitive user interfaces and seamless user
                                    experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">DevOps & Project Management</h4>
                                <p className="text-muted-foreground">
                                    Automating development workflows and leading projects
                                    with agile methodologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default AboutSection