const Events = () => {
  const events = [
    {
      title: 'Temple Muhurtham',
      date: 'Sunday, 5th July 2026',
      time: '9:30 AM - 10:00 AM',
      venue: 'Thrikkakara Vamana Moorthy Temple, Thrikkakara, Edapally, Kochi',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.559947772974!2d76.3087!3d10.033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTrCsDAxJzU5LjIiTiA3NMKwMTgnMzEuMiJF!5e0!3m2!1sen!2sin!4v1690000000000',
    },
    {
      title: 'Church Solemnisation',
      date: 'Sunday, 5th July 2026',
      time: '12:20 PM - 12:44 PM',
      venue: 'Mary Queen Church Parish Hall, Thoppil, Pipeline Road, Thrikkakara, Kochi',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.7727461627617!2d76.311645!3d10.025246000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080e0b5c8d0f1d%3A0x8b5f4a2b0b0b0b0b!2sMary%20Queen%20Church!5e0!3m2!1sen!2sin!4v1634567890123',
    },
    {
      title: 'Reception',
      date: 'Monday, 6th July 2026',
      time: '5:00 PM - 9:00 PM',
      venue: 'Gurudeva Auditorium, Elampalloor, Kundara, Kollam',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19879.5!2d76.677!3d8.951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08f8b0b0b0b0b0%3A0x1234567890abcdef!2sGurudeva%20Auditorium!5e0!3m2!1sen!2sin!4v1634567890123',
    },
  ];

  return (
    <section id="events" className="py-32 bg-sage/30 floral-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-wedding-float">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 bg-gradient-to-r from-gold via-sage to-blush bg-clip-text text-transparent drop-shadow-lg">Wedding Events</h2>
          <p className="text-xl text-navy/80 max-w-2xl mx-auto">Join us for these special moments</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <h3 className="text-3xl font-serif text-navy mb-4">{event.title}</h3>
              <p className="text-2xl font-medium text-gold mb-2">{event.date}</p>
              <p className="text-xl mb-4">{event.time}</p>
              <p className="text-lg text-navy/80 mb-6">{event.venue}</p>
              <iframe
                src={event.map}
                width="100%"
                height="200"
                className="rounded-2xl"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
