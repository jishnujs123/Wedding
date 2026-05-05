const Timeline = () => {
  const timelineItems = [
    {
      time: '9:30 AM',
      title: 'Muhurtham',
      date: '5th July 2026',
      description: 'Thrikkakara Vamana Moorthy Temple',
      icon: '🕉️'
    },
    {
      time: '12:20 PM',
      title: 'Solemnisation',
      date: '5th July 2026',
      description: 'Mary Queen Church Parish Hall',
      icon: '⛪'
    },
    {
      time: '5:00 PM',
      title: 'Reception',
      date: '6th July 2026',
      description: 'Gurudeva Auditorium, Kundara',
      icon: '🎉'
    }
  ];

  return (
    <section id="timeline" className="py-32 bg-gradient-to-b from-lavender/30 to-rose floral-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-wedding-float">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 bg-gradient-to-r from-rose via-gold to-lavender bg-clip-text text-transparent drop-shadow-lg">Wedding Journey</h2>
          <p className="text-xl text-navy/80 max-w-2xl mx-auto">Our special moments</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold/30" />
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''} animate-slide-up`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-1/2">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gold/20 hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-3xl font-serif text-gold">{item.icon}</span>
                      <span className="text-2xl font-medium text-navy">{item.time}</span>
                    </div>
                    <h3 className="text-2xl font-serif text-navy mb-2">{item.title}</h3>
                    <p className="text-lg font-medium text-gold mb-1">{item.date}</p>
                    <p className="text-navy/80">{item.description}</p>
                  </div>
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
