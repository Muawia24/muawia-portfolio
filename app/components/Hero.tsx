"use client";
import { useEffect, useState } from "react";
import { Introduction } from "./Introduction";
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import { Badge } from './Badg';
import { Button } from './Button';
import { Github, Mail, ChevronDown, Code, Database, Settings } from 'lucide-react'
import Link from 'next/link';

export const Herosection = () => {
    const [isVisible, setIsVisible] = useState(false)
    
    useEffect(() => {
        setIsVisible(true)
      }, [])
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
    frontend: ["JavaScript", "React", "HTML5", "CSS3",  "TypeScript", "Tailwind CSS", "Next.js"],
    backend: ["RESTful", "Flask", "Node.js", "FastAPI", "MongoDB", "mySQL","Redis", "Bull", "JavaScript", "Python", "JWT"],
    tools: ["CI/CD", "Docker", "Linux", "Git", "Bash Scripting"]
  }


    return (
        <div className={`flex flex-col items-center font-secondary`}>
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" aria-labelledby="hero-heading">
                      <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className={`lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="relative">
                              <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden  dark:border-slate-700 shadow-2xl transition-transform duration-300 hover:scale-105">
                                <img 
                                  src="/DSC_4379.JPG" 
                                  alt="Ahmed Muawia - Software Engineer" 
                                  className="w-full h-full object-cover"
                                  loading="lazy"
                                />
                              </div>
                              
                            </div>
                          </div>
                          <div className={`lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="animate__animated animate__fadeInDown">
                              Hi, I'm
                            </div>
                            <h1 id="hero-heading" className="text-start text-4xl md:text-6xl font-title">
                              Ahmed Muawia
                            </h1>
                            <div className="text-2xl lg:text-3xl text-slate-700 dark:text-slate-300 mb-8 font-light">
                              A <span className="font-semibold text-black-800 dark:text-emerald-700">Software Engineer</span> specializing in building solid RESTful APIs and full-stack applications
                            </div>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl">
                              Proficient in Python, JavaScript and C Language. Built projects in Node, Flask, FastAPI, Express, React, Next. 
                              Passionate about solving real world problems with AI-Powered solutions and delivering outstanding user experiences.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="#projects" passHref>
                                    <Button 
                                        size="lg" 
                                        className="bg-[#5B7355] hover:bg-emerald-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                        aria-label="View my work and projects"
                                    >
                                        View My Work
                                        <ChevronDown className="ml-2 h-5 w-5" aria-hidden="true" />
                                    </Button>
                                </Link>
                                <Link href="#contact" passHref>
                                    <Button 
                                        variant="outline" 
                                        size="lg"
                                        className="border-emerald-600 text-emerald-600 hover:bg-[#5B7355] hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
                                        aria-label="Get in touch with me"
                                    >
                                        Get In Touch
                                        <Mail className="ml-2 h-5 w-5" aria-hidden="true" />
                                    </Button>
                                </Link>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card " aria-labelledby="skills-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="skills-heading" className="text-4xl font-bold text-center dark:text-white mb-16 font-title">
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