import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
// import Navbar from "./components/Navbar";
import Navbar from "./Project/Todo/Navbar";
// import "./App.css";
// import State from './components/hooks/State';
// import DeviceState from './components/hooks/DeviceState';
// import ToggleSwitch from "./Project/Toggle/ToggleSwitch";
import Todo from "./Project/Todo/Todo";
export default function App() {
  // const [Dark, setDark] = useState('light');
  // const toggleBtn = () => {
  //   if (Dark === 'light') {
  //     setDark('black');
  //     document.body.style.backgroundColor = '#042743';
  //   } else {
  //     setDark('light');
  //     document.body.style.backgroundColor = '#ffffff';
  //   }
  //};

  // const [Darks, setDarks] = useState("light");
   const [mode, setMode] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  
  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  // const toggleBtns = () => {
  //   if (Darks === "light") {
  //     setDarks("dark");
  //     document.body.style.backgroundColor = "#001f29";
  //   } else {
  //     setDarks("light");
  //     document.body.style.backgroundColor = "#fff";
  //   }
  // };

   const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* <div className="card-container">
        <Cards mode={Dark}/>
      </div> */}
      {/* <State/> */}
      {/* <DeviceState/> */}
      {/* <ToggleSwitch/> */}
       <div className={`app bg-${mode} text-${mode === "light" ? "dark" : "light"}`}>
      <Navbar mode={mode} toggleBtn={toggleMode} />
      <Todo mode={mode}/>
      </div>
    </>
  );
}
