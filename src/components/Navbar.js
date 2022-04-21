import React from "react";
import "../css/Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar topnav" id="navigation">
        <div className="head">
          <h1>React</h1>
        </div>
        <div>
          <ul className="nav-items head-link" id="navigate">
            <li className="heada">
              <a href="/">Home</a>
            </li>
            <li className="heada">
              <a href="/">About Us</a>
            </li>
            <li className="heada">
              <a href="/">contact</a>
            </li>
          </ul>
        </div>
        <div className="menu">
          <div className="stairs" id="nav-icon1">
            <span className="line line1"></span>
            <span id="line" className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </div>
      </nav>
    </>
  );
}
