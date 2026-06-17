import { motion } from 'framer-motion';

export default function SectionHeader({ label, title, subtitle, light = false, center = true }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? 'text-center' : ''}`}>
      {label && <p className="section-label mb-3">{label}</p>}
      <h2 className={light ? 'section-title-white' : 'section-title'}>{title}</h2>
      {subtitle && <p className={`mt-4 text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-500'}`}>{subtitle}</p>}
    </motion.div>
  );
}
