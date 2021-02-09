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

                    <FontAwesomeIcon className="icon" icon={faStackOverflow}/>
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                    <FontAwesomeIcon className="icon" icon={faTwitter} />
                    <FontAwesomeIcon className="icon" icon={faLinkedin} />
                    <FontAwesomeIcon className="icon" icon={faMedium} />
                    <FontAwesomeIcon className="icon" icon={faAngellist} />
                </div>
            </div>
        </div>
        

)};



export default Presentation;
