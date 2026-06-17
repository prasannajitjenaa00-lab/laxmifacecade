import { Link } from 'react-router-dom';
import { MdPhone, MdEmail, MdLocationOn, MdArrowForward } from 'react-icons/md';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { COMPANY, SERVICES } from '../../data/index.js';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-300">
      <div className="border-t border-white/10">
        <div className="container-custom py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center font-display font-bold text-white text-lg">LF</div>
              <div>
                <div className="text-white font-display font-bold">Laxmi Facade</div>
                <div className="text-gray-400 text-xs">Aluminium · Glazing · Facade</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4 text-gray-400">Bhubaneswar's trusted partner for premium aluminium, glazing, and facade solutions. Delivering excellence since 2010.</p>
            <div className="flex gap-3">
              {[FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-white/5 hover:bg-brand-orange rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-5">Our Services</h3>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 7).map(s => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`} className="text-sm text-gray-400 hover:text-brand-orange transition-colors flex items-center gap-2 group">
                    <MdArrowForward className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" size={14} />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {[['Home','/'],['About Us','/about'],['Projects','/projects'],['Certifications','/certifications'],['Contact Us','/contact']].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-sm text-gray-400 hover:text-brand-orange transition-colors flex items-center gap-2 group">
                    <MdArrowForward className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" size={14} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-5">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MdLocationOn className="text-brand-orange flex-shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-gray-400 leading-relaxed">{COMPANY.address}</p>
              </div>
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-brand-orange transition-colors">
                <MdPhone className="text-brand-orange" size={18} />{COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-brand-orange transition-colors">
                <MdEmail className="text-brand-orange" size={18} />{COMPANY.email}
              </a>
              <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-lg transition-colors">
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>
            © 2026 Laxmi Facade. All rights reserved. designed by {' '}
            <a href="http://www.briskodetechnology.com" target="_blank" rel="noopener noreferrer" className="text-brand-orange underline">
              www.briskodetechnology.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
