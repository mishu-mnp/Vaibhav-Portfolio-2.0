import React from 'react';
import './topbar.scss';
import { Person, Mail } from '@material-ui/icons'

const Topbar = ({ openMenu, setOpenMenu }) => {

    const handleOpenMenu = () => {
        openMenu ? setOpenMenu(false) : setOpenMenu(true)
    }

    return (
        <div className={`topbar ${openMenu ? 'active' : ''}  `}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>mishu</a>
                    <div className="itemContainer">
                        <Person className='icon' />
                        <span>+91 98684 22763</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon' />
                        <span>vaibhavcodes@bug.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={handleOpenMenu}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Topbar;
