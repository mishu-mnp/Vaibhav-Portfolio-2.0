import React from 'react';
import './about.scss';
import { Twitter, Instagram, GitHub, LinkedIn, ArrowDownward } from '@material-ui/icons';

const about = () => {
    return <div className='about' id='about'>
        <div className="left">
            <img src="https://user-images.githubusercontent.com/22797857/90096298-b90f4b00-dd54-11ea-9a31-00ad53f8ec04.gif" alt="" />
        </div>
        <div className="right">
            <div className="about-container">
                <h2>About Me</h2>
                <p>I am Frontend Developer and Backend Enthusiast, loves to code a lot and currently pursuing B.Tech in Computer Science and Engineering from Parul University.Learning daily something new related to tech and gaining skills for development.</p>
                <div className="resume-btn">
                    <a download href="assets/resume/Vaibhav_CV.pdf">Download CV
                        <ArrowDownward className='d-icon' />
                    </a>
                </div>
                <div className="connect">
                    <a href="https://www.linkedin.com/in/vaibhav-mishra-6a83771b5/" target="_blank" rel="noreferrer">
                        <LinkedIn className='connect-icon' />
                    </a>
                    <a href="https://github.com/mishu-mnp" target="_blank" rel="noreferrer">
                        <GitHub className='connect-icon' />
                    </a>
                    <a href="https://www.instagram.com/mishu_mnp_lover" target="_blank" rel="noreferrer">
                        <Instagram className='connect-icon' />
                    </a>
                    <a href="https://twitter.com/mishu_mnp" target="_blank" rel="noreferrer">
                        <Twitter className='connect-icon' />
                    </a>
                </div>
            </div>
        </div>
    </div>;
};

export default about;
