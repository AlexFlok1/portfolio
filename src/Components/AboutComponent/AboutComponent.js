import './AboutComponent.css'

import { Button, Grid, Paper, TextField, Snackbar, Alert } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'

const AboutComponent = () => {

    const [ msg, setMsg ] = useState( null )
    const [ snack, setSnack ] = useState( null )
    const history = useHistory()

    useEffect( () => {

        setMsg( {
            name: '',
            email: '',
            msg: ''
        } )
        setSnack( false )

        //clean memory after unmounting this component
        return () => {

        }

    }, [] )

    const sendEmail = async () => {
        setSnack( true )
    }

    return (
        <>
            <Grid container  style={ { height: '100vh', background: 'white', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' } } >
                <Grid item xl={4} lg={4} md={4} sm={6} xs={12} >
                        <Paper 
                        elevation={1} 
                        style={ { 
                            height: '60vh', borderRadius:'40px 0 0 40px', alignItems: 'start', 
                            justifyContent: 'center', display: 'flex', flexDirection: 'column', 
                            padding: '5% 0% 0% 5%', boxSizing: 'border-box',
                            background: 'linear-gradient(145deg, #3c3c3c, #323232)' 
                            } } >
                            <span className="about-text">
                                Hi
                            </span>
                            <br />
                            <br />
                            <span className="about-text">I'm <Button variant="text" className="about-tags">ALEX FLOK</Button></span>
                            <br />
                            <br />
                            <span className="about-text" >I'm a <Button variant="text" className="about-tags">DEVELOPER</Button></span>
                            <br />
                            <br />
                            <span className="about-text">I'm <Button variant="text" className="about-tags">EXCITED</Button> to meet you </span>
                        </Paper>
                </Grid>
                <Grid item xl={6} lg={6} md={8} sm={6} xs={12}>
                    <Paper 
                    elevation={1} 
                    style={ { height: '60vh', borderRadius:'0px 40px 40px 0px', alignItems: 'center', justifyContent: 'center', display: 'flex'} } >
                            <Grid container justifyContent='center' alignContent='center' >
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
                                <Grid item xs={4}  style={ { padding: '2%', textAlign: 'center' } } >
                                    <Button fullWidth style={ { borderRadius: '40px' } } variant="contained" color="primary" onClick={ sendEmail }>SEND</Button>
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
            {/*THIS IS BACK BUTTON PART*/}
            <Button onClick={ () => { history.push('/') } } className="back-btn"> <KeyboardBackspaceIcon /> BACK </Button>
        </>
    )
}

export default AboutComponent