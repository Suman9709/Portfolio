import React from 'react';
import githubs from "/Image/github.png"

const ProjectCard = ({ img, title, description, techstack, github, link }) => {
  return (
    <div className="w-72 h-96 bg-gradient-to-br from-[#1f1f1f] via-[#41032a] to-[#1e1e4f] border border-white p-4 rounded-2xl shadow-lg text-stone-200 flex flex-col justify-between transition-transform duration-300 hover:scale-105">

      {/* Project Image */}
      <div className="w-full h-40 overflow-hidden rounded-md">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Title and Description */}
      <div className="mt-3 flex-1">
        <h3 className="font-semibold text-lg truncate">{title}</h3>
        <p className="text-sm mt-2 line-clamp-3">{description}</p>
      </div>

      {/* Tech Stack Icons */}
      <div className="flex gap-2 mt-3 w-full  p-2 items-center justify-center bg-white/10 rounded-xl ">
        <img src={techstack} alt="tech" className="h-12 w-32 " />
      </div>

      {/* Links */}
      <div className="flex justify-between mt-3 text-sm">
        <div className='flex gap-2 items-center '>
          <img src={githubs} alt="" className='h-6 w-6' />
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">Live</a>
      </div>
    </div>
  );
};

export default ProjectCard;
