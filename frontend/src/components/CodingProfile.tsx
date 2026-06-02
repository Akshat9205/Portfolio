import { motion } from "framer-motion";
import { Code2, Trophy, Flame, GitBranch } from "lucide-react";

const codingProfiles = [
  {
    platform: "LEETCODE",
    icon: <Code2 className="text-[#E76F00]" size={24} />,
    stats: "700+",
    description: "Problems Solved",
    link: "https://leetcode.com/u/_2315000202",
  },
  {
    platform: "CODEFORCES",
    icon: <Trophy className="text-[#318CE7]" size={24} />,
    stats: "1000+",
    description: "Max Rating: 1547 (Specialist)",
    link: "https://codeforces.com/profile/Akshat1125",
  },
  {
    platform: "HACKERRANK",
    icon: <Flame className="text-[#00EA64]" size={24} />,
    stats: "5 Stars",
    description: "Problem Solving (Basic/Inter)",
    link: "https://www.hackerrank.com/profile/_2315000202",
  },
  {
    platform: "CODECHEF",
    icon: <GitBranch className="text-[#E76F00]" size={24} />,
    stats: "1600+",
    description: "3 Star Coder",
    link: "https://www.codechef.com/users/akshat_1125",
  }
];

const CodingProfileCard = ({ profile, index }: { profile: any; index: number }) => {
  return (
    <motion.a
      href={profile.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-[#0b1120] border border-white/5 rounded-2xl p-6 flex flex-col justify-between min-h-[220px] group hover:border-cyan-500/30 hover:bg-[#0f172a] transition-all duration-300 relative overflow-hidden"
    >
      <div className="flex justify-between items-start w-full">
        <div className="p-2 bg-[#050816] rounded-lg">
          {profile.icon}
        </div>
        <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mt-2">
          {profile.platform}
        </span>
      </div>

      <div className="mt-6 flex flex-col gap-1">
        <h3 className="text-white text-4xl font-bold tracking-tight">
          {profile.stats}
        </h3>
        <p className="text-gray-400 text-sm">
          {profile.description}
        </p>
      </div>

      <div className="mt-6 text-cyan-400 font-mono text-sm font-semibold group-hover:text-cyan-300 transition-colors flex items-center">
        view_profile() {"<>"}
      </div>
    </motion.a>
  );
};

const CodingProfile = () => {
  return (
    <section id="coding" className="relative w-full py-24 px-6 bg-[#050816] z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-white font-bold md:text-[50px] sm:text-[40px] xs:text-[30px] text-[28px] tracking-tight">
            Coding profiles<span className="text-cyan-400"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {codingProfiles.map((profile, index) => (
            <CodingProfileCard key={profile.platform} profile={profile} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfile;
