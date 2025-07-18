"use client";
import { useState } from 'react';
import Link from "next/link";
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';


export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <nav className="bg-[#D9D8D7] sticky top-0 z-50 font-display">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 w-1/3 md:w-auto"> 
            <Link 
              href="/" 
              className="inline-flex items-center group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-gray-400  text-2xl md:text-3xl">$</span>
              <span className="inline-block text-gray-800 group-hover:text-[#5C7356] text-xl md:text-2xl font-mono">
                ahmed_muawia
              </span>
              <span className="inline-block h-5 w-2 bg-gray-800 animate-blink" aria-hidden="true"/>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-end space-x-6 w-1/3 md:w-auto font-mono text-sm">
            <NavLink 
              href="#about" 
              icon={<span className="text-gray-400">$</span>} 
              text="about" 
            />
            <NavLink 
              href="#projects" 
              icon={<span className="text-gray-400">$</span>} 
              text="ls projects" 
            />
            <NavLink 
              href="#blog" 
              icon={<span className="text-gray-400">$</span>} 
              text="cat blog.md" 
            />
            <NavLink 
              href="https://drive.google.com/file/d/1yoT5mVoj4bpjygeiv6O3j-ddtzyGC8mX/view?usp=drive_link" 
              icon={<span className="text-gray-400">$</span>} 
              text="open resume.pdf" 
              isExternal
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-[#5C7356] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <Cross1Icon className="h-6 w-6" />
              ) : (
                <HamburgerMenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden font-mono bg-[#D9D8D7] py-4 space-y-3 border-t border-gray-300">
            <MobileNavLink 
              href="#about" 
              command="about"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileNavLink 
              href="#projects" 
              command="ls projects"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileNavLink 
              href="#blog" 
              command="cat blog.md"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileNavLink 
              href="https://drive.google.com/file/d/1yoT5mVoj4bpjygeiv6O3j-ddtzyGC8mX/view?usp=drive_link"
              command="open resume.pdf"
              isExternal
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

// Desktop NavLink Component
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
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex items-center hover:text-[#5C7356] transition-colors"
    >
      {icon}
      <span className="ml-1">{text}</span>
    </Link>
  );
}

// Mobile NavLink Component
function MobileNavLink({
  href,
  command,
  isExternal = false,
  onClick
}: {
  href: string;
  command: string;
  isExternal?: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="block px-4 py-2 hover:bg-[#5C7356]/10 hover:text-[#5C7356] transition-colors"
      onClick={onClick}
    >
      <span className="text-gray-400">$</span> {command}
    </Link>
  );
}