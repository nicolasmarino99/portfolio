import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.scss'
import { Carousel } from 'react-bootstrap';
import { render } from '@testing-library/react';

const Projects = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    }
    return (
        <div className="Projects" id="Portfolio">
            <div className="header">
                <div className="number" id="n1">02</div>
                <p className="greeting-projects">My recent works</p>
            </div>
            <h1 id="h1-project">Portfolio</h1>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                <div class="parent">
                    <div class="div1">First slide label</div>
                    <div class="div2">First slide label</div>
                    <div class="div3">First slide label</div>
                    <div class="div4">First slide label</div>
                    <div class="div5">First slide label</div>
                    <div class="div6">First slide label</div>
                </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

Projects.propTypes = {

};


export default Projects;
