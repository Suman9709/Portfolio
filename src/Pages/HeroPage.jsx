import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import image from '/Image/image.png';
import resume from '/Image/resume.pdf';

const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionH1 = motion.h1;
const MotionA = motion.a;

const HeroPage = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-16" id="home">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(251,191,36,0.13),transparent_22%),linear-gradient(135deg,rgba(2,6,23,0.92),rgba(15,23,42,0.72))]" />
      <div className="hero-grid absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <MotionDiv
          className="order-2 text-center lg:order-1 lg:text-left"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <MotionP className="section-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Available for freelance projects
          </MotionP>
          <MotionH1
            className="mt-5 max-w-4xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            Suman Kumar
            <span className="block text-gradient">MERN Stack Developer</span>
          </MotionH1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
            I design and develop refined, responsive web experiences for startups, businesses, academies,
            and personal brands using React, Node.js, Express, and MongoDB.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <MotionA
              href="#projects"
              className="inline-flex items-center justify-center gap-3 bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.22em] text-slate-950 transition hover:bg-cyan-200"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              View work <FaArrowRight />
            </MotionA>
            <MotionA
              href={resume}
              download
              className="inline-flex items-center justify-center gap-3 border border-white/20 px-6 py-4 text-sm font-bold uppercase tracking-[0.22em] text-white transition hover:border-cyan-200 hover:text-cyan-200"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaDownload /> Resume
            </MotionA>
          </div>

          <div className="mt-8 flex justify-center gap-4 lg:justify-start">
            <a href="https://github.com/Suman9709" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/suman9709/" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 border border-white/10 bg-white/[0.04] text-left backdrop-blur-xl">
            {[
              ['10+', 'Tech Skills'],
              ['6+', 'Web Projects'],
              ['4', 'Client Works'],
            ].map(([value, label]) => (
              <div key={label} className="border-r border-white/10 p-4 last:border-r-0 sm:p-5">
                <p className="text-2xl font-black text-white sm:text-3xl">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </MotionDiv>

        <div className="order-1 flex justify-center lg:order-2">
          <MotionDiv
            className="relative w-full max-w-sm sm:max-w-md"
            initial={{ opacity: 0, scale: 0.94, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <MotionDiv
              className="absolute inset-8 border border-cyan-300/30"
              animate={{ rotate: [0, 1.5, 0], scale: [1, 1.02, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="shine-panel relative border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <img src={image} alt="Suman Kumar" className="h-[28rem] w-full object-contain sm:h-[34rem]" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 border border-white/10 bg-slate-950/90 p-4 text-center shadow-2xl shadow-black/30 backdrop-blur-xl">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">React - Node - MongoDB</p>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
