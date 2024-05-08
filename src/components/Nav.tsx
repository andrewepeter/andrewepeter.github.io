import React, { useState } from 'react';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [highlightedSection, setHighlightedSection] = useState('About');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setHighlightedSection(sectionId);
        }
    };

    return (
        <nav className='fixed top-0 left-0 w-full bg-gray-800 text-white p-5 shadow-lg'>
            <div className='max-w-7xl mx-auto flex flex-wrap justify-between items-center'>
                <a href='#logo' className='text-white font-bold text-xl md:pl-20'>Andrew Peter</a>
                {/* Hamburger menu button */}
                <button className='md:hidden text-white hover:text-gray-300 focus:outline-none ml-auto' onClick={toggleMenu}>
                    <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M4 6H20M4 12H20M4 18H20' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                </button>

                {/* Render mobile menu */}
                <div className={`w-full md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className='mt-4'>
                        <a href='/#About' className={`text-gray-300 hover:text-white px-2 py-2 block ${highlightedSection === 'About' ? 'bg-gray-700' : ''}`} onClick={() => scrollToSection('About')}>About</a>
                        <a href='/#Resume' className={`text-gray-300 hover:text-white px-2 py-2 block ${highlightedSection === 'Resume' ? 'bg-gray-700' : ''}`} onClick={() => scrollToSection('Resume')}>Resume</a>
                        <a href='/#Projects' className={`text-gray-300 hover:text-white px-2 py-2 block ${highlightedSection === 'Projects' ? 'bg-gray-700' : ''}`} onClick={() => scrollToSection('Projects')}>Projects</a>
                        <a href='/#Contact' className={`text-gray-300 hover:text-white px-2 py-2 block ${highlightedSection === 'Contact' ? 'bg-gray-700' : ''}`} onClick={() => scrollToSection('Contact')}>Contact</a>
                    </div>
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
