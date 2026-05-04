import { useState } from 'react';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: 1,
    attending: 'yes',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      console.log('RSVP Submission:', formData);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: '', email: '', guests: 1, attending: 'yes', message: '' });
    } else {
      alert('Please fill name and email');
    }
  };

  return (
    <section id="rsvp" className="py-32 bg-gradient-to-t from-navy to-ivory/50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-serif text-navy mb-6">Will You Be There?</h2>
          <p className="text-xl text-navy/80 max-w-xl mx-auto">We would love to have you celebrate with us</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white/30 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20">
          {submitted && (
            <div className="text-center mb-8 p-6 bg-gold/20 rounded-2xl text-gold font-medium animate-pulse">
              Thank you! Your RSVP has been received ✨
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              className="px-6 py-4 rounded-2xl border border-white/30 bg-white/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all duration-300 text-navy placeholder-navy/50"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              className="px-6 py-4 rounded-2xl border border-white/30 bg-white/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all duration-300 text-navy placeholder-navy/50"
              required
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <select
              name="attending"
              value={formData.attending}
              onChange={handleChange}
              className="px-6 py-4 rounded-2xl border border-white/30 bg-white/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all duration-300 text-navy"
            >
              <option value="yes">We will be there! 🎉</option>
              <option value="no">Sorry, can't make it 😔</option>
              <option value="maybe">Maybe</option>
            </select>
            <input
              type="number"
              name="guests"
              placeholder="Number of guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              max="10"
              className="px-6 py-4 rounded-2xl border border-white/30 bg-white/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all duration-300 text-navy placeholder-navy/50"
            />
          </div>
          <textarea
            name="message"
            placeholder="Special message or dietary requirements (optional)"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-6 py-4 rounded-2xl border border-white/30 bg-white/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all duration-300 text-navy placeholder-navy/50 resize-none"
          />
          <button
            type="submit"
            className="w-full bg-gold text-navy py-6 px-8 rounded-3xl font-medium text-xl mt-8 hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 uppercase tracking-wide"
          >
            Send My RSVP
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;
