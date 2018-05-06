import React, { Component } from "react";
import Modal from "react-modal";
import "./Project.css";

const Project = props => {
  return (
<<<<<<< HEAD
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
=======
    <div className="portfolio-container">
      <div className="card mb-3">
        <img
          className="card-img-top mock-img"
          src={props.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h3 className="card-title">{props.name}</h3>
          <p className="card-text">{props.desc}</p>
          <p className="card-text">
            <small className="text-muted">
              <img src={props.icons} style={{ height: 80 }} />
            </small>
          </p>
>>>>>>> 9ed7c2a2e82d39634703ffcbb4e784ab71673733
        </div>
      </div>
    </div>
  );
};

export default Project;
