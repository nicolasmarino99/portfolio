import React, { createContext, useState } from 'react';

import bt from '../assets/body-tr/bt.jpg'
import bt1 from '../assets/body-tr/bt1.jpg'
import bt2 from '../assets/body-tr/bt2.jpg'
import bt3 from '../assets/body-tr/bt3.jpg'
//import bt4 from '../assets/body-tr/bt4.jpg'
//import bt5 from '../assets/body-tr/bt5.jpg'
//
import FacebookClone from '../assets/facebook-clone/FacebookClone.jpg'
import FacebookClone1 from '../assets/facebook-clone/FacebookClone1.png'
import FacebookClone2 from '../assets/facebook-clone/FacebookClone2.jpg'
import FacebookClone3 from '../assets/facebook-clone/FacebookClone3.jpg'
//import FacebookClone4 from '../assets/facebook-clone/FacebookClone4.png'
//import FacebookClone5 from '../assets/facebook-clone/FacebookClone5.png'
//
import pokedex from '../assets/pokedex/pokedex.jpg'
import pokedex1 from '../assets/pokedex/pokedex1.jpg'
import pokedex2 from '../assets/pokedex/pokedex2.jpg'
import pokedex3 from '../assets/pokedex/pokedex3.jpg'
//import pokedex4 from '../assets/pokedex/pokedex4.jpg'
//import pokedex5 from '../assets/pokedex/pokedex5.jpg'
//
import PrivateEvents from '../assets/private-events/PrivateEvents.jpg'
import PrivateEvents1 from '../assets/private-events/PrivateEvents1.jpg'
import PrivateEvents2 from '../assets/private-events/PrivateEvents2.jpg'
import PrivateEvents3 from '../assets/private-events/PrivateEvents3.jpg'
//import PrivateEvents4 from '../assets/private-events/PrivateEvents4.jpg'
//import PrivateEvents5 from '../assets/private-events/PrivateEvents5.jpg'
//
import SuperToDo from '../assets/trello-clone/SuperToDo.jpg'
import SuperToDo1 from '../assets/trello-clone/SuperToDo1.jpg'
import SuperToDo2 from '../assets/trello-clone/SuperToDo2.jpg'
import SuperToDo3 from '../assets/trello-clone/SuperToDo3.jpg'
//import SuperToDo4 from '../assets/trello-clone/SuperToDo4.jpg'
//import SuperToDo5 from '../assets/trello-clone/SuperToDo5.jpg'

const initialState = {
    Pokedex: {
        name:'Pokedex',
        github:'https://github.com/nicolasmarino99/pokedex',
        live:'https://pokedex99.herokuapp.com/',
        images: [
            pokedex1,
            pokedex2,
            pokedex3,
            //pokedex4,
            //pokedex5,
        ],
        specialImg: pokedex,
        technologies: [
            'React',
            'Redux',
            'JavaScript',
            'Babel',
            'ESlint',
            'npm',
            'Webpack',
            'HTML/SCSS',
            'third party API',
        ],
        description: 'The Objective was to use redux and react for filter and transform data from an external Api. In this case I chose a pokemon Api. In this app you could find: A navbar that automaticly filters a pokemon based on its ID or name. A pokedex with an infinite scroller A nice UI design Routes to provide extra info The following features are under construction: evolution chains Moves charachteristics Testing extra filters',
    },
    'Facebook-Clone': {
        name:'Facebook-Clone',
        github:'https://github.com/nicolasmarino99/facebook_clone',
        live:'https://fb-clone-bruna-nico.herokuapp.com/contents/new',
        images: [
            FacebookClone1,
            FacebookClone2,
            FacebookClone3,
            //FacebookClone4,
            //FacebookClone5,
        ],
        specialImg: FacebookClone,
        technologies: [
            'HTML erb',
            'scss',
            'Ruby',
            'Rails',
            'JavaScript',
            'Bulma',
            'capybara',
            'Rspec',
        ],
        description: 'In this app we created a facebook like application. It has the following functionalities: User can create an account or sign up with Facebook, Users can make posts, Users can like and comment on posts; Users can request friendship from others sign up users; Users can create chat rooms and talk to other users (see section Future Improvements); Functional search bar to find users.',
    },
    'Body-Trainer': {
        name:'Body-Trainer',
        github:'https://github.com/nicolasmarino99/frontend-body-tr',
        live:'https://frontend-body-tr.herokuapp.com/',
        images: [
            bt1,
            bt2,
            bt3,
            //bt4,
            //bt5,
        ],
        specialImg: bt,
        technologies: [
            'React',
            'hooks',
            'context api',
            'JavaScript',
            'Babel',
            'ESlint',
            'npm',
            'Webpack',
            'HTML/SCSS',
            'Rails API',
            'Rubocop',
            'third party API',
        ],
        description: 'The main goal of this project is to explore and learn to connect self-made api in rails with a react app, integrating modern technologies (EcmaScript, webpack, npm, context api, hooks etc...) for extending the capabilities of the tools (rails and react) while consuming third party APIs. In this App you could find: A stack to create categories of sport routines A system to authenticate users from my rails api fetching imgs associated with titles A clock to manage time a tasks subcategory for managing properly routines Nice ui The following features are under construction: chat adding friend system sharing routines among poeple',
    },
    'Trello-Clone': {
        name:'Trello-Clone',
        github:'https://github.com/nicolasmarino99/todo-list',
        live:'https://rawcdn.githack.com/bruna-genz/todo-list/261fbc6ced78de846890be0e6197e822e24b3f57/dist/index.html',
        images: [
            SuperToDo1,
            SuperToDo2,
            SuperToDo3,
            //SuperToDo4,
            //SuperToDo5,
        ],
        specialImg: SuperToDo,
        technologies: [
            'HTML5',
            'Sass',
            'JavaScript',
            'webpack 3',
            'npm',
        ],
        description: 'In this project we created a To do list app. It has the following fuctionalities: create Projects; create lists on projects; create items on lists. create checklists, priority levels and due dates on Items This app follows the mvc pattern and crud actions',
    },
    'Private-Events': {
        name:'Private-Events',
        github:'https://github.com/nicolasmarino99/members-only',
        live:'https://pure-brook-88318.herokuapp.com/',
        images: [
            PrivateEvents1,
            PrivateEvents2,
            PrivateEvents3,
            //PrivateEvents4,
            //PrivateEvents5,
        ],
        specialImg: PrivateEvents,
        technologies: [
            'HTML erb',
            'scss',
            'Ruby',
            'Rails',
            'JavaScript',
            'Semantic UI',
        ],
        description: 'In this app we created a blog where users can create and attend events, similar to Everbrite. It has the following functionalities: Sign up new user; Authenticate user; Create new events and Uploading photos',
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