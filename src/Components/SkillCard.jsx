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
    <div className="w-full overflow-hidden py-6 bg-transparent">
      <div className="flex justify-center">
        <h1 className="relative text-3xl font-bold mb-10 group inline-block text-stone-200">
         Skills
          <span className="absolute left-0 -bottom-1 h-1 w-0 bg-white rounded-2xl transition-all duration-300 group-hover:w-full"></span>
        </h1>
      </div>
      <div className="flex w-max animate-infinite-scroll">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-28 h-28 mx-4 bg-white/10 backdrop-blur-xl rounded-xl flex flex-col items-center justify-center text-white"
          >
            <img src={skill.src} alt={skill.name} className="w-10 h-10 mb-2" />
            <span className="text-sm font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>


  );
};


export default SkillCard