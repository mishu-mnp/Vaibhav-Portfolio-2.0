import React from 'react';
import './portfolioList.scss';

const portfolioList = ({ title, id, selected, setSelected }) => {
    return (
        <li className={`portfolioList ${selected === id ? 'active' : ''}`}
            onClick={() => setSelected(id)}>
            {title}
        </li>
    )
};

export default portfolioList;
