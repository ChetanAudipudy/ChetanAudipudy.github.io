import React from 'react';

const Work = () => (
    <div className="work" id="work">
        <div className="work__container">
            <h2 className="work__h2">Work Experience</h2>
            <WorkList />
        </div>
    </div>
)

const WorkList = () => (
    <div className="work__list">
        <h4 className="work__h4">CVS Health</h4>
        <p className="work__title">Application Developer -- July 2018 - Present</p>
        <p className="work__desc">TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod temporadipiscing elit, sed do eiusmod temporadipiscing elit, sed do eiusmod tempor</p>
    </div>
)

export default Work

