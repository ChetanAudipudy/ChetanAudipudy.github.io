import React from "react";
import "./Project.css";

const Project = props => {
  return (
    <div className="portfolio-container">
      <div className="card mb-3">
        <a href={props.projectLink} target="_blank">
          <img
            className="card-img-top mock-img"
            src={props.image}
            alt="Card image cap"
          />{" "}
        </a>
        <div className="card-body">
          <a href={props.projectLink} target="_blank">
            <h3 className="card-title">{props.name}</h3>
          </a>
          <p className="card-text">{props.desc}</p>
          <p className="card-text">
            <small className="text-muted">
              <img
                src={props.icons}
                alt="image of project"
                className="tech-icons"
              />
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
