import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdPhone, MdChevronRight, MdEmail, MdLocationOn } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { COMPANY } from '../../data/index.js';

export default function ContactCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Full BG architectural image */}
      <div className="absolute inset-0">
        <img
          src="/images/682c1887-d487-498e-88ad-258f39044ce8.jpg"
          alt="Architecture background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 via-navy-950/30 to-navy-950/50" />
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'linear-gradient(rgba(249,115,22,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.12) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Glass form card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/15 p-10 md:p-14 text-center"
            style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(24px)' }}>

            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-12 bg-brand-orange" />
              <span className="section-label">Ready to Start?</span>
              <div className="h-px w-12 bg-brand-orange" />
            </div>

            <h2 className="section-title-white mb-5 leading-tight">
              Start Your Project<br />
              <span className="text-brand-orange">With Us Today</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Get a free consultation and detailed quote for your aluminium, glazing, or facade project.
              Our experts respond within 24 hours.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link to="/contact"
                className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2 shadow-xl shadow-orange-500/30 hover:-translate-y-0.5 text-base">
                Get Free Quote <MdChevronRight size={20} />
              </Link>
              <a href={`tel:${COMPANY.phone}`}
                className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/25 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-0.5 text-base">
                <MdPhone size={20} /> Call Now
              </a>
              <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-0.5 text-base">
                <FaWhatsapp size={20} /> WhatsApp Us
              </a>
            </div>

            {/* Quick contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10">
              {[
                { icon: MdPhone, label: 'Call Us', value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
                { icon: MdEmail, label: 'Email Us', value: 'jj.fabrication90@gmail.com', href: `mailto:${COMPANY.email}` },
                { icon: MdLocationOn, label: 'Visit Us', value: 'Airoli, Navi Mumbai', href: 'https://www.google.com/maps/place/19%C2%B014\'38.2%22N+73%C2%B000\'42.3%22E/@19.2439441,73.0091792,17z' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href}
                  className="flex flex-col items-center gap-2 text-center group">
                  <div className="w-10 h-10 bg-brand-orange/15 rounded-xl flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-300">
                    <Icon className="text-brand-orange group-hover:text-white transition-colors" size={20} />
                  </div>
                  <div className="text-gray-500 text-xs uppercase tracking-wide">{label}</div>
                  <div className="text-gray-300 text-sm font-medium group-hover:text-brand-orange transition-colors leading-tight">{value}</div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
