import React, { useState } from 'react';
import './services.scss';

const Services = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
            id: 1,
            icon: 'assets/reactjs.png',
            title: 'Frontend',
            desc: 'I can create awesome websites based on my Frontend skills using ReactJs',
            img: 'assets/frontend.png'

        },
        {
            id: 2,
            icon: 'assets/nodejs.png',
            title: 'Backend',
            desc: 'I can create awesome websites based on my Backend skills using NodeJs',
            img: 'assets/backend.png'

        },
        {
            id: 3,
            icon: 'assets/pythonIcon.png',
            title: 'Python',
            desc: 'I can code in Python and also have created some projects as well like Calculator, Billing System and many more',
            img: 'assets/python.png'

        }
    ]

    const handleWay = (way) => {
        // console.log(way)
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    return <div className='services' id='services'>
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
            {data.map(d => (
                <div className="container" key={d.id}>
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt='skills-icon' />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt='skills-img' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <img src="assets/arrow-slider.png" className='arrow left' alt="arrow-l" onClick={() => handleWay("left")} />
        <img src="assets/arrow-slider.png" className='arrow right' alt="arrow-r" onClick={() => handleWay("right")} />
    </div>;
};

export default Services;
