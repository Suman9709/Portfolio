import React from 'react';
import ContactCard from '../Components/ContactCard';

const Contact = () => {
  return (
    <div className="w-full px-4 py-12 text-white" id="contact">
      {/* Heading */}
      <div className="flex justify-center">
        <h1 className="relative text-3xl font-bold mb-10 group inline-block">
          Contact Us
          <span className="absolute left-0 -bottom-1 h-1 w-0 bg-white rounded-2xl transition-all duration-300 group-hover:w-full"></span>
        </h1>
      </div>

    
      <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6">
        <ContactCard
          name="LinkedIn"
          description="Connect with me professionally and view my career journey."
          logoLink="/Image/linkedin.png"
          link="https://www.linkedin.com/in/suman9709/"
        />
        <ContactCard
          name="Gmail"
          description="Drop me an email for collaboration or queries."
          logoLink="/Image/gmail.png"
          link="mailto:suman.k9709@gmail.com"
        />
        <ContactCard
          name="GitHub"
          description="Explore my open-source projects and code contributions."
          logoLink="/Image/github.png"
          link="https://github.com/Suman9709"
        />
      </div>
    </div>
  );
};

export default Contact;
