import React from 'react';
import './Contact.scss'
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faAngellist, faGithub, faLinkedin, faMedium, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';
import resume from '../../assets/Resume.pdf'

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
                        <a href={resume}>
                            <p className="special-p">Get my Resume</p>
                            <FontAwesomeIcon className="icon" icon={faExternalLinkAlt}/>
                        </a>
                        </div>
                            <div className="network">
                                <a href="https://stackoverflow.com/users/13809115/nicol%c3%a1s-mari%c3%b1o-parra"><FontAwesomeIcon className="icon" icon={faStackOverflow}/></a>
                                <a href="https://github.com/nicolasmarino99"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
                                <a href="https://twitter.com/nicolasmarino99"><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
                                <a href="https://www.linkedin.com/in/nicol%C3%A1s-mari%C3%B1o-parra-45a707177/"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
                                <a href="https://medium.com/@nicolasmarinoparra"><FontAwesomeIcon className="icon" icon={faMedium} /></a>
                                <a href="https://angel.co/u/nicolas-marino-parra"><FontAwesomeIcon className="icon" icon={faAngellist} /></a>
                            </div>
                    </div>
        </div>
    );
};


Contact.propTypes = {

};


export default Contact;
