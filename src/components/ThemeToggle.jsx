import {Sun, Moon} from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme === "dark" || !savedTheme) {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
    }, [])
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setIsDarkMode(false)
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true)
        }
    }

    return (
        <button 
            onClick={toggleTheme}
            className={cn(
                "fixed max-sm:hidden top-3 right-3 z-50 p-2 rounded-full",
                "focus:outline-hidden",
                "hover:shadow-[0_0_16px_4px_hsl(var(--primary))]",
                "transition-colors transition-shadow duration-300"
            )}
        >
            {" "}
            {isDarkMode ? 
                (<Sun className="h-6 w-6 text-yellow-300"/>
                ) : (
                <Moon className="h=6 w-6 text-blue-950"/>
            )}
        </button>
    )
}