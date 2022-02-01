import React from 'react';
import './menu.scss';

const Menu = ({ openMenu }) => {
    return <div className={`menu ${openMenu ? 'active' : ''}`}>
        <ul>
            <li><a href="#intro">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

    </div>;
};

export default Menu;
