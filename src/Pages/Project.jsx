import React from 'react';
import mernstacklogo from '/Image/mernstacklogo.png';
import ProjectCard from '../Components/ProjectCard';
import blog from "/Image/blog.png";
import appointment from '/Image/appointment.png';

const projectData = [
  {
    title: "Appointment System",
    description: "Book and manage appointments between users and admins with slot scheduling.",
    img: appointment,
    techstack: mernstacklogo,
    github: "https://github.com/Suman9709/appointment",
    link: "https://appointment-chi-seven.vercel.app/",
  },
  {
    title: "Blog System",
    description: "A full-featured blog platform with post creation, likes, and comments.",
    img: blog,
    techstack: mernstacklogo,
    github: "https://github.com/Suman9709/BlogApp",
    link: "https://blog-app-ten-eta-71.vercel.app/",
  },
  {
    title: "Grievance Portal",
    description: "Submit and track complaints securely with status updates and admin response.",
    img: mernstacklogo,
    techstack: mernstacklogo,
    github: "https://github.com/your-repo/grievance",
    link: "https://grievance-app.live",
  },
];

const Project = () => {
  return (
    <div className="w-full px-4 py-12  text-white">
      <h1 className="text-3xl font-bold text-center mb-10">Projects</h1>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
            title={project.title}
            description={project.description}
            techstack={project.techstack}
            github={project.github}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
