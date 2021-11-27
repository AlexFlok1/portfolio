import './BackButtonComponent.css'
import { Button } from '@mui/material'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const BackButtonComponent = () => {

    const history = useHistory()

    useEffect( () => { console.log( 'sub-component-back-button' ) }, [] )

    //go back to home page
    const back = () => {
        history.push('/')
    }

    return <>
        <Button variant='outlined' onClick={ back } className='backButton'>Back</Button>
    </>

}

export default BackButtonComponent