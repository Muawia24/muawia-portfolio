"use client";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-[#D9D8D7] sticky top-0 z-10 font-display">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16 md:h-20"> {/* Consistent height */}
      
      {/* Logo - Left-aligned with constrained width */}
      <div className="flex-shrink-0 w-1/3 md:w-auto"> 
        <Link href="/" className="flex items-center group">
          <span className="text-gray-400 mr-2 text-2xl md:text-3xl">{'$'}</span>
          <span className="text-gray-800 group-hover:text-[#5C7356] text-xl md:text-2xl font-mono">
          ahmed_muawia
          </span>
          <span className="ml-2 h-5 w-3 bg-gray-800 animate-blink" aria-hidden="true" />
        </Link>
      </div>

      {/* Navigation Items - Right-aligned with equal spacing */}
      <div className="hidden md:flex items-center justify-end space-x-6 w-1/3 md:w-auto font-mono text-sm">
  <NavLink 
    href="#about" 
    icon={<span className="text-gray-400">$</span>} 
    text="about" 
    className="hover:text-[#5C7356]"
  />
  <NavLink 
    href="#projects" 
    icon={<span className="text-gray-400">$</span>} 
    text="ls projects" 
    className="hover:text-[#5C7356]"
  />
  <NavLink 
    href="#blog" 
    icon={<span className="text-gray-400">$</span>} 
    text="cat blog.md" 
    className="hover:text-[#5C7356]"
  />
  <NavLink 
    href="https://drive.google.com/file/d/1H3G81Rp4zqEe3266OR2cN9NNWh6Dnkc-/view?usp=drive_link" 
    icon={<span className="text-gray-400">$</span>} 
    text="open resume.pdf" 
    className="hover:text-[#5C7356]"
    isExternal
  />
</div>

      {/* Mobile menu button (optional) */}
      <div className="md:hidden flex items-center">
        {/* Mobile menu button implementation */}
      </div>
    </div>
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
  className?: string;
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