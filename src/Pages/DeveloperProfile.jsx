import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaDownload, FaEnvelope, FaLayerGroup, FaPhoneAlt } from 'react-icons/fa';
import BrandLogo from '../Components/BrandLogo';
import image from '/Image/image.png';
import resume from '/Image/resume.pdf';

const MotionDiv = motion.div;

const profileGroups = [
  { title: 'Interface', items: ['React', 'JavaScript', 'Tailwind', 'Responsive UI'] },
  { title: 'Applications', items: ['Node.js', 'Express', 'Django', 'REST APIs'] },
  { title: 'Data & cloud', items: ['MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'CI/CD'] },
];

const DeveloperProfile = ({ onBack }) => {
  return (
    <div className="profile-page min-h-screen overflow-x-hidden bg-[#060818] text-white">
      <div className="site-noise" aria-hidden="true" />
      <header className="profile-header">
        <button type="button" className="profile-brand" onClick={onBack} aria-label="Return to portfolio">
          <BrandLogo />
        </button>
        <button type="button" className="profile-back" onClick={onBack}>
          <FaArrowLeft /> Portfolio
        </button>
      </header>

      <main className="relative mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 lg:px-16 lg:pt-20">
        <section className="profile-hero">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-kicker">Developer profile / SK-9709</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              Suman Kumar<br /><span className="text-gradient">Full-stack developer.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I turn product ideas into clear, responsive web experiences—pairing thoughtful interfaces with organized backend systems and practical deployment workflows.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={resume} download className="profile-primary-action"><FaDownload /> Download resume</a>
              <a href="mailto:suman.k9709@gmail.com" className="profile-secondary-action"><FaEnvelope /> Get in touch</a>
            </div>
          </MotionDiv>

          <MotionDiv
            className="profile-portrait-card"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="profile-portrait-grid" aria-hidden="true" />
            <img src={image} alt="Suman Kumar" />
            <div className="profile-open-status"><span /> Available for freelance</div>
          </MotionDiv>
        </section>

        <section className="profile-section-grid mt-16">
          <div>
            <p className="section-kicker">How I work</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">Designed with purpose. Built to be dependable.</h2>
          </div>
          <div className="profile-principles">
            {[
              ['01', 'Clarify', 'Understand the problem, users, and the outcome that matters.'],
              ['02', 'Build', 'Create responsive interfaces and clean, maintainable application logic.'],
              ['03', 'Deliver', 'Prepare a focused release workflow with reliable handoff and support.'],
            ].map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 border-y border-white/10 py-14">
          <p className="section-kicker">Toolbox</p>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {profileGroups.map((group) => (
              <article key={group.title} className="profile-tool-group">
                <FaLayerGroup />
                <h3>{group.title}</h3>
                <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="profile-contact-panel mt-16">
          <div>
            <p className="section-kicker">Start a conversation</p>
            <h2>Have a project in mind?</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="mailto:suman.k9709@gmail.com"><FaEnvelope /> suman.k9709@gmail.com</a>
            <a href="tel:+917488788522"><FaPhoneAlt /> +91 74887 88522</a>
          </div>
          <button type="button" onClick={onBack}>Browse portfolio <FaArrowRight /></button>
        </section>
      </main>
    </div>
  );
};

export default DeveloperProfile;
