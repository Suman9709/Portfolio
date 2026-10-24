import React from 'react';
import { motion } from 'framer-motion';
import {
  SiAmazonwebservices,
  SiDjango,
  SiDocker,
  SiGithubactions,
  SiMysql,
  SiPostgresql,
  SiRedis,
} from 'react-icons/si';
import html from '/Image/Html.png';
import css from '/Image/css.png';
import javascript from '/Image/javascript.png';
import react from '/Image/react.png';
import mongoDb from '/Image/mongoDb.png';
import nodejs from '/Image/nodejs.png';
import postman from '/Image/postman.png';
import tailwind from '/Image/tailwind.png';
import express from '/Image/express.png';
import git from '/Image/git.png';
import Reveal from './Reveal';
import DeveloperPassport from './DeveloperPassport';

const MotionArticle = motion.article;

const skills = [
  { name: 'HTML', area: 'Structure', src: html, tone: 'cyan' },
  { name: 'CSS', area: 'Interface', src: css, tone: 'blue' },
  { name: 'JavaScript', area: 'Logic', src: javascript, tone: 'amber' },
  { name: 'React', area: 'Frontend', src: react, tone: 'cyan' },
  { name: 'Tailwind', area: 'Styling', src: tailwind, tone: 'blue' },
  { name: 'Node.js', area: 'Backend', src: nodejs, tone: 'green' },
  { name: 'Express', area: 'API', src: express, tone: 'slate' },
  { name: 'MongoDB', area: 'Database', src: mongoDb, tone: 'green' },
  { name: 'PostgreSQL', area: 'Database', Icon: SiPostgresql, tone: 'blue' },
  { name: 'MySQL', area: 'Database', Icon: SiMysql, tone: 'blue' },
  { name: 'Redis', area: 'Caching', Icon: SiRedis, tone: 'orange' },
  { name: 'Git', area: 'Versioning', src: git, tone: 'orange' },
  { name: 'Postman', area: 'Testing', src: postman, tone: 'orange' },
  { name: 'Django', area: 'Backend', Icon: SiDjango, tone: 'green' },
  { name: 'Docker', area: 'Containers', Icon: SiDocker, tone: 'cyan' },
  { name: 'AWS', area: 'Cloud', Icon: SiAmazonwebservices, tone: 'amber' },
  { name: 'CI/CD', area: 'Automation', Icon: SiGithubactions, tone: 'violet' },
];

const SkillGlyph = ({ skill }) => {
  if (skill.src) return <img src={skill.src} alt="" className="skill-glyph-image" />;

  const Icon = skill.Icon;
  return React.createElement(Icon, { 'aria-hidden': true });
};

const SkillCard = ({ onOpenProfile }) => {
  return (
    <section className="w-full px-5 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="section-kicker">Capabilities</p>
            <h2 className="section-title mt-3">A full-stack toolkit made to take ideas from browser to cloud.</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-300 lg:justify-self-end lg:pb-1">
            I pair interface craft with dependable backend foundations and modern delivery workflows, so a product feels considered at every step.
          </p>
        </Reveal>

        <div className="skill-showcase mt-10">
          <Reveal delay={0.06}>
            <DeveloperPassport onOpenProfile={onOpenProfile} />
          </Reveal>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <Reveal key={skill.name} delay={0.04 * (index % 6)} y={18}>
                <MotionArticle
                  className={`skill-tile skill-tile-${skill.tone}`}
                  whileHover={{ y: -7, rotateX: 4, rotateY: index % 2 ? -3 : 3 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                  style={{ transformPerspective: 900 }}
                >
                  <div className="skill-glyph"><SkillGlyph skill={skill} /></div>
                  <div className="min-w-0">
                    <h3>{skill.name}</h3>
                    <p>{skill.area}</p>
                  </div>
                  <span className="skill-tile-dot" aria-hidden="true" />
                </MotionArticle>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCard;
