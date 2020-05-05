import React from 'react';

const Portfolio = () => (
    <div className="portfolio" id="portfolio">
        <div className="portfolio__container wow">
            <h2 className="portfolio__h2 wow">Portfolio</h2>
            <Card />
            <Card />

        </div>
    </div>
)

const Card = (props) => (
    <div className="card wow">
        <div className="card__info">
            <h4 className="card__h4">Dbrae</h4>
            <p className="card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            
        </div>
    </div>
)

export default Portfolio