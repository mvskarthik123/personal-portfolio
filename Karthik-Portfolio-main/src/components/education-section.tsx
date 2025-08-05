import React from "react"
import { GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

export function EducationSection() {
  return (
    <section
      id="education"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-background/50"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 mix-blend-normal" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(0,0,0,0),rgba(0,0,0,0.8))]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <motion.span
              className="text-primary text-sm font-medium mb-3 block tracking-wider uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              My Academic Journey
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 mb-6">
              Education
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Here’s a quick look at my educational background and the institutions that shaped my learning.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-black/20 backdrop-blur-sm rounded-3xl border border-white/10 p-8 hover:border-primary/30 transition-all duration-500">
              <div className="space-y-8">
                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 text-gray-300 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">B.Tech in CSE - Data Science</p>
                    <p className="text-sm text-gray-400">B.V. Raju Institute of Technology, Narsapur</p>
                    <p className="text-sm text-gray-400">2022 – Present</p>
                    <p className="text-sm text-gray-400">CGPA - 8.3</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 text-gray-300 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Intermediate (MPC)</p>
                    <p className="text-sm text-gray-400">Narayana Junior College, Jalvayuvihar</p>
                    <p className="text-sm text-gray-400">2020 – 2022</p>
                    <p className="text-sm text-gray-400">Percentage - 97.2</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 text-gray-300 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">SSC</p>
                    <p className="text-sm text-gray-400">Narayana High School, Kukatpally</p>
                    <p className="text-sm text-gray-400">2019 – 2020</p>
                    <p className="text-sm text-gray-400">CGPA - 10</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}