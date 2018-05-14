import React from "react";
import "./Icons.css";

const Icons = props => {
  return (
    <div className="tech-icons-container">
      {props.icons.map(i => {
        return <i className={i} />;
      })}
    </div>
  );
};

export default Icons;
