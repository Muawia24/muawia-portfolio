"use client";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { AiOutlineDotNet } from "react-icons/ai";
import { DiMongodb } from "react-icons/di";
import { FaCss3Alt, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact, FaSass, FaVuejs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiFlask, SiTypescript, SiPostgresql, SiRedux, SiIntellijidea, SiPycharm, SiSpringboot, SiVuetify } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";
import { Introduction } from "./Introduction";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './Card';
import { Badge } from './Badg';
import { Github, ExternalLink, Mail, Phone, ChevronDown, Code, Database, Settings } from 'lucide-react'

export const Herosection = () => {
    const { ref, inView } = useInView();
    const [textIndex, setTextIndex] = useState<number>(0);
    const SKILLS = [
        <span key="pwa" className="w-56 animate__animated animate__fadeInDown">PWAs</span>,
        <span key="webapps" className="w-56 animate__animated animate__fadeInUp">web apps</span>,
        <span key="apis" className="w-56 animate__animated animate__fadeInDown">RESTful APIs</span>,
        <span key="anything" className="w-56 animate__animated animate__fadeInUp">anything you want!!!</span>,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex(prevIndex => (prevIndex + 1) % SKILLS.length)
        }, 3000);
        return () => clearInterval(interval)
    }, [SKILLS.length])

    const skills = {
    frontend: ["React", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "Vuetify", "Redux", "Sass"],
    backend: ["Python", "Flask", "Node.js", "Java", "Spring Boot", ".NET"],
    tools: ["PostgreSQL", "MongoDB", "VS Code", "PyCharm", "IntelliJ"]
  }


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
                    <div className="animate__animated animate__fadeInDown">Hi, I&apos;m <br /> <span className="text-start text-4xl md:text-6xl font-title">Ahmed Muawia</span> </div>
                    <div className="text-2xl ml-24 md:m-0 flex gap-x-1 font-display">
                        <div className="">I build {SKILLS[textIndex]} </div>
                    </div>
                </div>
            </div>

            {/* <div className="hidden md:flex w-96 h-96 absolute bg-red-100 right-32 top-72"></div> */}

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800" aria-labelledby="skills-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="skills-heading" className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16 font-title">
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
            <Introduction />
        </div>
    );
}