import React from 'react';
import './services.scss';

const Services = () => {
    return <div className='services' id='services'>
        <div className="slider">
            <div className="container">
                <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                                <img src="assets/reactjs.png" alt="reactjs" />
                            </div>
                            <h2>Frontend Development</h2>
                            <p>I can create awesome websites based on my Frontend skills using ReactJs</p>
                            <span>Projects</span>
                        </div>
                    </div>
                    <div className="right">
                        <img src="assets/frontend.png" alt="frontend" />
                    </div>
                </div>
            </div>
        </div>
        <img src="assets/arrow-slider.png" className='arrow left' alt="arrow-l" />
        <img src="assets/arrow-slider.png" className='arrow right' alt="arrow-r" />
    </div>;
};

export default Services;
