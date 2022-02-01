import React, { useEffect, useRef } from 'react';
import './intro.scss';
import { KeyboardArrowDownSharp } from '@material-ui/icons';
import { init } from 'ityped'

const Intro = () => {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backSpeed: 60,
            backDelay: 1500,
            strings: ['Student', 'Frontend Developer', 'Backend Enthusiast', 'Learner']
        })
    }, [])

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    {/* <img src="assets/vaibhav_profile.jpg" alt="mishu" /> */}
                    <img src="assets/vaibhavPhoto.jpeg" alt="mishu" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Vaibhav Mishra</h1>
                    <h3>I'm a <span ref={textRef}></span></h3>
                </div>
                <a href="#about">
                    <KeyboardArrowDownSharp className='arrow-icon' />
                </a>
            </div>
        </div>
    )
};

export default Intro;
