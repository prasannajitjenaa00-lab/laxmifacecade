import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MdApartment, MdWindow, MdGridView, MdRoofing, MdConstruction, MdLayers,
  MdMeetingRoom, MdBusiness, MdArchitecture, MdSquareFoot, MdViewArray,
  MdBuildCircle, MdChevronRight, MdArrowForward
} from 'react-icons/md';
import { SERVICES } from '../../data/index.js';
import SectionHeader from '../common/SectionHeader.jsx';

const iconMap = {
  MdApartment, MdWindow, MdGridView, MdRoofing, MdConstruction, MdLayers,
  MdMeetingRoom, MdBusiness, MdArchitecture, MdSquareFoot, MdViewArray, MdBuildCircle
};

// Curated premium images per service
const serviceImages = {
  'acp-cladding': 'https://i.pinimg.com/736x/75/5f/02/755f02b4ebb7485bbb7a75bc7ce3103e.jpg',
  'structural-glazing': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=85',
  'spider-systems': 'https://i.pinimg.com/1200x/e3/83/f4/e383f4e3ebeb82857cfcc32d3a8faa2b.jpg',
  'glass-canopies': 'https://i.pinimg.com/1200x/43/e2/5d/43e25da401777b5a2775bf05395358ae.jpg',
  'ms-fabrication': 'https://i.pinimg.com/736x/75/9b/8e/759b8e4cc94db7da7584ee55d0cc43a9.jpg',
  'aluminium-cladding': 'https://i.pinimg.com/1200x/89/28/02/8928023122b8df6797a0fa29c7623d0c.jpg',
  'doors-windows': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85',
  'facade-work': 'https://images.unsplash.com/photo-1497366754035-f200581dd101?w=600&q=85',
};

export default function ServicesGrid() {
  const featured = SERVICES.slice(0, 6);
  const rest = SERVICES.slice(6);

  return (
    <section className="py-24 bg-gray-50 dark:bg-navy-950">
      <div className="container-custom">
        <SectionHeader
          label="What We Do"
          title="Complete Service Range"
          subtitle="From concept to completion — every aspect of aluminium, glazing, and facade engineering."
        />

        {/* Featured 6 — image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {featured.map((service, i) => {
            const Icon = iconMap[service.iconName] || MdBusiness;
            const img = serviceImages[service.id] || service.image;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer h-64 shadow-lg">
                {/* BG image */}
                <img src={img} alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/60 to-[#0a0f1e]/20 group-hover:via-[#0a0f1e]/70 transition-all duration-500" />
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-brand-orange/50 transition-all duration-500 shadow-[inset_0_0_0_1px_transparent] group-hover:shadow-[inset_0_0_0_1px_rgba(249,115,22,0.3)]" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Top icon */}
                  <div className="w-11 h-11 bg-brand-orange/20 backdrop-blur border border-brand-orange/30 rounded-xl flex items-center justify-center group-hover:bg-brand-orange transition-all duration-400">
                    <Icon className="text-brand-orange group-hover:text-white transition-colors duration-300" size={22} />
                  </div>
                  {/* Bottom text */}
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                    <h3 className="font-display font-bold text-white text-lg leading-tight mb-1">{service.title}</h3>
                    <p className="text-gray-300 text-sm leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-400 line-clamp-2 mb-3">
                      {service.shortDesc}
                    </p>
                    <Link to={`/services#${service.id}`}
                      className="inline-flex items-center gap-1.5 text-brand-orange text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-400 hover:gap-2.5">
                      Explore <MdArrowForward size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Rest — compact list cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {rest.map((service, i) => {
            const Icon = iconMap[service.iconName] || MdBusiness;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group bg-white dark:bg-navy-900 border border-gray-100 dark:border-navy-800 rounded-xl p-5 hover:border-brand-orange/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:bg-brand-orange transition-colors duration-300">
                  <Icon className="text-brand-orange group-hover:text-white transition-colors" size={20} />
                </div>
                <h3 className="font-display font-semibold text-sm text-navy-950 dark:text-white leading-tight">{service.title}</h3>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/services" className="btn-primary text-base px-8 py-4">
            View All Services <MdChevronRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
