import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
       <Nav/>
       <About/>
       <Resume/>
       <Projects/>
       <Contact/>  
    </div>
  );
}

export default App;