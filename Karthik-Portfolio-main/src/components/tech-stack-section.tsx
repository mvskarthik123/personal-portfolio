import React from "react"
import { motion } from "framer-motion"

const techStack = [
  {
    name: "Java",
    category: "Programming Languages",
    color: "text-orange-500",
    link: "https://www.oracle.com/java/",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Python",
    category: "Programming Languages",
    color: "text-blue-500",
    link: "https://www.python.org/",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "JavaScript",
    category: "Programming Languages",
    color: "text-yellow-500",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "C",
    category: "Programming Languages",
    color: "text-blue-700",
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },

  {
    name: "MySQL",
    category: "Databases",
    color: "text-blue-600",
    link: "https://www.mysql.com/",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    category: "Databases",
    color: "text-green-600",
    link: "https://www.mongodb.com/",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  {
    name: "HTML",
    category: "Web Development",
    color: "text-orange-400",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    category: "Web Development",
    color: "text-blue-500",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "React JS",
    category: "Web Development",
    color: "text-cyan-500",
    link: "https://reactjs.org/",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node JS",
    category: "Web Development",
    color: "text-green-500",
    link: "https://nodejs.org/",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express JS",
    category: "Web Development",
    color: "text-gray-400",
    link: "https://expressjs.com/",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "PHP",
    category: "Web Development",
    color: "text-purple-600",
    link: "https://www.php.net/",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Bootstrap",
    category: "Web Development",
    color: "text-purple-500",
    link: "https://getbootstrap.com/",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  },
  {
    name: "Tailwind",
    category: "Web Development",
    color: "text-teal-400",
    link: "https://tailwindcss.com/",
    iconUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },

  {
    name: "Git",
    category: "Developer Tools",
    color: "text-red-500",
    link: "https://git-scm.com/",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "VS Code",
    category: "Developer Tools",
    color: "text-blue-700",
    link: "https://code.visualstudio.com/",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Jupyter Notebook",
    category: "Developer Tools",
    color: "text-orange-400",
    link: "https://jupyter.org/",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
  },
  {
    name: "Postman",
    category: "Developer Tools",
    color: "text-orange-600",
    link: "https://www.postman.com/",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
]

const floatingAnimation = {
  initial: { opacity: 0, y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export function TechStackSection() {
  return (
    <section
      id="techstack"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-background/50"
    >
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
            <span className="text-primary text-sm font-medium mb-2 block">
              My Tech Stack
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Technologies I Work With
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40 rounded-full" />
            </div>
          </motion.div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.a
                key={tech.name}
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                {...floatingAnimation}
                className="group relative flex flex-col items-center cursor-pointer"
                aria-label={`${tech.name} official website`}
              >
                <div className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all duration-300">
                  <img
                    src={tech.iconUrl}
                    alt={`${tech.name} icon`}
                    className={`w-16 h-16 object-contain ${
                      (tech.name === "Bootstrap" || tech.name === "Express JS") && "filter invert brightness-150"
                    }`}
                  />
                </div>
                <span className="mt-3 text-sm font-medium text-white/70 group-hover:text-primary transition">
                  {tech.name}
                </span>
              </motion.a>
            ))}
          </div>
          {/* Languages Known Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-20 w-full flex flex-col items-center"
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary">Languages I Know</h3>
            <div className="flex flex-wrap gap-6 justify-center">
              <span className="px-6 py-2 rounded-full bg-white/10 text-white/80 text-lg font-medium border border-white/10">
                English
              </span>
              <span className="px-6 py-2 rounded-full bg-white/10 text-white/80 text-lg font-medium border border-white/10">
                Hindi
              </span>
              <span className="px-6 py-2 rounded-full bg-white/10 text-white/80 text-lg font-medium border border-white/10">
                Telugu
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
