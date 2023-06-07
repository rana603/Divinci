import React from "react";
import "./navabr.css";
// import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="subNavbar">
        <div >
          <span className="logo">Cleansimple</span>
        </div>
        <div className="input">
        <i class="fa-solid fa-magnifying-glass"></i>
          <input className="inp" type="text" placeholder="search dashboard...." />
        </div>
        <div className="NavRight">
          <div className="navbarIcon">
            <i class="fa-regular fa-envelope"></i>
            <span className="sub"></span>
          </div>
          <div className="navbarIcon">
          <i class="fa-regular fa-bell"></i>
          </div>
          <img src="https://aujourdhui.ma/wp-content/uploads/2016/02/ratan-tata-1595.jpg?x92672" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
