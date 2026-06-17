import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdChevronRight, MdCheckCircle, MdVerified, MdBusiness, MdGroups } from 'react-icons/md';

const highlights = [
  'Serving Bhubaneswar & MMR region since 2010',
  'Full turnkey facade solutions — design to handover',
  'Certified professionals with IS-code expertise',
  'In-house design and engineering team',
];

function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target);
    const step = Math.ceil(num / (duration * 50));
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, num);
      setCount(current);
      if (current >= num) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutPreview() {
  return (
    <section className="py-24 bg-white dark:bg-navy-900 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Magazine-style image layout */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative">

            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
              <img
                src="/images/5be21f2f-5cc1-456f-b3b4-0aeb468c5e1b.jpg"
                alt="Laxmi Facade premium facade"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy-950/20 to-transparent" />
            </div>

            {/* Secondary image — overlapping */}
            <div className="absolute -bottom-8 -right-6 w-52 h-44 rounded-xl overflow-hidden border-4 border-white dark:border-navy-900 shadow-2xl hidden md:block">
              <img
                src="/images/05c60759-9db3-4b24-83ab-2892d040af9e.jpg"
                alt="Fabrication team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute -top-6 -left-5 bg-brand-orange text-white rounded-2xl p-5 shadow-2xl shadow-orange-500/40 hidden md:flex flex-col items-center">
              <div className="font-display font-bold text-4xl leading-none">15+</div>
              <div className="text-orange-100 text-xs mt-1 text-center font-semibold">Years of<br />Excellence</div>
            </div>

            {/* Decorative line */}
            <div className="absolute top-8 -left-4 w-0.5 h-32 bg-gradient-to-b from-brand-orange/60 to-transparent hidden md:block" />
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>

            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-brand-orange" />
              <span className="section-label">About Laxmi Facade</span>
            </div>
            <h2 className="section-title mb-6 dark:text-white">
              Bhubaneswar's Premier<br />
              <span className="text-brand-orange">Facade & Fabrication</span><br />
              Specialists
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4 text-base">
              Founded in 2010, Laxmi Facade has grown into one of Navi Bhubaneswar's most trusted names in aluminium,
              glazing, and facade solutions. We combine technical expertise with creative design to deliver projects built to last.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 text-base">
              From ACP cladding on residential towers to complex structural glazing for commercial hubs,
              our portfolio speaks for itself. Every project benefits from in-house design capability,
              quality-controlled installation, and post-project support.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map(h => (
                <li key={h} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <MdCheckCircle className="text-brand-orange flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            {/* Animated counters row */}
            <div className="grid grid-cols-3 gap-4 mb-10 p-5 bg-gray-50 dark:bg-navy-800 rounded-2xl border border-gray-100 dark:border-navy-700">
              {[
                { value: 500, suffix: '+', label: 'Projects', icon: MdBusiness },
                { value: 15, suffix: '+', label: 'Years', icon: MdVerified },
                { value: 100, suffix: '%', label: 'Satisfaction', icon: MdGroups },
              ].map(({ value, suffix, label, icon: Icon }) => (
                <div key={label} className="text-center">
                  <Icon className="text-brand-orange mx-auto mb-1" size={18} />
                  <div className="font-display font-bold text-2xl text-navy-950 dark:text-white">
                    <AnimatedCounter target={value} suffix={suffix} />
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs font-medium">{label}</div>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-outline">
              Read More About Us <MdChevronRight />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
