import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Carousel } from 'react-bootstrap';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";
import imgage from "../../assets/pokedex/pokedex.jpg"
import { motion, useIsPresent } from 'framer-motion';

const Projects = ({imageDetails, image}) => {
    const isPresent = useIsPresent()
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    }

    const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
    return (
        <div className="Projects" id="Portfolio">
            <div className="header">
                <div className="number" id="n1">02</div>
                <p className="greeting-projects">My recent works</p>
            </div>
            {isPresent && (<motion.h1 id="h1-project">Portfolio</motion.h1>)}
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <main>
                        <div className='container'>
                            <div className='row center'>
                            <div className='image-container'>
                                <div
                                className='thumbnail'
                                ref={image}
                                style={{
                                    width: `${imageDetails.width}`,
                                }}>
                                <div className='frame'>
                                    <Link to={`/project/yasmeen-tariq`}>
                                        <ProgressiveImage
                                            src={imgage}
                                            placeholder={imgage}>
                                            {(src) => <motion.img whileHover={{ scale: 1.1}} transition={transition} exit={{scale: 0.5, opacity:0}} src={src} alt='Yasmeen Tariq' />}
                                        </ProgressiveImage>
                                    </Link>
                                </div>
                                </div>
                                <motion.div exit={{opacity: 0}} transition={transition} className='information'>
                                <div className='title'>Yasmeen Tariq</div>
                                <div className='location'>
                                    <span>28.538336</span>
                                    <span>-81.379234</span>
                                </div>
                                </motion.div>
                            </div>
                            </div>
                        </div>
                    </main>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

Projects.propTypes = {

};


export default Projects;
