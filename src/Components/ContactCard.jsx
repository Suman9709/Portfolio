import React from 'react';

const ContactCard = ({ name, description, logoLink, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-64 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-500 animate-gradient text-white rounded-xl p-4 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 flex items-start gap-4"
    >
      <img src={logoLink} alt={name} className="h-10 w-10 object-contain" />
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-200 line-clamp-2">{description}</p>
      </div>
    </a>
  );
};

export default ContactCard;
