import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaBriefcase, FaCheckCircle, FaCode, FaCloud } from 'react-icons/fa';
import image from '/Image/image.png';

const MotionArticle = motion.article;

const DeveloperPassport = ({ onOpenProfile }) => {
  return (
    <MotionArticle
      className="developer-passport"
      whileHover={{ rotateX: 1.4, rotateY: -1.4, y: -4 }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      style={{ transformPerspective: 1200 }}
    >
      <div className="passport-grid" aria-hidden="true" />
      <div className="passport-glow" aria-hidden="true" />

      <div className="relative flex h-full flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="passport-eyebrow">Developer passport</p>
            <p className="mt-1 text-xs font-bold tracking-[0.16em] text-slate-500">ID / SK-9709</p>
          </div>
          <span className="passport-verified"><FaCheckCircle /> Verified</span>
        </div>

        <div className="passport-identity">
          <div className="passport-photo-wrap">
            <img src={image} alt="Suman Kumar" className="passport-photo" />
            <span className="passport-availability">Open to work</span>
          </div>
          <div>
            <h3>Suman Kumar</h3>
            <p>Full-stack developer</p>
            <span>Building polished, useful web products.</span>
          </div>
        </div>

        <div className="passport-focus">
          <div><FaCode /><span>Frontend craft</span></div>
          <div><FaBriefcase /><span>Backend systems</span></div>
          <div><FaCloud /><span>Cloud delivery</span></div>
        </div>

        <div className="passport-stats">
          <div><strong>17+</strong><span>Technologies</span></div>
          <div><strong>6+</strong><span>Projects</span></div>
          <div><strong>Open</strong><span>Freelance</span></div>
        </div>

        <button type="button" className="passport-action" onClick={onOpenProfile}>
          View full profile <FaArrowRight />
        </button>
      </div>
    </MotionArticle>
  );
};

export default DeveloperPassport;
