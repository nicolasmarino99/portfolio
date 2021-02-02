import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SkillSet.scss'
import frameworksLogo from '../../assets/icons/ic_frameworks.svg';
import languagesLogo from '../../assets/icons/ic_languages.svg';
import skillsLogo from '../../assets/icons/ic_skills.svg';
import softskillsLogo from '../../assets/icons/ic_soft-skills.svg';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const SkillSet = () => {
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
          {item[2].map(e => <li>{e}</li>)}
        </ul>
      </div>
    );

    return (
        <div className="SkillSet" id="Services">
            <div className="skills">
                {skills.map(item => <SkillCard item={item}/>)}
            </div>
            <div className="info-cv">
              <div className="number" id="n3">03</div>
              <p className="greeting-p">Some words</p>
              <h1 id="name">About me</h1>
              <p className="presentaion-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <div className="social">
                    <p className="special-p">Get my Resume</p>
                    <FontAwesomeIcon className="icon" icon={faExternalLinkAlt}/>
              </div>
            </div>
        </div>
    );
};


SkillSet.propTypes = {

};


export default SkillSet;
