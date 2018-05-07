import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Social from "../../components/Social/Social";

import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="row">
          <div className="col-md-8 left-container">
            <div className="about">
              <p className="about-name">
                Hello there!<br /> My name is Chetan<br /> I'm a web developer
              </p>
              <p className="about-text">
                Let me help you grow your buisness and make your website look
                good while I'm at it.{" "}
              </p>
            </div>
            <div className="row social-row">
              <Social />
            </div>
          </div>
          <div className="col-md-4 right-container">
            <Navbar />
          </div>
        </div>
      </div>
    );
  }
}
