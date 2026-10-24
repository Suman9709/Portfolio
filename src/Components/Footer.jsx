import React from 'react';
import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';
import BrandLogo from './BrandLogo';

const footerLinks = ['Home', 'About', 'Skill', 'Projects', 'Freelance', 'Contact'];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-5 pb-7 pt-14 sm:px-8 lg:px-16">
      <div className="footer-aura" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.1fr_0.72fr_auto] md:items-start">
          <div>
            <Link to="home" smooth duration={500} offset={-80} className="inline-block cursor-pointer">
              <BrandLogo />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Building thoughtful web experiences from interface details to dependable product foundations.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm font-semibold text-slate-300">
            {footerLinks.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth
                duration={500}
                offset={-78}
                className="cursor-pointer transition hover:text-cyan-200"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="md:justify-self-end">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">Let&apos;s connect</p>
            <div className="mt-4 grid gap-3 text-sm font-semibold text-slate-300">
              <a className="footer-contact" href="mailto:suman.k9709@gmail.com">
                <FaEnvelope />
                <span>suman.k9709@gmail.com</span>
              </a>
              <a className="footer-contact" href="tel:+917488788522">
                <FaPhoneAlt />
                <span>+91 74887 88522</span>
              </a>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a className="footer-social" href="https://github.com/Suman9709" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a className="footer-social" href="https://www.linkedin.com/in/suman9709/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a className="footer-social" href="mailto:suman.k9709@gmail.com" aria-label="Email Suman">
                <FaEnvelope />
              </a>
              <Link to="home" smooth duration={500} offset={-80} className="footer-social cursor-pointer" aria-label="Back to top">
                <FaArrowUp />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:flex-row sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Suman Kumar</p>
          <p>Designed with clarity &amp; craft</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
