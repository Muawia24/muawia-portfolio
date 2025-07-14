"use client";
import { GitHubLogoIcon, Link1Icon } from "@radix-ui/react-icons";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Image from "next/image";

export interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  readTime: string;
  link: string;
  external: boolean;
}

export const BlogCard = ({ blog }: { blog: BlogCardProps }) => {
  const [showMore, setShowMore] = useState(false);
  const { ref, inView } = useInView();

  const Icon = () => {
    return (
      <div 
        className="w-5 h-5 hover:cursor-pointer hover:opacity-50" 
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? <FaAngleUp /> : <FaAngleDown />}
      </div>
    );
  };

  return (
    <div 
      ref={ref} 
      className={`w-96 md:w-[500px] ${showMore ? 'h-fit' : 'h-96'} md:h-[550px] flex flex-col justify-between items-center md:mx-auto p-5 ${
        inView ? 'animate__animated animate__fadeIn' : ''
      }`}
    >
      <div className="relative w-full">
        <Image 
          src={blog.image} 
          alt={blog.title}
           width={800}
           height={450}
          className="w-full h-48 object-cover rounded-t-lg" 
        />
        <div className="absolute bottom-2 left-2 bg-white/80 dark:bg-gray-800/80 px-2 py-1 rounded text-sm">
          {blog.date} · {blog.readTime}
        </div>
      </div>
      
      <div className="text-center text-2xl font-title mt-2">{blog.title}</div>
      
      <div className="flex gap-2 w-full">
        <div className={`w-[90%] text-lg ${showMore ? 'h-fit' : 'h-12 overflow-hidden'}`}>
          {blog.description}
        </div>
        <Icon />
      </div>
      
      <div className={`w-full ${showMore ? 'h-fit' : 'h-10 overflow-hidden'} flex flex-wrap gap-2`}>
        {blog.tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="w-32 h-8 min-h-8 rounded-md bg-[#5B7355] text-white flex justify-center hover:opacity-80 hover:cursor-pointer transition-all duration-300">
        <a 
          href={blog.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full"
        >
          {blog.external ? (
            <Link1Icon className="w-5 h-5" />
          ) : (
            <GitHubLogoIcon className="w-5 h-5" />
          )}
          <span className="text-sm font-title">Read More</span>
        </a>
      </div>
    </div>
  );
};

export const Blog = () => {
  const BLOGS: BlogCardProps[] = [
    {
      title: "what happens when you type https://www.google.com in your browser and press Enter.",
      description: "Have you ever wondered what’s going on behind the scenes when you browse a URL on the internet?",
      image: "/How-Load-Balancer-works.jpg",
      tags: ["DNS", "Web Infrastructure Design", "HTTPS", "Web server"],
      date: "Jul 21, 2024",
      readTime: "8 min read",
      link: "https://medium.com/@ahmed-muawia/what-happens-when-you-type-https-www-google-com-in-your-browser-and-press-enter-65c1226c8254",
      external: true,
    },
    {
      title: "Postmortem: Load balance routing failure",
      description: "The site became relatively slow and the load routing was pointing to only one web server which causes a single point of failure(SPOF) vulnerability.",
      image: "/loadbalancer.png",
      tags: ["Postmortem Report", "Load Balancing"],
      date: "Aug 18, 2024",
      readTime: "3 min read",
      link: "https://medium.com/@ahmed-muawia/postmortem-report-load-balance-routing-failure-939a4c059474",
      external: false,
    },
    {
      title: "The Maze A 3D Game",
      description: "This project is a labyrinth Game and it’s adding an immersive experience by simulating real-world effects, like rain, to add a dynamic layer to the game.",
      image: "/the-maze.png",
      tags: ["Sdl2", "Raycasting", "C Language", "Game Development"],
      date: "Sep 18, 2024",
      readTime: "3 min read",
      link: "https://medium.com/@ahmed-muawia/the-maze-a-3d-game-d266fd4a844b",
      external: true,
    },
    {
      title: "Building ChatSpace: A Journey into Real-Time Communication",
      description: "A step-by-step guide to implementing a seamless dark mode toggle using modern CSS techniques.",
      image: "/Screenshot 2024-12-12 204752.png",
      tags: ["MERN Stack Development", "Socketio", "Web Development"],
      date: "Jan 15, 2025",
      readTime: "3 min read",
      link: "https://medium.com/@ahmed-muawia/building-chatspace-a-journey-into-real-time-communication-014cc49ed617",
      external: false,
    },
  ];

  return (
    <div id="blog" className="w-full flex flex-col md:flex md:flex-row md:flex-wrap items-center mt-10 md:px-10 gap-y-5 font-secondary">
      <div className="text-3xl md:text-6xl w-full text-center font-title mb-10">Latest Articles</div>
      {BLOGS.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
  );
};