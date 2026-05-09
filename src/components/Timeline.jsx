const Timeline = () => {
  const timelineItems = [
    {
      time: '9:15 AM',
      title: 'Muhurtham',
      date: 'July 5, 2026',
      description: 'Thrikkakara Vamana Moorthy Temple',
    },
    {
      time: '12:20 PM',
      title: 'Venue & Lunch',
      date: 'July 5, 2026',
      description: 'Mary Queen Church Parish Hall',
    },
    {
      time: '5:00 PM',
      title: 'Reception',
      date: 'July 6, 2026',
      description: 'Gurudeva Auditorium, Kundara',
    },
  ];

  return (
    <section id="timeline" className="py-24 md:py-28">
      <div className="section-shell max-w-4xl">
        <div className="text-center mb-14 animate-riseIn">
          <h2 className="section-title">Wedding Timeline</h2>
          <p className="section-subtitle">A simple view of our day from morning blessings to evening celebration.</p>
        </div>

        <div className="relative pl-6 md:pl-0">
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-px bg-amber-300" />
          <div className="space-y-6">
            {timelineItems.map((item, index) => (
              <div key={item.title} className="md:grid md:grid-cols-2 md:gap-10 items-center animate-riseIn">
                <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:order-2'} mb-3 md:mb-0`}>
                  <p className="text-sm uppercase tracking-widest text-slate-500">{item.time}</p>
                </div>
                <div className={`relative ${index % 2 === 0 ? '' : 'md:order-1'}`}>
                  <span className="absolute -left-[1.65rem] md:left-[-2.8rem] top-6 w-3 h-3 rounded-full bg-accent border-2 border-white" />
                  <article className="card-surface p-5">
                    <h3 className="text-3xl text-slate-900">{item.title}</h3>
                    <p className="text-accentDeep font-medium">{item.date}</p>
                    <p className="text-slate-600 mt-1">{item.description}</p>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
