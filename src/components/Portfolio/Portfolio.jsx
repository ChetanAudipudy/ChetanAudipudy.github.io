import React from 'react';
import portfolioData from './portfolioData.json';
import useWindowDimensions from "./windowDimension";

const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
        <h2 className="portfolio__h2">Portfolio</h2>
            <div className="portfolio__container">
                {portfolioData.map((data, index) => (
                    <Card key={`${data}${index}`} title={data.title} href={data.href} desc={data.desc} img={data.img}/>
                ))}
            </div>
        </div>
    )
}

const Card = (props) => {

    const { width, } = useWindowDimensions()
    const lgrpercent = width < 600 ? '70%' : width < 800 ? '60%' : width < 1000 ? '55%' : '50%';
    const style ={
        backgroundImage: `linear-gradient(105deg, rgba(255,255,255, 0.9) 0%, rgba(255,255,255, 0.9) ${lgrpercent}, transparent 50%), url(${props.img})`    
    }

    return (
        <a href={props.href} className="card__info__link" target="_blank" rel="noopener noreferrer">
        <div className="card" style={style}>
            <div className="card__info">
                <h4 className="card__h4">{props.title}</h4>
                <p className="card__desc">{props.desc}</p>
            </div>
        </div>
        </a>
    )
}
export default Portfolio