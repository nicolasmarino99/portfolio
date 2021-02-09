import React, { createContext, useState } from 'react';

import bt from '../assets/body-tr/bt.jpg'
import bt1 from '../assets/body-tr/bt1.jpg'
import bt2 from '../assets/body-tr/bt2.jpg'
import bt3 from '../assets/body-tr/bt3.jpg'
import bt4 from '../assets/body-tr/bt4.jpg'
import bt5 from '../assets/body-tr/bt5.jpg'

import FacebookClone from '../assets/facebook-clone/FacebookClone.jpg'
import FacebookClone1 from '../assets/facebook-clone/FacebookClone1.png'
import FacebookClone2 from '../assets/facebook-clone/FacebookClone2.jpg'
import FacebookClone3 from '../assets/facebook-clone/FacebookClone3.jpg'
import FacebookClone4 from '../assets/facebook-clone/FacebookClone4.png'
import FacebookClone5 from '../assets/facebook-clone/FacebookClone5.png'

import pokedex from '../assets/pokedex/pokedex.jpg'
import pokedex1 from '../assets/pokedex/pokedex1.jpg'
import pokedex2 from '../assets/pokedex/pokedex2.jpg'
import pokedex3 from '../assets/pokedex/pokedex3.jpg'
import pokedex4 from '../assets/pokedex/pokedex4.jpg'
import pokedex5 from '../assets/pokedex/pokedex5.jpg'

import PrivateEvents from '../assets/private-events/PrivateEvents.jpg'
import PrivateEvents1 from '../assets/private-events/PrivateEvents1.jpg'
import PrivateEvents2 from '../assets/private-events/PrivateEvents2.jpg'
import PrivateEvents3 from '../assets/private-events/PrivateEvents3.jpg'
import PrivateEvents4 from '../assets/private-events/PrivateEvents4.jpg'
import PrivateEvents5 from '../assets/private-events/PrivateEvents5.jpg'

import SuperToDo from '../assets/trello-clone/SuperToDo.jpg'
import SuperToDo1 from '../assets/trello-clone/SuperToDo1.jpg'
import SuperToDo2 from '../assets/trello-clone/SuperToDo2.jpg'
import SuperToDo3 from '../assets/trello-clone/SuperToDo3.jpg'
import SuperToDo4 from '../assets/trello-clone/SuperToDo4.jpg'
import SuperToDo5 from '../assets/trello-clone/SuperToDo5.jpg'

const initialState = {
    Pokedex: {
        name:'Pokedex',
        github:'https://github.com/nicolasmarino99/pokedex',
        live:'https://pokedex99.herokuapp.com/',
        images: [
            pokedex1,
            pokedex2,
            pokedex3,
            pokedex4,
            pokedex5,
        ],
        specialImg: pokedex,
    },
    'Facebook-Clone': {
        name:'Facebook-Clone',
        github:'https://github.com/nicolasmarino99/facebook_clone',
        live:'https://fb-clone-bruna-nico.herokuapp.com/contents/new',
        images: [
            FacebookClone1,
            FacebookClone2,
            FacebookClone3,
            FacebookClone4,
            FacebookClone5,
        ],
        specialImg: FacebookClone,
    },
    'Body-Trainer': {
        name:'Body-Trainer',
        github:'https://github.com/nicolasmarino99/frontend-body-tr',
        live:'https://frontend-body-tr.herokuapp.com/',
        images: [
            bt1,
            bt2,
            bt3,
            bt4,
            bt5,
        ],
        specialImg: bt,
    },
    'Trello-Clone': {
        name:'Trello-Clone',
        github:'https://github.com/nicolasmarino99/todo-list',
        live:'https://rawcdn.githack.com/bruna-genz/todo-list/261fbc6ced78de846890be0e6197e822e24b3f57/dist/index.html',
        images: [
            SuperToDo1,
            SuperToDo2,
            SuperToDo3,
            SuperToDo4,
            SuperToDo5,
        ],
        specialImg: SuperToDo,
    },
    'Private-Events': {
        name:'Private-Events',
        github:'https://github.com/nicolasmarino99/members-only',
        live:'https://pure-brook-88318.herokuapp.com/',
        images: [
            PrivateEvents1,
            PrivateEvents2,
            PrivateEvents3,
            PrivateEvents4,
            PrivateEvents5,
        ],
        specialImg: PrivateEvents,
    },
};

export const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [state, setstate] = useState(initialState);
  return (
    <ProjectsContext.Provider value={[state, setstate]}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;