import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaHandshake, FaLaptopCode } from 'react-icons/fa';
import Reveal from '../Components/Reveal';

const MotionArticle = motion.article;

const clientWork = [
  {
    title: 'CBII',
    type: 'Client Web Platform',
    description:
      'A focused client project built with a modern MERN workflow, clean navigation, and scalable frontend structure.',
    github: 'https://github.com/Suman9709/CBII',
    live: '',
    initials: 'CB',
    accent: 'from-cyan-400 to-emerald-300',
  },
  {
    title: '3 Acre Resort',
    type: 'Hospitality Website',
    description:
      'A polished resort website experience designed to present rooms, ambience, booking intent, and brand trust clearly.',
    github: '',
    live: 'https://3acreresort.com/',
    initials: '3A',
    accent: 'from-amber-300 to-lime-300',
  },
  {
    title: 'Devang Chess Academy',
    type: 'Academy Website',
    description:
      'A professional learning-focused website for a chess academy with crisp presentation and easy discovery.',
    github: 'https://github.com/Suman9709/chess-academy',
    live: '',
    initials: 'DC',
    accent: 'from-sky-300 to-indigo-300',
  },
  {
    title: 'RR World',
    type: 'Client Brand Project',
    description:
      'A client-facing digital presence shaped around reliable structure, responsive UI, and conversion-ready sections.',
    github: '',
    live: '',
    initials: 'RR',
    accent: 'from-rose-300 to-orange-300',
  },
];

const services = [
  'Portfolio and business websites',
  'MERN stack web apps',
  'Responsive UI redesigns',
  'Admin dashboards and APIs',
];

const Freelance = () => {
  return (
    <section id="freelance" className="px-5 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
          <Reveal className="sticky top-28">
            <p className="section-kicker">Freelance</p>
            <h2 className="section-title mt-3">Client work with clear business purpose.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              I build responsive websites and MERN applications for clients who need a clean online presence,
              dependable delivery, and interfaces that feel easy to use from the first visit.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3 border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200">
                  <FaLaptopCode className="text-cyan-300" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-cyan-200"
            >
              <FaHandshake />
              Hire me
            </a>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {clientWork.map((work, index) => (
              <Reveal key={work.title} delay={index * 0.08}>
              <MotionArticle className="group border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-black/20 transition hover:border-white/30" whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
                <div className={`mb-5 flex h-36 items-center justify-center bg-gradient-to-br ${work.accent} text-slate-950`}>
                  <span className="text-5xl font-black tracking-tight">{work.initials}</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">{work.type}</p>
                <h3 className="mt-3 text-2xl font-bold text-white">{work.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-6 text-slate-300">{work.description}</p>

                <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
                  {work.github && (
                    <a href={work.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 text-white transition hover:border-cyan-300 hover:text-cyan-200">
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {work.live && (
                    <a href={work.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 text-white transition hover:border-cyan-300 hover:text-cyan-200">
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </MotionArticle>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Freelance;
