import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Play, GripVertical } from "lucide-react"
import { Button } from "./ui/button"
import { projects } from "../config/projects"

// Helper function to get hostname safely
const getHostname = (url: string) => {
  try {
    return new URL(url).hostname
  } catch (e) {
    return url
  }
}

export function ProjectsSection() {
  const [orderedProjects, setOrderedProjects] = useState(projects)
  const [loadedIframes, setLoadedIframes] = useState<Record<string, boolean>>({})
  const [isClient, setIsClient] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // State for orb positions
  const [orbPositions] = useState(() => 
    Array(3).fill(0).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100
    }))
  )

  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-background/50">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 mix-blend-normal" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(0,0,0,0),rgba(0,0,0,0.8))]" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {orbPositions.map((pos, i) => (
          <div
            key={i}
            className="absolute w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"
            style={{
              top: `${pos.top}%`,
              left: `${pos.left}%`,
              animation: `float ${10 + i * 2}s infinite ease-in-out`
            }}
          />
        ))}
      </div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mb-20 text-center"
          >
            <motion.span 
              className="text-primary text-sm font-medium mb-3 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Featured Projects
            </motion.span>
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
              My Recent Work
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40 rounded-full" />
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-32 w-full">
            {orderedProjects.map((project, index) => (
              <div key={project.id} className="relative">
                <div className="relative group">
                  {/* Drag Handle - Desktop Only */}
                  {!isMobile && (
                    <div className="absolute -left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-2 rounded-lg bg-white/5 backdrop-blur-sm">
                        <GripVertical className="w-4 h-4 text-white/50" />
                      </div>
                    </div>
                  )}

                  {/* Curved Path - Desktop Only */}
                  {!isMobile && (
                    <div className="absolute left-0 right-0 top-0 bottom-0 hidden lg:block pointer-events-none">
                      <svg
                        className="absolute inset-0 w-full h-full"
                        preserveAspectRatio="none"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d={index % 2 === 0 
                            ? "M50,0 Q65,50 50,100" 
                            : "M50,0 Q35,50 50,100"
                          }
                          className="stroke-2 opacity-50"
                          stroke={`hsl(${45 + index * 120}, 70%, 50%)`}
                          strokeWidth="0.5"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className={`absolute top-1/2 ${index % 2 === 0 ? "right-1/2" : "left-1/2"} -translate-y-1/2 ${index % 2 === 0 ? "translate-x-1/2" : "-translate-x-1/2"}`}
                      >
                        <div className="relative">
                          <div className={`absolute h-6 w-6 -left-3 -top-3 rounded-full blur-[10px] bg-gradient-to-r ${project.color}`} />
                          <div
                            className={`h-5 w-5 rounded-full relative bg-gradient-to-r ${project.color}`}
                            style={{
                              boxShadow: "0 0 20px var(--primary), 0 0 40px var(--primary-light)"
                            }}
                          />
                        </div>
                      </motion.div>
                    </div>
                  )}

                  <div className={`grid grid-cols-1 ${!isMobile ? 'lg:grid-cols-2' : ''} gap-12 items-center`}>
                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className={`${!isMobile && index % 2 === 1 ? "lg:order-2" : ""}`}
                    >
                      <div className="group bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                        <div className="text-xl font-medium mb-4 bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text transform transition-transform duration-500 group-hover:scale-105">
                          {project.subtitle}
                        </div>
                        <h3 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 transform transition-transform duration-500 group-hover:translate-x-2">
                          {project.title}
                        </h3>

                        {/* Mobile Video Preview */}
                        {isMobile && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="relative aspect-video rounded-xl overflow-hidden border border-white/20 mb-6"
                          >
                            <img
                              src={project.preview || "https://i.postimg.cc/tJqpMKdj/Screenshot-2025-06-21-171112.png"}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        )}


                        <p className="text-gray-400 text-lg mb-6 transition-colors duration-500 group-hover:text-gray-300">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-8">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 transition-all duration-300 hover:scale-110 hover:border-primary/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-4">
                          {project.links.website && (
                            <a
                              href={project.links.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
                            >
                              <ExternalLink className="w-5 h-5" />
                              <span className="text-lg">Website</span>
                            </a>
                          )}
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-lg"
                            >
                              <Github className="w-5 h-5" />
                              GitHub
                            </a>
                          )}
                          {project.links.video && (
                            <a
                              href={project.links.video}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-lg"
                            >
                              <Play className="w-5 h-5" />
                              Watch Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>

                    {/* Interactive Preview - Desktop Only */}
                    {!isMobile && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
                        className={`relative aspect-video rounded-2xl overflow-hidden border border-white/10 group ${index % 2 === 1 ? "lg:order-1" : ""}`}
                      >
                        {/* Browser Window Controls */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-[#2D2D2D] backdrop-blur-sm z-20 flex items-center px-3 gap-2 border-b border-white/10">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                          </div>
                          <div className="flex-1 flex items-center justify-center px-4">
                            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#1F1F1F] border border-white/10 max-w-[240px] w-full">
                              {isClient && (
                                <>
                                  <div className="w-3 h-3 rounded-full bg-green-500" />
                                  <span className="text-xs text-white/60 font-medium truncate">
                                    {getHostname(project.preview)}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Preview Container */}
                        <div className="relative w-full h-full pt-8">
                          <div className="relative w-full h-full overflow-hidden bg-white">
                            <img
                              src= {project.preview}
                              alt={project.title}
                              className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-20px) }
        }
      `}</style>
    </section>
  )
}