

const Contact = () => {
    return (
        <div id="Contact" className=' mx-auto flex justify-between items-center pt-10 bg-gray-800 text-white pb-10'>
            <div className="max-w-7xl mx-auto text-center">
                <h1 className='text-3xl font-bold mb-4'>Contact</h1>
                <p>
                I can be reached at the following:
                </p>
                <p className="pt-5">
                    <span className="font-bold"> Linkedin: </span> <a href="https://www.linkedin.com/in/andrewepeter" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/andrewepeter</a> <br/>
                    <span className="font-bold">Email: </span> <a href="mailto:andrewepeter@gmail.com" target="_blank" rel="noopener noreferrer">andrewepeter@gmail.com</a> <br/>
                    <span className="font-bold">Phone: </span> <a href="tel:4164350126">416-435-0126</a> <br/>
                </p>
            </div>
        </div>
    )
}

export default Contact