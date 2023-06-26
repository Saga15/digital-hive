import React from "react";
import "./Sidebar.css";
// import  {Link}  from "react-router-dom";
export default function Sidebar() {
  return (
    <div>
      <div id="container">
        <div class="navbar">
          <ul className="sides">
            <li className="create-btn">
              <img className="calenders" src="\images\dashbord.svg" />

              <h4>DashBoard</h4>
            </li>
            <li className="create-btn">
              <img
                className="calenders"
                src="\images\calendar-days-regular.svg"
              />
              <h4>Calender</h4>
            </li>
            <li className="create-btns">
              <img className="calenders" src="\images\create2.svg" />
              <h4>Create</h4>
            </li>
            <li className="create-btn">
              <img className="calenders" src="\images\reprot.svg" />
              <h4>Report</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
