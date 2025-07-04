import React, { useEffect, useState } from 'react'
import logo from "/Image/logo.png"
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const [navOpen, setNavOpen] = useState(false)
    const toggleNav = () => setNavOpen(!navOpen)

    const navItem = ["Home", "Projects", "Skill", "Blogs", "Contact"]
    return (
        <div className={`fixed top-0 w-full h-20 z-30 px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-stone-200 text-black shadow-md rounded-b-2xl' : 'bg-[#000116] text-stone-200'
            }`}>


            <div className='w-28 h-24'>
                <img src={logo} alt="logo" className='h-full w-full object-contain' />
            </div>

            {/* Desktop  */}
            <ul className='hidden md:flex justify-around flex-1 text-2xl'>
                {navItem.map((item) => (
                    <li key={item} className="relative group cursor-pointer">
                        <Link
                            to={item.toLowerCase()}
                            smooth={true}
                            duration={500}
                            offset={-60} // if you have a fixed navbar
                        >
                            {item}
                            <span
                                className={`absolute left-0 -bottom-1 h-1 w-0 rounded-2xl transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-black' : 'bg-stone-200'
                                    }`}
                            />

                        </Link>
                    </li>
                ))}
            </ul>


            {/* Hameburger icon  */}
            <div className='md:hidden z-40 cursor-pointer text-3xl' onClick={toggleNav}>
                {navOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile view */}

            <ul className={`absolute top-56 right-0 w-[70%] max-w-xs text-center text-white text-lg sm:text-xl flex flex-col gap-4 py-4 transition-transform duration-300 transform ${navOpen ? 'translate-x-1/3' : 'translate-x-full'} md:hidden`}>
                {navItem.map((item) => (
                    <li key={item} className="cursor-pointer">
                        <Link
                            to={item.toLowerCase()}
                            smooth={true}
                            duration={500}
                            offset={-60}
                            onClick={() => setNavOpen(false)} // close mobile nav on click
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>




        </div>
    )
}

export default Navbar