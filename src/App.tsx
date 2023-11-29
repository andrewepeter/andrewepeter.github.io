import { useState } from "react";
import Link from "./components/Link";
import Alert from "./components/Alert";
import Button from "./components/Button";
import "./App.css"
//import { Link } from 'react-router-dom';

function App() {
  const [alertVisible, setAlertvisibility] = useState(false)
  return (
    <div className="background-lightgray">
       {alertVisible && <Alert onClose={()=> setAlertvisibility(false)}>My Alert</Alert>}
      <Button onClick={() => setAlertvisibility(true)}>Primary</Button>
      <Link linkString={"https://www.linkedin.com/posts/andrewepeter_coding-unity3d-gamedev-activity-7059231125474332673-t8Sc?utm_source=share&utm_medium=member_desktop"}>LinkedIn</Link>
      <Link linkString={"https://github.com/andrewepeter"}>Github</Link>
      <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7059230994167443456?compact=1" height="399" width="710" frameBorder="0" allowfullscreen="yes" title="Embedded post"></iframe>
      <Link linkString={"https://play.unity.com/mg/other/webgl-builds-330917"}>Click here to play for free!</Link>
      <p className="text-blue">hey</p>
    </div>
  );
}

export default App;