"use client";
import { GitHubLogoIcon, Link1Icon } from "@radix-ui/react-icons";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from './Card';
import { Badge } from "./Badg";
import { Github, ExternalLink } from 'lucide-react';
import { Button } from './Button';
import Image from "next/image";
import Link from "next/link";

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
      className={`w-full md:w-[500px] transition-all duration-300 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <Link
      href={blog.link}
      className="block group"
      aria-label={`Read Article: ${blog.title}`}
      {...(blog.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
          <CardHeader>
            <div className="flex justify-between items-start mb-2">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                <time dateTime={blog.date}>{blog.date}</time> · {blog.readTime}
              </div>
            </div>
            <CardTitle className="text-xl text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 leading-tight">
                {blog.title}
            </CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {blog.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2" role="list" aria-label={`Tags for blog: ${blog.title}`}>
              {blog.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs hover:bg-emerald-100 hover:text-emerald-800 transition-colors duration-200" role="listitem">
                {tag}
              </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export const Blog = () => {
  const BLOGS: BlogCardProps[] = [
    {
      title: "what happens when you type https://www.google.com in your browser.",
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
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="blog-heading">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl w-full text-center mb-16 font-title">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {BLOGS.map((blog, index) => (
            <BlogCard key={`${blog.title}-${index}`} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};