import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

function App() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const weddingDate = new Date('2026-07-05T09:30:00+05:30').getTime();

    const tick = () => {
      const now = Date.now();
      const distance = Math.max(weddingDate - now, 0);

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen text-ink font-sans">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Timeline />
      <Gallery />
      <RSVP />
      <Footer />

      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 hidden md:block">
        <div className="card-surface px-5 py-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500 mb-2 text-center">Countdown To Wedding</p>
          <div className="flex gap-4 text-center">
            <div>
              <p className="text-2xl font-serif text-slate-900 leading-none">{countdown.days}</p>
              <p className="text-xs text-slate-600">Days</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-slate-900 leading-none">{countdown.hours}</p>
              <p className="text-xs text-slate-600">Hours</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-slate-900 leading-none">{countdown.minutes}</p>
              <p className="text-xs text-slate-600">Minutes</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-slate-900 leading-none">{countdown.seconds}</p>
              <p className="text-xs text-slate-600">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
