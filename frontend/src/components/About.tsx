import { motion } from "framer-motion";
import { Brain, Users, Target, Sparkles } from "lucide-react";

const stats = [
  { value: "500+", label: "Problems Solved" },
  { value: "1,200+", label: "Codeforces Rating" },
  { value: "8.16", label: "CPI - GLA University" },
  { value: "5+", label: "Hackathons" },
];

const timeline = [
  { year: "2027", text: "B.Tech in Computer Science, GLA University (CPI: 8.18)" },
  { year: "2023", text: "Intermediate (79.6%), Gayatri Public School" },
  { year: "2021", text: "High School (92.6%), Gayatri Public School" },
];

const About = () => {
  return (
    <section id="about" className="relative w-full py-24 px-6 bg-black-100 z-10 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-[30%] left-[20%] w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center flex flex-col items-center mb-20"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            About
          </div>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[32px] leading-tight max-w-3xl">
            Engineer with <span className="text-gradient">a builder's bias</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            I obsess over fast, fluid, and beautiful product experiences — and the systems that make them possible.
          </p>
        </motion.div>

        {/* Main Content: Profile & Story */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch mb-24">
          {/* Left Side: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-[35%] flex"
          >
            <div className="w-full rounded-[30px] glassmorphism p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500" />
              
              <div>
                <span className="text-cyan-400/60 font-mono text-xs tracking-wider">/ PROFILE</span>
                <h3 className="text-3xl font-black text-white mt-4">Akshat Agarwal</h3>
                <p className="text-gray-400 font-medium text-sm mt-1">B.Tech CSE • GLA University</p>
                
                <div className="mt-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-gray-300 text-sm font-medium">location: <span className="text-white">India</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                    <span className="text-gray-300 text-sm font-medium">focus: <span className="text-white">frontend, full-stack, DSA</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-gray-300 text-sm font-medium">status: <span className="text-green-400 font-bold">open to work</span></span>
                  </div>
                </div>
              </div>

              {/* Bottom technology pills */}
              <div className="mt-12">
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Node.js", "MongoDB"].map((tech, idx) => (
                    <span key={idx} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium hover:bg-white/10 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Narrative, Stats & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-[65%] flex flex-col justify-between gap-8"
          >
            <div className="flex flex-col gap-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I am a <span className="text-cyan-400 font-bold">B.Tech CSE student</span> at GLA University with a CPI of <span className="text-cyan-400 font-bold">8.18</span>, passionate about <span className="text-purple-400 font-semibold">frontend engineering</span> and a strong DSA / problem-solving mindset.
              </p>
              <p>
                I love building scalable, responsive applications — turning ambiguous problems into clean architectures and pixel-precise interfaces. From shipping production donation platforms to grinding 500+ DSA problems, I bring the same energy: <span className="text-white italic">ship fast, polish hard.</span>
              </p>
            </div>

            {/* Grid of 4 numeric stat cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="glassmorphism rounded-2xl p-5 border border-white/5 flex flex-col items-center text-center hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 shadow-md">
                  <h4 className="text-2xl sm:text-3xl font-black text-white">{stat.value}</h4>
                  <p className="text-xs text-gray-400 mt-2 font-medium leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Bottom green capsule badges inline row */}
            <div className="flex flex-wrap gap-3 mt-4">
              {["Meta Certified", "Hackathon Finalist", "Open Source", "DSA 500+"].map((badge, idx) => (
                <div key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-bold shadow-[0_0_10px_rgba(0,246,255,0.05)]">
                  <Sparkles size={12} className="text-cyan-400" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Combined Row: Education Timeline & Strengths/Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-black text-white flex items-center gap-2 border-b border-white/10 pb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Education History
            </h3>
            
            <div className="relative border-l-2 border-cyan-400/20 ml-3 pl-6 space-y-8 py-2">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#100d25] border-2 border-cyan-400 shadow-[0_0_8px_rgba(0,246,255,0.4)]" />
                  
                  <span className="text-cyan-400 font-bold text-sm bg-cyan-400/10 px-2.5 py-0.5 rounded-full">
                    {item.year}
                  </span>
                  <p className="text-gray-300 text-[15px] font-medium mt-3 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Strengths Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-black text-white flex items-center gap-2 border-b border-white/10 pb-4">
              <Target size={20} className="text-cyan-400" />
              Key Strengths
            </h3>
            
            <div className="space-y-4">
              <div className="glassmorphism rounded-2xl p-5 border border-white/5 flex gap-4 hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-cyan-500/15 flex items-center justify-center text-cyan-400 shrink-0">
                  <Brain size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Analytical Thinking</h4>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                    Deep problem-solving skills with 500+ DSA and competitive programming problems solved.
                  </p>
                </div>
              </div>

              <div className="glassmorphism rounded-2xl p-5 border border-white/5 flex gap-4 hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-purple-500/15 flex items-center justify-center text-purple-400 shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Team Leadership</h4>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                    Proven ability to lead teams in hackathons, delegating tasks, and delivering results under pressure.
                  </p>
                </div>
              </div>

              <div className="glassmorphism rounded-2xl p-5 border border-white/5 flex gap-4 hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-cyan-500/15 flex items-center justify-center text-cyan-400 shrink-0">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Continuous Learning</h4>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                    Always eager to explore emerging tech stacks and quickly pick up modern web development frameworks.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
