import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <ul className="header__container">
                <li className="header__item"><a href="#" className="header__link">Skillset</a></li>
                <li className="header__item"><a href="#" className="header__link">Portfolio</a></li>
                <li className="header__item"><a href="#" className="header__link">Work</a></li>
                <li className="header__item"><a href="#" className="header__link">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header;