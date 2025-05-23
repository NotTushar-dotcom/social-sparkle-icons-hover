
import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const SocialIcons = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: '#',
      color: 'hover:bg-blue-600',
      bgGradient: 'hover:from-blue-500 hover:to-blue-700'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      color: 'hover:bg-pink-600',
      bgGradient: 'hover:from-pink-500 hover:via-purple-500 hover:to-yellow-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#',
      color: 'hover:bg-blue-700',
      bgGradient: 'hover:from-blue-600 hover:to-blue-800'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: '#',
      color: 'hover:bg-red-600',
      bgGradient: 'hover:from-red-500 hover:to-red-700'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: '#',
      color: 'hover:bg-sky-500',
      bgGradient: 'hover:from-sky-400 hover:to-sky-600'
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
              className={`
                group relative flex items-center justify-center
                w-16 h-16 rounded-full
                bg-white shadow-lg border-2 border-gray-200
                transition-all duration-300 ease-in-out
                hover:shadow-2xl hover:scale-110 hover:-translate-y-2
                ${social.color}
              `}
              aria-label={social.name}
            >
              {/* Gradient background that appears on hover */}
              <div className={`
                absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                bg-gradient-to-br ${social.bgGradient}
                transition-opacity duration-300
              `} />
              
              {/* Icon */}
              <IconComponent 
                size={28} 
                className="relative z-10 text-gray-600 group-hover:text-white transition-colors duration-300"
              />
              
              {/* Ripple effect */}
              <div className="
                absolute inset-0 rounded-full
                group-hover:animate-ping
                bg-current opacity-20
                scale-0 group-hover:scale-100
                transition-transform duration-500
              " />
            </a>
          );
        })}
      </div>

      {/* Vertical Layout Alternative */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">Alternative Vertical Style</h3>
        <div className="flex flex-col space-y-4">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={`vertical-${social.name}`}
                href={social.url}
                className={`
                  group flex items-center space-x-4 p-4 rounded-lg
                  bg-white shadow-md border border-gray-100
                  transition-all duration-300 ease-in-out
                  hover:shadow-lg hover:scale-105
                  ${social.color} hover:text-white
                  min-w-[200px]
                `}
              >
                <div className={`
                  flex items-center justify-center w-12 h-12 rounded-full
                  bg-gray-100 group-hover:bg-white/20
                  transition-all duration-300
                `}>
                  <IconComponent 
                    size={24} 
                    className="text-gray-600 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <span className="font-medium text-gray-700 group-hover:text-white transition-colors duration-300">
                  {social.name}
                </span>
                
                {/* Slide-in arrow */}
                <div className="ml-auto transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Floating Action Style */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">Floating Action Style</h3>
        <div className="relative">
          <div className="flex space-x-3">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={`floating-${social.name}`}
                  href={social.url}
                  className={`
                    group relative flex items-center justify-center
                    w-14 h-14 rounded-full
                    bg-gradient-to-br from-gray-50 to-gray-100
                    shadow-lg border border-gray-200
                    transition-all duration-500 ease-out
                    hover:shadow-2xl hover:scale-125
                    ${social.bgGradient}
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <IconComponent 
                    size={24} 
                    className="text-gray-600 group-hover:text-white transition-all duration-300 group-hover:scale-110"
                  />
                  
                  {/* Pulsing ring */}
                  <div className="
                    absolute -inset-1 rounded-full
                    bg-gradient-to-br from-gray-300 to-gray-400
                    opacity-0 group-hover:opacity-30
                    animate-pulse
                    transition-opacity duration-300
                  " />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
