import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "Technologies",
    "Projects",
    "About",
    "Contact",
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">

        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 md:hidden"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-gray-800"></span>
            <span className="block h-0.5 w-5 bg-gray-800"></span>
            <span className="block h-0.5 w-5 bg-gray-800"></span>
          </div>
        </button>

        
        <a
          href="#home"
          className="flex items-center gap-2"
        >
          <div className="gradient-bg flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold text-white">
            DS
          </div>

          <span className="text-lg font-bold">
            <span className="text-gray-900">Dev </span>
            <span className="brand-gradient">Stack</span>
          </span>
        </a>

        
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm transition hover:text-pink-500 ${
                index === 0
                  ? "font-medium text-pink-500"
                  : "text-gray-500"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        
        <div className="flex items-center gap-2">
          <button className="hidden px-3 py-2 text-sm text-gray-600 hover:text-pink-500 sm:block">
            Sign In
          </button>

          <button className="gradient-bg rounded-full px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:scale-105">
            Sign Up
          </button>
        </div>
      </div>

    
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-600 hover:text-pink-500"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;