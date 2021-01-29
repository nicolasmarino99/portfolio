import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Presentation.scss'
import { faGithub, faLinkedin, faMedium, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Presentation = () => {
    return (
        <div className="Presentation" id="Hello">
            <div className="greeting">
                <div className="number" id="n1">01</div>
                <p className="greeting-p">Hello, I’m</p>
                <h1 id="name">Charlie Giorgiana</h1>
                <svg height="80" width="80" className="circle-svg">
                    <circle cx="40" cy="40" r="35" stroke-width="3" fill="#DB4747" />
                </svg>
                <p className="presentaion-p">Hello! I am a software developer! I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate and contact me.</p>
                <div className="social">
                    <p className="special-p">See my works</p>
                <svg width="15%" height="78px">
                    <line x1="0" y1="39" x2="70" y2="39"/>

                </svg>

                    <FontAwesomeIcon className="icon" icon={faStackOverflow}/>
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                    <FontAwesomeIcon className="icon" icon={faTwitter} />
                    <FontAwesomeIcon className="icon" icon={faLinkedin} />
                    <FontAwesomeIcon className="icon" icon={faMedium} />
                </div>
            </div>
            <nav>
                <a href="Hello">Hello</a>
                <a href="Portfolio">Portfolio</a>
                <a href="Services">Services</a>
                <a href="Contact">Contact</a>
            </nav>
        </div>
    );
};


Presentation.propTypes = {

};


export default Presentation;
