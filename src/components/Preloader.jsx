import { useState, useEffect } from "react";

const imagesToPreload = [
  "/Formal-Photo.png",
  "/projects/cnpi.png",
  "/projects/cookflow.png",
  "/projects/pillpal.png",
  "/projects/churn-risk-detector.png",
  "/projects/imdb-sentiment.png",
  "/projects/portfolio.png",
  "/projects/litterbox.png",
  "/projects/huggle.png",
];

export const Preloader = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = imagesToPreload.length;
    let currentProgress = 0;

    const startTime = Date.now();
    const maxWaitTime = 5000; // max 5s fallback

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;

      // Enforce a minimum of 1.25s for the animation to look cinematic
      const timeProgress = Math.min(100, (elapsed / 1250) * 100);
      const realProgress = totalImages === 0 ? 100 : Math.round((loadedCount / totalImages) * 100);

      // We take the minimum of real progress or time progress
      // This way it won't finish until AT LEAST 1.25s has passed, AND all images are loaded
      // Actually we want targetProgress to be constrained by both:
      let targetProgress = Math.min(realProgress, timeProgress);

      if (elapsed > maxWaitTime) {
        targetProgress = 100;
      }

      // Smooth interpolation step (easing)
      currentProgress += (targetProgress - currentProgress) * 0.15;

      if (currentProgress > 99.5) {
        currentProgress = 100;
      }

      setProgress(Math.round(currentProgress));

      if (currentProgress >= 100) {
        setTimeout(() => {
          onLoaded();
        }, 400); // Linger just a moment at 100%
      } else {
        requestAnimationFrame(updateProgress);
      }
    };

    let rAF = requestAnimationFrame(updateProgress);

    if (totalImages > 0) {
      imagesToPreload.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => { loadedCount++; };
        img.onerror = () => { loadedCount++; };
      });
    }

    return () => cancelAnimationFrame(rAF);
  }, [onLoaded]);

  // SVG parameters
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-foreground">
      <div className="relative flex flex-col items-center justify-center h-full w-full">
        {/* Glow behind the loading UI */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse" />

        <div className="z-10 flex flex-col items-center gap-8">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Outer spinner ring */}
            <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r={radius}
                className="stroke-muted opacity-20"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r={radius}
                className="stroke-primary drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]"
                strokeWidth="3"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 0.1s ease-out" }}
              />
            </svg>
            {/* Percentage text */}
            <div className="absolute font-bold font-mono text-xl text-primary text-glow flex items-center justify-center bg-background/50 backdrop-blur-sm rounded-full w-20 h-20">
              {progress}%
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground animate-pulse">
              Initializing Portfolio
            </span>

            {/* Horizontal Progress Bar */}
            <div className="w-56 h-1 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary"
                style={{
                  width: `${progress}%`,
                  transition: "width 0.1s ease-out",
                  boxShadow: "0 0 10px var(--primary)"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
