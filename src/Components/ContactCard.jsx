import React from 'react';

const ContactCard = ({ name, description, logoLink, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex min-h-32 w-full items-start gap-4 border border-white/10 bg-white/[0.05] p-5 text-white shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-300/60 sm:w-80"
    >
      <img src={logoLink} alt={name} className="h-10 w-10 object-contain" />
      <div>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
      </div>
    </a>
  );
};

export default ContactCard;
