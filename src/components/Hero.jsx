const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-cover bg-center flex items-center justify-center text-center text-white relative overflow-hidden" style={{backgroundImage: `url('/images/hero-bg.jpg.webp')`}}>
      <div className="absolute inset-0 bg-navy/40" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 drop-shadow-lg">
          Jishnu
          <span className="block text-gold text-4xl md:text-6xl">&amp;</span>
          Anupama
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-8 drop-shadow-md">
          Sunday, 5th July 2026
        </p>
        <p className="text-lg md:text-xl mb-12 opacity-90 drop-shadow-md">
          With the Blessings of the Almighty and the love of our elders
        </p>
        <button
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          className="bg-gold text-navy px-8 py-4 rounded-full font-medium text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
        >
          Discover Our Story
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
