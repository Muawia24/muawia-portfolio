import { useInView } from "react-intersection-observer"

export const Introduction = () => {
    const { ref, inView } = useInView();
    return <div id="introduction">
        <div ref={ref} className={`w-full flex flex-col md:flex-row md:justify-around items-start p-10 gap-y-2 font-display ${inView ? 'animate__animated animate__fadeIn' : ''}`}>
            <div className="max-w-4xl mx-auto text-center">
                <div className="text-3xl md:text-5xl text-center mt-5 md:mb-5 font-title">About Me </div>
                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed space-y-6">
                    <p>
                        I'm a Backend Developer with a background in Electrical Engineering, where I first developed a strong
                        foundation in systems thinking and problem-solving. Over time, I shifted my focus to software development,
                        driven by a passion for building efficient backend systems. I specialize in developing RESTful
                        APIs using Node.js, Express, and Python frameworks like Flask and FastAPI, and I'm experienced in working with
                        SQL and NoSQL Databases. I'm also familiar with CI/CD pipelines, designing distributed systems.
                        I enjoy creating clean, maintainable code and solving real-world problems through technology.
                    </p>
                </div>
            </div>
        </div>
    </div>
}