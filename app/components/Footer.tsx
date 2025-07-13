"use client";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/yourusername",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
    },
    {
      icon: <FaXTwitter className="w-5 h-5" />,
      name: "X (Twitter)",
      url: "https://twitter.com/yourusername",
    },
    {
      icon: <SiLeetcode className="w-5 h-5" />,
      name: "LeetCode",
      url: "https://leetcode.com/yourusername",
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      name: "Email",
      url: "mailto:ahmed@example.com",
    },
  ];

  return (
    <footer className="bg-[#5B7355] text-white py-8 mt-20">
      <div className="container mx-auto px-4">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="hover:text-gray-300 transition-colors"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>© {currentYear} Ahmed Muawia. All rights reserved.</p>
          <p className="mt-2">
            Built with <span className="text-white">Next.js</span> and{" "}
            <span className="text-white">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};