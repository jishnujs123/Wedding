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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) return;
    setIsSubmitting(true);
    setError(false);

    const formBody = new URLSearchParams();
    Object.keys(formData).forEach(key => formBody.append(key, formData[key]));

    try {
      // TODO: Replace this with your Google Apps Script Web App URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwNvOY3Vy8SxXHpWBxrtgk6wAUpLd92M5qtsLyoqO0NdZ7jFipSjDFB_fRt138IR3XV/exec';
      
      await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
        mode: 'no-cors'
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', guests: 1, attending: 'yes', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error('Error submitting RSVP:', err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
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
          {error && (
            <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-red-700">
              Something went wrong submitting your RSVP. Please try again.
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" type="text" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="rounded-xl border border-amber-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-300" />
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="rounded-xl border border-amber-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-300" />
            <select name="attending" value={formData.attending} onChange={handleChange} className="rounded-xl border border-amber-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-300">
              <option value="yes">We will be there</option>
              <option value="no">Sorry, cannot make it</option>
              <option value="maybe">Maybe</option>
            </select>
            <input name="guests" type="number" min="1" max="10" value={formData.guests} onChange={handleChange} className="rounded-xl border border-amber-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-300" />
          </div>

          <textarea name="message" rows="4" placeholder="Message or dietary requirements" value={formData.message} onChange={handleChange} className="mt-4 w-full rounded-xl border border-amber-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-300" />

          <button type="submit" disabled={isSubmitting} className="mt-6 w-full rounded-xl bg-slate-900 text-white py-3 font-semibold hover:bg-slate-700 transition disabled:opacity-70 disabled:cursor-not-allowed">
            {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;
