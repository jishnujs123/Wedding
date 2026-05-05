import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-ivory/95 backdrop-blur-md shadow-xl border-b border-blush/30' 
        : 'bg-blush/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-serif text-navy drop-shadow-lg font-bold">Jishnu & Anupama</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {['hero', 'about', 'events', 'timeline', 'gallery', 'rsvp'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-navy hover:text-gold font-medium py-2 px-4 rounded-xl hover:bg-blush/50 transition-all duration-300 drop-shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-xl text-navy font-bold">
              ☰
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-ivory/95 backdrop-blur-md px-4 pb-4 border-t border-blush/30">
          {['hero', 'about', 'events', 'timeline', 'gallery', 'rsvp'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left text-navy hover:text-gold py-3 px-4 font-medium rounded-xl hover:bg-blush/50 transition-all duration-300"
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

