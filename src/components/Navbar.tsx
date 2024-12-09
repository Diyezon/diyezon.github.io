import React, { useState } from 'react';
import { Menu, X, Hash } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { key: 'services', label: 'Services' },
    { key: 'about', label: 'About' },
    { key: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
              <Hash className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Diyezon Technology</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                className="text-gray-600 hover:text-primary-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={onContactClick}
              className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                className="block py-2 text-gray-600 hover:text-primary-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsOpen(false);
                onContactClick();
              }}
              className="w-full bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors mt-4"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;