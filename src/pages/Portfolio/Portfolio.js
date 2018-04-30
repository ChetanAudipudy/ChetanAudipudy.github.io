import React from "react";
import { Link } from "react-router-dom";

import Project from "../../components/Project/Project";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <div>
        <nav class="navbar custom-nav">
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
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <Project />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
