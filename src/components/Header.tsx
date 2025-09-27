import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // SCROLLER EVENT START
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // SCROLLER EVENT EBND

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm border-b border-gray-200  text-gray-600"
          : "bg-transparent text-[#ffffff]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LEFT SIDE */}
          <div className="flex items-center space-x-8">
            <div className="flex justify-center">
              <img
                src="/logo.webp"
                alt="IoT Technology"
                className="rounded-xl object-cover"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className=" hover:text-blue-600">
                Home
              </a>
              <a href="#about" className=" hover:text-blue-600">
                About
              </a>
              <a href="#services" className=" hover:text-blue-600">
                Services
              </a>
              <a href="#portfolio" className=" hover:text-blue-600">
                Portfolio
              </a>
              <a href="#contact" className=" hover:text-blue-600">
                Contact
              </a>
            </nav>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center space-x-4">
            <span className="hidden sm:block text-sm text-gray-600">
              +1 (800) 826-8018
            </span>
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            <a href="#home" className="block py-2 text-gray-900">
              Home
            </a>
            <a href="#about" className="block py-2 text-gray-600">
              About
            </a>
            <a href="#services" className="block py-2 text-gray-600">
              Services
            </a>
            <a href="#portfolio" className="block py-2 text-gray-600">
              Portfolio
            </a>
            <a href="#contact" className="block py-2 text-gray-600">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
