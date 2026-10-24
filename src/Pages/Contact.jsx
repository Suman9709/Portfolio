import React from 'react';
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
              I bring a clear process and focused product thinking to every engagement.
            </p>
          </Reveal>

          <Reveal className="border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8" delay={0.12}>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">Collaboration</p>
            <h3 className="mt-3 text-2xl font-black text-white">A straightforward process, from first idea to launch.</h3>
            <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {['Scope clearly', 'Build thoughtfully', 'Launch confidently'].map((step, index) => (
                <div key={step} className="border border-white/10 bg-slate-950/50 p-4">
                  <span className="text-xs font-black tracking-[0.16em] text-violet-200">0{index + 1}</span>
                  <p className="mt-3 text-sm font-bold text-slate-100">{step}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 text-sm leading-7 text-slate-400">Contact details and social links are available in the footer.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
