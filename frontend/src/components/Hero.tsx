import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const titles = [
    "Frontend Developer",
    "Competitive Programmer",
    "Full Stack Developer",
    "Problem Solver",
    "Software Engineer",
  ];
  
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: any;
    
    const handleType = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(100); // typing speed
        
        if (displayText === fullText) {
          timer = setTimeout(() => {
            setIsDeleting(true);
            setTypingSpeed(50); // deleting speed
          }, 1500); // wait before deleting
          return;
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(50); // deleting speed
        
        if (displayText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(300); // pause before starting next word
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="hero" className="relative w-full h-screen mx-auto overflow-hidden flex items-center justify-center">
      {/* Background modern dot matrix and glowing orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-[#050816]"></div>
        
        {/* Moving glow following mouse */}
        <div 
          className="absolute inset-0 opacity-40 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0, 246, 255, 0.15), rgba(145, 94, 255, 0.08), transparent 70%)`,
            "--mouse-x": `${mousePosition.x}px`,
            "--mouse-y": `${mousePosition.y}px`,
          } as React.CSSProperties}
        />

        {/* Floating gradient orbs */}
        <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-cyan-500/10 blur-[100px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-purple-500/10 blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />

        {/* Ultra-premium dots pattern instead of square grids */}
        <div className="absolute inset-0 bg-[radial-gradient(#4f4f4f1a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 z-10 w-full relative pt-[120px]">
        {/* Left Side: Text and Connect */}
        <div className="flex flex-1 flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-cyan-400" />
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-cyan-400 to-transparent" />
          </div>

          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-black text-white lg:text-[70px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[85px] mt-2"
            >
              Hi, I'm <span className="text-gradient">Akshat Agarwal</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#dfd9ff] font-medium lg:text-[26px] sm:text-[24px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-4 h-12"
            >
              I am a <span className="text-cyan-400 font-bold">{displayText}</span><span className="text-cyan-400 font-bold animate-pulse">|</span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-400 mt-4 max-w-xl text-lg sm:text-xl leading-relaxed"
            >
              Building immersive digital experiences with modern frontend engineering and scalable full-stack systems.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 flex gap-4"
            >
              <a href="https://github.com/Akshat9205" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border-2 border-cyan-400/50 flex justify-center items-center text-cyan-400 hover:bg-cyan-400 hover:text-[#050816] transition-all duration-300 shadow-[0_0_10px_rgba(0,246,255,0.2)]">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/akshat-agarwal-83b7332b4/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border-2 border-cyan-400/50 flex justify-center items-center text-cyan-400 hover:bg-cyan-400 hover:text-[#050816] transition-all duration-300 shadow-[0_0_10px_rgba(0,246,255,0.2)]">
                <FaLinkedin size={20} />
              </a>
              <a href="https://x.com/AkshatA47089976" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border-2 border-cyan-400/50 flex justify-center items-center text-cyan-400 hover:bg-cyan-400 hover:text-[#050816] transition-all duration-300 shadow-[0_0_10px_rgba(0,246,255,0.2)]">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.instagram.com/agrawal_aksh18/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border-2 border-cyan-400/50 flex justify-center items-center text-cyan-400 hover:bg-cyan-400 hover:text-[#050816] transition-all duration-300 shadow-[0_0_10px_rgba(0,246,255,0.2)]">
                <FaInstagram size={20} />
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="/Akshat_CSE_GLAU.pdf" download="Akshat_Agarwal_Resume.pdf" className="bg-cyan-500 hover:bg-cyan-400 text-[#050816] font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(0,246,255,0.4)]">
                Download CV
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-1 flex justify-center items-center mt-10 md:mt-0"
        >
          <div className="relative w-[300px] h-[350px] md:w-[400px] md:h-[460px]">
            {/* Cyan glowing background matching hexagon shape */}
            <div 
              className="absolute inset-0 bg-cyan-400 opacity-20 blur-xl scale-105"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            />
            {/* Solid Cyan border effect */}
            <div 
              className="absolute inset-0 bg-cyan-400 scale-[1.03]"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            />
            {/* The Image inside hexagon */}
            <img 
              src="/assets/akshu.jpg" 
              alt="Profile" 
              className="absolute inset-0 w-full h-full object-cover z-10"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about" className="flex flex-col items-center">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="text-cyan-400 text-3xl cursor-pointer hover:text-cyan-300 transition-colors"
          >
            <FaArrowDown />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
