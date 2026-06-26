import React from 'react';
import mernstacklogo from '/Image/mernstacklogo.png';
import ProjectCard from '../Components/ProjectCard';
import Reveal from '../Components/Reveal';
import blog from "/Image/blog.png";
import appointment from '/Image/appointment.png';

const projectData = [
    {
        title: "Appointment System",
        category: "Full-stack application",
        description: "Book and manage appointments between users and admins with slot scheduling, clean data flow, and a responsive interface.",
        result: "Built for smooth booking, admin visibility, and organized scheduling.",
        img: appointment,
        techstack: mernstacklogo,
        github: "https://github.com/Suman9709/appointment",
        link: "https://appointment-chi-seven.vercel.app/",
    },
    {
        title: "Blog System",
        category: "Content platform",
        description: "A full-featured blog platform with post creation, likes, comments, and a simple publishing experience.",
        result: "Designed to make writing, reading, and engagement feel quick and natural.",
        img: blog,
        techstack: mernstacklogo,
        github: "https://github.com/Suman9709/BlogApp",
        link: "https://blog-app-ten-eta-71.vercel.app/",
    },
    {
        title: "Grievance Portal",
        category: "Workflow portal",
        description: "Submit and track complaints securely with status updates, admin response, and a structured resolution workflow.",
        result: "Focused on transparent tracking and faster complaint management.",
        img: mernstacklogo,
        techstack: mernstacklogo,
        github: "https://github.com/your-repo/grievance",
        link: "https://grievance-app.live",
    },
];

const Project = () => {
    return (
        <section className="w-full px-5 py-20 text-white sm:px-8 lg:px-16" id='projects'>
            <Reveal className="mx-auto max-w-7xl">
                <p className="section-kicker">Selected projects</p>
                <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                    <h2 className="section-title">Full-stack builds with useful product thinking.</h2>
                    <p className="max-w-md text-sm leading-6 text-slate-300">
                        A few projects that show frontend polish, API integration, database modeling, and practical user flows.
                    </p>
                </div>
            </Reveal>

            <div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projectData.map((project, index) => (
                    <Reveal key={project.title} delay={index * 0.08}>
                        <ProjectCard
                            img={project.img}
                            title={project.title}
                            description={project.description}
                            category={project.category}
                            result={project.result}
                            techstack={project.techstack}
                            github={project.github}
                            link={project.link}
                        />
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Project;
