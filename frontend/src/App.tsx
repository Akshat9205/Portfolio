import { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Hackathons from "./components/Hackathons";
import CodingProfile from "./components/CodingProfile";
import Contact from "./components/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Lock body scrolling during preloader
    document.body.style.overflow = "hidden";

    // Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Simulate loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 2800); // 2.8s to give plenty of time for slide-in & wave animation

    return () => {
      lenis.destroy();
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* Animated Preloader Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1, x: 0 }}
            exit={{
              x: "100vw",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 bg-[#050816] z-[9999] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Robot Container sliding in */}
            <motion.div
              initial={{ x: "-100vw", opacity: 0, scale: 0.7 }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 60,
                  damping: 14,
                  delay: 0.2
                }
              }}
              className="relative w-80 h-80 md:w-[450px] md:h-[450px] flex items-center justify-center mb-6"
            >
              {/* Glowing Background Blob */}
              <div className="absolute w-56 h-56 md:w-80 md:h-80 rounded-full bg-cyan-500/20 blur-[70px] animate-pulse" />

              <img
                src="/assets/robot_preloader.png"
                alt="Robot preloader waving"
                className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_0_40px_rgba(6,182,212,0.4)]"
              />
            </motion.div>

            {/* Glowing Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.9, duration: 0.6 }
              }}
              className="text-center"
            >
              <h2 className="text-cyan-400 font-bold text-lg md:text-xl tracking-[0.25em] font-sans animate-pulse filter drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]">
                Loading Portfolio...
              </h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Portfolio Page */}
      <div className="relative z-0 bg-[#050816] w-full min-h-screen text-white overflow-hidden">
        {/* Custom Cursor Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 origin-left z-50"
          style={{ scaleX }}
        />

        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Hackathons />
        <CodingProfile />
        <Contact />
      </div>
    </>
  );
}

export default App;
