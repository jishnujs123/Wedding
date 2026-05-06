import { useEffect, useState } from 'react';

const sections = ['hero', 'about', 'events', 'timeline', 'gallery', 'rsvp'];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/85 backdrop-blur border-b border-amber-200/70' : 'bg-transparent'}`}>
      <div className="section-shell">
        <div className="h-16 flex items-center justify-between">
          <button onClick={() => scrollToSection('hero')} className="text-2xl font-serif text-slate-900">
            Jishnu and Anupama
          </button>

          <div className="hidden md:flex items-center gap-2">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="px-4 py-2 text-sm uppercase tracking-widest text-slate-700 hover:text-slate-900 hover:bg-amber-100/70 rounded-full transition"
              >
                {section}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-slate-900 text-sm uppercase tracking-widest"
            onClick={() => setIsOpen((v) => !v)}
          >
            Menu
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="card-surface p-3 flex flex-col gap-2">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left px-3 py-2 rounded-xl text-slate-700 hover:bg-amber-100"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
