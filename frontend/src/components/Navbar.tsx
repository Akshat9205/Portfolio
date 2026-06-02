import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "../utils/cn";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <nav
      className={cn(
        "w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300",
        scrolled ? "bg-primary/5 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
        {/* Left Side: Logo/Brand */}
        <div className="flex-1 flex justify-start">
          <a
            href="#"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Akshat &nbsp;
              <span className="sm:block hidden text-cyan-400">| Agarwal</span>
            </p>
          </a>
        </div>

        {/* Center: Navigation Options */}
        <div className="hidden sm:flex sm:flex-1 justify-center items-center">
          <ul className="list-none flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-cyan-400" : "text-gray-300"
                } hover:text-white text-[18px] font-medium cursor-pointer transition-colors`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Theme Toggle & Mobile Menu */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-white flex justify-center items-center cursor-pointer transition-all duration-300 border border-white/10"
            title="Toggle Light/Dark Theme"
          >
            {theme === "dark" ? <Sun size={20} className="text-cyan-400" /> : <Moon size={20} className="text-cyan-600" />}
          </button>

          <div className="sm:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? <X size={28} /> : <Menu size={28} />}
            </button>

            <div
              className={cn(
                "p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl glassmorphism transition-all duration-300 transform origin-top-right",
                toggle ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
              )}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-cyan-400" : "text-gray-300"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
