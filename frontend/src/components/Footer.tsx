import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { navLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full bg-[#050816] pt-16 pb-8 px-6 relative overflow-hidden z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo / Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
            <h2 className="text-white text-2xl font-black mb-4">
              Akshat <span className="text-cyan-400">Agarwal</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building immersive digital experiences with modern frontend engineering and scalable full-stack systems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold mb-4">Socials</h3>
            <div className="flex gap-4">
              <a href="https://github.com/Akshat9205" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/akshat-agarwal-83b7332b4/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#0077b5] hover:bg-white/10 transition-all duration-300">
                <FaLinkedin size={18} />
              </a>
              <a href="mailto:agakshat112005@gmail.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300">
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Animated Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mt-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Akshat Agarwal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
