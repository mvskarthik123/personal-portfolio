import React from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <section
      id="contact"
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
              A Small message from
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 mb-6">
              Karthikeya Mvs
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Thank you for taking the time to explore my portfolio! I'd be happy to connect if you have a hiring opportunity to discuss or an exciting collaboration in mind.
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
              <div className="mb-8">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 mb-2">
                  Let's connect
                </h3>
                <p className="text-gray-400 text-sm">
                  Reach out through any of these channels
                </p>
              </div>

              <div className="space-y-12">
                <a
                  href="tel:+917416746326"
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 text-gray-300 hover:text-primary transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h1.586a1 1 0 01.707.293l2.121 2.121a1 1 0 01.293.707V8.5a1 1 0 01-.293.707L7 11.121a16.978 16.978 0 007.879 7.879l1.914-1.914a1 1 0 01.707-.293h2.379a1 1 0 01.707.293l2.121 2.121a1 1 0 01.293.707V21a2 2 0 01-2 2h-1C10.745 23 1 13.255 1 3v-1a2 2 0 012-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-gray-400">+91 7416746326</p>
                  </div>
                </a>

                <a
                  href="mailto:mvskarthikeya101@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 text-gray-300 hover:text-primary transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-400">mvskarthikeya101@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/karthikeya-mvs-64357a259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 text-gray-300 hover:text-primary transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-gray-400">Professional profile</p>
                  </div>
                </a>

                <a
                  href="https://github.com/mvskarthik123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 text-gray-300 hover:text-primary transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-gray-400">View my code</p>
                  </div>
                </a>
              </div>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
