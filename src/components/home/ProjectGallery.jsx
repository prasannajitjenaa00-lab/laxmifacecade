import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose, MdLocationOn, MdZoomIn, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { PROJECT_GALLERY } from '../../data/index.js';
import SectionHeader from '../common/SectionHeader.jsx';

const categories = ['All', 'ACP Cladding', 'Glazing', 'Spider Systems', 'Canopies', 'Facade', 'Aluminium Work'];

// Masonry heights for variety
const heights = ['h-52', 'h-72', 'h-60', 'h-48', 'h-64', 'h-56', 'h-48', 'h-72'];

export default function ProjectGallery() {
  const [lightbox, setLightbox] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? PROJECT_GALLERY.slice(0, 9)
    : PROJECT_GALLERY.filter(p => p.category === activeFilter).slice(0, 9);

  return (
    <section className="py-24 bg-white dark:bg-navy-900">
      <div className="container-custom">
        <SectionHeader
          label="Our Portfolio"
          title="Featured Projects"
          subtitle="Precision-crafted facades, glazing systems, and fabrication work across Mumbai & MMR."
        />

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-brand-orange text-white shadow-lg shadow-orange-500/30 scale-105'
                  : 'bg-gray-100 dark:bg-navy-800 text-gray-600 dark:text-gray-300 hover:bg-brand-orange/10 hover:text-brand-orange'
              }`}>
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Premium Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((proj, i) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className={`break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer shadow-lg ${heights[i % heights.length]} mb-4`}
                onClick={() => setLightbox(proj)}>

                <img src={proj.image} alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />

                {/* Default gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Category tag — always visible */}
                <div className="absolute top-3 left-3">
                  <span className="bg-brand-orange/90 backdrop-blur text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                    {proj.category}
                  </span>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-3 right-3 w-9 h-9 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/30">
                  <MdZoomIn className="text-white" size={18} />
                </div>

                {/* Bottom info — slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                  <p className="text-white font-display font-bold text-sm leading-tight mb-0.5">{proj.title}</p>
                  <p className="text-gray-300 text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <MdLocationOn size={12} />{proj.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-14">
          <Link to="/projects" className="btn-primary text-base px-8 py-4">
            View All Projects <MdChevronRight size={20} />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="lightbox-overlay" onClick={() => setLightbox(null)}>
            <motion.div
              initial={{ scale: 0.85, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.85, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-4xl max-h-[90vh] mx-4" onClick={e => e.stopPropagation()}>
              <img src={lightbox.image} alt={lightbox.title}
                className="rounded-2xl max-h-[80vh] object-cover w-full" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-2xl">
                <span className="bg-brand-orange text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                  {lightbox.category}
                </span>
                <p className="text-white font-display font-bold text-2xl mt-3 mb-1">{lightbox.title}</p>
                <p className="text-gray-300 text-sm flex items-center gap-1.5">
                  <MdLocationOn size={14} />{lightbox.location}
                </p>
              </div>
              <button onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-11 h-11 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-orange transition-colors border border-white/20">
                <MdClose size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
