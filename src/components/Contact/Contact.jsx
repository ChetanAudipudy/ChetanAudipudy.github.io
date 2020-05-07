import React from 'react';
import { GrGithub, GrMail, GrLinkedinOption } from "react-icons/gr";

const Contact = () => (
    <div className="contact" id="contact">
    <h2 className="contact__h2 wow">Contact</h2>
        <div className="contact__container wow">
            <img src="./dp.jpg" alt="Profile" className="contact__img" />
            <div className="contact__info">
                <h4 className="contact__h4">Get in touch with me:</h4>
                <div className="contact__items__container">
                    <div className="contact__items"><GrMail className="react-icons"/> chetan.audipudy@gmail.com</div>
                    <a href="https://github.com/ChetanAudipudy" target="_blank" rel="noopener 
                    noreferrer" className="contact__link"><GrGithub className="react-icons"/></a>
                    <a href="https://www.linkedin.com/in/chetan-audipudy/" target="_blank" rel="noopener 
                    noreferrer" className="contact__link"><GrLinkedinOption className="react-icons"/></a>
                </div>
            </div>
        </div>
    </div>
)

export default Contact