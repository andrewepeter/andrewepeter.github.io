import { useState } from "react";
import Link from "./components/Link";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Nav from "./components/Nav";
//import { Link } from 'react-router-dom';

/*
Ideas:

-Have a biosection from LinkedIn
-Projects
-Contact
-Resume
-Cerficiations
-gmail
-github

*/


function App() {
  const [alertVisible, setAlertvisibility] = useState(false)
  return (
    <div >
      <h1 className="font-bold text-3xl text-center">hey</h1>
      <Nav/>  
       {alertVisible && <Alert onClose={()=> setAlertvisibility(false)}>My Alert</Alert>}
      <Button onClick={() => setAlertvisibility(true)}>Primary</Button>
      <Link linkString={"https://www.linkedin.com/in/andrewepeter/"}>LinkedIn</Link>
      <Link linkString={"https://github.com/andrewepeter"}>Github</Link>

      <Link linkString={"https://play.unity.com/mg/other/webgl-builds-330917"}>Click here to play for free!</Link>
      <p className="center">hey</p>
    </div>
  );
}

export default App;