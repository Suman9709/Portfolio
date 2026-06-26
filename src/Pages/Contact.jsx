import React from 'react';
import ContactCard from '../Components/ContactCard';
import Reveal from '../Components/Reveal';

const Contact = () => {
  return (
    <section className="w-full px-5 py-20 text-white sm:px-8 lg:px-16" id="contact">
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title mt-3">Let us build something sharp.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              For freelance websites, MERN applications, portfolio redesigns, or collaboration opportunities,
              message me directly and I will get back with a clear next step.
            </p>
          </Reveal>

          <Reveal className="grid gap-4 sm:grid-cols-2" delay={0.12}>
            <ContactCard
              name="LinkedIn"
              description="Connect professionally and view my work updates."
              logoLink="/Image/linkedin.png"
              link="https://www.linkedin.com/in/suman9709/"
            />
            <ContactCard
              name="Gmail"
              description="Send project details, collaboration ideas, or freelance queries."
              logoLink="/Image/gmail.png"
              link="mailto:suman.k9709@gmail.com"
            />
            <ContactCard
              name="GitHub"
              description="Explore my repositories, experiments, and full-stack projects."
              logoLink="/Image/github.png"
              link="https://github.com/Suman9709"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
