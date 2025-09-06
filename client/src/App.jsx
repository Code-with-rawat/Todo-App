import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Navbar from "./Project/Todo/Navbar";
import Todo from "./Project/Todo/Todo";
export default function App() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

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
      <div className={mode === "dark" ? "dark-theme" : "light-theme"}>
        <Navbar mode={mode} toggleBtn={toggleMode} />
        <Todo mode={mode} />
      </div>
    </>
  );
}
