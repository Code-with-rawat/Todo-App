import React, { useState } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
// import "./App.css";
// import State from './components/hooks/State';
// import DeviceState from './components/hooks/DeviceState';
import ToggleSwitch from "./Project/Toggle/ToggleSwitch";
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
  // };
  return (
    <>
      {/* <Navbar mode={Dark} toggleBtn={toggleBtn} />
      <div className="card-container">
        <Cards mode={Dark}/>
      </div> */}
      {/* <State/> */}
      {/* <DeviceState/> */}
      {/* <ToggleSwitch/> */}
      <Todo/>
    </>
  );
}
