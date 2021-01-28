import React from 'react';
import Presentation from "../components/Presentation/Presentation";
import Contact from "../components/Contact/Contact"
import Projects from "../components/Projects/Projects"
import SkillSet from '../components/SkillSet/SkillSet';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <div>asdfsdf</div>
       <Presentation />
       <Projects />
       <SkillSet />
       <Contact />
    </div>
  );
}

export default App;
