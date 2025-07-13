"use client";
import { GitHubLogoIcon, Link1Icon } from "@radix-ui/react-icons"
import { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export interface ProjectCardProps {
    title: string,
    projectDesc: string,
    projectImage: string,
    tech_stack: string[],
    product: string,
    demo_link: string,
    github: boolean,
    inProgress: boolean,
}
export const ProjectCard = ({ project }: { project: ProjectCardProps }) => {
    const [showMore, setShowMore] = useState(false);
    const { ref, inView } = useInView();

    const Icon = () => {
        return (
            <div className="w-5 h-5 hover:cursor-pointer hover:opacity-50" onClick={_ => setShowMore(!showMore)}>
                {showMore ? <FaAngleUp /> : <FaAngleDown />}
            </div>
        );
    }


    return (
        <div ref={ref} className={`w-96 md:w-[500px] h-96 ${showMore ? 'h-fit' : ''} md:h-[550px] flex flex-col justify-between items-center md:mx-auto p-5 ${inView ? 'animate__animated animate__fadeIn' : ''}`}>
            <div className="relative">
                <img src={project.projectImage} alt="ecommerce_image" className="w-full" />
                {project.inProgress && <div className="w-auto h-min absolute p-1 rounded left-1 bottom-1 text-white bg-[hsl(108,15%,50%)] text-sm">In progress</div>}
            </div>
            <div className="text-center text-2xl">{project.title}</div>
            <div className="flex gap-2">
                <div className={`w-[90%] h-12 overflow-clip md:text-lg ${showMore ? 'h-fit' : 'overflow-hidden'}`}>{project.projectDesc}</div>
                <Icon />
            </div>
            <div className={`w-full h-10 md:text-lg ${showMore ? 'h-fit' : 'overflow-clip'} overflow-y-hidden flex flex-wrap text-start gap-x-1`}>
                <div className="font-semibold mr-2">Tech Stack: </div>
                {project.tech_stack.map((stack, index) =>
                    <div key={index}>{stack}{index === project.tech_stack.length - 1 ? '.' : ','} </div>
                )}
            </div>
            <div className="w-32 h-8 min-h-8 rounded-md bg-[#5B7355] text-white flex justify-center hover:opacity-80 hover:cursor-pointer transition-all duration-300">
                <div className="flex items-center justify-center gap-2">
                    {project.github ? (
                        <a href={project.demo_link} target="_blank" className="flex items-center justify-center gap-2">
                            <GitHubLogoIcon className="w-6 h-6"></GitHubLogoIcon>
                            <div className="text-sm font-title">{project.product}</div>
                        </a>
                    ) : (
                        <a href={project.demo_link} target="_blank" className="flex items-center justify-center gap-2">
                            <Link1Icon className="w-6 h-6"></Link1Icon>
                            <div className="text-sm font-title">{project.product}</div>
                        </a>
                    )}
                </div>

            </div>
        </div >
    )
}