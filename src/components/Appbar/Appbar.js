import React from "react";
import { Link } from "react-router-dom";
import "./Appbar.css";

const Appbar = () => (
  <div className="appbar-container">
    <nav className="navbar fixed-top custom-nav">
      <Link to="/" className="custom-nav-link">
        Home
      </Link>
      <Link to="/portfolio" className="custom-nav-link">
        Portfolio
      </Link>
      <Link to="/contact" className="custom-nav-link">
        Contact
      </Link>
      <Link to="/about" className="custom-nav-link">
        About Me
      </Link>
    </nav>
  </div>
);

export default Appbar;
