import { useState } from "react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { WorkExperienceSection } from "@/components/WorkExperienceSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { Footer } from "../components/Footer"
import { ContactSection } from "../components/ContactSection"
import { Preloader } from "../components/Preloader"

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {isLoading && <Preloader onLoaded={() => setIsLoading(false)} />}

            <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                {/* Theme Toggle */}
                <ThemeToggle />

                {/* Background Effects */}
                <StarBackground />

                {/* Navbar */}
                <Navbar />

                {/* Main Contant */}
                <main>
                    <HeroSection />
                    <AboutSection />
                    <WorkExperienceSection />
                    <SkillsSection />
                    <ProjectsSection />
                    <ContactSection />
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    )
}

export default Home