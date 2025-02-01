
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {

  //state for textarea
  const [TextArea, SetTextArea] = new useState("");

  const [light, dark] = new useState("secondary-subtle");

  const [Antimode, setantimode] = new useState("dark");


  const [alert, newalert] = new useState(null);

  //function to setalert
  const setalert = (type, message, color) => {
    newalert({
      type: type,
      msg: message,
      color: color
    });

    setTimeout(() => {
      newalert(null);
    }, 2000);

  }

  //function for toggle mode for dark and light mode

  const ToggleMode = () => {

    if (light.includes("secondary-subtle")) {
      // console.log("Dark Mode Enabled");
      dark("dark");
      setantimode("light");

      setalert("Success", "Dark Mode Enabled", "success");


      document.body.style.backgroundColor = '#000000'

      //updating textarea
      SetTextArea("bg-dark-subtle text-dark-emphasis");
    }

    else {
      setantimode("dark");
      dark("secondary-subtle");
      //  console.log("light mode enabled");
      setalert("Success", "Light Mode Enabled", "success");

      document.body.style.backgroundColor = '#ffffff'

      SetTextArea("");

    }


  }

  return (
    <>
      {/* JSX framgents is used to wrap the multiple html elements */}
      {/* JSX (Syntaxt Extensibilty for JavaScript) helps to bind the html code with javaScript */}

      {/* props know  for properties is used to set the properties values for the component   */}
      <Router>

        <Navbar Title="TextUtils" About="About Us" mode={light} antimode={Antimode} ToggleMode={ToggleMode} />

        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path ="/about" element={<About mode={light} antimode={Antimode}/>}/>  
            <Route excat path="/" element={<TextForm heading="Enter a text to Evaluate" mode={light} antimode={Antimode} ToggleMode={ToggleMode} textareamode={TextArea} setalert={setalert} />}/>
          </Routes>


        </div>
      </Router>

    </>
  );
}

export default App;
