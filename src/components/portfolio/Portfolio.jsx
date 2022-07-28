import React, { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import {
    skillsPortfolio,
    educationPortfolio,
    projectsPortfolio,
    experiencePortfolio
} from '../../data';

const Portfolio = () => {

    const list = [
        {
            id: 'skills',
            title: 'Skills'
        },
        {
            id: 'education',
            title: 'Education'
        },
        {
            id: 'projects',
            title: 'Projects'
        },
        {
            id: 'experience',
            title: 'Experience'
        }
    ];

    const [selected, setSelected] = useState("skills")
    const [data, setData] = useState([])

    useEffect(() => {
        switch (selected) {
            case "skills": setData(skillsPortfolio)
                break;
            case "education": setData(educationPortfolio)
                break;
            case "projects": setData(projectsPortfolio)
                break;
            case "experience": setData(experiencePortfolio)
                break;
            default: setData(skillsPortfolio)
        }
    }, [selected])



    return <div className='portfolio' id='portfolio'>
        <h1>Portfolio</h1>
        <ul>
            {list.map(item => (
                <PortfolioList
                    key={item.id}
                    title={item.title}
                    selected={selected}
                    id={item.id}
                    setSelected={setSelected}
                />
            ))}
        </ul>
        <div className="container">
            {data.map(d => (
                <div className="item" id={d.id} key={d.id} >
                    <a href={d.url} target='_blank' rel="noreferrer"><img src={d.img} alt={d.title} /></a>
                    <h3>{d.title}</h3>
                    <span>{d.subTitle}</span>
                </div>
            ))}
        </div>
    </div>;
};

export default Portfolio;
