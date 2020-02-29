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
        <a
          href="https://drive.google.com/file/d/1vJt9_4NYLvcY_CtRQbRvMYuF3no6TOph/view?usp=sharing"
          target="_blank"
        >
          <button type="button" className="btn resume-btn">
            Resume
          </button>
        </a>

        <div className="container">
          <SlideDown>
            <div className="row">
              {this.state.projects.map(project => {
                {console.log("project " + project )}
                return (
                  <Project
                    key={project.id}
                    name={project.name}
                    image={project.image}
                    desc={project.desc}
                    icons={project.icons}
                    projectLink={project.projectLink}
                    githubLink={project.githubLink}
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
