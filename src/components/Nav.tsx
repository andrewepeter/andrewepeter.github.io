import React from 'react';

const Nav = () => {
    return (
  


            <nav className="py-30 bg-red-50 h-screen">
                <ul className ="flex">
                    <li>
                        <a href="/#about" className='text-lg'>About</a>
                    </li>
                    <li>
                        <a href="/#Resume">Resume</a>
                    </li>
                    <li>
                        <a href="/#Projects">Projects</a>
                    </li>
                    <li>
                        <a href="/#Certifcations">Certifications</a>
                    </li>
                    <li>
                        <a href="/#Contact">Contact</a>
                    </li>
                </ul>
            </nav>
    );
};

export default Nav;