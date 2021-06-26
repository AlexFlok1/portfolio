import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory, useLocation } from 'react-router-dom'
import { Grid, Button, ListItemAvatar, List, ListItem, ListItemText, Avatar } from '@material-ui/core'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

//icons
import HomeIcon from '@material-ui/icons/HomeOutlined';
import FolderOpenIcon from '@material-ui/icons/FolderOpenOutlined';
import PhoneIcon from '@material-ui/icons/PhoneOutlined';
//Views
import HomeView from './Views/Home'
import ProjectsView from './Views/Projects'
import ContactView from './Views/Contact'

//particles
import Particles from 'react-particles-js';

function App() {
  const [ selectedIndex, setSelectedIndex ] = useState( 0 );
  let history  = useHistory();
  let location = useLocation();
  
  const navigateTo = ( path, index ) => {
        setSelectedIndex( index );
        history.push( path );
  }

  useEffect(()=>{

  },[])

  return (
    <div id="ROUTE-VIEW">
        <div style={ { position: 'absolute', top: '0', left: '0', width: '100%', height: '100vh', display:'flex' } }>
        <Particles 
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#757575",
            					blur: 1
            				}
            			}
            		}
            	}}
              style={{
                width: '100%'
              }}
            />
        </div>
        <Grid container style={ { height:'100%' } }>
            <Grid item xs={12} md={8} lg={6} style={ 
              { 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center',
                position:'relative'
              } }>
                <TransitionGroup component={null}>
                    <CSSTransition key={location.key} timeout={1000} classNames='dialog'>
                        <Switch location={ location }>
                            <Route exact path='/'>
                                <HomeView />
                            </Route>
                            <Route exact path='/projects'>
                                <ProjectsView />
                            </Route>
                            <Route exact path='/contact'>
                                <ContactView />
                            </Route>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </Grid>
            <Grid item xs={12} md={4} lg={6} style={ 
              { 
                display: 'flex', 
                alignItems: 'center',
                flexDirection:'column',
                justifyContent: 'center'
              } }>
                <List>

                    <ListItem button selected={ selectedIndex === 0 } onClick={()=>{
                        navigateTo('/', 0)
                    }}>
                        <ListItemAvatar children="Avatar">
                            <Avatar>
                               <HomeIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Home" />
                    </ListItem>

                    <ListItem button selected={ selectedIndex === 1 } onClick={()=>{
                        navigateTo('/projects', 1)
                    }} >
                        <ListItemAvatar children="Avatar">
                            <Avatar>
                               <FolderOpenIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Projects" />
                    </ListItem>
    
                    <ListItem button selected={ selectedIndex === 2 } onClick={()=>{
                        navigateTo('/contact', 2)
                    }}>
                        <ListItemAvatar>
                            <Avatar>
                                <PhoneIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Contact Me" />
                    </ListItem>

                </List>
              </Grid>
        </Grid>
    </div>
  );
}

export default App;
