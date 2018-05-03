import React from "react";
import { Link } from "react-router-dom";
// import Portal from "../Portal/Portal";
import Project from "../../components/Project/Project";
import projects from "../../projects.json";
import "./Portfolio.css";

class Portfolio extends React.Component {
  state = {
    projects: projects
  };

  openPortal() {
    this.setState(() => ({
      showPortal: !this.state.showPortal
    }));
  }

  closePortal() {
    this.setState(() => ({
      showPortal: false
    }));
  }

  render() {
    const { showPortal } = this.state;
    return (
      <div>
        <div>
          <nav class="navbar custom-nav">
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
          </nav>
        </div>
        <div className="row">
          {this.state.projects.map(project => {
            return (
              <Project
                key={project}
                image={project.image}
                desc={project.desc}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Portfolio;
