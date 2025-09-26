import React from "react";
import "../styles/navbar.css"; // ✅ MAKE SURE THIS LINE EXISTS
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Archetype Labs Logo" className="logo" />
      </div>

      <nav className="nav-links">
        <a href="#">home</a>
        <a href="#">work</a>
        <a href="#">process</a>
        <a href="#">about</a>
        <a href="#">blog</a>
      </nav>

      <div className="nav-right">
        <a href="#" className="btn-contact">Contact us</a>
        <button className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;