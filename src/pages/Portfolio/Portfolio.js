import React from "react";
import Appbar from "../../components/Appbar/Appbar";
import Project from "../../components/Project/Project";
import projects from "../../projects.json";
import "./Portfolio.css";

class Portfolio extends React.Component {
  state = {
    projects: projects
  };

  render() {
    return (
      <div>
        <Appbar />

        <div className="container">
          <div className="row">
            {this.state.projects.map(project => {
              return (
                <Project
                  key={project.id}
                  name={project.name}
                  image={project.image}
                  desc={project.desc}
                  icons={project.icons}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
