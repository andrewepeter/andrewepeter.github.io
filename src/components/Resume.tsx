import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import resumePDF from '../assets/Andrew_Peter_Resume.pdf';

const Resume = () => {
    return (
      <div id='Resume' className='mx-auto pt-10 pb-10 bg-gray-800 text-white flex flex-col items-center'>
        <h1 className='text-3xl font-bold mb-8'>Resume</h1>
        <div className='w-full max-w-full sm:max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden'>
          <div className="overflow-x-auto">
            <iframe src={resumePDF} className="w-full sm:h-screen" title="Resume PDF"></iframe>
          </div>
          <div className="flex justify-center mb-4">
            <a href={resumePDF} target="_blank" rel="noopener noreferrer" download className="bg-gray-800 text-white font-bold py-2 px-4 rounded inline-flex items-center hover:bg-gray-700"> Download Resume</a>
          </div>
        </div>
      </div>
    )
}

export default Resume;
