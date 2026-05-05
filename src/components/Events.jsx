const Events = () => {
  const events = [
    {
      title: 'Temple Muhurtham',
      date: 'Sunday, 5th July 2026',
      time: '9:15 AM - 9:45 AM',
      venue: 'Thrikkakara Vamana Moorthy Temple, Thrikkakara, Edapally, Kochi',
      map: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyD...&q=https://maps.app.goo.gl/sb8uh25T5c4ptXCH6',
    },
    {
      title: 'Church Solemnisation',
      date: 'Sunday, 5th July 2026',
      time: '12:20 PM - 12:44 PM',
      venue: 'Mary Queen Church Parish Hall, Thoppil, Pipeline Road, Thrikkakara, Kochi',
      map: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyD...&q=https://maps.app.goo.gl/4asKngCdeyiEFan97',
    },
    {
      title: 'Reception',
      date: 'Monday, 6th July 2026',
      time: '5:00 PM - 9:00 PM',
      venue: 'Gurudeva Auditorium, Elampalloor, Kundara, Kollam',
      map: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyD...&q=https://maps.app.goo.gl/MHumKnsWGKQnX9HTA',
    },
  ];

  return (
    <section id="events" className="py-32 bg-charcoal/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-wedding-float">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 bg-gradient-to-r from-gold via-silver to-whiteglow bg-clip-text text-transparent drop-shadow-2xl">Wedding Events</h2>
          <p className="text-xl text-silver max-w-2xl mx-auto">Join us for these sacred moments</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-black/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gold/20 hover:border-gold/40 transition-all duration-500 hover:-translate-y-4 group animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <h3 className="text-3xl font-serif text-whiteglow mb-4 group-hover:text-gold transition-colors">{event.title}</h3>
              <p className="text-2xl font-medium text-gold mb-2">{event.date}</p>
              <p className="text-xl mb-4 text-silver">{event.time}</p>
              <p className="text-lg text-whiteglow/90 mb-6 leading-relaxed">{event.venue}</p>
              <iframe
                src={event.map}
                width="100%"
                height="200"
                className="rounded-2xl border-0 shadow-xl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;

