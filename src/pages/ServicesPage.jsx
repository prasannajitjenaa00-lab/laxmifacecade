import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdCheckCircle, MdChevronRight, MdPhone, MdArrowForward } from 'react-icons/md';
import { SERVICES, COMPANY } from '../data/index.js';
import ContactCTA from '../components/home/ContactCTA.jsx';

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0f1e] py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/1200x/f3/c7/bd/f3c7bdf5649bc2a1ae022ad10bf1039f.jpg"
            alt="Services hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/90 via-[#0a0f1e]/60 to-[#0a0f1e]/30" />
        </div>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(249,115,22,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.12) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-brand-orange" />
              <span className="section-label">Full Service Capability</span>
            </div>
            <h1 className="section-title-white mb-5 max-w-2xl leading-tight">
              Complete Facade &<br /><span className="text-brand-orange">Fabrication Services</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
              Precision-engineered aluminium, glazing, and facade solutions —
              from concept design through installation and maintenance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services alternating layout */}
      <section className="bg-white dark:bg-navy-900">
        {SERVICES.map((service, i) => (
          <div key={service.id} id={service.id}
            className={`py-16 md:py-20 ${i % 2 === 0 ? 'bg-white dark:bg-navy-900' : 'bg-gray-50 dark:bg-navy-950'}`}>
            <div className="container-custom">
              <div className={`grid lg:grid-cols-2 gap-14 items-center`}>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.6 }}
                  className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img src={service.image} alt={service.title}
                      className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                    {/* Service tag */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-orange text-white text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-lg shadow-lg">
                        {service.title}
                      </span>
                    </div>
                    {/* Decorative corner */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-brand-orange/60 rounded-br-lg" />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.6 }}
                  className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-brand-orange font-body font-bold text-xs uppercase tracking-widest">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px w-8 bg-brand-orange/50" />
                  </div>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-navy-950 dark:text-white mb-4 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-7 text-base">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-7 mb-8">
                    <div>
                      <h4 className="font-display font-semibold text-navy-950 dark:text-white mb-3 text-xs uppercase tracking-widest border-b border-gray-100 dark:border-navy-700 pb-2">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map(f => (
                          <li key={f} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <MdCheckCircle className="text-brand-orange flex-shrink-0 mt-0.5" size={16} />{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-navy-950 dark:text-white mb-3 text-xs uppercase tracking-widest border-b border-gray-100 dark:border-navy-700 pb-2">
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map(b => (
                          <li key={b} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <MdArrowForward className="text-brand-orange flex-shrink-0 mt-0.5" size={15} />{b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link to="/contact" className="btn-primary">
                      Get Quote <MdChevronRight />
                    </Link>
                    <a href={`tel:${COMPANY.phone}`} className="btn-outline">
                      <MdPhone /> Call Us
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <ContactCTA />
    </>
  );
}
