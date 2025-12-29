
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-white mb-2">SHELBY BERRY</h3>
            <p className="text-gray-500 max-w-md">
              Senior Graphic Designer & Marketing Expert with over 30 years of experience bringing creative ideas to life.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col items-center md:items-end space-y-2">
            <a href="mailto:sberry007@yahoo.com" className="text-gray-400 hover:text-orange-500 transition-colors">sberry007@yahoo.com</a>
            <span className="text-gray-500">832-860-5874</span>
            <div className="flex space-x-6 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Portfolio
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Shelby Berry. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
