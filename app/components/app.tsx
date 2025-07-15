import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Github, ExternalLink, Mail, Phone, ChevronDown, Code, Database, Settings } from 'lucide-react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      title: "Siento",
      description: "An AI-powered mood tracker that provides empathetic support",
      techStack: ["NodeJS", "Redis", "Express", "MongoDB", "Together-AI"],
      type: "Web App",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Up & Move",
      description: "A productivity-focused Chrome extension to help desk workers stay active by reminding them to stand, stretch, and move at customizable intervals.",
      techStack: ["JavaScript", "HTML/CSS", "Chrome APIs"],
      type: "Chrome Extension",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Files Manager",
      description: "Simple file manager featuring/built with authentication, NodeJS, MongoDB, Redis, pagination, and background processing.",
      techStack: ["NodeJS", "MongoDB", "Redis", "Express", "Bull"],
      type: "Web App",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Task Management API",
      description: "Explore a variety of jokes by type, save your favorites, and get a daily laugh with our fun and easy-to-use joke app.",
      techStack: ["Python", "FastAPI", "SQLAlchemy", "Pytest"],
      type: "API",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Simple Shell",
      description: "A lightweight command-line shell in C, replicating core Unix shell features such as executing commands, managing environment variables, and handling built-in functions",
      techStack: ["C language", "Shell", "Linux", "GCC"],
      type: "CLI Tool",
      image: "/api/placeholder/400/250"
    },
    {
      title: "AirBnB Clone",
      description: "Project attempts to clone the the AirBnB application and website, including the database, storage, RESTful API, Web Framework, and Front End.",
      techStack: ["Python", "Flask", "MySQL", "JavaScript", "CLI"],
      type: "Full Stack",
      image: "/api/placeholder/400/250"
    }
  ]

  const skills = {
    frontend: ["React", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "Vuetify", "Redux", "Sass"],
    backend: ["Python", "Flask", "Node.js", "Java", "Spring Boot", ".NET"],
    tools: ["PostgreSQL", "MongoDB", "VS Code", "PyCharm", "IntelliJ"]
  }

  const articles = [
    {
      title: "what happens when you type https://www.google.com in your browser and press Enter.",
      date: "Jul 21, 2024",
      readTime: "8 min read",
      description: "Have you ever wondered what's going on behind the scenes when you browse a URL on the internet?",
      tags: ["DNS", "Web Infrastructure Design", "HTTPS", "Web server"]
    },
    {
      title: "Postmortem: Load balance routing failure",
      date: "Aug 18, 2024",
      readTime: "3 min read",
      description: "The site became relatively slow and the load routing was pointing to only one web server which causes a single point of failure(SPOF) vulnerability.",
      tags: ["Postmortem Report", "Load Balancing"]
    },
    {
      title: "The Maze A 3D Game",
      date: "Sep 18, 2024",
      readTime: "3 min read",
      description: "This project is a labyrinth Game and it's adding an immersive experience by simulating real-world effects, like rain, to add a dynamic layer to the game.",
      tags: ["SDL2", "Raycasting", "C Language", "Game Development"]
    },
    {
      title: "Building ChatSpace: A Journey into Real-Time Communication",
      date: "Jan 15, 2025",
      readTime: "3 min read",
      description: "A step-by-step guide to implementing a seamless dark mode toggle using modern CSS techniques.",
      tags: ["MERN Stack Development", "Socket.io", "Web Development"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300 hover:text-emerald-600 dark:hover:text-emerald-400">
              Ahmed Muawia
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Blog', 'Resume'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 hover:scale-105 font-medium"
                  aria-label={`Navigate to ${item} section`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className={`lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-lg text-slate-600 dark:text-slate-400 mb-4 font-medium">
                  Hi, I'm
                </div>
                <h1 id="hero-heading" className="text-6xl lg:text-7xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">
                  Ahmed <span className="text-emerald-600 dark:text-emerald-400">Muawia</span>
                </h1>
                <div className="text-2xl lg:text-3xl text-slate-700 dark:text-slate-300 mb-8 font-light">
                  A <span className="font-semibold text-emerald-600 dark:text-emerald-400">Software Engineer</span> specializing in building exceptional PWAs and full-stack applications
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl">
                  Proficient in Python, JavaScript and TypeScript. Built projects in React, Next, Express, Flask. 
                  Passionate about creating scalable solutions and delivering outstanding user experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    aria-label="View my work and projects"
                  >
                    View My Work
                    <ChevronDown className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
                    aria-label="Get in touch with me"
                  >
                    Get In Touch
                    <Mail className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <div className={`lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden border-8 border-white dark:border-slate-700 shadow-2xl transition-transform duration-300 hover:scale-105">
                    <img 
                      src="/api/placeholder/400/400" 
                      alt="Ahmed Muawia - Software Engineer" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-emerald-600 text-white p-4 rounded-full shadow-lg animate-bounce" aria-hidden="true">
                    <Code className="h-8 w-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800" aria-labelledby="skills-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="skills-heading" className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    <Code className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <CardTitle className="text-2xl text-slate-800 dark:text-white">Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2" role="list" aria-label="Frontend technologies">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-emerald-100 hover:text-emerald-800 transition-colors duration-200" role="listitem">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    <Database className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl text-slate-800 dark:text-white">Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2" role="list" aria-label="Backend technologies">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200" role="listitem">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    <Settings className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-2xl text-slate-800 dark:text-white">DevOps & Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2" role="list" aria-label="DevOps and tools">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-purple-100 hover:text-purple-800 transition-colors duration-200" role="listitem">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="about-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="about-heading" className="text-4xl font-bold text-slate-800 dark:text-white mb-8">About Me</h2>
            <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed space-y-6">
              <p>
                I'm a passionate Software Engineer with expertise in building modern web applications and PWAs. 
                My journey in technology has led me to work with cutting-edge frameworks and tools, always striving 
                to create solutions that make a difference.
              </p>
              <p>
                When I'm not coding, you'll find me reading books, watching movies, and sacrificing pieces in chess! 
                I believe in continuous learning and staying updated with the latest trends in technology.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800" aria-labelledby="projects-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="projects-heading" className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16">Previous Work</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900 dark:to-blue-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-slate-700">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label={`Technologies used in ${project.title}`}>
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs" role="listitem">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge variant="outline" className="text-xs" role="listitem">
                          +{project.techStack.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 group-hover:border-emerald-600 group-hover:text-emerald-600 transition-colors duration-300" aria-label={`View source code for ${project.title}`}>
                        <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300" aria-label={`View live demo of ${project.title}`}>
                        <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                        Live
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="blog-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="blog-heading" className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16">Latest Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        <time dateTime={article.date}>{article.date}</time> · {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 leading-tight">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2" role="list" aria-label={`Tags for article: ${article.title}`}>
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs hover:bg-emerald-100 hover:text-emerald-800 transition-colors duration-200" role="listitem">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800" aria-labelledby="contact-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="contact-heading" className="text-4xl font-bold text-slate-800 dark:text-white mb-8">Reach Me Out</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                    <a href="mailto:amuawia666@gmail.com" className="hover:underline">amuawia666@gmail.com</a>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    <a href="tel:+201552077841" className="hover:underline">+20 1552077841</a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Social Profiles</h3>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="sm" className="hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300" aria-label="Visit my GitHub profile">
                    <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300" aria-label="Visit my LinkedIn profile">
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
            
            <Card className="max-w-2xl mx-auto shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 dark:text-white">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" aria-label="Contact form">
                  <div className="grid md:grid-cols-2 gap-4">
                    <label className="sr-only" htmlFor="name">Name</label>
                    <input 
                      id="name"
                      type="text" 
                      placeholder="Name" 
                      className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                      required
                    />
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input 
                      id="email"
                      type="email" 
                      placeholder="Email" 
                      className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                      required
                    />
                  </div>
                  <label className="sr-only" htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    placeholder="Message" 
                    rows="4" 
                    className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                    required
                  ></textarea>
                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg font-medium transition-all duration-300 hover:scale-105">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white" role="contentinfo">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Ahmed Muawia. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App