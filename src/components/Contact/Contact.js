import React from 'react';
import './Contact.scss'
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faAngellist, faGithub, faLinkedin, faMedium, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_9zw140j', 'template_djlim6n', e.target, 'user_wDALgC6I2XyoXwxG4PisX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    return (
        <div className="Contact" id="Contact">
            <div className="contact-container">
                <div className="title">
                    <header>
                        <div className="number" id="n1">04</div>
                        <p className="greeting-p">Interested in collaborating?</p>
                    </header>
                    <svg height="80" width="80" className="circle-svg">
                        <circle cx="40" cy="40" r="35" fill="#DB4747" />
                    </svg>
                </div>
                <div className="contact-me">
                    <h1>Get started</h1>
                    <p className="presentaion-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <form onSubmit={sendEmail}>
                        <input type="text" name="user_name" placeholder="Your name" />
                        <input type="email" name="user_email" placeholder="Your email" />
                        <textarea type="text" name="message" id="message" placeholder="Enter your message here..." />
                        <input id="submit" type="submit" />
                    </form>
                </div>
                
            </div>
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
