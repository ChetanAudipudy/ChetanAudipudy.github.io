import React from "react";
import "./Project.css";

const Project = props => {
  return (
    <div className="portfolio-container">
      <div className="card mb-3 project-container">
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
              <img
                src={props.icons}
                alt="image of project"
                style={{ height: 70 }}
              />
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
