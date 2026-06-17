import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { MdStar, MdFormatQuote } from 'react-icons/md';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../../data/index.js';
import SectionHeader from '../common/SectionHeader.jsx';

// Client company logo placeholders (letter-based)
const companyColors = ['#F97316', '#3B82F6', '#10B981', '#8B5CF6'];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-navy-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-orange/3 rounded-full blur-[100px]" />

      <div className="container-custom relative z-10">
        <SectionHeader
          label="Client Voices"
          title="Trusted By Industry Leaders"
          subtitle="Developers, architects, and contractors across Bhubaneswar trust Laxmi Facade."
        />

        {/* Client logos strip */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-6 mb-14 pb-12 border-b border-gray-200 dark:border-navy-800">
          {['Kalpataru', 'Lodha', 'Marathon', 'Rustomjee', 'Godrej', 'Hiranandani'].map((co, i) => (
            <div key={co}
              className="px-6 py-3 bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 rounded-xl text-gray-500 dark:text-gray-400 font-display font-bold text-sm hover:border-brand-orange/40 hover:text-brand-orange transition-all duration-300 cursor-default shadow-sm">
              {co}
            </div>
          ))}
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          className="pb-14">
          {TESTIMONIALS.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-navy-900 rounded-2xl p-7 shadow-lg border border-gray-100 dark:border-navy-800 h-full flex flex-col hover:border-brand-orange/30 hover:shadow-xl transition-all duration-300">

                {/* Quote icon + stars row */}
                <div className="flex items-start justify-between mb-5">
                  <MdFormatQuote className="text-brand-orange opacity-60" size={44} />
                  <div className="flex items-center gap-0.5">
                    {[...Array(t.rating)].map((_, j) => (
                      <MdStar key={j} className="text-brand-orange" size={16} />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 italic flex-1">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-navy-800">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-white text-base flex-shrink-0"
                    style={{ background: companyColors[i % companyColors.length] }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-navy-950 dark:text-white text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role} · <span className="text-brand-orange">{t.company}</span></p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
