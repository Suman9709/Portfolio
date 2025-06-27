import React from 'react'
import image from '/Image/image.png';

const About = () => {
    return (
        <div className=" flex flex-col md:flex-row items-center justify-center  w-full px-6 md:px-16 gap-10 bg-white/10 bg-opacity-50 text-stone-200">
            {/* left  */}
            <div className="md:w-1/2 flex items-center justify-center">
                <img
                    src={image}
                    alt="profile"
                    className="w-72 h-72 object-cover rounded-full border-4 border-white shadow-lg"
                />
            </div>

            {/* right  */}
            <div className="w-full md:w-3/4 lg:w-1/2 px-4 sm:px-6 md:px-8 p-4">
                <p className="text-base sm:text-md text-justify text-stone-200">
                    <span className="wave-hand text-4xl">👋</span> Hi, I'm a passionate MERN Stack Developer with hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I enjoy turning complex problems into clean, efficient, and scalable solutions.

                    <br /><br />
                    My expertise lies in developing responsive user interfaces, crafting robust backend APIs, and connecting them seamlessly to create meaningful digital experiences. Whether it's designing a dynamic frontend or structuring secure databases, I thrive on bringing ideas to life through code.

                    <br /><br />
                    I’m always eager to learn new technologies, contribute to impactful projects, and collaborate with like-minded developers who are just as excited about innovation as I am.
                </p>
            </div>

        </div>
    )
}

export default About