import React, { useState } from "react";
import "./ToggleStyles.css";
function Toggle() {
  const [on, setOn] = useState(false);
  console.log(on);
  // const [title , setTitle];
  // [isActive, setIsActive];
  // return <div class="toggle" onClick ="toggle"></div>;
  // state change -> re-render;
  // onClick ={() => setOn(true)}
  //  {/* Toggle {on ? "On" : "Off"} */}
  return (
    <div>
      <div class={`toggle ${on ? "active" : ""}`}>
        <div class={`spinner ${on ? "active" : ""}`} ></div>
      </div>
      {on ? "On" : "OFF"}
      <div class="toggle-control">
        <div class="toggle-on" onClick={() => setOn(true)}>On</div>
        <div class="toggle-off" onClick={() => setOn(false)}>Off</div>
      </div>
    </div>
  );
}
export default Toggle;
