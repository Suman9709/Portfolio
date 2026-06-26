import React from 'react'
import html from '/Image/Html.png'
import css from '/Image/css.png'
import javascript from '/Image/javascript.png'
import react from '/Image/react.png'
import mongoDb from '/Image/mongoDb.png'
import nodejs from '/Image/nodejs.png'
import postman from '/Image/postman.png'
import tailwind from '/Image/tailwind.png'
import express from '/Image/express.png'
import git from "/Image/git.png"
import Reveal from './Reveal'

const skills = [
  { src: html, name: "HTML" },
  { src: css, name: "CSS" },
  { src: javascript, name: "JavaScript" },
  { src: react, name: "React" },
  { src: express, name: "Express" },
  { src: mongoDb, name: "MongoDB" },
  { src: nodejs, name: "Node.js" },
  { src: tailwind, name: "Tailwind" },
  { src: postman, name: "Postman" },
  { src: git, name: "Git" },
];

const SkillCard = () => {
  return (
    <div className="w-full overflow-hidden px-5 py-20 sm:px-8 lg:px-16">
      <Reveal className="mx-auto mb-10 max-w-7xl">
        <p className="section-kicker">Tech stack</p>
        <h2 className="section-title mt-3">Tools I use to build reliable products.</h2>
      </Reveal>
      <div className="relative mx-auto max-w-7xl overflow-hidden border-y border-white/10 py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#05070d] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#05070d] to-transparent" />
      <div className="flex w-max animate-infinite-scroll">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="mx-3 flex h-32 w-32 flex-shrink-0 flex-col items-center justify-center border border-white/10 bg-white/[0.05] text-white backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/60 hover:shadow-2xl hover:shadow-cyan-950/40"
          >
            <img src={skill.src} alt={skill.name} className="mb-3 h-11 w-11 object-contain" />
            <span className="text-sm font-bold uppercase tracking-[0.14em]">{skill.name}</span>
          </div>
        ))}
      </div>
      </div>
    </div>


  );
};


export default SkillCard
