import React, { useRef, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";
import FacebookClone from "../../assets/facebook-clone/FacebookClone.jpg"
import pokedex from "../../assets/pokedex/pokedex.jpg"
import SuperToDo from "../../assets/trello-clone/SuperToDo.jpg"
import PrivateEvents from "../../assets/private-events/PrivateEvents.jpg"
import BodyTrainer from "../../assets/body-tr/bt.jpg"


const Slides = ({image, imageDetails, name}) => {
    const [projects, setProjects] = useState([
        {name: 'Pokedex', img: pokedex},
        {name: 'Facebook-Clone', img: FacebookClone},
        {name: 'Body-Trainer', img: BodyTrainer},
        {name: 'Trello-Clone', img: SuperToDo},
        {name: 'Private-Events', img: PrivateEvents},
    ])
    const textInput = useRef(null);
    const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
    function handleClick() {
        textInput.current.focus();
      }
    return (
        <>
        
        
            <main>
                <div className='container'>
                    <div className='row center'>
                        <div className='image-container'>
                            <div
                            className='thumbnail'
                            
                            style={{
                                width: `${imageDetails.width}`,
                            }}>
                            <div className='frame'>
                                <Link to={`/project/${name}`} ref={textInput}  onClick={handleClick}>
                                    <ProgressiveImage
                                        src={image}
                                        placeholder={image}>
                                        {(src) => <motion.img whileHover={{ scale: 1.1}} transition={transition} exit={{scale: 0.5, opacity:0}} src={src} alt={name} />}
                                    </ProgressiveImage>
                                </Link>
                            </div>
                            </div>
                            <motion.div exit={{opacity: 0}} transition={transition} className='information'>
                            <div className='title'>{name}</div>
                            <div className='location'>
                                <span>28.538336</span>
                                <span>-81.379234</span>
                            </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>
        
        </>
    );
}

export default Slides;
