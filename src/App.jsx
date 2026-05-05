import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [countdown, setCountdown] = useState({});
  
  useEffect(() => {
    const updateCountdown = () => {
      const weddingDate = new Date('2026-07-05T09:30:00').getTime();
      const now = new Date().getTime();
      const distance = weddingDate - now;

      const newCountdown = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };

      // Only update if changed to reduce re-renders
      if (JSON.stringify(newCountdown) !== JSON.stringify(countdown)) {
        setCountdown(newCountdown);
      }
    };

    updateCountdown(); // Initial
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [countdown]); // Safe dep - only re-runs if countdown changes significantly

  const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    });
    document.querySelectorAll('.animate-slide-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    });
    document.querySelectorAll('.animate-slide-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen floral-pattern text-whiteglow font-sans">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Timeline />
      <Gallery />
      <RSVP />
      <Footer />
      
      {/* Countdown Overlay in Hero - optional enhancement */}
      <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-8 py-4 rounded-3xl shadow-2xl z-40 hidden md:block">
        <div className="flex space-x-4 text-sm font-medium">
          <div className="text-center">
            <div className="text-2xl font-serif text-gold">{countdown.days || 0}d</div>
            <div>Days</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-serif text-gold">{countdown.hours || 0}h</div>
            <div>Hours</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-serif text-gold">{countdown.minutes || 0}m</div>
            <div>Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-serif text-gold">{countdown.seconds || 0}s</div>
            <div>Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
