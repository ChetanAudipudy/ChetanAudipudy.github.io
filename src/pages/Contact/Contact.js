import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div>
        <nav class="navbar custom-nav">
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
      <p>Contact page. Work in progress</p>
    </div>
  );
};
export default Contact;
