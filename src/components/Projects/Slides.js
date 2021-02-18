import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Slides = ({image, imageDetails, name, links}) => {
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
                                <a href={`${links[0]}`}>See live <FontAwesomeIcon className="icon" icon={faExternalLinkAlt}/></a>
                                <a href={`${links[1]}`}>See source <FontAwesomeIcon className="icon" icon={faGithub} /></a>
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
