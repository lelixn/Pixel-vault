import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2, ShoppingCart, User } from 'lucide-react';
import { gsap } from 'gsap';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo('.mobile-menu-item', 
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, stagger: 0.1 }
      );
    }
  }, [isMenuOpen]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-neo-black/95 backdrop-blur-sm border-b-4 border-electric' 
        : 'bg-neo-black/90 backdrop-blur-sm border-b-4 border-electric'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-slide-up">
            <div className="bg-electric p-2 border-4 border-black shadow-brutal">
              <Gamepad2 className="w-8 h-8 text-black" />
            </div>
            <span className="text-2xl font-bold text-electric">PIXEL VAULT</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 animate-slide-up">
            <a href="#games" className="text-white hover:text-electric transition-colors border-b-2 border-transparent hover:border-electric font-bold text-lg px-2 py-1">
              GAMES
            </a>
            <a href="#categories" className="text-white hover:text-neon-green transition-colors border-b-2 border-transparent hover:border-neon-green font-bold text-lg px-2 py-1">
              CATEGORIES
            </a>
            <a href="#about" className="text-white hover:text-hot-pink transition-colors border-b-2 border-transparent hover:border-hot-pink font-bold text-lg px-2 py-1">
              ABOUT
            </a>
            <div className="flex items-center space-x-4">
              <button className="p-2 bg-white text-black border-4 border-black shadow-brutal hover:shadow-brutal-color hover:shadow-electric transition-all hover:translate-x-1 hover:translate-y-1 duration-200">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button className="p-2 bg-hot-pink text-white border-4 border-black shadow-brutal hover:shadow-brutal-color hover:shadow-neon-green transition-all hover:translate-x-1 hover:translate-y-1 duration-200">
                <User className="w-5 h-5" />
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 bg-electric text-black border-4 border-black shadow-brutal animate-slide-up"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-neo-black border-4 border-electric shadow-brutal-lg">
            <div className="py-4 space-y-4">
              <a href="#games" className="mobile-menu-item block px-4 py-2 text-white hover:bg-electric hover:text-black transition-colors font-bold">
                GAMES
              </a>
              <a href="#categories" className="mobile-menu-item block px-4 py-2 text-white hover:bg-neon-green hover:text-black transition-colors font-bold">
                CATEGORIES
              </a>
              <a href="#about" className="mobile-menu-item block px-4 py-2 text-white hover:bg-hot-pink hover:text-black transition-colors font-bold">
                ABOUT
              </a>
              <div className="mobile-menu-item flex items-center justify-center space-x-4 px-4 py-2">
                <button className="p-2 bg-white text-black border-4 border-black shadow-brutal">
                  <ShoppingCart className="w-5 h-5" />
                </button>
                <button className="p-2 bg-hot-pink text-white border-4 border-black shadow-brutal">
                  <User className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;