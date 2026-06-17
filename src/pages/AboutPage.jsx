import { motion } from 'framer-motion';
import { MdCheckCircle } from 'react-icons/md';
import { FaUsers, FaTools, FaDraftingCompass, FaMedal } from 'react-icons/fa';
import SectionHeader from '../components/common/SectionHeader.jsx';
import ContactCTA from '../components/home/ContactCTA.jsx';
import { TIMELINE } from '../data/index.js';

const strengths = [
  { Icon: FaUsers, title: "Skilled Professionals", desc: "A team of 30+ experienced fabricators, welders, glaziers, and site engineers." },
  { Icon: FaTools, title: "Advanced Infrastructure", desc: "Modern workshop equipped with CNC cutting, bending, and welding machinery." },
  { Icon: FaDraftingCompass, title: "In-House Design Team", desc: "CAD/BIM-capable designers who translate your vision into precise shop drawings." },
  { Icon: FaMedal, title: "Quality Assurance", desc: "Multi-stage QC process from material inspection to final handover." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0a0f1e] py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/198dcaf7-24cc-472b-a925-b96900f3ff26.jpg"
            alt="About Laxmi Facade" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/90 via-[#0a0f1e]/60 to-[#0a0f1e]/30" />
        </div>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(249,115,22,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.12) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-10 right-20 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-brand-orange" />
              <span className="section-label">Our Story</span>
            </div>
            <h1 className="section-title-white mb-5 max-w-2xl leading-tight">
              About <span className="text-brand-orange">Laxmi Facade</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">15 years of engineering excellence — building Bhubaneswar's finest facades, one project at a time.</p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative">
                <img src="/images/82406b14-35df-4901-8e11-39b9883ab68a.jpg"
                  alt="Laxmi Facade office" className="rounded-2xl w-full h-96 object-cover shadow-2xl" />
                <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white rounded-2xl p-5 shadow-xl hidden md:block">
                  <div className="font-display font-bold text-3xl">500+</div>
                  <div className="text-orange-100 text-sm">Projects Delivered</div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="section-label mb-3">Our Story</p>
              <h2 className="section-title mb-5">From a Small Workshop to Bhubaneswar's Trusted Facade Experts</h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                Laxmi Facade was founded in 2010 by a small team of passionate fabricators in Airoli, Navi Bhubaneswar. Starting with basic aluminium windows and doors, we quickly built a reputation for quality craftsmanship and reliable delivery.
              </p>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                Over the years, we invested in advanced machinery, skilled manpower, and in-house design capabilities. Today, we handle complex facade systems — from structural glazing and spider systems to ACP cladding and unitized curtain walls.
              </p>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                Our journey is defined by the trust of over 200 satisfied clients, 500+ completed projects, and a relentless commitment to quality and innovation in every job we undertake.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[['Our Mission','To deliver premium fabrication solutions that enhance architectural vision and stand the test of time.'], ['Our Vision','To be the most trusted facade and fabrication company across Maharashtra by 2030.']].map(([title, text]) => (
                  <div key={title} className="bg-gray-50 dark:bg-navy-800 rounded-xl p-4">
                    <h4 className="font-display font-semibold text-navy-950 dark:text-white text-sm mb-2">{title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 bg-gray-50 dark:bg-navy-950">
        <div className="container-custom">
          <SectionHeader label="Our Strengths" title="What Sets Us Apart" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map(({ Icon, title, desc }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon className="text-brand-orange" size={28} />
                </div>
                <h3 className="font-display font-semibold text-lg text-navy-950 dark:text-white mb-2">{title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/8e81d433-4e12-4bb6-831c-38ee6d0ef041.jpg"
            alt="Architecture background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/95 via-navy-950/80 to-navy-950/95" />
        </div>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(249,115,22,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="container-custom relative z-10">
          <SectionHeader label="Our Journey" title="A Decade of Excellence" light center />
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-orange/30 hidden md:block" />
            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass-card p-6 inline-block w-full md:max-w-md">
                      <h3 className="font-display font-bold text-white text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-14 h-14 bg-brand-orange rounded-full flex items-center justify-center font-display font-bold text-white text-sm z-10 shadow-lg shadow-orange-500/30">
                    {item.year.slice(2)}
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
