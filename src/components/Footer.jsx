import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative mt-12 pt-8 pb-8 px-4 border-t border-border bg-background/70 backdrop-blur-md shadow-lg flex flex-col items-center justify-center z-30">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} rei-naissance.co. All rights reserved.
        </p>
        <a
          href="#hero"
          className="p-3 rounded-full bg-primary/10 hover:bg-primary/30 text-primary transition-colors shadow-[0_0_10px_hsl(var(--primary))] hover:shadow-[0_0_20px_hsl(var(--primary))] focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </a>
      </div>
    </footer>
  );
};