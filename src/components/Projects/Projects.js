import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.scss'
import { Carousel } from 'react-bootstrap';
import FacebookClone from "../../assets/facebook-clone/FacebookClone.jpg"
import pokedex from "../../assets/pokedex/pokedex.jpg"
import SuperToDo from "../../assets/trello-clone/SuperToDo.jpg"
import PrivateEvents from "../../assets/private-events/PrivateEvents.jpg"
import BodyTrainer from "../../assets/body-tr/bt.jpg"
import { motion, useIsPresent } from 'framer-motion';
import { wrap } from "popmotion";
import Slides from './Slides';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

const Projects = ({imageDetails, image}) => {
    
    // eslint-disable-next-line no-unused-vars
    const [index, setIndex] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [projects, setProjects] = useState([
        {name: 'Pokedex', img: pokedex},
        {name: 'Facebook-Clone', img: FacebookClone},
        {name: 'Body-Trainer', img: BodyTrainer},
        {name: 'Trello-Clone', img: SuperToDo},
        {name: 'Private-Events', img: PrivateEvents},
    ])

        const ProjectsRef = useRef(null)

        const intersection = useIntersection(ProjectsRef, {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        })

        const fadeIn = (element) => {
            gsap.to(element, .5, {
                opacity: 1,
                y: -50,
                ease: 'power4.out',
                stagger: {
                    amount: 0.5
                }
            })
        }
        const fadeOut = (element) => {
            gsap.to(element, 1, {
                opacity: 0,
                y: 10,
                ease: 'power4.out',
            })
        }
        intersection && intersection.intersectionRatio < 0.5 ?
        fadeOut(".fadeIn")
        : fadeIn(".fadeIn")


    const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
    return (
        <div ref={ProjectsRef} className="Projects" id="Portfolio">
            <div className="header fadeIn">
                <div className="number fadeIn" id="n1">02</div>
                <p className="greeting-projects fadeIn">My recent works</p>
            </div>
            <h1
                className="fadeIn"
                id="h1-project"
            >
                Portfolio
            </h1>
            <Carousel className="fadeIn">
                {projects.map((project, i) =>
                <Carousel.Item>
                    <Slides
                        key={i}
                        image={project.img}
                        imageDetails={imageDetails}
                        name={project.name}
                    />
                </Carousel.Item>
                )}
            </Carousel>
        </div>
    );
};

Projects.propTypes = {

};


export default Projects;
