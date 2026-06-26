import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const Reveal = ({ children, className = '', delay = 0, y = 28 }) => {
  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionDiv>
  );
};

export default Reveal;
