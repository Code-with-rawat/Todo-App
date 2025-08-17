import React, { useState } from "react";
import "../Toggle/ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";
export default function TogglSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggleBtn = () => {
    setIsOn(!isOn);
  };
  return (
    <>
    <h1 style={{textAlign:"center",top:"50px"}}>Toggle Switch <IoIosSwitch /></h1>
    <div
      className="toggle-switch"
      style={{ backgroundColor: isOn ? "#4caf50" : "" }}
      onClick={handleToggleBtn}
    >
      <div className={`switch ${isOn ? "on" : "off"}`}>
        <span className="switch-state">{isOn ? "On" : "off"}</span>
      </div>
    </div>
    {/* <div>
      {isOn && <Cards mode={isOn}/>}
    </div> */}
    </>
  );
}
