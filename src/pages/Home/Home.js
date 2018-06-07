import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Social from "../../components/Social/Social";
// import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      // <SlideDown>
      <div className="wrapper">
        <div className="row">
          <div className="col-md-8">
            <div className="left-container">
              <div className="about">
                <h4 className="about-name">
                  Hello there!<br /> My name is Chetan<br /> I'm a web & app developer
                </h4>
                <p className="about-text">
                  Let me help you grow your buisness and make your website look
                  good while I'm at it.{" "}
                </p>
                <div className="row">
                  <div className="social-row">
                    <Social />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 right-container">
            <Navbar />
          </div>
        </div>
      </div>
      // </SlideDown>
    );
  }
}
