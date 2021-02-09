import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import ProjectsProvider from './ContextProviders/ProjectsProvider';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ProjectsProvider>
      <App />
    </ProjectsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

