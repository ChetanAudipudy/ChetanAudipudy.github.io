import React from 'react';
import workData from './workData.json';

const Work = () => (
    <div className="work" id="work">
    <h2 className="work__h2 wow">Work Experience</h2>
        <div className="work__container">
            {workData.map((data,index) => (
                <WorkList key={`${data}${index}`} company={data.company} title={data.title} duration={data.duration} desc={data.desc} />
            ))}
        </div>
    </div>
)

const WorkList = (props) => (
    <div className="work__list wow">
        <h4 className="work__h4">{props.company}</h4>
        <p className="work__title">{props.title} <br /> {props.duration}</p>
        <p className="work__desc">{props.desc}</p>
    </div>
)

export default Work

