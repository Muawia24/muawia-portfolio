"use client";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useState } from 'react';

export const Contact = () => {
  const { ref, inView } = useInView();
  
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('https://formspree.io/f/xrblzkel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
        console.log(err)
      setError('Failed to send message. Please try again later.');
    }
  };

  // In your form JSX:
  if (submitted) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-semibold mb-4">Thank you!</h3>
        <p>Your message has been sent successfully.</p>
      </div>
    );
  }
  
  const contactMethods = [
    {
      icon: <FaEnvelope className="w-8 h-8" />,
      title: "Email",
      value: "amuawia666@gmail.com",
      link: "mailto:amuawia666@gmail.com"
    },
    {
      icon: <FaPhone className="w-8 h-8" />,
      title: "Phone",
      value: "+20 1552077841",
      link: "tel:+201552077841"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/Muawia24"
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/ahmed-muawia"
    },
    {
      icon: <FaTwitter className="w-6 h-6" />,
      name: "Twitter",
      url: "https://twitter.com/yourusername"
    },
    {
      icon: <SiLeetcode className="w-6 h-6" />,
      name: "LeetCode",
      url: "https://leetcode.com/yourusername"
    }
  ];

  return (
    <section 
      id="contact" 
      ref={ref} 
      className={`py-20 bg-gray-50 dark:bg-gray-900 ${inView ? 'animate__animated animate__fadeIn' : ''}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-title">
          Reach <span className="text-[#5B7355]">Me Out</span>
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="text-[#5B7355]">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{method.title}</h4>
                    <a 
                      href={method.link} 
                      className="text-gray-600 dark:text-gray-300 hover:text-[#5B7355] transition-colors"
                    >
                      {method.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Social Links */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">Social Profiles</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="text-[#5B7355]">
                    {social.icon}
                  </div>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Contact Form (optional) */}
        <div className="mt-12 max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B7355] dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B7355] dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B7355] dark:bg-gray-700 dark:border-gray-600"
                required
              ></textarea>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#5B7355] text-white py-3 rounded-lg hover:bg-[#4a5d44] transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};