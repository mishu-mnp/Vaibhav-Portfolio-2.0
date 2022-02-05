import React, { useState } from 'react';
import './contact.scss';

const Contact = () => {

    const [message, setMessage] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()         // page should not reload
        setMessage(true)
    }
    return <div className='contact' id='contact'>
        <div className="left">
            <img src="assets/contact.jpg" alt="contact-me" />
        </div>
        <div className="right">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" id="email" placeholder='Email' />
                <textarea id='message' placeholder='Message...'></textarea>
                <button type='submit'>Send</button>
                {message && <span>Thanks! to contact I'll reply ASAP :) </span>}
            </form>
        </div>
    </div>;
};

export default Contact;
