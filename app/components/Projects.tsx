import { ProjectCard, ProjectCardProps } from "./ProjectCard";

export const Projects = () => {
    const PROJECTS: ProjectCardProps[] = [
        {
      title: "Siento",
      description: "An AI-powered mood tracker that provides empathetic support",
      techStack: ["NodeJS", "Redis", "Express", "MongoDB", "Together-AI"],
      type: "Web App",
      image: "/Siento.png"
    },
    {
      title: "Up & Move",
      description: "A productivity-focused Chrome extension to help desk workers stay active by reminding them to stand, stretch, and move at customizable intervals.",
      techStack: ["JavaScript", "HTML/CSS", "Chrome APIs"],
      type: "Chrome Extension",
      image: "/up&move.png"
    },
    {
      title: "Files Manager",
      description: "Simple file manager featuring/built with authentication, NodeJS, MongoDB, Redis, pagination, and background processing.",
      techStack: ["NodeJS", "MongoDB", "Redis", "Express", "Bull"],
      type: "Web App",
      image: "/filemanager.png"
    },
    {
      title: "Task Management API",
      description: "Explore a variety of jokes by type, save your favorites, and get a daily laugh with our fun and easy-to-use joke app.",
      techStack: ["Python", "FastAPI", "SQLAlchemy", "Pytest"],
      type: "API",
      image: "/taskAPI.png"
    },
    {
      title: "Simple Shell",
      description: "A lightweight command-line shell in C, replicating core Unix shell features such as executing commands, managing environment variables, and handling built-in functions",
      techStack: ["C language", "Shell", "Linux", "GCC"],
      type: "CLI Tool",
      image: "/shell.gif"
    },
    {
      title: "AirBnB Clone",
      description: "Project attempts to clone the the AirBnB application and website, including the database, storage, RESTful API, Web Framework, and Front End.",
      techStack: ["Python", "Flask", "MySQL", "JavaScript", "CLI"],
      type: "Full Stack",
      image: "/airbnb_clone.png"
    }
    ];
    return (
        <section id="projects" className="w-full flex flex-col md:flex md:flex-row md:flex-wrap items-center mt-10 md:px-10 gap-y-5 font-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-6xl w-full text-center font-title">
          Previous Work
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
    );
}