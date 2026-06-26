import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const MotionArticle = motion.article;

const ProjectCard = ({ img, title, description, techstack, github, link, category, result }) => {
  return (
    <MotionArticle
      className="group flex min-h-[30rem] flex-col border border-white/10 bg-slate-950/70 p-4 text-slate-200 shadow-2xl shadow-black/20 transition duration-300 hover:border-cyan-200/50"
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >

      <div className="h-52 overflow-hidden border border-white/10 bg-white/[0.04]">
        <img src={img} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">{category}</p>
        <h3 className="mt-3 text-2xl font-bold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
        <p className="mt-4 border-l-2 border-amber-200 pl-3 text-sm font-semibold text-white">{result}</p>
      </div>

      <div className="mt-5 flex items-center justify-between border-y border-white/10 py-3">
        <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Stack</span>
        <img src={techstack} alt="MERN stack" className="h-10 w-28 object-contain" />
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
        <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 transition hover:border-cyan-300 hover:text-cyan-200">
          <FaGithub /> GitHub
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 transition hover:border-cyan-300 hover:text-cyan-200">
          <FaExternalLinkAlt /> Live
        </a>
      </div>
    </MotionArticle>
  );
};

export default ProjectCard;
