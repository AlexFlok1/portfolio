import './ProjectsComponent.css'
import { useState, useEffect, Fragment } from "react"
import { Grid, Paper, Button } from '@mui/material'
import { useHistory } from 'react-router-dom'

const ProjectsComponent = () => {

    const [ projects, setProjects ] = useState( [] )
    const [ active, setActive ] = useState( null )
    const nav = useHistory()

    useEffect( () => {
        setProjects( [
            {
                name: 'Event Registration',
                skills:[
                    'Angular 6+ (Material UI)',
                    'Node JS (Express)',
                    'JOT Forms'
                ],
                link: ''
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
            <Grid justifyContent='center' alignItems='center' alignContent='center' container style={ { height: '100vh', background: '#f2f2f2' } } >
            <Grid item xl={7} lg={7} md={8} sm={10} xs={11} p={2} textAlign='right' >
                <Button variant='outlined' id='back-btn' onClick={ () => { nav.push('/') } }>Back</Button>
            </Grid>
                <Grid item xl={7} lg={7} md={8} sm={10} xs={11}>
                    <Paper elevation={0} style={ { height: '60vh', width: '100%', borderRadius: '40px', overflow: 'hidden' } }>
                        <Grid container height='1'>
                                <Grid item xl={1} lg={1} md={2} sm={12} xs={12} height='1' >
                                    <Paper elevation={1} className='switch-btn' onClick={ () => { 
                                        if( active < projects.length )
                                            setActive( prev => prev + 1 )
                                     } } >
                                        <span className='switch-btn-txt'>NEXT</span>
                                    </Paper>
                                </Grid>
                                <Grid item xl={10} lg={10} md={8} sm={12} xs={12} height='1' style={ { overflow: 'hidden', position: 'relative' } }>
                                        {
                                            active !== null && 
                                            projects.map( ( project, indx ) => (
                                                <Grid
                                                key={ indx } 
                                                className={ ( active === indx ) ? 'project-container project-active' : 
                                                ( active > indx ) ? 'project-container prev' : 'project-container next' } 
                                                container justifyContent='center' height='1' >
                                                    <Grid item textAlign='center' p={2} xs={4} style={ { height: '30%' } }>
                                                        <span className='project-count'>0{ indx + 1 }</span>
                                                    </Grid>
                                                    <Grid item textAlign='center' p={2} xs={8} style={ { height: '30%' } }>
                                                        <span className='project-name'>{ project?.name }</span>
                                                    </Grid>
                                                    <Grid item xs={11}>
                                                        < hr />
                                                    </Grid>
                                                    <Grid item textAlign='center' alignItems='center' justifyContent='center' p={2} xs={6} style={ { height: '60%', display: 'flex' } } >
                                                        <ul className='tech_list' >
                                                            {
                                                                project?.skills.map( ( skill, indx ) => (
                                                                    <li key={indx} >{skill}</li>
                                                                ) )
                                                            }
                                                        </ul>
                                                    </Grid>
                                                    <Grid item alignItems='center' style={ { height: '60%', display: 'flex' } } justifyContent='center' p={2} xs={6}>
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
                                <Grid item xl={1} lg={1} md={2} sm={12} xs={12} height='1' >
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