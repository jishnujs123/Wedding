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
It all started when my father sent an interest to her matrimony profile. One day, while casually checking his phone at home, I noticed an email saying that she had accepted the request.
Being a true Malayalee detective, I immediately searched for her on Instagram and sent her a follow request. That’s where our first conversation began.
We started talking, getting to know each other, and slowly realized that our vibes matched really well. Soon, we felt this could turn into something serious and decided to share it with our families.
Like most Kerala families, the first reaction was not exactly a straight “yes” — mainly because of the classic “What will people think?” situation 😂
But eventually, both families understood us, accepted our decision, and started talking to each other. And well… that’s how this beautiful journey happened.
There’s also a beautiful coincidence in our story, we both studied at Younus College of Engineering and Technology, but in different batches. I joined in 2012 and passed out in 2016, while she joined in 2017 and completed her studies in 2021. Same college, different timelines… maybe fate was just waiting for the right moment ❤️
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
