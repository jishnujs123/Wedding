const Events = () => {
  const events = [
    {
      title: 'Temple Muhurtham',
      date: 'Sunday, July 5, 2026',
      time: '9:15 AM - 9:45 AM',
      venue: 'Thrikkakara Vamana Moorthy Temple, Thrikkakara, Edapally, Kochi',
      map: 'https://www.google.com/maps?q=Thrikkakara%20Vamana%20Moorthy%20Temple%2C%20Thrikkakara%2C%20Edapally%2C%20Kochi&output=embed',
      openmaps: 'https://maps.app.goo.gl/sb8uh25T5c4ptXCH6',
    },
    {
      title: 'Church Solemnisation',
      date: 'Sunday, July 5, 2026',
      time: '12:20 PM - 12:44 PM',
      venue: 'Mary Queen Church Parish Hall, Thoppil, Pipeline Road, Thrikkakara, Kochi',
      map: 'https://www.google.com/maps?q=Mary%20Queen%20Church%20Parish%20Hall%2C%20Thoppil%2C%20Pipeline%20Road%2C%20Thrikkakara%2C%20Kochi&output=embed',
      openmaps: 'https://maps.app.goo.gl/4asKngCdeyiEFan97',
    },
    {
      title: 'Reception',
      date: 'Monday, July 6, 2026',
      time: '5:00 PM - 9:00 PM',
      venue: 'Gurudeva Auditorium, Elampalloor, Kundara, Kollam',
      map: 'https://www.google.com/maps?q=Gurudeva%20Auditorium%2C%20Elampalloor%2C%20Kundara%2C%20Kollam&output=embed',
      openmaps: 'https://maps.app.goo.gl/MHumKnsWGKQnX9HTA',
    },
  ];

  return (
    <section id="events" className="py-24 md:py-28 bg-white/40">
      <div className="section-shell">
        <div className="text-center mb-14 animate-riseIn">
          <h2 className="section-title">Events</h2>
          <p className="section-subtitle">Please join us for each special ceremony.</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {events.map((event) => (
            <article key={event.title} className="card-surface p-6 animate-riseIn">
              <h3 className="text-3xl text-slate-900 mb-2">{event.title}</h3>
              <p className="text-accentDeep font-semibold">{event.date}</p>
              <p className="text-slate-700 mt-1">{event.time}</p>
              <p className="text-slate-600 mt-3 leading-relaxed">{event.venue}</p>
              <iframe
                src={event.map}
                title={event.title}
                width="100%"
                height="200"
                className="mt-4 rounded-2xl border border-amber-100"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={event.openmaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-4 text-sm text-slate-800 underline underline-offset-4 hover:text-accentDeep"
              >
                Open in Google Maps
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
