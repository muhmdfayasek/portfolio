import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="fixed top-0 border-solid border-gray-600 w-full lg:h-17 border-b py-2 lg:py-0 bg-gray-950 z-50 shadow-2xl">
      <div className="mx-auto max-w-7xl px-4">
        <div className="w-full flex flex-col lg:flex-row">
          <div className="flex justify-between items-center lg:h-17">
            <span className="font-bold text-xl md:px-10 md:text-2xl p-2">
              muhmdfayasek
            </span>
            <button
              className="lg:hidden ml-auto p-2"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:pl-11 lg:justify-end lg:px-10`}>
            <ul className="flex items-center justify-between flex-col mt-4 lg:mt-0 lg:ml-auto lg:flex-row gap-10 lg:h-17">
              <li>
                <a
                  href="#home"
                  class="flex items-center justify-between text-white text-[15px] lg:text-base font-medium hover:text-slate-300 hover:border-b-2 hover:border-indigo-400 transition-all duration-500 mb-2 lg:mr-7 md:mb-0 md:mr-3"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  class="flex items-center justify-between text-white text-[15px] lg:text-base font-medium hover:text-slate-300 hover:border-b-2 hover:border-indigo-400 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  class="flex items-center justify-between text-white text-[15px] lg:text-base font-medium hover:text-slate-300 hover:border-b-2 hover:border-indigo-400 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  class="flex items-center justify-between text-white text-[15px] lg:text-base font-medium hover:text-slate-300 hover:border-b-2 hover:border-indigo-400 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  class="flex items-center justify-between text-white text-[15px] lg:text-base font-medium hover:text-slate-300 hover:border-b-2 hover:border-indigo-400 transition-all duration-500 mb-2 lg:my-7 md:mb-0 md:mr-3"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
