
import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const SocialIcons = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: '#',
      bgColor: 'hover:bg-blue-600',
      gradientColors: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      bgColor: 'hover:bg-pink-600',
      gradientColors: 'from-pink-500 via-purple-500 to-yellow-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#',
      bgColor: 'hover:bg-blue-700',
      gradientColors: 'from-blue-600 to-blue-800'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: '#',
      bgColor: 'hover:bg-red-600',
      gradientColors: 'from-red-500 to-red-700'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: '#',
      bgColor: 'hover:bg-sky-500',
      gradientColors: 'from-sky-400 to-sky-600'
    }
  ];

  return (
    <div className="flex flex-col items-center space-y-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Connect With Us</h2>
      
      {/* Horizontal Layout */}
      <div className="flex space-x-6">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg border-2 border-gray-200 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-110 hover:-translate-y-2"
              aria-label={social.name}
            >
              {/* Background with proper gradient */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${social.gradientColors} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Icon */}
              <IconComponent 
                size={28} 
                className="relative z-10 text-gray-600 group-hover:text-white transition-colors duration-300"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialIcons;
