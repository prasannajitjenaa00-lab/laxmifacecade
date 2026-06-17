import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { MdChevronRight, MdPlayArrow, MdVerified, MdStar } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { COMPANY } from '../../data/index.js';

const trustBadges = ['GST Registered', 'Udyam Certified', 'ISO Compliant', 'Pan Bhubaneswar'];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f1e]">
      {/* Parallax BG */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="/images/c9bbeede-8503-44d9-8d5b-ed27f5eaef89.jpg"
          alt="Glass facade architecture"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e] via-[#0a0f1e]/80 to-[#0a0f1e]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-[#0a0f1e]/20" />
      </motion.div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'linear-gradient(rgba(249,115,22,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.15) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-brand-orange to-transparent" />

      <div className="container-custom relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Content */}
          <motion.div style={{ y: textY }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-8">
              <div className="h-px w-14 bg-brand-orange" />
              <span className="text-brand-orange font-body font-semibold text-sm uppercase tracking-widest">
                Bhubaneswar's Trusted Fabricators Since 2010
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display font-bold text-5xl md:text-6xl xl:text-7xl text-white leading-[1.05] mb-6">
              Precision Facade
              <br />
              <span className="text-brand-orange">Engineering</span>
              <br />
              <span className="text-gray-300 text-4xl md:text-5xl xl:text-6xl">& Glazing Experts</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              From structural glazing to spider systems, ACP cladding to unitized facades —
              we build architectural statements that last decades.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-12">
              <Link to="/contact"
                className="group relative bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 text-base overflow-hidden">
                <span className="relative z-10">Get Free Quote</span>
                <MdChevronRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects"
                className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/25 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-0.5 text-base">
                <MdPlayArrow size={20} /> View Portfolio
              </Link>
              <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-4 rounded-lg transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-0.5 text-base">
                <FaWhatsapp size={20} /> WhatsApp
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap gap-x-6 gap-y-2">
              {trustBadges.map(b => (
                <div key={b} className="flex items-center gap-2 text-sm text-gray-400">
                  <MdVerified className="text-brand-orange" size={16} />
                  {b}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Featured Image + Floating Stats */}
          <motion.div
            initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden lg:block relative">

            {/* Main featured project image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10">
              <img
                src="/images/05c60759-9db3-4b24-83ab-2892d040af9e.jpg"
                alt="Premium facade project"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/80 via-transparent to-transparent" />
              {/* Project label */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                  <p className="text-brand-orange text-xs font-semibold uppercase tracking-widest mb-1">Featured Project</p>
                  <p className="text-white font-display font-bold text-lg leading-tight">Gurukrupa Param</p>
                  <p className="text-gray-300 text-sm">Navi Mumbai — Structural Glazing + Facade</p>
                </div>
              </div>
            </div>

            {/* Floating stats — top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }}
              className="absolute -top-6 -right-6 bg-brand-orange rounded-2xl p-5 shadow-2xl shadow-orange-500/40 text-center min-w-[130px]">
              <div className="font-display font-bold text-4xl text-white leading-none">500+</div>
              <div className="text-orange-100 text-xs mt-1 font-semibold uppercase tracking-wider">Projects Done</div>
            </motion.div>

            {/* Floating stats — bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1 }}
              className="absolute -bottom-6 -right-1 bg-[#0a0f1e]/95 backdrop-blur border border-white/20 rounded-2xl p-5 shadow-2xl min-w-[160px]">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => <MdStar key={i} className="text-brand-orange" size={14} />)}
              </div>
              <div className="font-display font-bold text-2xl text-white leading-none">15+</div>
              <div className="text-gray-400 text-xs mt-1">Years of Excellence</div>
            </motion.div>

            {/* Decorative corner accent */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-brand-orange/60 rounded-tl-lg pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-brand-orange/60 rounded-br-lg pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-500 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-brand-orange rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
