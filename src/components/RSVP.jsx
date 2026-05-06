import { useState } from 'react';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: 1,
    attending: 'yes',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', guests: 1, attending: 'yes', message: '' });
  };

  return (
    <section id="rsvp" className="py-24 md:py-28">
      <div className="section-shell max-w-3xl">
        <div className="text-center mb-12 animate-riseIn">
          <h2 className="section-title">RSVP</h2>
          <p className="section-subtitle">Your presence means everything to us. Please let us know if you can join.</p>
        </div>

        <form onSubmit={handleSubmit} className="card-surface p-6 md:p-8">
          {submitted && (
            <div className="mb-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-700">
              Thank you. Your RSVP has been recorded.
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" type="text" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="rounded-xl border border-amber-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-300" />
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="rounded-xl border border-amber-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-300" />
            <select name="attending" value={formData.attending} onChange={handleChange} className="rounded-xl border border-amber-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-300">
              <option value="yes">We will be there</option>
              <option value="no">Sorry, cannot make it</option>
              <option value="maybe">Maybe</option>
            </select>
            <input name="guests" type="number" min="1" max="10" value={formData.guests} onChange={handleChange} className="rounded-xl border border-amber-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-300" />
          </div>

          <textarea name="message" rows="4" placeholder="Message or dietary requirements" value={formData.message} onChange={handleChange} className="mt-4 w-full rounded-xl border border-amber-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-300" />

          <button type="submit" className="mt-6 w-full rounded-xl bg-slate-900 text-white py-3 font-semibold hover:bg-slate-700 transition">
            Submit RSVP
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;
