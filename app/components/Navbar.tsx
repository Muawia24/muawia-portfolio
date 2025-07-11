"use client";
import { MixIcon, ReaderIcon, RocketIcon, Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-[#D9D8D7] flex flex-col md:flex-row md:justify-between md:sticky md:top-0 md:z-10 font-display">
      {/* Logo - Always top-left */}
      <div className="text-5xl font-bold hover:text-[#5C7356] transition-colors self-start md:self-auto">
        <Link href="/" className="flex items-center">
          <span className="text-gray-400">{'<'}</span>
          <span className="text-gray-800">Ahmed Muawia</span>
          <span className="text-gray-400">{'/>'}</span>
        </Link>
      </div>

      {/* Navigation Items - Right-aligned */}
      <div className="w-full md:w-auto flex flex-row justify-around md:justify-end md:gap-8 items-center mt-3 md:mt-0">
        <NavLink href="#about" icon={<RocketIcon className="w-5 h-5" />} text="About" />
        <NavLink href="#projects" icon={<MixIcon className="w-5 h-5" />} text="Projects" />
        <NavLink href="#blog" icon={<Pencil2Icon className="w-5 h-5" />} text="Blog" />
        <NavLink 
          href="#resume" 
          icon={<ReaderIcon className="w-5 h-5" />} 
          text="Resume"
          isExternal
        />
      </div>
    </nav>
  );
};


function NavLink({
  href,
  icon,
  text,
  isExternal = false
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  isExternal?: boolean;
}) {
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : "_self"}
      className="flex flex-col items-center group hover:opacity-80 transition-opacity min-w-[60px]"
    >
      <div className="text-[#5C7356] group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="text-xs md:text-sm text-gray-700 mt-1">{text}</div>
    </Link>
  );
}