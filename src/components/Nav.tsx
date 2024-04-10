import React, { useState } from 'react';

const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    const scrollToSection = (sectionId: string) => {
      const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth'})
        }  
    };

    return (
       <nav className='fixed top-0 left-0 w-full bg-gray-800 text-white p-5 '>
            <div className='max-w-7xl mx-auto flex flex-wrap justify-between items-center'>
                <div className='flex-shrink-0 w-full md:w-auto md:flex-grow md:flex-shrink'>
                    <a href='#logo' className='text-white font-bold text-xl md:pl-20'>Andrew Peter</a>
                </div>

                {/* Hamburger menu button */}
                <div className='flex w-full md:hidden justify-end'>
                    <button className='text-white hover:text-gray-300 focus:outline-none' onClick={toggleMenu}>
                        <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M4 6H20M4 12H20M4 18H20' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
                        </svg>
                    </button>
                </div>

                {/* Render mobile menu */}
                <div className={`w-full md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <a href='/#About' className='text-gray-300 hover:text-white px-3 py-2 block' onClick={() => scrollToSection('About')}>About</a>
                    <a href='/#Resume' className='text-gray-300 hover:text-white px-3 py-2 block' onClick={() => scrollToSection('Resume')}>Resume</a>
                    <a href='/#Projects' className='text-gray-300 hover:text-white px-3 py-2 block' onClick={() => scrollToSection('Projects')}>Projects</a>
                    <a href='/#Contact' className='text-gray-300 hover:text-white px-3 py-2 block' onClick={() => scrollToSection('Contact')}>Contact</a>
                </div>

                {/* Render regular menu on medium and larger screens */}
                <div className={`hidden md:flex md:flex-row md:items-center md:justify-end ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <a href='/#About' className='text-gray-300 hover:text-white px-3 py-2' onClick={() => scrollToSection('About')}>About</a>
                    <a href='/#Resume' className='text-gray-300 hover:text-white px-3 py-2' onClick={() => scrollToSection('Resume')}>Resume</a>
                    <a href='/#Projects' className='text-gray-300 hover:text-white px-3 py-2' onClick={() => scrollToSection('Projects')}>Projects</a>
                    <a href='/#Contact' className='text-gray-300 hover:text-white px-3 py-2' onClick={() => scrollToSection('Contact')}>Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;