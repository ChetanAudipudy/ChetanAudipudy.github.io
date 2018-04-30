import React from "react";
import "./Social.css";

const Social = () => {
  return (
    <div>
      <div align="center" className="socialbtns">
        <ul>
          <li>
            <a href="#" className="fa fa-lg fa-twitter" />
          </li>
          <li>
            <a href="#" className="fa fa-lg fa-github" />
          </li>
          <li>
            <a href="#" className="fa fa-lg fa-linkedin" />
          </li>
          <li>
            <a href="#" className="fa fa-lg fa-instagram" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Social;
