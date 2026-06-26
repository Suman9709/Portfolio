import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '/Image/logo.png';

const navItem = ['Home', 'About', 'Skill', 'Projects', 'Freelance', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-30 w-full border-b px-5 transition-all duration-300 sm:px-8 lg:px-16 ${
        scrolled
          ? 'border-white/10 bg-[#05070d]/90 shadow-2xl shadow-black/30 backdrop-blur-xl'
          : 'border-transparent bg-[#05070d]/70 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link to="home" smooth duration={500} offset={-80} className="flex cursor-pointer items-center gap-3">
          <img src={logo} alt="Suman Kumar logo" className="h-12 w-12 object-contain" />
          <div className="hidden sm:block">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-white">Suman</p>
            <p className="text-xs text-cyan-200">MERN Developer</p>
          </div>
        </Link>

        <ul className="hidden items-center gap-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200 lg:flex">
          {navItem.map((item) => (
            <li key={item} className="group relative cursor-pointer">
              <Link to={item.toLowerCase()} smooth duration={500} offset={-78}>
                {item}
                <span className="absolute left-0 -bottom-2 h-px w-0 bg-cyan-200 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <button className="z-40 text-2xl text-white lg:hidden" onClick={() => setNavOpen((open) => !open)} aria-label="Toggle navigation">
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul
          className={`absolute right-5 top-24 w-[min(20rem,calc(100vw-2.5rem))] border border-white/10 bg-slate-950/95 p-5 text-right text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 lg:hidden ${
            navOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
          }`}
        >
          {navItem.map((item) => (
            <li key={item} className="cursor-pointer border-b border-white/10 py-3 last:border-0">
              <Link
                to={item.toLowerCase()}
                smooth
                duration={500}
                offset={-78}
                onClick={() => setNavOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
