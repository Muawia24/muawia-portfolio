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
//import { Introduction } from "./Introduction";

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

    const FRONTEND_ICONS: IconType[] = [
        FaReact,
        FaHtml5,
        FaCss3Alt,
        IoLogoJavascript,
        SiTypescript,
        RiTailwindCssFill,
        RiNextjsFill,
        FaVuejs,
        SiVuetify,
        SiRedux,
        FaSass,
    ];

    const BACKEND_ICONS: IconType[] = [
        FaPython,
        SiFlask,
        FaNodeJs,
        FaJava,
        SiSpringboot,
        AiOutlineDotNet,
    ];

    const DEVOPS_ICONS: IconType[] = [
        SiPostgresql,
        DiMongodb,
        VscVscode,
        SiPycharm,
        SiIntellijidea,
    ];

    // Special case for Unity which might not fit neatly into these categories
    const OTHER_ICONS: IconType[] = [
        FaUnity,
    ];

    const renderSkillSection = (title: string, icons: IconType[]) => (
        <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 text-center">{title}</h3>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-4">
                {icons.map((Icon, index) => (
                    <Icon 
                        key={index} 
                        className="w-10 h-10 md:w-12 md:h-12 p-0 opacity-50 hover:opacity-90 transition-all duration-400" 
                    />
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
                {renderSkillSection("Frontend", FRONTEND_ICONS)}
                {renderSkillSection("Backend", BACKEND_ICONS)}
                {renderSkillSection("DevOps & Tools", DEVOPS_ICONS)}
                {OTHER_ICONS.length > 0 && renderSkillSection("Other", OTHER_ICONS)}
            </div>
            
        </div>
    );
}