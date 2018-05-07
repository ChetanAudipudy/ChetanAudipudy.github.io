import React from "react";
import "./Social.css";

const Social = () => {
  return (
    <div>
      <div align="center" className="socialbtns">
        <ul>
          <li>
            <a
              href="https://github.com/ChetanAudipudy"
              className="fa fa-lg fa-github"
              target="_blank"
              rel="noopener noreferrer"
            />
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/chetan-audipudy/"
              className="fa fa-lg fa-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            />
          </li>
          <li>
            <a
              href="https://www.instagram.com/chetan_audipudy/"
              className="fa fa-lg fa-instagram"
              target="_blank"
              rel="noopener noreferrer"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Social;
