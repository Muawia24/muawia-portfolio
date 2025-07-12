"use client";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { AiOutlineDotNet } from "react-icons/ai";
import { DiMongodb } from "react-icons/di";
import { FaCss3Alt, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact, FaSass, FaUnity, FaVuejs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiFlask, SiTypescript, SiPostgresql, SiRedux, SiIntellijidea, SiPycharm, SiSpringboot, SiVuetify } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";
import { Introduction } from "./Introduction";

export const Herosection = () => {
    const { ref, inView } = useInView();
    const [textIndex, setTextIndex] = useState<number>(0);
    const SKILLS = [
        <span className="w-56 animate__animated animate__fadeInDown">PWAs</span>,
        <span className="w-56 animate__animated animate__fadeInUp">web apps</span>,
        <span className="w-56 animate__animated animate__fadeInDown">RESTful APIs</span>,
        <span className="w-56 animate__animated animate__fadeInUp">anything you want!!!</span>,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex(prevIndex => (prevIndex + 1) % SKILLS.length)
        }, 3000);
        return () => clearInterval(interval)
    }, [SKILLS.length])

    const FRONTEND_SKILLS = [
        { icon: FaReact, name: "React" },
        { icon: FaHtml5, name: "HTML5" },
        { icon: FaCss3Alt, name: "CSS3" },
        { icon: IoLogoJavascript, name: "JavaScript" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: RiTailwindCssFill, name: "Tailwind CSS" },
        { icon: RiNextjsFill, name: "Next.js" },
        { icon: FaVuejs, name: "Vue.js" },
        { icon: SiVuetify, name: "Vuetify" },
        { icon: SiRedux, name: "Redux" },
        { icon: FaSass, name: "Sass" },
    ];

    const BACKEND_SKILLS = [
        { icon: FaPython, name: "Python" },
        { icon: SiFlask, name: "Flask" },
        { icon: FaNodeJs, name: "Node.js" },
        { icon: FaJava, name: "Java" },
        { icon: SiSpringboot, name: "Spring Boot" },
        { icon: AiOutlineDotNet, name: ".NET" },
    ];

    const DEVOPS_SKILLS = [
        { icon: SiPostgresql, name: "PostgreSQL" },
        { icon: DiMongodb, name: "MongoDB" },
        { icon: VscVscode, name: "VS Code" },
        { icon: SiPycharm, name: "PyCharm" },
        { icon: SiIntellijidea, name: "IntelliJ" },
    ];


    const renderSkillSection = (title: string, skills: { icon: IconType, name: string }[]) => (
        <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4 text-center border-b pb-2 font-title">{title}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <skill.icon 
                            className="w-10 h-10 md:w-12 md:h-12 p-0 opacity-50 hover:opacity-90 transition-all duration-400" 
                        />
                        <span className="text-xs mt-2 text-center">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );


    return (
        <div className={`flex flex-col items-center font-secondary`}>
            <div ref={ref} className={`w-full flex flex-col md:flex-row items-center md:p-20 gap-x-16 ${inView ? 'animate__animated animate__fadeIn' : ''}`}>
                <Image 
                src="/DSC_4379.JPG" 
                alt="Portrait of Ahmed Muawia" 
                width={320} 
                height={320} 
                className="w-44 md:w-80 h-44 md:h-80 my-10 rounded-full object-cover"
                priority
                />
                <div className="flex flex-col items-center md:items-start md:gap-y-2">
                    <div className="animate__animated animate__fadeInDown">Hi, I'm <br /> <span className="text-start text-4xl md:text-6xl font-title">Ahmed Muawia</span> </div>
                    <div className="text-2xl ml-24 md:m-0 flex gap-x-1 font-display">
                        <div className="">I build {SKILLS[textIndex]} </div>
                    </div>
                </div>
            </div>

            {/* <div className="hidden md:flex w-96 h-96 absolute bg-red-100 right-32 top-72"></div> */}

            <div className="w-4/5 my-10 md:mt-0 md:w-2/3 lg:w-1/2 p-5">
                {renderSkillSection("Frontend", FRONTEND_SKILLS)}
                {renderSkillSection("Backend", BACKEND_SKILLS)}
                {renderSkillSection("DevOps & Tools", DEVOPS_SKILLS)}
            </div>
            <Introduction />
        </div>
    );
}