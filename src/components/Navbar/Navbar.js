import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="outerbox">
      <div className="nav-container">
        <Link to="/portfolio" className="nav-link">
          Portfolio
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        <Link to="/about" className="nav-link">
          About Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
