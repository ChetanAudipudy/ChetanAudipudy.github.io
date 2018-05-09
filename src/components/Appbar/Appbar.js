import React from "react";
import { Link } from "react-router-dom";
import "./Appbar.css";

const Appbar = () => (
  <div className="row">
    <div className="col-md-12">
      <div className="appbar-container">
        {/* <nav className="navbar fixed-top custom-nav">
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
        </nav> */}

        <nav className="navbar fixed-top navbar-expand-md navbar-dark custom-nav-container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="custom-nav">
              <div className="navbar-nav">
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
              </div>
              <nav class="navbar navbar-dark d-none d-md-block">
                {/* <nav class="navbar navbar-dark"> */}
                <span class="custom-nav-link brand">Chetan Audipudy</span>
              </nav>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
);

export default Appbar;
