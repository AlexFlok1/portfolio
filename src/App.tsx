import React, { useRef } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';

//Views
import HomeComponent from './Components/HomeComponent/HomeComponent';
import AboutComponent from './Components/AboutComponent/AboutComponent';
import SkillsComponent from './Components/SkillsComponent/SkillsComponent';
import ProjectsComponent from './Components/ProjectsComponent/ProjectsComponent';
import { SkillsPage } from './pages';

const App = () => {
  const refMesh = useRef(null);
  /* useFrame(() => {
    refMesh.current.rotation.x += 0.003;
    refMesh.current.rotation.y += 0.003;
    refMesh.current.rotation.z += 0.003;
  }); */

  return (
    <>
      {/* <div id='THREE-CANVAS'>
        <Canvas>
          <mesh position={[0, 0, 5]} ref={refMesh}>
            <boxGeometry args={[2, 2, 2, 10, 10, 10]} />
            <meshBasicMaterial args={{ color: '#ededed', wireFrame: true }} />
          </mesh>
        </Canvas>
      </div> */}
      <Router basename='/'>
        <Switch>
          <Route path='/' exact>
            <HomeComponent />
          </Route>
          <Route path='/skills' exact>
            <SkillsPage />
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
