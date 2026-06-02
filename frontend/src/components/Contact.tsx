import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaRegCopy, FaCheck } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("akshat.agarwal@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative w-full py-24 px-6 bg-black-200 z-10 overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-16">
        
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 glassmorphism rounded-[30px] p-8 border border-white/10 relative"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-t-[30px]" />
          
          <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider">Get in touch</p>
          <h3 className="text-white font-black md:text-[50px] sm:text-[40px] text-[30px] mb-8">Contact.</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="relative group">
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-white/20 text-white text-lg py-3 px-2 focus:outline-none focus:border-cyan-400 transition-colors peer placeholder-transparent"
                placeholder="Name"
              />
              <label 
                htmlFor="name" 
                className="absolute left-2 text-gray-400 cursor-text transition-all duration-300 transform -translate-y-6 text-sm peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-lg peer-focus:-translate-y-6 peer-focus:text-sm peer-focus:text-cyan-400"
              >
                Your Name
              </label>
            </div>

            <div className="relative group">
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-white/20 text-white text-lg py-3 px-2 focus:outline-none focus:border-cyan-400 transition-colors peer placeholder-transparent"
                placeholder="Email"
              />
              <label 
                htmlFor="email" 
                className="absolute left-2 text-gray-400 cursor-text transition-all duration-300 transform -translate-y-6 text-sm peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-lg peer-focus:-translate-y-6 peer-focus:text-sm peer-focus:text-cyan-400"
              >
                Your Email
              </label>
            </div>

            <div className="relative group mt-4">
              <textarea
                rows={5}
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-2 border-white/20 rounded-xl text-white text-lg py-3 px-4 focus:outline-none focus:border-cyan-400 transition-colors peer placeholder-transparent resize-none"
                placeholder="Message"
              />
              <label 
                htmlFor="message" 
                className="absolute left-4 top-4 text-gray-400 cursor-text transition-all duration-300 transform -translate-y-8 bg-[#090325] px-1 text-sm peer-placeholder-shown:translate-y-0 peer-placeholder-shown:bg-transparent peer-focus:-translate-y-8 peer-focus:bg-[#090325] peer-focus:text-sm peer-focus:text-cyan-400"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="mt-4 bg-cyan-500 hover:bg-cyan-400 text-[#050816] py-4 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-[0_0_15px_rgba(0,246,255,0.3)] transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Contact Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col justify-center"
        >
          <div className="mb-12">
            <h4 className="text-3xl font-bold text-white mb-6">Let's connect</h4>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              I'm always looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div 
              onClick={copyToClipboard}
              className="glassmorphism p-6 rounded-2xl flex items-center justify-between cursor-pointer group hover:bg-white/5 transition-colors border border-white/5"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium">agakshat112005@gmail.com</p>
                </div>
              </div>
              <div className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                {copied ? <FaCheck size={20} className="text-green-500" /> : <FaRegCopy size={20} />}
              </div>
            </div>

            <div className="glassmorphism p-6 rounded-2xl flex items-center gap-4 border border-white/5 hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white font-medium">+91 8755827155</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <a href="https://www.linkedin.com/in/akshat-agarwal-83b7332b4/" target="_blank" rel="noreferrer" className="glassmorphism p-4 rounded-xl text-gray-400 hover:text-[#0077b5] hover:border-[#0077b5]/50 transition-all duration-300 hover:-translate-y-2">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/Akshat9205" target="_blank" rel="noreferrer" className="glassmorphism p-4 rounded-xl text-gray-400 hover:text-white hover:border-white/50 transition-all duration-300 hover:-translate-y-2">
              <FaGithub size={24} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
