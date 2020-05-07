import React from 'react';
import { Link } from "react-scroll";

const Header = () => {
    return (
        <header className="header">
            <ul className="header__container">
               <Link     
                    to="skillset" 
                    spy={true} 
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <li className="header__item">
                    <p href="#skillset" className="header__link">
                    Skillset
                    </p>
                    </li>
                </Link>
                <Link 
                    to="portfolio" 
                    spy={true} 
                    smooth={true}
                    offset={-20}
                    duration={500}>
                    <li className="header__item">
                    <p href="#portfolio" className="header__link">
                    Portfolio
                    </p>
                    </li>
                </Link>
                <Link 
                    to="work" 
                    spy={true} 
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <li className="header__item">
                    <p href="#work" className="header__link">
                    Work
                    </p>
                    </li>
                </Link>
                <Link 
                    to="contact" 
                    spy={true} 
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <li className="header__item">
                    <p href="#contact" className="header__link">
                    Contact
                    </p>
                    </li>
                </Link>
            </ul>
        </header>
    )
}

export default Header;