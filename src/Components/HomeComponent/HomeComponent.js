import './HomeComponent.css';
import { useEffect, useState } from 'react';
import * as THREE from 'three';
import { Grid, Paper, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const HomeComponent = () => {
  //variables
  const history = useHistory();
  const [square, setSquare] = useState({
    geometry: null,
    material: null,
    scene: null,
    mesh: null,
  });

  useEffect(() => {
    //call three js stuff
    threejs();

    return () => {
      setSquare((prev) => {
        prev.scene.remove(prev.mesh);
        prev.geometry.dispose();
        prev.material.dispose();
        return null;
      });
      cleanUp();
    };
  }, []);

  const threejs = () => {
    document.getElementById('THREE-CANVAS').style.display = 'block';
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    const renderer = new THREE.WebGL1Renderer({ antialias: true });
    renderer.autoClear = true;
    renderer.context.clear(16640);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 1);
    document.getElementById('THREE-CANVAS').appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(2, 2, 2, 10, 10, 10);
    const material = new THREE.MeshBasicMaterial({
      color: '#ededed',
      wireframe: true,
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 1.5;
    scene.add(cube);

    camera.position.z = 5;

    setSquare((prev) => ({ ...prev, scene, material, geometry, mesh: cube }));

    runFrame(scene, camera, renderer, cube);
  };

  const runFrame = (scene, camera, renderer, threeObject) => {
    requestAnimationFrame(() => {
      runFrame(scene, camera, renderer, threeObject);
    });

    threeObject.rotation.x += 0.003;
    threeObject.rotation.y += 0.003;
    threeObject.rotation.z += 0.003;

    //make sure that it look responsive
    camera.aspect =
      renderer.domElement.clientWidth / renderer.domElement.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.clear(true, true, true);
    //----------------------------------

    renderer?.render(scene, camera);
  };

  const navigateTo = (path) => {
    history.push(path);
  };

  const cleanUp = () => {
    document.getElementById('THREE-CANVAS').children[0].remove();
    document.getElementById('THREE-CANVAS').style.display = 'none';
  };

  return (
    <>
      <Grid
        container
        style={{
          height: '100vh',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Grid item xl={2} lg={2} md={3} sm={4} xs={12}>
          <Paper elevation={0} style={{ padding: '10px' }}>
            <Button
              onClick={() => {
                navigateTo('skills');
              }}
              fullWidth
              menu-btn='true'
            >
              Skills
            </Button>
            <Button
              onClick={() => {
                navigateTo('projects');
              }}
              fullWidth
              menu-btn='true'
            >
              Projects
            </Button>
            <Button
              onClick={() => {
                navigateTo('about');
              }}
              fullWidth
              menu-btn='true'
            >
              About
            </Button>
          </Paper>
        </Grid>
        <Grid
          item
          xl={4}
          lg={4}
          md={5}
          sm={6}
          xs={12}
          style={{ display: 'flex', zIndex: '1' }}
        >
          <span className='ht hometext-1'>Hi</span>
          <span className='ht hometext-2'>
            <span style={{ transform: 'scaleY("5px")' }}>I</span>
            'm Alex
          </span>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeComponent;
