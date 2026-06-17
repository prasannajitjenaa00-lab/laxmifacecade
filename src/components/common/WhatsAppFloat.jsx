import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { COMPANY } from '../../data/index.js';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="whatsapp-float flex items-end flex-col gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="bg-white rounded-2xl shadow-2xl p-4 w-64 border border-gray-100">
            <p className="font-display font-semibold text-navy-950 text-sm mb-1">Chat with us!</p>
            <p className="text-gray-500 text-xs mb-3 leading-relaxed">Get a free quote for your project. We respond within minutes.</p>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=Hello! I'm interested in your fabrication services. Can you provide a quote?`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm py-2.5 rounded-xl w-full transition-colors">
              <FaWhatsapp size={18} /> Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        {!showTooltip && (
          <motion.span
            initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
            className="bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
            Chat with us
          </motion.span>
        )}
        <button
          onClick={() => setShowTooltip(!showTooltip)}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-500/40 transition-all duration-300 hover:scale-110"
          title="Chat on WhatsApp">
          {showTooltip ? <MdClose size={26} /> : <FaWhatsapp size={28} />}
        </button>
      </div>
    </div>
  );
}
