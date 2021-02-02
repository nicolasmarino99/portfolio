import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SkillSet.scss'
import frameworksLogo from '../../assets/icons/ic_frameworks.svg';
import languagesLogo from '../../assets/icons/ic_languages.svg';
import skillsLogo from '../../assets/icons/ic_skills.svg';
import softskillsLogo from '../../assets/icons/ic_soft-skills.svg';

const SkillSet = () => {
  const [skills, setSkills] = useState([
    ['Languages', languagesLogo, ['JavaScript (ES5/ES6)','Ruby','HTML','CSS3/SASS', 'Python']],
    ['Frameworks', frameworksLogo, ['React', 'Ruby on Rails','Boostrap', 'Material', 'Jest', 'React-testing-lib.', 'Redux', 'Capibara', 'Rspec', 'webpack', 'Phaser3', 'rubocop', 'eslint']],
    ['Skills', skillsLogo, ['Pair Programing', 'TDD', 'git', 'github', 'Heroku', ' Netlify', 'gitlab']],
    ['Soft skills', softskillsLogo, ['Communication', 'Problem-solving', 'Patience', 'Adaptability']],
  ])

  const SkillCard = ({item}) => (
      <div>
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
            <div className="info-cv"></div>
        </div>
    );
};


SkillSet.propTypes = {

};


export default SkillSet;
