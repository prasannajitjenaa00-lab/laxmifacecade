import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MdMenu, MdClose, MdLightMode, MdDarkMode, MdPhone, MdChevronRight } from 'react-icons/md';
import { COMPANY } from '../../data/index.js';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar({ isDark, setIsDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-orange text-white text-xs py-1.5 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <span className="opacity-90">Leading Aluminium, Glazing & Facade Experts — Navi Mumbai</span>
          <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-1.5 hover:opacity-80 font-semibold transition-opacity">
            <MdPhone size={13} />{COMPANY.phone}
          </a>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-navy-950/95 backdrop-blur-xl shadow-2xl shadow-black/40 border-b border-white/5'
          : 'bg-navy-950'
      }`}>
        <nav className="container-custom flex items-center justify-between h-16 md:h-[68px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center font-display font-bold text-white text-lg shadow-lg shadow-orange-500/30 group-hover:scale-105 transition-transform duration-300">
              LF
            </div>
            <div className="leading-tight">
              <div className="text-white font-display font-bold text-[15px] leading-none tracking-wide">Laxmi Facade</div>
              <div className="text-gray-500 text-[10px] leading-none mt-1 tracking-widest uppercase">Aluminium · Glazing · Facade</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map(item => (
              <NavLink key={item.path} to={item.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-brand-orange'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`
                }>
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-brand-orange rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-gray-400 hover:text-brand-orange transition-colors rounded-lg hover:bg-white/5">
              {isDark ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
            </button>
            <Link to="/contact"
              className="hidden md:flex btn-primary text-sm py-2.5 px-5">
              Free Quote <MdChevronRight size={16} />
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-brand-orange transition-colors rounded-lg hover:bg-white/5">
              {menuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-[calc(68px+28px)] md:top-[96px] left-0 right-0 bg-navy-950/98 backdrop-blur-xl z-40 border-t border-white/10 shadow-2xl">
            <div className="container-custom py-5 flex flex-col gap-1">
              {navItems.map(item => (
                <NavLink key={item.path} to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-3.5 rounded-xl font-medium flex items-center justify-between text-[15px] transition-all duration-200 ${
                      isActive
                        ? 'text-brand-orange bg-brand-orange/10 border border-brand-orange/20'
                        : 'text-gray-300 hover:text-brand-orange hover:bg-white/5'
                    }`
                  }>
                  {item.label} <MdChevronRight size={18} className="text-gray-500" />
                </NavLink>
              ))}
              <div className="pt-3 mt-2 border-t border-white/10 flex gap-3">
                <a href={`tel:${COMPANY.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 text-sm bg-white/5 text-gray-300 px-4 py-3 rounded-xl hover:bg-brand-orange/10 hover:text-brand-orange transition-colors">
                  <MdPhone size={16} /> {COMPANY.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
