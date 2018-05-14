import React from "react";
import Slider from "react-slick";
import Icons from "../Icons/Icons";
import "./Project.css";

const Project = props => {
  var settings = {
    dots: true,
    touchMove: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="portfolio-container">
      <div className="card mb-3">
        <Slider {...settings}>
          <img src={props.image[0]} />
          <img src={props.image[1]} />
          <img src={props.image[2]} />
        </Slider>
        <br />
        <div className="card-body">
          <div className="row">
            <a href={props.projectLink} target="_blank">
              <button className="btn btn-light link-button">
                <h3 className="card-title">{props.name}</h3>
              </button>
            </a>{" "}
            <a href={props.githubLink} target="_blank" className="a-git-icon">
              <button className="btn btn-sm bg-light link-button">
                <i className="devicon-github-plain-wordmark colored git-icon" />
              </button>
            </a>
          </div>
          <p className="card-text">{props.desc}</p>
          <Icons icons={props.icons} />
        </div>
      </div>
    </div>
  );
};

export default Project;
