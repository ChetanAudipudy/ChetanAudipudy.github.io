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
        <Link to="/social" className="nav-link">
          Social
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
