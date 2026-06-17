import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { STATS } from '../../data/index.js';

function CountUp({ value, duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(value);
    const suffix = value.replace(/[0-9]/g, '');
    if (isNaN(num)) { setDisplay(value); return; }
    const step = Math.max(1, Math.ceil(num / (duration * 50)));
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, num);
      setDisplay(current + suffix);
      if (current >= num) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return <span ref={ref}>{display}</span>;
}

export default function Stats() {
  return (
    <section className="relative bg-brand-orange overflow-hidden">
      {/* Subtle diagonal pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(0,0,0,0.1) 30px, rgba(0,0,0,0.1) 31px)' }} />

      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              className="text-center text-white group">
              <div className="font-display font-bold text-5xl md:text-6xl mb-2 leading-none tabular-nums">
                <CountUp value={stat.value} />
              </div>
              <div className="h-0.5 w-8 bg-white/40 mx-auto mb-2 group-hover:w-16 transition-all duration-500" />
              <div className="text-orange-100 font-semibold text-xs uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
