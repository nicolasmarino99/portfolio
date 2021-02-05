import React, { useEffect, useState } from "react";
import Projects from "../components/Projects/Projects";
import ScrollForMore from "../components/ScrollForMore";
import image from "../assets/pokedex/pokedex.jpg";
import "./Project.scss";
import { motion } from "framer-motion";
import { Carousel } from 'react-bootstrap';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tilt from 'react-vanilla-tilt'

const Project = ({ imageDetails}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    const transition = { duration: 1.6, ease: [0.43, 0.13, 0.23, 0.96] };
    
    const firstName = {
        initial: {
            y: 0,
        },
        animate: {
            y:0,
            transition: {
                delayedChildren: 0.6,
                staggerChildren: .04,
                staggerDirection: -1,
            }
        }
    }

    const lastName = {
        initial: {
          y: 0,
        },
        animate: {
          y: 0,
          transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: 1,
          },
        },
      };

    const letter = {
        initial: {
          y: 400,
        },
        animate: {
          y: 0,
          transition: { duration: 1, ...transition },
        },
      };
  return (
    <motion.div initial='initial' animate='animate' exit='exit' className='single'>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }} className='details'>
              <div className='tags'>
                <span className="React">React</span>
                <span className="Redux">Redux</span>
                <span className="Ruby">Ruby</span>
              </div>
              <div className='mua'>MUA: @mylifeascrystall</div>
            </motion.div>
            <motion.div className='model'>
              <motion.span className='first'  variants={firstName}>
                <motion.span variants={letter}>P</motion.span>
                <motion.span variants={letter}>o</motion.span>
                <motion.span variants={letter}>k</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>d</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>x</motion.span>
              </motion.span>
              <motion.span className='last'  variants={lastName}>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>p</motion.span>
                <motion.span variants={letter}>p</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <div className='image-container-single'>
              <motion.div 
                initial={{
                    opacity: 0,
                    y: '-5%',
                    x: '5%',
                    width: '40%',
                    height: imageDetails.height,
                }}
                animate={{
                    y: 0, 
                    width: '100%',
                    height: window.innerWidth > 1440 ? 800 : 400,
                    transition: {delay: .2, ...transition},
                    opacity: 1,
                }}
              className='thumbnail-single'>
                  
                <div className='frame-single'>
                <Tilt>
                  <motion.img 
                  initial={{scale: 1.1}} 
                  animate={{
                    y: window.innerWidth > 1440 ? -700 : -200,
                    transition: {delay: .2, ...transition},
                    }}
                  src={image} alt='an image' />
                  </Tilt>
                </div>
                    
                </motion.div>
            </div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
          <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img src={image} alt='an image' />
                </Carousel.Item>
            </Carousel>
            <motion.div variants={firstName} className="info">
                <motion.p variants={letter}>
                The Objective was to use redux and react for filter and transform data from an external Api. In this case I chose a pokemon Api.

                In this app you could find:

                A navbar that automaticly filters a pokemon based on its ID or name.
                A pokedex with an infinite scroller
                A nice UI design
                Routes to provide extra info
                The following features are under construction:

                evolution chains
                Moves charachteristics
                Testing
                extra filters
                </motion.p>
                <motion.div variants={letter} className="links">
                    <a href="#">See live <FontAwesomeIcon className="icon" icon={faExternalLinkAlt}/></a>
                    <a href="#">See source <FontAwesomeIcon className="icon" icon={faGithub} /></a>
                </motion.div>
            </motion.div>
            
          </div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default Project;