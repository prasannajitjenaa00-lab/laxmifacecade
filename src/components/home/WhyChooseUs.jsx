import { motion } from 'framer-motion';
import { MdGroups, MdVerified, MdDesignServices, MdSchedule, MdAttachMoney, MdBuild } from 'react-icons/md';
import { WHY_CHOOSE } from '../../data/index.js';
import SectionHeader from '../common/SectionHeader.jsx';

const iconMap = { MdGroups, MdVerified, MdDesignServices, MdSchedule, MdAttachMoney, MdBuild };

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background architecture image */}
      <div className="absolute inset-0">
        <img
          src="https://i.pinimg.com/1200x/89/28/02/8928023122b8df6797a0fa29c7623d0c.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      {/* Gradient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange/4 rounded-full blur-[120px] pointer-events-none" />
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-15"
        style={{ backgroundImage: 'linear-gradient(rgba(249,115,22,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.08) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="container-custom relative z-10">
        <SectionHeader
          label="Why Choose Us"
          title="The Laxmi Facade Advantage"
          subtitle="Six reasons why leading developers and contractors trust us with their most demanding projects."
          light
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = iconMap[item.iconName] || MdBuild;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-brand-orange/40 transition-all duration-500 cursor-default"
                style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)' }}>

                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/0 to-brand-orange/0 group-hover:from-brand-orange/8 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

                {/* Number label */}
                <div className="absolute top-5 right-5 text-white/5 font-display font-bold text-7xl leading-none select-none group-hover:text-brand-orange/10 transition-colors duration-500">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="relative p-7">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl border border-brand-orange/30 flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-400"
                    style={{ background: 'rgba(249,115,22,0.1)' }}>
                    <Icon className="text-brand-orange group-hover:text-white transition-colors duration-300" size={26} />
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
