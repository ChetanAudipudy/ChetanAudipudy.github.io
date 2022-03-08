import React from 'react';
import { Link } from "react-scroll";

const Hero = () => (
    <React.Fragment>
    <div className="hero">
        <div className="hero__container">
            <h3 className="hero__h3">Hello there! I'm</h3>
            <h1 className="hero__h1">Chetan Audipudy</h1>
            <div className="hero__line"></div>
            <h3 className="hero__h3 hero__h3--anim-delay">I'm a Software Engineer</h3>
        </div>
        <Link 
            to="skillset" 
            spy={true} 
            smooth={true}
            offset={-50}
            duration={500}
            className="arrow">
        </Link>
        <div class='light x1'></div>
        <div class='light x2'></div>
        <div class='light x3'></div>
        <div class='light x4'></div>
        <div class='light x5'></div>
        <div class='light x6'></div>
        <div class='light x7'></div>
        <div class='light x8'></div>
        <div class='light x9'></div>
    </div>
    </React.Fragment>
)

export default Hero