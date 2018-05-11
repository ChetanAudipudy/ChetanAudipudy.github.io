import React from "react";

const Carousel = props => {
  return (
    <div id="projectImages" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#projectImages" data-slide-to="0" class="active" />
        <li data-target="#projectImages" data-slide-to="1" />
        <li data-target="#projectImages" data-slide-to="2" />
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={props.image[0]} alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={props.image[1]} alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={props.image[2]} alt="Third slide" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#projectImages"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#projectImages"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
