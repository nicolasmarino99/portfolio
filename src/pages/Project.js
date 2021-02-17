import React, { useEffect, useState, useContext} from "react";
import ScrollForMore from "../components/ScrollForMore"; 
import "./Project.scss";
import { motion } from "framer-motion";
import { Carousel } from 'react-bootstrap';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tilt from 'react-vanilla-tilt'
import { ProjectsContext } from "../ContextProviders/ProjectsProvider";
import { useParams } from "react-router";

const Project = ({ imageDetails }) => {
  
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    // eslint-disable-next-line no-unused-vars
    const [projects, setProjects] = useContext(ProjectsContext);

    let {id} = useParams();

    let project = projects[id]

    console.log(project)

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
                {project.technologies.map(tech => <span className="tag">{tech}</span>)}
              </div>
            </motion.div>
            <motion.div className='model'>
              <motion.span className='first' variants={firstName}>
                {project.name.split('').map(
                  sym => <motion.span variants={letter}>{sym}</motion.span>
                  )}
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
                  src={project.specialImg} alt='an image' />
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
          <Carousel>
            
            {project.images.map(image => (
              <Carousel.Item>
                    <img src={image} alt='an' />
                </Carousel.Item>
            ))}
            </Carousel>
            <motion.div variants={firstName} className="info">
                <motion.p variants={letter}>
                  {project.description}
                </motion.p>
                <motion.div variants={letter} className="links">
                    <a href={`${project.live}`}>See live <FontAwesomeIcon className="icon" icon={faExternalLinkAlt}/></a>
                    <a href={`${project.github}`}>See source <FontAwesomeIcon className="icon" icon={faGithub} /></a>
                </motion.div>
            </motion.div>
            
          </div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default Project;