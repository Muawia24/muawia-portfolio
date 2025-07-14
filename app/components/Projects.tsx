import { ProjectCard, ProjectCardProps } from "./ProjectCard";

export const Projects = () => {
    const PROJECTS: ProjectCardProps[] = [
        {
            title: "Siento",
            projectDesc: "An AI-powered mood tracker that provides empathetic support",
            projectImage: "/Siento.png",
            tech_stack: ["NodeJS", "Redis", "Express", "MongoDB", "Togther-AI"],
            product: "Web App",
            demo_link: "https://github.com/Muawia24/Siento",
            github: true,
            inProgress: false,
        },
        {
            title: "Up & Move",
            projectDesc: "a productivity-focused Chrome extension to help desk workers stay active by reminding them to stand, stretch, and move at customizable intervals.",
            projectImage: "/up&move.png",
            tech_stack: ["JavaScript", "HTML/CSS", "Chrome APIs"],
            product: "Chrome extension",
            demo_link: "https://chromewebstore.google.com/detail/up-move/cbcmbalekhdklemnhmopihdeombpdmeh?hl=en-US&utm_source=ext_sidebar",
            github: false,
            inProgress: false,
        },
        {
            title: "Files Manager",
            projectDesc: "Simple file manager featuring/built with authentication, NodeJS, MongoDB, Redis, pagination, and background processing.",
            projectImage: "/filemanager.png",
            tech_stack: ["NodeJS", "MongoDB", "Redis", "Express", "Bull"],
            product: "Web App",
            demo_link: "https://github.com/Muawia24/alx-files_manager",
            github: false,
            inProgress: true,
        },
        {
            title: "Task Management API",
            projectDesc: "Explore a variety of jokes by type, save your favorites, and get a daily laugh with our fun and easy-to-use joke app.",
            projectImage: "/taskAPI.png",
            tech_stack: ["Python", "FastAPI", "sqlalchemy", "Pytest"],
            product: "GitHub",
            demo_link: "https://github.com/Muawia24/Task-Management-API",
            github: true,
            inProgress: false,
        },
        {
            title: "Simple Shell",
            projectDesc: "A lightweight command-line shell in C, replicating core Unix shell features such as executing commands, managing environment variables, and handling built-in functions",
            projectImage: "/shell.gif",
            tech_stack: ["C language", "Shell", "Linux", "GCC"],
            product: "GitHub",
            demo_link: "https://github.com/Muawia24/simple_shell",
            github: true,
            inProgress: false,
        },
        {
            title: "AirBnB Clone",
            projectDesc: "Project attempts to clone the the AirBnB application and website, including the database, storage, RESTful API, Web Framework, and Front End.",
            projectImage: "/airbnb_clone.png",
            tech_stack: ["Python", "Flask", "Mysql", "javascript", "CLI"],
            product: "Web App",
            demo_link: "https://github.com/Muawia24/AirBnB_clone_v3",
            github: false,
            inProgress: false,
        },
    ];
    return (
        <div id="projects" className="w-full flex flex-col md:flex md:flex-row md:flex-wrap items-center mt-10 md:px-10 gap-y-5 font-secondary">
            <div className="text-3xl md:text-6xl w-full text-center font-title">Previous Work</div>
            {PROJECTS.map((project, index) => <ProjectCard key={index} project={project} />)}
        </div>
    );
}