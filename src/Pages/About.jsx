import React from 'react';
import Reveal from '../Components/Reveal';
import image from '/Image/image.png';

const About = () => {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 border-y border-white/10 py-16 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="absolute -left-4 -top-4 h-full w-full border border-amber-200/30" />
          <img
            src={image}
            alt="Suman Kumar"
            className="relative h-96 w-full border border-white/10 bg-white/[0.05] object-contain p-4 shadow-2xl shadow-black/30"
          />
        </Reveal>

        <Reveal delay={0.12}>
          <p className="section-kicker">About me</p>
          <h2 className="section-title mt-3">I turn ideas into polished, practical web products.</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
            <p>
              Hi, I am a MERN Stack Developer focused on building clean, responsive, and scalable web
              applications with MongoDB, Express.js, React.js, and Node.js.
            </p>
            <p>
              I enjoy shaping both sides of a product: frontend interfaces that feel premium and backend APIs
              that stay organized, secure, and maintainable.
            </p>
            <p>
              Along with personal projects, I also work with freelance clients on business websites, academy
              websites, dashboards, and full-stack applications.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {['Clean UI', 'Responsive Design', 'Full Stack Logic'].map((item) => (
              <div key={item} className="border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:border-cyan-300/50">
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
