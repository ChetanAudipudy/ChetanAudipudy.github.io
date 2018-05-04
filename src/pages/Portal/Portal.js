import React from "react";
import ReactDOM from "react-dom";
import "./Portal.css";
import Project from "../../components/Project/Project";

class Portal extends React.Component {
  constructor(props) {
    super(props);

    this.rootSelector = document.getElementById("modal-root");
    this.container = document.createElement("div");
  }

  componentDidMount() {
    this.rootSelector.appendChild(this.container);
  }

  componentWillUnmount() {
    this.rootSelector.removeChild(this.container);
  }

  render() {
    return ReactDOM.createPortal(<Project {...this.props} />, this.container);
  }
}

export default Portal;

{
  /* <Project {...this.props} /> */
}
