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
import { Button } from './Button';
import { Github, ExternalLink, Mail, Phone, ChevronDown, Code, Database, Settings } from 'lucide-react'

export const Herosection = () => {
    const [isVisible, setIsVisible] = useState(false)
    
    useEffect(() => {
        setIsVisible(true)
      }, [])
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
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" aria-labelledby="hero-heading">
                      <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                          <div className={`lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="text-lg text-slate-600 dark:text-slate-400 mb-4 font-medium">
                              Hi, I'm
                            </div>
                            <h1 id="hero-heading" className="text-6xl lg:text-7xl font-bold text-slate-800 dark:text-white mb-6 leading-tight font-title">
                              Ahmed <span className="text-emerald-600 dark:text-emerald-400 font-title">Muawia</span>
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
                                  src="/DSC_4379.JPG" 
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