const About = () => {
  const groomImage = `${import.meta.env.BASE_URL}images/groom.webp`;
  const brideImage = `${import.meta.env.BASE_URL}images/bride.webp`;

  return (
    <section id="about" className="py-24 md:py-28">
      <div className="section-shell">
        <div className="text-center mb-14 animate-riseIn">
          <h2 className="section-title">Our Story</h2>
          <p className="section-subtitle">
            Two families, two hearts, and one beautiful journey that begins with gratitude and joy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <article className="card-surface p-5 md:p-6 animate-riseIn">
            <img
              src={groomImage}
              alt="Jishnu"
              className="w-full h-80 object-cover rounded-2xl"
              loading="lazy"
              decoding="async"
            />
            <h3 className="text-4xl mt-5 text-slate-900">Jishnu J S</h3>
            <p className="text-slate-600 mt-2">Son of Mr. Jayadas V and Mrs. Suprabha K</p>
            <p className="text-accentDeep mt-2 font-medium">Thundil Puthen Veedu, Ambipoika P.O, Kundara, Kollam</p>
          </article>

          <article className="card-surface p-5 md:p-6 animate-riseIn">
            <img
              src={brideImage}
              alt="Anupama"
              className="w-full h-80 object-cover rounded-2xl"
              loading="lazy"
              decoding="async"
            />
            <h3 className="text-4xl mt-5 text-slate-900">Anupama Jayaraj</h3>
            <p className="text-slate-600 mt-2">Daughter of Mr. K. Jayaraj and Mrs. Shobha Jayaraj</p>
            <p className="text-accentDeep mt-2 font-medium">Arun Villa, Kangarappady, Vadacode P.O, Kochi</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
