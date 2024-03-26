import { useState } from "react";
import Link from "./components/Link";
import Alert from "./components/Alert";
import Button from "./components/Button";
import "./App.css"
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
       {alertVisible && <Alert onClose={()=> setAlertvisibility(false)}>My Alert</Alert>}
      <Button onClick={() => setAlertvisibility(true)}>Primary</Button>
      <Link linkString={"https://www.linkedin.com/posts/andrewepeter_coding-unity3d-gamedev-activity-7059231125474332673-t8Sc?utm_source=share&utm_medium=member_desktop"}>LinkedIn</Link>
      <Link linkString={"https://github.com/andrewepeter"}>Github</Link>

      <Link linkString={"https://play.unity.com/mg/other/webgl-builds-330917"}>Click here to play for free!</Link>
      <p className="center">hey</p>
    </div>
  );
}

export default App;