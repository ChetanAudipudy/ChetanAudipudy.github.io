import React from "react";
import Appbar from "../../components/Appbar/Appbar";
import Project from "../../components/Project/Project";
import projects from "../../projects.json";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
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
          <SlideDown>
            <div className="row">
              {this.state.projects.map(project => {
                return (
                  <Project
                    key={project.id}
                    name={project.name}
                    image={project.image}
                    desc={project.desc}
                    icons={project.icons}
                    projectLink={project.projectLink}
                  />
                );
              })}
            </div>
          </SlideDown>
        </div>
      </div>
    );
  }
}
export default Portfolio;
