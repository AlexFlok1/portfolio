import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Views
import HomeComponent from './Components/HomeComponent/HomeComponent';
import AboutComponent from './Components/AboutComponent/AboutComponent';
import SkillsComponent from './Components/SkillsComponent/SkillsComponent';
import ProjectsComponent from './Components/ProjectsComponent/ProjectsComponent';

const App = () => {
  return (
    <>
      <div id='THREE-CANVAS'></div>
      <Router>
        <Switch>
          <Route path='/' exact>
            <HomeComponent />
          </Route>
          <Route path='/skills' exact>
            <SkillsComponent />
          </Route>
          <Route path='/about' exact>
            <AboutComponent />
          </Route>
          <Route path='/projects' exact>
            <ProjectsComponent />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
