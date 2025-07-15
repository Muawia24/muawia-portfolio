"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
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

export interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  type: string;
  image: string;
  codeUrl?: string;
  demoUrl?: string;
}

export const ProjectCard = ({ project }: { project: ProjectCardProps }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div ref={ref} className={`transition-all duration-300 ${inView ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
      <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden h-full flex flex-col">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-white/90 text-slate-700 dark:bg-slate-900/90 dark:text-slate-300">
              {project.type}
            </Badge>
          </div>
        </div>
        
        <div className="flex-grow flex flex-col">
          <CardHeader>
            <CardTitle className="text-xl text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
              {project.title}
            </CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="flex-grow flex flex-col justify-end">
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
              {project.codeUrl && (
                <Button 
                  asChild
                  size="sm" 
                  variant="outline" 
                  className="flex-1 group-hover:border-emerald-600 group-hover:text-emerald-600 transition-colors duration-300"
                >
                  <a href={project.codeUrl} aria-label={`View source code for ${project.title}`}>
                    <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                    Code
                  </a>
                </Button>
              )}

              {project.demoUrl && (
                <Button 
                  asChild
                  size="sm" 
                  className="flex-1 bg-[#5B7355] hover:bg-emerald-600 text-amber-100 transition-colors duration-300"
                >
                  <a href={project.demoUrl} aria-label={`View live demo of ${project.title}`}>
                    <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                    Demo
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};