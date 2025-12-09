import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toISOString().split('T')[1].split('.')[0] + ' UTC');
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-nord-0 border-b border-nord-4 w-full px-4 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-4 h-4 bg-nord-8"></div>
        <span className="type-h3">LAT48 VENTURES</span>
      </div>
      
      <div className="hidden md:flex gap-12">
        {NAV_LINKS.map((link) => (
          <Link 
            key={link.label} 
            to={link.href}
            className="type-nav"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="text-nord-3 hidden sm:block type-body">
        {time}
      </div>
    </nav>
  );
};
