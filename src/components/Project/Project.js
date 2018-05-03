import React, { Component } from "react";
import Modal from "react-modal";
import "./Project.css";

const Project = props => {
  return (
    <div>
      <div className="row">
        <div class="card">
          <div className="mock-img">
            <img
              className="card-img-top"
              src={props.image}
              alt="Card image cap"
            />
          </div>
          <div className="desc">
            <div className="desc-text">
              <p>{props.desc}</p>
            </div>
            <div className="tech-used">
              <h3>github </h3>
              <h3>react </h3>
              <h3>node </h3>
              <h3>material</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
