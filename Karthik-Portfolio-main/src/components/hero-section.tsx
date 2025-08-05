import React, { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);

  const titles = ["Aspiring Software Developer, ", "MERN Stack Web Developer", "& AI/ML Enthusiast"];

  useEffect(() => {
    const statusInterval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 2000);

    const titleInterval = setInterval(() => {
      setTitleIndex(prev => (prev + 1) % titles.length);
    }, 2000);

    return () => {
      clearInterval(statusInterval);
      clearInterval(titleInterval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 sm:pt-0">
      {/* background blobs */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute inset-0 max-w-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      {/* content */}
      <div className="relative px-4 text-center mt-[5vh]">
        <div className="space-y-4">
          {/* top tag with flip */}
          <div className="inline-block" style={{ perspective: "1000px" }}>
            <div
              className="relative transition-transform duration-500"
              style={{
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateX(180deg)" : "rotateX(0deg)",
              }}
            >
              <div
                className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-gray-800/50 backdrop-blur-sm border border-white/10 text-gray-100"
                style={{ backfaceVisibility: "hidden" }}
              >
                <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                Seeking internships
              </div>
              <div
                className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-gray-800/50 backdrop-blur-sm border border-white/10 text-gray-100 absolute inset-0"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateX(180deg)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                & opportunities
              </div>
            </div>
          </div>

          {/* headline with rotating title */}
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 animate-fade-in-up">
          Hi, I'm Karthikeya Mvs
          <div className="block mt-2">
            <span className="relative inline-block h-[80px] sm:h-[88px] md:h-[96px] overflow-hidden text-primary align-middle">
              <div
                className="flex flex-col transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateY(-${titleIndex * 96}px)`, // match to md size
                }}
              >
                {titles.map((title, i) => (
                  <div key={i} className="h-[96px] flex items-center justify-center">
                    {title}
                  </div>
                ))}
              </div>
            </span>
          </div>
        </h1>


          {/* subheading */}
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Computer Science student specializing in Data Science with a focus on full-stack development and AI/ML. I enjoy building practical, user-focused applications and continuously exploring new technologies to grow as a developer.          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mt-16 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a href="mailto:petakarthikram@gmail.com">
              <Button size="lg" className="relative group px-8 overflow-hidden">
                {/* Glowing gradient effect */}
                <span className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-white to-purple-500 rounded-xl blur-lg opacity-60 group-hover:opacity-90 transition duration-1000 group-hover:duration-300 animate-pulse pointer-events-none"></span>

                {/* Visible content */}
                <span className="relative flex items-center text-black group-hover:text-white transition-colors">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="group px-8 border-white/20 text-white hover:bg-white/10"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
