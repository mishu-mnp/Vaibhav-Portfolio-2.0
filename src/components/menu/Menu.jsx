import React from 'react';
import './menu.scss';

const Menu = ({ openMenu, setOpenMenu }) => {
    return <div className={`menu ${openMenu ? 'active' : ''}`}>
        <ul>
            <li><a href="#intro" onClick={() => setOpenMenu(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setOpenMenu(false)}>About</a></li>
            <li><a href="#portfolio" onClick={() => setOpenMenu(false)}>Portfolio</a></li>
            <li><a href="#services" onClick={() => setOpenMenu(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setOpenMenu(false)}>Contact</a></li>
        </ul>

    </div>;
};

export default Menu;
