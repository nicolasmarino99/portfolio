import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SkillSet.scss'
import frameworksLogo from '../../assets/icons/ic_frameworks.svg';
import languagesLogo from '../../assets/icons/ic_languages.svg';
import skillsLogo from '../../assets/icons/ic_skills.svg';
import softskillsLogo from '../../assets/icons/ic_soft-skills.svg';
import resume from '../../assets/Resume.pdf'
import Tilt from 'react-vanilla-tilt'
import { useIntersection } from 'react-use';
import gsap from "gsap";
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const SkillSet = () => {
  // eslint-disable-next-line no-unused-vars
  const [skills, setSkills] = useState([
    ['Languages', languagesLogo, ['JavaScript (ES5/ES6)','Ruby','HTML','CSS3/SASS', 'Python']],
    ['Frameworks', frameworksLogo, ['React', 'Ruby on Rails', 'Material', 'Jest', 'React-testing-lib.', 'Redux', 'Capibara', 'Rspec', 'Phaser3']],
    ['Skills', skillsLogo, ['Pair Programing', 'TDD', 'git', 'github', 'Heroku', ' Netlify', 'gitlab']],
    ['Soft skills', softskillsLogo, ['Communication', 'Problem-solving', 'Patience', 'Adaptability']],
  ])

  

  const SkillCard = ({item}) => (
      <div className="SkillCard">
        <img src={item[1]} alt={item[0]}/>
        <h2>{item[0]}</h2>
        <ul>
          {item[2].map((e, i) => <li key={i}>{e}</li>)}
        </ul>
      </div>
    );

    return (
        <div className="SkillSet" id="Services">
            <div className="skills fadeIn2">
                {skills.map((item,i) => <SkillCard key={i} item={item}/>)}
            </div>
            <div className="info-cv ">
              <div className="number fadeIn2" id="n3">03</div>
              <p className="greeting-p fadeIn2">Some words</p>
              <h1 id="name" className="fadeIn2">About me</h1>
              <p className="presentaion-p fadeIn2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <a href={resume} className="social fadeIn2">
                    <p className="special-p">Get my Resume</p>
                    <FontAwesomeIcon className="icon" icon={faExternalLinkAlt}/>
              </a>
            </div>
        </div>
    );
};


SkillSet.propTypes = {

};


export default SkillSet;
