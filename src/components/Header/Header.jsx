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
                    <a href="#skillset" className="header__link">
                    Skillset
                    </a>
                    </li>
                </Link>
                <Link 
                    to="portfolio" 
                    spy={true} 
                    smooth={true}
                    offset={-20}
                    duration={500}>
                    <li className="header__item">
                    <a href="#portfolio" className="header__link">
                    Portfolio
                    </a>
                    </li>
                </Link>
                <Link 
                    to="work" 
                    spy={true} 
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <li className="header__item">
                    <a href="#work" className="header__link">
                    Work
                    </a>
                    </li>
                </Link>
                <Link 
                    to="contact" 
                    spy={true} 
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <li className="header__item">
                    <a href="#contact" className="header__link">
                    Contact
                    </a>
                    </li>
                </Link>
            </ul>
        </header>
    )
}

export default Header;