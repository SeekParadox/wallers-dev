"use client";

import About from '@/components/about';
import { useState, useRef, useEffect, lazy } from 'react';
import Image from 'next/image';
import ProjectCard from '@/components/project-card';

const Work = lazy(() => import('@/components/work'));

export default function Home() {
  // State Management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPageCurrent, setIsPageCurrent] = useState('About');
  const menuRef = useRef<HTMLDivElement>(null);

  // Handlers
  const handlePageChange = (newValue: string) => {
    setIsPageCurrent(newValue);
    setIsMenuOpen(false)
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Effect for clicking outside menu
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="flex flex-col grow min-h-screen">
      {/* Header Section */}
      <header className="flex flex-col justify-between">
        {/* Navigation Menu */}
        <menu 
          ref={menuRef} 
          className={`relative flex flex-col mt-10 lg:mt-0 gap-5 w-60 rounded  ${isMenuOpen ? 'bg-white' : ''} self-end lg:self-center lg:w-auto lg:bg-inherit `}
          
        >
          {/* Hamburger Menu */}
          <div 
            className="lg:hidden hamburgerMenuWrapper flex flex-col gap-2 cursor-pointer self-end mt-4 mr-2 pr-4" 

            style={{ zIndex: 100 }} 
            onClick={toggleMenu}
          >
            <div className="bg-black w-8 h-0.5"></div>
            <div className="bg-black w-6 h-0.5"></div>
            <div className="bg-black w-8 h-0.5"></div>
          </div>

          {/* Menu Items */}
          <div 
            className={`absolute top-0 right-0 mt-4 bg-white sm:bg-inherit p-4 space-y-3 w-full ${isMenuOpen ? 'block' : 'hidden lg:block'} lg:static lg:mt-0 p-0`} 
            style={{ zIndex: 10 }}
          >
            <nav className="flex flex-col lg:flex-row items-center gap-5 lg:mt-5 lg:text-24">
              
              <a href="#" onClick={() => handlePageChange('About')}>About</a>
              <a href="#" onClick={() => handlePageChange('Work')}>Work</a>
              <a>Resume</a>
              <a>Contact</a>
            </nav>
          </div>
        </menu>

        {/* Page Title */}
        <h1 className="mt-4 font-instrument text-3xl font-bold pl-[4vw] lg:hidden">
          {isPageCurrent}
        </h1>
      </header>

      {/* Dynamic Content Section */}
      {isPageCurrent === 'About' && <About onChange={handlePageChange} />}
      {isPageCurrent === 'Work' && <Work />}

      {/* Footer Image */}
      <div className="mt-auto">
        <img
          src="/images/portfolio-background.png"
          alt="Background image for page"
          className="w-full object-cover max-h-96"
        />
      </div>
    </div>
  );
}
