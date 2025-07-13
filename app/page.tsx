import { Navbar } from "./components/Navbar"
import { Herosection } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Blog } from "./components/Blogs";
export default function Home() {
  return (
    <div className="flex-col bg-[#D9D8D7] text-[#5C7356] w-full p-0 m-0 scroll-smooth">
      <Navbar />
      <Herosection />
      <Projects />
      <Blog />
    </div>
  );
}