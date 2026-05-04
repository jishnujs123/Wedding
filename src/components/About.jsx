const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-ivory to-blush">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-serif text-navy mb-6">Our Love Story</h2>
          <p className="text-xl text-navy/80 max-w-2xl mx-auto">With the love and blessings of our families, we are excited to celebrate the beginning of our forever journey together.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img 
              src="/images/groom.webp" 
              alt="Jishnu" 
              className="w-full h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
            <h3 className="text-3xl font-serif text-navy mt-6 text-center">Jishnu J S</h3>
            <p className="text-center text-navy/70 mt-2">S/o Mr. Jayadas V & Mrs. Suprabha K</p>
            <p className="text-center font-medium text-gold">Thundil Puthen Veedu, Ambipoika P.O, Kundara, Kollam</p>
          </div>
          <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div>
              <h3 className="text-4xl font-serif text-navy mb-4">&amp;</h3>
              <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            </div>
            <img 
              src="/images/bride.webp" 
              alt="Anupama" 
              className="w-full h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
            <h3 className="text-3xl font-serif text-navy mt-6 text-center">Anupama Jayaraj</h3>
            <p className="text-center text-navy/70 mt-2">D/o Mr. K. Jayaraj & Mrs. Shobha Jayaraj</p>
            <p className="text-center font-medium text-gold">Arun Villa, Kangarappady, Vadacode P.O, Kochi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
