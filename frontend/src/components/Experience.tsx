import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "../constants";

const Experience = () => {
  const [selectedCert, setSelectedCert] = useState<any | null>(null);

  return (
    <section id="certifications" className="relative w-full py-24 px-6 bg-black-100 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider">What I have achieved so far</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Certifications.</h2>
        </motion.div>

        {/* Certifications Grid */}
        <div>
          <div className="font-mono text-[14px] text-cyan-400 mb-10 flex items-center gap-2 select-none">
            <span className="text-slate-500">cat</span> ./achievements
            <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0b1120]/80 border border-slate-800/80 rounded-2xl p-5 hover:border-cyan-500/50 hover:bg-[#111827]/80 transition-all duration-300 relative group flex flex-col justify-between"
              >
                {/* Ambient glow behind card */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300 -z-10 pointer-events-none" />

                <div>
                  {/* Card Header */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-9 h-9 rounded-lg bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <span className="font-mono text-[13px] text-slate-500 font-bold select-none">{cert.date}</span>
                  </div>

                  {/* Certificate Image Preview */}
                  <div 
                    onClick={() => setSelectedCert(cert)}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-800/60 bg-black/40 group/img cursor-pointer mb-5 shadow-inner"
                  >
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover group-hover/img:scale-[1.03] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="bg-black/80 text-cyan-400 px-4 py-2 rounded-full text-xs font-mono font-medium border border-cyan-400/40 select-none shadow-md">
                        View Certificate
                      </span>
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div>
                  <h4 className="text-white font-bold text-lg leading-snug group-hover:text-cyan-400 transition-colors duration-200 font-sans">
                    {cert.title}
                  </h4>
                  <p className="text-slate-400 text-sm mt-1.5 font-medium font-sans">
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificate Modal Lightbox (Rendered in React Portal to overlay everything) */}
        {createPortal(
          <AnimatePresence>
            {selectedCert && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/85 backdrop-blur-md z-[99999] flex items-center justify-center p-4 md:p-6"
                onClick={() => setSelectedCert(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 350 }}
                  className="relative max-w-xl md:max-w-2xl w-full bg-[#0b1120] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-800 text-white w-9 h-9 rounded-full flex items-center justify-center border border-slate-700/50 transition-colors duration-200 z-[100000] cursor-pointer"
                    aria-label="Close modal"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  {/* Image Container */}
                  <div className="w-full bg-black/20 flex items-center justify-center p-2">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="w-full h-auto max-h-[55vh] object-contain rounded-lg shadow-md"
                    />
                  </div>
                  
                  {/* Details Footer */}
                  <div className="p-5 text-left bg-[#050816] border-t border-slate-800/80">
                    <span className="text-cyan-400 text-xs font-mono uppercase tracking-wider">{selectedCert.date}</span>
                    <h3 className="text-white text-lg md:text-xl font-bold mt-1 font-sans">{selectedCert.title}</h3>
                    <p className="text-slate-400 text-sm mt-1 font-sans">{selectedCert.issuer}</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </section>
  );
};

export default Experience;
