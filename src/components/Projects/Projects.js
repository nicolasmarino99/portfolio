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
                <Carousel.Item>
                <div class="parenta">
                    <div class="div1a">First slide label</div>
                    <div class="div2a">First slide label</div>
                    <div class="div3a">First slide label</div>
                    <div class="div4a">First slide label</div>
                    <div class="div5a">First slide label</div>
                    <div class="div6a">First slide label</div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div class="parentb">
                    <div class="div1b">First slide label</div>
                    <div class="div2b">First slide label</div>
                    <div class="div3b">First slide label</div>
                    <div class="div4b">First slide label</div>
                    <div class="div5b">First slide label</div>
                    <div class="div6b">First slide label</div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div class="parentc">
                    <div class="div1c">First slide label</div>
                    <div class="div2c">First slide label</div>
                    <div class="div3c">First slide label</div>
                    <div class="div4c">First slide label</div>
                    <div class="div5c">First slide label</div>
                    <div class="div6c">First slide label</div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div class="parentd">
                    <div class="div1d">First slide label</div>
                    <div class="div2d">First slide label</div>
                    <div class="div3d">First slide label</div>
                    <div class="div4d">First slide label</div>
                    <div class="div5d">First slide label</div>
                    <div class="div6d">First slide label</div>
                </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

Projects.propTypes = {

};


export default Projects;
