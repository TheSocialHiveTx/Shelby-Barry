
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="font-display text-2xl font-bold tracking-tighter text-white">
              SHELBY BERRY
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${
                    isActive(link.path)
                      ? 'text-white border-b-2 border-orange-500'
                      : 'text-gray-400 hover:text-white transition-colors duration-200'
                  } px-3 py-2 text-sm font-medium uppercase tracking-widest`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
             {/* Mobile menu logic could go here, but focusing on standard navigation for now */}
             <div className="flex space-x-4">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className={`${isActive(link.path) ? 'text-orange-500' : 'text-gray-400'} text-[10px] uppercase font-bold`}
                    >
                        {link.name}
                    </Link>
                ))}
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
