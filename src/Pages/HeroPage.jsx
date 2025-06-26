import React from 'react';
import mernstacklogo from '/Image/mernstacklogo.png';
import image from '/Image/image.png';
import resume from '/Image/resume.pdf'

const HeroPage = () => {
  return (
    <div className="mt-20 flex flex-col md:flex-row items-center justify-center h-[calc(100vh-80px)] w-full px-6 md:px-16 gap-10 bg-opacity-50">


      {/* Profile Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src={image}
          alt="profile"
          className="w-72 h-72 object-cover rounded-full border-4 border-white shadow-lg"
        />
      </div>

      {/* Text and Logo */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Suman Kumar
        </h1>

        <div className="my-4 flex justify-center md:justify-start">
          <img
            src={mernstacklogo}
            alt="MERN Stack"
            className="h-12 w-auto"
          />
        </div>

        <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
          I’m a MERN stack developer crafting modern, responsive web experiences with clean code, performance, and creativity.
        </p>

        <a
          href={resume}
          download
          className="inline-block mt-6 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        >
          Download Resume
        </a>


      </div>
    </div>
  );
};

export default HeroPage;
