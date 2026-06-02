import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaImages, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { projects } from "../constants";
import { useRef, useState } from "react";
import { cn } from "../utils/cn";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.1 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative w-full rounded-[30px] glassmorphism overflow-hidden group border border-white/10"
    >
      {/* Animated spotlight hover */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-[30px] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,246,255,0.06), transparent 40%)`
        }}
      />

      <div className={cn(
        "flex flex-col h-full w-full",
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      )}>
        {/* Project Image */}
        <div className="w-full lg:w-1/2 p-6 lg:p-8">
          <div className="relative w-full h-[250px] sm:h-[350px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-contain bg-[#050816] transform group-hover:scale-102 transition-transform duration-700"
            />
            {/* Overlay buttons */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <a 
                href={project.source_code_link} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex justify-center items-center hover:bg-white/20 transition-colors hover:scale-110"
                title="GitHub Repository"
              >
                <FaGithub size={24} className="text-white" />
              </a>
              
              <button 
                onClick={() => {
                  setActiveImgIndex(0);
                  setIsGalleryOpen(true);
                }}
                className="w-12 h-12 rounded-full bg-purple-500 flex justify-center items-center hover:bg-purple-400 transition-colors hover:scale-110 shadow-[0_0_15px_rgba(145,94,255,0.4)]"
                title="View Screenshot Gallery"
              >
                <FaImages size={20} className="text-white" />
              </button>

              <a 
                href={project.live_link} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-cyan-500 flex justify-center items-center hover:bg-cyan-400 transition-colors hover:scale-110 shadow-[0_0_15px_rgba(0,246,255,0.4)]"
                title="Live Demo"
              >
                <FaExternalLinkAlt size={20} className="text-[#050816]" />
              </a>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
          <h3 className="text-white font-bold text-3xl sm:text-4xl mb-4 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="mb-8">
            <h4 className="text-white font-semibold mb-3">Key Features:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-center text-gray-300 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 mt-auto">
            {project.tags.map((tag: any, idx: number) => (
              <span 
                key={idx} 
                className={`text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 font-medium ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
        >
          {/* Close button overlay */}
          <div className="absolute inset-0 cursor-default" onClick={() => setIsGalleryOpen(false)} />
          
          {/* Close button top right */}
          <button 
            onClick={() => setIsGalleryOpen(false)}
            className="absolute top-6 right-6 hover:text-cyan-400 transition-all p-3 rounded-full hover:scale-105 z-50"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.15)', 
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title="Close Gallery"
          >
            <FaTimes size={24} style={{ color: '#ffffff' }} />
          </button>
          
          <div className="relative max-w-4xl w-full flex flex-col items-center z-10">
            {/* Active Image container */}
            <div 
              className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex items-center justify-center"
              style={{ 
                backgroundColor: '#050816',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                maxHeight: '70vh',
                maxWidth: '100%',
                display: 'inline-flex'
              }}
            >
              <img 
                src={project.gallery[activeImgIndex]} 
                alt={`${project.title} screenshot ${activeImgIndex + 1}`}
                className="max-h-[70vh] max-w-full object-contain transition-all duration-300"
              />
              
              {/* Prev Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImgIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1));
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full hover:bg-cyan-500 text-white flex justify-center items-center hover:scale-110 transition-all"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#ffffff' }}
                title="Previous Image"
              >
                <FaChevronLeft size={20} style={{ color: '#ffffff' }} />
              </button>
              
              {/* Next Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImgIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1));
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full hover:bg-cyan-500 text-white flex justify-center items-center hover:scale-110 transition-all"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#ffffff' }}
                title="Next Image"
              >
                <FaChevronRight size={20} style={{ color: '#ffffff' }} />
              </button>
            </div>
            
            {/* Thumbnails row */}
            <div className="flex gap-4 mt-6">
              {project.gallery.map((imgUrl: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIndex(idx)}
                  className={cn(
                    "w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-300",
                    activeImgIndex === idx ? "scale-105 shadow-[0_0_15px_rgba(0,246,255,0.4)]" : "opacity-60 hover:opacity-100"
                  )}
                  style={{ borderColor: activeImgIndex === idx ? '#22d3ee' : 'rgba(255, 255, 255, 0.15)' }}
                >
                  <img src={imgUrl} alt="thumbnail" className="w-full h-full object-contain bg-[#050816]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative w-full py-24 px-6 bg-[#050816] z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider">My Work</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Featured Projects.</h2>
          <p className="mt-4 text-gray-400 text-lg max-w-3xl leading-relaxed">
            Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
