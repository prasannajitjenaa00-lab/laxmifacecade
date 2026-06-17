import { motion } from 'framer-motion';
import { MdVerified, MdDownload, MdBusinessCenter, MdCreditCard, MdReceiptLong } from 'react-icons/md';
import SectionHeader from '../components/common/SectionHeader.jsx';
import { COMPANY } from '../data/index.js';

const certs = [
  {
    icon: MdReceiptLong,
    title: "GST Registration Certificate",
    number: "27XXXXX1234X1ZX",
    state: "Maharashtra (State Code: 27)",
    issued: "July 2017",
    status: "Active",
    desc: "Goods and Services Tax registration certificate issued by the Government of India for Laxmi Facade.",
    color: "from-blue-500/10 to-blue-600/5",
    iconColor: "text-blue-500",
    borderColor: "border-blue-500/20",
  },
  {
    icon: MdBusinessCenter,
    title: "Udyam Registration Certificate",
    number: "UDYAM-MH-XX-XXXXXXX",
    category: "Micro Enterprise",
    issued: "2021",
    status: "Active",
    desc: "Ministry of Micro, Small & Medium Enterprises — Udyam Registration for Laxmi Facade as a registered MSME.",
    color: "from-green-500/10 to-green-600/5",
    iconColor: "text-green-500",
    borderColor: "border-green-500/20",
  },
  {
    icon: MdCreditCard,
    title: "PAN Card Details",
    pan: "XXXXX1234X",
    entity: "Proprietorship / Partnership Firm",
    issued: "2010",
    status: "Valid",
    desc: "Permanent Account Number issued by the Income Tax Department of India to Laxmi Facade for all tax compliance.",
    color: "from-brand-orange/10 to-orange-600/5",
    iconColor: "text-brand-orange",
    borderColor: "border-brand-orange/20",
  },
];

export default function CertificationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0f1e] py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/1200x/f3/c7/bd/f3c7bdf5649bc2a1ae022ad10bf1039f.jpg"
            alt="Certifications hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/90 via-[#0a0f1e]/60 to-[#0a0f1e]/30" />
        </div>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(249,115,22,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.12) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        {/* Decorative blobs */}
        <div className="absolute top-10 right-20 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-40 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-brand-orange" />
              <span className="section-label">Verified & Compliant</span>
            </div>
            <h1 className="section-title-white mb-5 max-w-2xl leading-tight">
              Our <span className="text-brand-orange">Certifications</span><br />& Credentials
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
              Laxmi Facade is fully registered, tax-compliant, and recognized
              as a legitimate MSME enterprise by the Government of India.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-navy-950">
        <div className="container-custom">
          <SectionHeader label="Legal Credentials" title="Our Registrations & Compliance"
            subtitle="All certifications are current, valid, and available for verification upon request." />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {certs.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  className={`bg-white dark:bg-navy-900 rounded-2xl p-8 border ${cert.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} pointer-events-none`} />
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-white dark:bg-navy-800 shadow flex items-center justify-center mb-6`}>
                      <Icon className={cert.iconColor} size={30} />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                        <MdVerified size={12} /> {cert.status}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-navy-950 dark:text-white mb-3">{cert.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">{cert.desc}</p>

                    <div className="space-y-2 text-sm border-t border-gray-100 dark:border-navy-700 pt-4">
                      {cert.number && <div className="flex justify-between"><span className="text-gray-400">Number</span><span className="font-mono font-semibold text-navy-950 dark:text-white text-xs">{cert.number}</span></div>}
                      {cert.pan && <div className="flex justify-between"><span className="text-gray-400">PAN</span><span className="font-mono font-semibold text-navy-950 dark:text-white text-xs">{cert.pan}</span></div>}
                      {cert.category && <div className="flex justify-between"><span className="text-gray-400">Category</span><span className="font-semibold text-navy-950 dark:text-white text-xs">{cert.category}</span></div>}
                      {cert.entity && <div className="flex justify-between"><span className="text-gray-400">Entity</span><span className="font-semibold text-navy-950 dark:text-white text-xs">{cert.entity}</span></div>}
                      {cert.state && <div className="flex justify-between"><span className="text-gray-400">State</span><span className="font-semibold text-navy-950 dark:text-white text-xs">{cert.state}</span></div>}
                      <div className="flex justify-between"><span className="text-gray-400">Since</span><span className="font-semibold text-navy-950 dark:text-white text-xs">{cert.issued}</span></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Company info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-navy-950 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
            <div className="relative z-10">
              <MdVerified className="text-brand-orange mx-auto mb-4" size={48} />
              <h3 className="section-title-white mb-4">Verified Business Entity</h3>
              <p className="text-gray-300 max-w-2xl mx-auto mb-2">
                Laxmi Facade is a legitimate, government-registered business entity operating from Airoli, Navi Mumbai. All our credentials are available for due diligence and vendor registration purposes.
              </p>
              <p className="text-gray-400 text-sm mt-4">{COMPANY.address}</p>
              <p className="text-brand-orange font-semibold mt-2">{COMPANY.email}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
