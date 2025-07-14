import { useInView } from "react-intersection-observer"
import Image from "next/image";

export const Introduction = () => {
    const { ref, inView } = useInView();
    return <div id="introduction">
        <div ref={ref} className={`w-full flex flex-col md:flex-row md:justify-around items-start p-10 gap-y-2 font-display ${inView ? 'animate__animated animate__fadeIn' : ''}`}>
            <div className="max-w-4xl mx-auto text-center">
                <div className="text-3xl md:text-5xl text-center mt-5 md:mb-5 font-title">About Me </div>
                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed space-y-6">
                    <p>
                        I'm a passionate Software Engineer with expertise in building modern web applications and PWAs. 
                        My journey in technology has led me to work with cutting-edge frameworks and tools, always striving 
                        to create solutions that make a difference.
                    </p>
                    <p>
                        When I'm not coding, you'll find me reading books, watching movies, and sacrificing pieces in chess! 
                        I believe in continuous learning and staying updated with the latest trends in technology.
                    </p>
                </div>
            </div>
        </div>
    </div>
}