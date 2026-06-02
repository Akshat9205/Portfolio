import { motion } from "framer-motion";
import { skills, stackPills } from "../constants";

const categoryTitles: Record<string, string> = {
  programmingLanguages: "Programming Languages",
  webDevelopment: "Web Development",
  coreConcepts: "Core Concepts",
  toolsTechnologies: "Tools & Technologies",
  professionalSkills: "Professional Skills",
};

const SkillCategory = ({
  category,
  items,
  index,
}: {
  category: string;
  items: any[];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-[#0b1120]/90 border border-slate-800/80 rounded-2xl p-7 relative overflow-hidden group hover:border-slate-700/60 transition-all duration-300 shadow-xl"
    >
      {/* Subtle hover background glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0 pointer-events-none" />

      <div className="flex justify-between items-center mb-6 relative z-10">
        <h3 className="text-lg font-bold text-white select-none font-sans tracking-wide">
          {categoryTitles[category] || category}
        </h3>
        <span className="font-mono text-xs text-slate-500 font-bold select-none">
          {items.length.toString().padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-wrap gap-2.5 sm:gap-3 relative z-10">
        {items.map((item, idx) => (
          <motion.span
            key={idx}
            whileHover={{ y: -1 }}
            className="font-mono text-[13px] text-slate-300 bg-[#111827] border border-slate-700/40 rounded-md px-3.5 py-1.5 transition-all duration-200 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-[#1a2235]/40 select-none cursor-default"
          >
            {item.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative w-full py-24 px-6 bg-black-200 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header from 2nd Image style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-10"
        >
          {/* STACK Pill */}
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-cyan-400 border border-cyan-500/30 bg-cyan-950/20 mb-4 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            STACK
          </span>

          {/* Main Title */}
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[32px] leading-tight select-none">
            The tools I{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              ship with
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl font-medium leading-relaxed select-none">
            A curated stack tuned for performance, DX, and beautiful interfaces.
          </p>
        </motion.div>

        {/* Floating Stack Pills Container from 2nd Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-8 mb-20 max-w-5xl mx-auto"
        >
          {stackPills.map((pill, idx) => {
            const Icon = pill.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full border ${pill.borderColor} bg-[#0b1120]/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group`}
              >
                <Icon className={`text-xl ${pill.color} transition-transform duration-300 group-hover:scale-110`} />
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-200 select-none">
                  {pill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technical Skills Grid from 1st Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <SkillCategory
              key={category}
              category={category}
              items={items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
