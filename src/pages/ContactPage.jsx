import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdPhone, MdEmail, MdLocationOn, MdSend, MdCheckCircle } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { COMPANY } from '../data/index.js';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  const services = ['ACP Cladding','Structural Glazing','Spider Systems','Glass Canopies','MS Fabrication','Aluminium Cladding','Doors & Windows','Facade Work','Steel Structures','Techlam Installation','Louvers','Facade Maintenance'];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0f1e] py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/198dcaf7-24cc-472b-a925-b96900f3ff26.jpg"
            alt="Contact hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/90 via-[#0a0f1e]/60 to-[#0a0f1e]/30" />
        </div>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(249,115,22,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.12) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        {/* Decorative blobs */}
        <div className="absolute top-10 right-20 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-40 bg-green-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-brand-orange" />
              <span className="section-label">Get In Touch</span>
            </div>
            <h1 className="section-title-white mb-5 max-w-2xl leading-tight">
              Let's Build<br /><span className="text-brand-orange">Something Great</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
              Ready to start your project? Get a free quote or just say hello.
              We respond within 2 business hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info Column */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display font-bold text-2xl text-navy-950 dark:text-white mb-2">Laxmi Facade</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Reach us through any of the channels below. We respond within 2 business hours.</p>
              </div>

              {[
                { Icon: MdLocationOn, label: "Address", value: COMPANY.address, href: "https://www.google.com/maps/place/19%C2%B014'38.2%22N+73%C2%B000'42.3%22E/@19.2439441,73.0091792,17z" },
                { Icon: MdPhone, label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
                { Icon: MdEmail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="text-brand-orange" size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="text-navy-950 dark:text-white font-medium hover:text-brand-orange transition-colors">{value}</a>
                    ) : (
                      <p className="text-navy-950 dark:text-white font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Quick action buttons */}
              <div className="flex flex-col gap-3 pt-4">
                <a href={`tel:${COMPANY.phone}`}
                  className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-3.5 rounded-xl transition-colors">
                  <MdPhone size={20} /> Call Now
                </a>
                <a href={`https://wa.me/${COMPANY.whatsapp}?text=Hello! I'd like to enquire about your services.`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 rounded-xl transition-colors">
                  <FaWhatsapp size={20} /> Chat on WhatsApp
                </a>
              </div>

              {/* Business hours */}
              <div className="bg-gray-50 dark:bg-navy-800 rounded-xl p-5">
                <h4 className="font-display font-semibold text-navy-950 dark:text-white mb-3">Business Hours</h4>
                {[['Monday – Saturday', '9:00 AM – 7:00 PM'], ['Sunday', 'By Appointment']].map(([day, time]) => (
                  <div key={day} className="flex justify-between text-sm py-1.5 border-b border-gray-200 dark:border-navy-700 last:border-0">
                    <span className="text-gray-500 dark:text-gray-400">{day}</span>
                    <span className="font-medium text-navy-950 dark:text-white">{time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 bg-gray-50 dark:bg-navy-800 rounded-2xl">
                  <MdCheckCircle className="text-green-500 mb-4" size={64} />
                  <h3 className="font-display font-bold text-2xl text-navy-950 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">Thank you for reaching out. We'll get back to you within 2 business hours.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline">Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-navy-800 rounded-2xl p-8 space-y-5">
                  <h3 className="font-display font-bold text-xl text-navy-950 dark:text-white mb-6">Send Us a Message</h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Full Name *</label>
                      <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-gray-800 dark:text-white focus:outline-none focus:border-brand-orange text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Phone Number *</label>
                      <input required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-gray-800 dark:text-white focus:outline-none focus:border-brand-orange text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Email Address</label>
                    <input value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                      type="email" placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-gray-800 dark:text-white focus:outline-none focus:border-brand-orange text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Service Required</label>
                    <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-gray-800 dark:text-white focus:outline-none focus:border-brand-orange text-sm">
                      <option value="">Select a service...</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Your Message *</label>
                    <textarea required value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      rows={4} placeholder="Tell us about your project requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-gray-800 dark:text-white focus:outline-none focus:border-brand-orange text-sm resize-none" />
                  </div>
                  <button type="submit" disabled={loading}
                    className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70">
                    {loading ? 'Sending...' : <><MdSend /> Send Message</>}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          {/* Map */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-16 rounded-2xl overflow-hidden shadow-2xl h-80">
            <iframe
              title="Laxmi Facade Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0!2d73.0091792!3d19.2439441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsMxNCczOC4yIk4gNzPCsDAwJzQyLjMiRQ!5e0!3m2!1sen!2sin!4v1"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
