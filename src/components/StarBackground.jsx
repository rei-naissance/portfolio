import { useEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])

    useEffect(() => {
        generateStars()
        generateMeteors()

        const handleResize = () => {
            generateStars()
        }

        window.addEventListener("resize", handleResize)
        
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    
    const generateStars = () => {
        const numStars = Math.floor(window.innerHeight * window.innerWidth) / 8000

        const newStars = []
        for (let i = 0; i < numStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2
            })
        }

        setStars(newStars)
    }

    const generateMeteors = () => {
            const numMeteors = 6

            const newMeteors = []
            for (let i = 0; i < numMeteors; i++) {
                newMeteors.push({
                    id: i,
                    size: Math.random() * 2 + 1,
                    x: Math.random() * 100,
                    // y: Math.random() * 20,
                    delay: Math.random() * 5,
                    animationDuration: Math.random() * 3 + 2
                })
            }

            setMeteors(newMeteors)
        }

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle"
                style={{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s",
                }}/>
            ))}
            {meteors.map((meteor) => (
                <div key={meteor.id} className="meteor animate-meteor"
                style={{
                    width: meteor.size * 50 + "px",
                    height: meteor.size * 0.5 + "px",
                    left: meteor.x + "%",
                    top: 0 + "%",
                    delay: meteor.delay,
                    animationDuration: meteor.animationDuration + "s",
                }}/>
            ))}
        </div>
    )
}

export default StarBackground