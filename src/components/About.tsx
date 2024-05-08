import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import photo from '../assets/Andrew.jpg';

const About = () => {
    return (
    <div id="About" className="container mx-auto pt-28 md:pl-40">
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center '>
            <div className={`md:w-1/2 ${window.innerWidth < 768 ? 'px-5' : 'pr-8'}`}> 
                <h1 className='text-3xl font-bold mb-4'>About Me</h1>

                <p className="mb-6">I am a graduate of the Computer Science Co-op program at the University of Guelph, with a minor in Marketing Studies. I have experience working in software development and IT project management, supporting multiple large-scale technology projects and initiatives at various stages in the software development life cycle.</p>
                <p className="mb-6">Having always been fascinated by technology and eager to learn new things, I have acquired proficiency in several programming languages, applications, and platforms on my own initiative and in school. Additionally, I have completed certifications in AWS, Azure AI, and Generative AI. </p>
                <p className="mb-6"> I am currently looking for a full-time role in Software Development.</p>
                <div className="flex pb-2">
                    <a href="https://www.linkedin.com/in/andrewepeter/" target="_blank" rel="noopener noreferrer" className="mr-4 text-gray-700 hover:text-black">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com/andrewepeter" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <div className="ml-2"></div>
                </div>
            </div>
            <div className="md:w-1/2 p">
                <img src={photo} alt="Andrew Peter Photo" className="hidden md:block mx-auto rounded-lg w-64 h-64" />
            </div>
        </div>
    </div>
    )
}

export default About