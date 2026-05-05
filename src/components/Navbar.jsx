import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Standard scroll listener pattern

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-2xl border-b border-silver/20' : 'bg-black/70 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-serif text-whiteglow drop-shadow-lg">Jishnu & Anupama</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {['hero', 'about', 'events', 'timeline', 'gallery', 'rsvp'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-whiteglow hover:text-gold transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-silver/20 backdrop-blur-sm drop-shadow-md"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl md:text-3xl text-whiteglow drop-shadow-lg">
              ☰
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md px-4 pb-4 border-t border-silver/20">
          {['hero', 'about', 'events', 'timeline', 'gallery', 'rsvp'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left text-whiteglow hover:text-gold py-3 px-4 font-medium rounded-lg hover:bg-silver/20 transition-all duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

