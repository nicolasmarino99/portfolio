import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Carousel } from 'react-bootstrap';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
                <div className="parent">
                    
                    <div className="div1"></div>
                    <div className="div2"></div>
                    <div className="div3">
                    <header>
                        <p className="p-h1">Facebook Clone</p>
                        <div>
                            <div className="tag">HTML 5 (erb)</div>
                            <div className="tag">CSS 3 (scss)</div>
                            <div className="tag">Ruby 2.6.3</div>
                            <div className="tag">Rails 6.0.1</div>
                            <div className="tag">JavaScript</div>
                            <div className="tag">Rspec</div>
                            <div className="tag">Capybara</div>
                        </div>
                        <button>See this Project <FontAwesomeIcon className="icon" icon={faArrowRight}/></button>
                    </header>
                    </div>
                    <div className="div4"></div>
                    <div className="div5"></div>
                    <div className="div6"></div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="parenta">
                
                    <div className="div1a"></div>
                    <div className="div2a"></div>
                    <div className="div3a">
                        <header>
                            <p className="p-h1">Facebook Clone</p>
                            <div>
                                <div className="tag">HTML 5 (erb)</div>
                                <div className="tag">CSS 3 (scss)</div>
                                <div className="tag">Ruby 2.6.3</div>
                                <div className="tag">Rails 6.0.1</div>
                                <div className="tag">JavaScript</div>
                                <div className="tag">Rspec</div>
                                <div className="tag">Capybara</div>
                            </div>
                            <button>See this Project <FontAwesomeIcon className="icon" icon={faArrowRight}/></button>
                        </header>
                    </div>
                    <div className="div4a"></div>
                    <div className="div5a"></div>
                    <div className="div6a"></div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="parentb">
                   
                    <div className="div1b"></div>
                    <div className="div2b"></div>
                    <div className="div3b">
                    <header>
                        <p className="p-h1">Facebook Clone</p>
                        <div>
                            <div className="tag">HTML 5 (erb)</div>
                            <div className="tag">CSS 3 (scss)</div>
                            <div className="tag">Ruby 2.6.3</div>
                            <div className="tag">Rails 6.0.1</div>
                            <div className="tag">JavaScript</div>
                            <div className="tag">Rspec</div>
                            <div className="tag">Capybara</div>
                        </div>
                        <button>See this Project <FontAwesomeIcon className="icon" icon={faArrowRight}/></button>
                    </header>
                    </div>
                    <div className="div4b"></div>
                    <div className="div5b"></div>
                    <div className="div6b"></div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="parentc">
                    
                    <div className="div1c"></div>
                    <div className="div2c"></div>
                    <div className="div3c">
                    <header>
                        <p className="p-h1">Facebook Clone</p>
                        <div>
                            <div className="tag">HTML 5 (erb)</div>
                            <div className="tag">CSS 3 (scss)</div>
                            <div className="tag">Ruby 2.6.3</div>
                            <div className="tag">Rails 6.0.1</div>
                            <div className="tag">JavaScript</div>
                            <div className="tag">Rspec</div>
                            <div className="tag">Capybara</div>
                        </div>
                        <button>See this Project <FontAwesomeIcon className="icon" icon={faArrowRight}/></button>
                    </header>
                    </div>
                    <div className="div4c"></div>
                    <div className="div5c"></div>
                    <div className="div6c"></div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="parentd">
                    
                    <div className="div1d"></div>
                    <div className="div2d"></div>
                    <div className="div3d">
                    <header>
                        <p className="p-h1">Facebook Clone</p>
                        <div>
                            <div className="tag">HTML 5 (erb)</div>
                            <div className="tag">CSS 3 (scss)</div>
                            <div className="tag">Ruby 2.6.3</div>
                            <div className="tag">Rails 6.0.1</div>
                            <div className="tag">JavaScript</div>
                            <div className="tag">Rspec</div>
                            <div className="tag">Capybara</div>
                        </div>
                        <button>See this Project <FontAwesomeIcon className="icon" icon={faArrowRight}/></button>
                    </header>
                    </div>
                    <div className="div4d"></div>
                    <div className="div5d"></div>
                    <div className="div6d"></div>
                </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

Projects.propTypes = {

};


export default Projects;
