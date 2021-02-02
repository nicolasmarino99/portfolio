import React from 'react';
import PropTypes from 'prop-types';
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faAngellist, faGithub, faLinkedin, faMedium, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div className="Contact" id="Contact">
            <svg height="80" width="80" className="circle-svg">
                <circle cx="40" cy="40" r="35" stroke-width="3" fill="#DB4747" />
            </svg>
            <div className="number" id="n1">04</div>
            <p className="greeting-p">Interested in collaborating?</p>
            <h1>Get started</h1>
            <p className="presentaion-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <form>
                <input type="text"></input>
                <input type="text"></input>
                <input type="text" placeholder="Enter your message here..."></input>
                <button type="submit">Start collaboration</button>
            </form>
            <div className="social">
                <div className="resume">
                    <p className="special-p">Get my Resume</p>
                    <FontAwesomeIcon className="icon" icon={faExternalLinkAlt}/>
                </div>
                    <div className="network">
                        <FontAwesomeIcon className="icon" icon={faStackOverflow}/>
                        <FontAwesomeIcon className="icon" icon={faGithub} />
                        <FontAwesomeIcon className="icon" icon={faTwitter} />
                        <FontAwesomeIcon className="icon" icon={faLinkedin} />
                        <FontAwesomeIcon className="icon" icon={faMedium} />
                        <FontAwesomeIcon className="icon" icon={faAngellist} />
                    </div>
              </div>
        </div>
    );
};


Contact.propTypes = {

};


export default Contact;
