const Hero = () => {
  const heroImage = `${import.meta.env.BASE_URL}images/hero-bg.jpg.webp`;

  return (
    <section
      id="hero"
      className="min-h-screen pt-24 pb-16 relative overflow-hidden"
      style={{
        backgroundImage:
          `linear-gradient(to bottom, rgba(247,241,232,0.35), rgba(247,241,232,0.9)), url('${heroImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="section-shell min-h-[78vh] grid place-items-center text-center animate-fadeIn">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.34em] text-slate-600 mb-6">We Are Getting Married</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-slate-900 leading-[0.95]">
            Jishnu
            <span className="block text-accent text-5xl md:text-6xl">and</span>
            Anupama
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-slate-700">Sunday, July 5, 2026</p>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            With the blessings of our elders and the grace of the Almighty, we invite you to celebrate our wedding.
          </p>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-10 inline-flex items-center gap-3 px-8 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-700 transition"
          >
            Discover Our Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
