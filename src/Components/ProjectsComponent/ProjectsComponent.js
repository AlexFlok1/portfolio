import './ProjectsComponent.css'
import { useState, useEffect, Fragment } from "react"
import { Grid, Paper, Button } from '@mui/material'

//import some subcomponents
import BackButtonComponent from '../Sub-Components/BackButtonComponent/BackButtonComponent'

const ProjectsComponent = () => {

    const [ projects, setProjects ] = useState( [] )
    const [ active, setActive ] = useState( null )

    useEffect( () => {
        setProjects( [
            {
                name: 'Event Registration',
                skills:[
                    'Angular 6+ (Material UI)',
                    'Node JS (Express)',
                    'JOT Forms'
                ],
                link: 'http://fms-event.herokuapp.com/'
            },
            {
                name: 'Med Mobile App',
                skills:[
                    'Ionic (React)',
                    'Node JS (Express)',
                    'GraphQL',
                    'Mongo DB'
                ],
                link: ''
            },
            {
                name: 'No Code AI',
                skills:[
                    'JS',
                    'React',
                    'ML Algorithms'
                ],
                link: ''
            },
            {
                name: 'SQL Query Generator',
                skills:[
                    'JS'
                ],
                link: ''
            }
        ] )
         setActive( 0 )

         //clear memory when unmount
         return () => {
            setProjects( null )
            setActive( null )
         }
         
    }, [] )

    return (
        <>
            <Grid justifyContent='center' alignItems='center' alignContent='center' height='100vh' container style={ { background: '#f2f2f2' } } >
            <Grid item xl={7} lg={7} md={8} sm={10} xs={11} p={2} textAlign='right' >
                <BackButtonComponent />
            </Grid>
                <Grid item xl={7} lg={7} md={8} sm={10} xs={11}>
                    <Paper elevation={0} style={ { height: '60vh', width: '100%', borderRadius: '40px', overflow: 'hidden' } }>
                        <Grid container height='1'>
                                <Grid item xl={1} lg={1} md={2} sm={12} xs={12} sx={ {
                                    height:{
                                        xl: 1,
                                        lg: 1,
                                        md: 1,
                                        sm: 0.2,
                                        xs: 0.2
                                    }
                                } }>
                                    <Paper elevation={1} className='switch-btn' onClick={ () => { 
                                        if( active < projects.length )
                                            setActive( prev => prev + 1 )
                                     } } >
                                        <span className='switch-btn-txt'>NEXT</span>
                                    </Paper>
                                </Grid>
                                <Grid item xl={10} lg={10} md={8} sm={12} xs={12} overflow='hidden' position='relative' 
                                sx={ {
                                    height:{
                                        xl: 1,
                                        lg: 1,
                                        md: 1,
                                        sm: 0.6,
                                        xs: 0.6
                                    }
                                } }>
                                        {
                                            active !== null && 
                                            projects.map( ( project, indx ) => (
                                                <Grid
                                                key={ indx } 
                                                className={ ( active === indx ) ? 'project-container project-active' : 
                                                ( active > indx ) ? 'project-container prev' : 'project-container next' } 
                                                container justifyContent='center' height='1' >
                                                    <Grid item textAlign='center' p={2} xs={4} height='0.3' >
                                                        <span className='project-count'>0{ indx + 1 }</span>
                                                    </Grid>
                                                    <Grid item textAlign='center' p={2} xs={8} height='0.3' >
                                                        <span className='project-name'>{ project?.name }</span>
                                                    </Grid>
                                                    <Grid item xs={11}>
                                                        < hr />
                                                    </Grid>
                                                    <Grid item alignItems='center' justifyContent='center' p={2} xl={6} lg={6} md={6} sm={7} xs={8} height='0.6' display='flex' >
                                                        <ul className='tech_list' >
                                                            {
                                                                project?.skills.map( ( skill, indx ) => (
                                                                    <li key={indx} >{skill}</li>
                                                                ) )
                                                            }
                                                        </ul>
                                                    </Grid>
                                                    <Grid item alignItems='center' height='0.6' display='flex' justifyContent='center' p={2} xl={6} lg={6} md={6} sm={5} xs={4}>
                                                        {
                                                            ( project.link === null || project.link === '' ) 
                                                            ? <Button style={ { borderStyle: 'dashed' } } variant='outlined' className='project-btn'>IN PROGRESS</Button>
                                                            :<Button variant='outlined' className='project-btn'>CHECK IT OUT</Button>
                                                        }
                                                    </Grid>
                                                </Grid>
                                            ) )
                                        }
                                </Grid>
                                <Grid item xl={1} lg={1} md={2} sm={12} xs={12} sx={ {
                                    height:{
                                        xl: 1,
                                        lg: 1,
                                        md: 1,
                                        sm: 0.2,
                                        xs: 0.2
                                    }
                                } } >
                                    <Paper elevation={1} className='switch-btn' onClick={ () => { 
                                        if( active > 0 )
                                            setActive( prev => prev - 1 ) } }>
                                        <span className='switch-btn-txt'>PREV</span>
                                    </Paper>
                                </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default ProjectsComponent