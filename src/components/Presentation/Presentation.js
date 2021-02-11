import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Presentation.scss'
import { faAngellist, faGithub, faLinkedin, faMedium, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion, useIsPresent } from 'framer-motion';
import { useIntersection } from 'react-use';
import gsap from "gsap";

const Presentation = () => {
    const sectionRef = useRef(null)

    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 1
    })

    const fadeIn1 = (element) => {
        gsap.to(element, 1, {
            opacity: 0,
            x: -50,
            ease: 'power4.out',
        })
    }
    const fadeOut1 = (element) => {
        gsap.to(element, 1, {
            opacity: 1,
            x: 0,
            ease: 'power4.out',
            stagger: {
                amount: 1
            }
        })
    }
    intersection && intersection.intersectionRatio < 1 ?
    fadeOut1(".fadeIn1")
    : fadeIn1(".fadeIn1")

    return (
    
        <div ref={sectionRef} className="Presentation" id="Hello">
            <div className="greeting fadeIn1">
                <div className="number fadeIn1" id="n1">01</div>
                <p className="greeting-p fadeIn1">Hello, I’m</p>
                <h1 id="name" className="fadeIn1">Nicolás Mariño</h1>
                <svg height="80" width="80" className="circle-svg">
                    <circle cx="40" cy="40" r="35" fill="#DB4747" />
                </svg>
                <p className="presentaion-p fadeIn1">Hello! I am a software developer! I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate and contact me.</p>
                <div className="social fadeIn1">
                    <p className="special-p">See my works</p>
                <svg width="15%" height="78px">
                    <line x1="0" y1="39" x2="70" y2="39"/>

                </svg>

                    <a href="https://stackoverflow.com/users/13809115/nicol%c3%a1s-mari%c3%b1o-parra"><FontAwesomeIcon className="icon" icon={faStackOverflow}/></a>
                    <a href="https://github.com/nicolasmarino99"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
                    <a href="https://twitter.com/nicolasmarino99"><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
                    <a href="https://www.linkedin.com/in/nicol%C3%A1s-mari%C3%B1o-parra-45a707177/"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
                    <a href="https://medium.com/@nicolasmarinoparra"><FontAwesomeIcon className="icon" icon={faMedium} /></a>
                    <a href="https://angel.co/u/nicolas-marino-parra"><FontAwesomeIcon className="icon" icon={faAngellist} /></a>
                </div>
            </div>
        </div>
        

)};



export default Presentation;
