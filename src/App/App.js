import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import Project from '../pages/Project';
import './App.scss';

const App = () => {
  const imageDetails = {
    width: 524,
    height: 650,
  };
//initial={false}
  return (
    <Router>
    <Route
      render={({ location }) => (
        <AnimatePresence  exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route
              exact
              path='/'
              render={() => <Home imageDetails={imageDetails} />}
            />
            <Route
              exact
              path='/project/:id'
              render={() => <Project imageDetails={imageDetails} />}
            />
          </Switch>
        </AnimatePresence>
      )}
    />
  </Router>
  );
}

export default App;
