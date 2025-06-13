import React, { useState, useEffect } from "react";

interface MobileNavProps {
  navItems: Array<string>;
}

const MobileNav = ({ navItems }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="flex md:hidden relative">
      {/* Hamburger Button */}
      <button
        className="relative h-8 w-8 focus:outline-none z-51"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Menu"
      >
        <span
          className={`block h-0.5 w-6 bg-transparent relative before:absolute before:left-0 before:top-[-6px] before:h-0.5 before:w-6 before:bg-[#64ffda] before:transition-all before:duration-300 after:absolute after:left-0 after:top-[6px] after:h-0.5 after:w-6 after:bg-[#64ffda] after:transition-all after:duration-300 ${
            isOpen
              ? "before:rotate-45 before:translate-y-[6px] after:-rotate-45 after:translate-y-[-6px]"
              : ""
          }`}
        ></span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-[#112240]/30 backdrop-blur-md z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
        className={`fixed min-h-screen inset-y-0 right-0 z-50 w-80 bg-[#112240] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Menu"
      >
        <div className="flex flex-col items-center justify-center pt-16 px-4 h-full capitalize">
          <ul className="space-y-12 text-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block py-2 dark:hover:text-[#64ffda] text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <a
              href="#"
              className="font-poppins outline-[#64ffda] outline-1 font-light tracking-wide rounded-sm px-8 py-3 cursor-pointer text-[#f4f4f4] dark:text-[#64ffda] bg-[#0f0f0f] dark:bg-transparent hover:-translate-1.5 hover:shadow-[5px_5px_0_0_#64ffda] transition-all duration-300 ease-in-out"
            >
              resume
            </a>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default MobileNav;
