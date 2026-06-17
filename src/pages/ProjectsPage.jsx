import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose, MdLocationOn, MdZoomIn, MdGridView, MdViewModule } from 'react-icons/md';
import { PROJECT_GALLERY } from '../data/index.js';
import ContactCTA from '../components/home/ContactCTA.jsx';

const categories = ['All', 'ACP Cladding', 'Glazing', 'Spider Systems', 'Canopies', 'Facade', 'Aluminium Work'];

const heights = ['h-56', 'h-72', 'h-64', 'h-52', 'h-72', 'h-56', 'h-64', 'h-48', 'h-60', 'h-72', 'h-52', 'h-64'];

export default function ProjectsPage() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const [viewMode, setViewMode] = useState('masonry');

  const filtered = active === 'All'
    ? PROJECT_GALLERY
    : PROJECT_GALLERY.filter(p => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0f1e] py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/c9bbeede-8503-44d9-8d5b-ed27f5eaef89.jpg"
            alt="Projects hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/90 via-[#0a0f1e]/50 to-[#0a0f1e]/20" />
        </div>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(249,115,22,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.12) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-brand-orange" />
              <span className="section-label">Our Portfolio</span>
            </div>
            <h1 className="section-title-white mb-5 max-w-2xl">
              Projects We're<br /><span className="text-brand-orange">Proud Of</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl">
              500+ completed projects across Mumbai and Navi Mumbai — from residential towers to commercial landmarks.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="container-custom">

          {/* Filter row + view toggle */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActive(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    active === cat
                      ? 'bg-brand-orange text-white shadow-lg shadow-orange-500/30 scale-105'
                      : 'bg-gray-100 dark:bg-navy-800 text-gray-600 dark:text-gray-300 hover:bg-brand-orange/10 hover:text-brand-orange'
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
            {/* View toggle */}
            <div className="flex items-center bg-gray-100 dark:bg-navy-800 rounded-xl p-1 gap-1 self-start md:self-auto flex-shrink-0">
              <button onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'masonry' ? 'bg-brand-orange text-white shadow' : 'text-gray-500 dark:text-gray-400 hover:text-brand-orange'}`}>
                <MdViewModule size={20} />
              </button>
              <button onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-brand-orange text-white shadow' : 'text-gray-500 dark:text-gray-400 hover:text-brand-orange'}`}>
                <MdGridView size={20} />
              </button>
            </div>
          </div>

          {/* Masonry grid */}
          {viewMode === 'masonry' ? (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
              <AnimatePresence>
                {filtered.map((proj, i) => (
                  <motion.div
                    key={proj.id} layout
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.3) }}
                    className={`break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer shadow-lg ${heights[i % heights.length]} mb-4`}
                    onClick={() => setLightbox(proj)}>
                    <img src={proj.image} alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-navy-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                    <div className="absolute top-3 left-3">
                      <span className="bg-brand-orange/90 text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                        {proj.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <MdZoomIn className="text-white" size={16} />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                      <p className="text-white font-display font-bold text-sm">{proj.title}</p>
                      <p className="text-gray-300 text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <MdLocationOn size={11} />{proj.location}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            /* Uniform grid */
            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <AnimatePresence>
                {filtered.map((proj, i) => (
                  <motion.div
                    key={proj.id} layout
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg aspect-square"
                    onClick={() => setLightbox(proj)}>
                    <img src={proj.image} alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-brand-orange text-xs font-bold uppercase tracking-wide">{proj.category}</p>
                        <p className="text-white font-semibold text-sm leading-tight">{proj.title}</p>
                        <p className="text-gray-300 text-xs flex items-center gap-0.5 mt-1"><MdLocationOn size={11} />{proj.location}</p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <MdZoomIn className="text-white" size={16} />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">No projects in this category yet.</div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="lightbox-overlay" onClick={() => setLightbox(null)}>
            <motion.div
              initial={{ scale: 0.85, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.85 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-4xl max-h-[90vh] mx-4" onClick={e => e.stopPropagation()}>
              <img src={lightbox.image} alt={lightbox.title}
                className="rounded-2xl max-h-[80vh] object-cover w-full" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-2xl">
                <span className="bg-brand-orange text-white text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full">
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

      <ContactCTA />
    </>
  );
}
