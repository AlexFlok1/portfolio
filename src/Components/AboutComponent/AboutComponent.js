import './AboutComponent.css'

import { Button, Grid, Paper, TextField, Snackbar, Alert, Hidden } from '@mui/material'
import { useEffect, useState } from 'react'

//import some subcomponents
import BackButtonComponent from '../Sub-Components/BackButtonComponent/BackButtonComponent'

const AboutComponent = () => {

    const [ msg, setMsg ] = useState( null )
    const [ snack, setSnack ] = useState( null )

    useEffect( () => {

        setMsg( {
            name: '',
            email: '',
            msg: ''
        } )
        setSnack( false )

        //clean memory after unmounting this component
        return () => {
            console.log( 'ok2' )
        }

    }, [] )

    const sendEmail = async () => {
        setSnack( true )
    }

    return (
        <>
            <Grid container justifyContent='center' alignItems='center' alignContent='center' height='100vh'
            overflow='hidden'
            style={ { background: 'white'} } >
                <Grid item xs={10} p={2} textAlign='right' >
                    <BackButtonComponent />
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={6} xs={12} sx={{
                    height:{
                       xl: 0.6,
                       lg: 0.6,
                       md: 0.6,
                       sm: 0.6,
                       xs: 'auto'

                    }
                }}>
                        <Paper 
                        elevation={1} 
                        style={ { 
                            height: '100%', alignItems: 'start', 
                            justifyContent: 'center', display: 'flex', flexDirection: 'column', 
                            padding: '5% 0% 0% 5%', boxSizing: 'border-box',
                            background: 'linear-gradient(145deg, #3c3c3c, #323232)' 
                            } } 
                            sx={ {
                                borderRadius:{
                                    xl: '40px 0 0 40px',
                                    lg: '40px 0 0 40px',
                                    md: '40px 0 0 40px',
                                    xs: '0'
                                }
                            } }
                            >
                            <span className="about-text">
                                Hi
                            </span>
                            <Hidden only={['xs','sm']}>
                                <br  />
                                <br />
                            </Hidden>
                            <span className="about-text">I'm <Button variant="text" className="about-tags">ALEX FLOK</Button></span>
                            <Hidden only={['xs','sm']}>
                                <br  />
                                <br />
                            </Hidden>
                            <span className="about-text" >I'm a <Button variant="text" className="about-tags">DEVELOPER</Button></span>
                            <Hidden only={['xs','sm']}>
                                <br  />
                                <br />
                            </Hidden>
                            <span className="about-text">I'm <Button variant="text" className="about-tags">EXCITED</Button> to meet you </span>
                        </Paper>
                </Grid>
                <Grid item xl={6} lg={6} md={8} sm={6} xs={12}>
                    <Paper 
                    elevation={1} 
                    style={ { height: '60vh', alignItems: 'center', justifyContent: 'center', display: 'flex'} } >
                            <Grid container justifyContent='center' alignContent='center'
                            sx={ {
                                borderRadius:{
                                    xl: '0 40px 40px 0',
                                    lg: '0 40px 40px 0',
                                    md: '0 40px 40px 0',
                                    xs: '0'
                                }
                            } }
                            >
                                <Grid item xs={12} style={ { padding: '2%' } } >
                                    <span style={ { color: '#323232' } } className="about-text">I would love to chat more with you...</span>
                                </Grid>
                                <Grid item xl={6} lg={6} md={6} sm={6} xs={12} style={ { padding: '2%' } } >
                                    <TextField label="Name" variant="outlined" fullWidth/>
                                </Grid>
                                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}  style={ { padding: '2%' } } >
                                    <TextField label="Email" variant="outlined" fullWidth/>
                                </Grid>
                                <Grid item xs={12}  style={ { padding: '2%' } } >
                                    <TextField label="Your Story" variant="outlined" multiline rows="4" fullWidth/>
                                </Grid>
                                <Grid item xs={4} textAlign='center'  style={ { padding: '2%' } } >
                                    <Button fullWidth id='BTN-SUBMIT' variant="contained" onClick={ sendEmail }>SEND</Button>
                                </Grid>
                            </Grid>
                    </Paper>
                </Grid>
            </Grid>
            {/*THIS IS SNACK BAR PART*/}
            <Snackbar 
            open={ snack } 
            autoHideDuration={3000} 
            anchorOrigin={{ vertical : 'bottom', horizontal: 'center' }} 
            onClose={ () => { setSnack( false ) } } >
                <Alert severity="success">Thank you for your info!</Alert>
            </Snackbar>
        </>
    )
}

export default AboutComponent