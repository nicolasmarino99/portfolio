import React from 'react';
import Presentation from "../components/Presentation/Presentation";
import Contact from "../components/Contact/Contact"
import Projects from "../components/Projects/Projects"
import SkillSet from '../components/SkillSet/SkillSet';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <nav>
          <a href="Hello">Hello</a>
          <a href="Portfolio">Portfolio</a>
          <a href="Services">Services</a>
          <a href="Contact">Contact</a>
      </nav>
       <Presentation />
       <Projects />
       <SkillSet />
       <Contact />
    </div>
  );
}

export default App;
