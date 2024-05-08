
const Projects = () => {
    return (
    <div id="Projects" className="max-w-7xl mx-auto py-10">
            <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-bold mb-4">AI Cover Letter Creator</h2>
                    <p className="mt-2 text-gray-700">A web application designed to generate personalized cover letters tailored to specific job postings and your resume. Developed using Restful/OpenAI APIs, React, and Python.</p>
                    <a href="https://cover-letter-creator-d5d7c840a39c.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300">View Project</a>
                </div>


                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Ra1nb0w</h2>
                    <p className="mt-2 text-gray-700">Ra1nb0w is a first-person 3D physics-based platformer created using the Unity game engine and written in C#.</p>
                    <div className="mt-4 flex flex-wrap gap-4">
                    <a href="https://www.linkedin.com/posts/andrewepeter_coding-unity3d-gamedev-activity-7059231125474332673-t8Sc?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300">Watch Trailer</a>
                    <a href="https://play.unity.com/mg/other/webgl-builds-330917" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300">Play for free</a>   
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Supreme Bot</h2>
                    <p className="mt-2 text-gray-700">A Discord bot that uses Python to parse JSON from a clothing brand’s website and alert Discord users to changes in stock.</p>
                    <a href="https://github.com/andrewepeter/SupremeBot" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300">View Project</a>
                </div>
                
            </div>
        </div>

    )

}

export default Projects;