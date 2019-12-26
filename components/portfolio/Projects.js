import React, { useState } from 'react';
import yfo from '../../static/images/yfof.png';
import cleaners from '../../static/images/cleaners.png';
import ft from '../../static/images/ftr.png';
import Fab from '@material-ui/core/Fab';



export default function Projets() {
    const [displayYfo, setDisplayYfo] = useState(false);
    const [displayCleaners, setDisplayCleaners] = useState(false);
    const [displayFt, setDisplayFt] = useState(false);

    const textYfo = () => {
        if(displayYfo === true)
        return (
            <div>
                This is an app built for restaurants and hotels in order to increase the productivity of their places.<br/>
                QRs codes were disposed in the restaurants which permit to the customers to order by themselves.<br/>
                I handled the frond end developement with react js and ui frameworks bootstrap and reactstrap.<br/>
                The orders request were connected to thermal printer ipp with node.<br/>
            </div>
        )
    }
    const textCleaners = () => {
        if(displayCleaners === true)
        return (
            <div>
                Web application for laudry in Israel developed with react.js and node.<br />
                The customers can now order their deliveries directly online and download the app thanks to A2HS.<br/>
                The orders are stocked in an MongoDB atlas database and deliveries datas can be handled thanks to an admin part.<br/>
            </div>
        )
    }
    const textFt = () => {
        if(displayFt === true)
        return (
            <div>
                This one is a freelance order that i received from vtc's drivers.<br/>
                This web app is composed of a simple form for customers reservations which sends the orders requests by mail thanks to nodemailer.<br/>
                With Google Matrix and Google Places API I could have implement a fare tarification according to time distances and trips time and hours.
            </div>
        )
    }
    const handleDisplayYfo = () => {
        setDisplayYfo(prevDisplayYfo => !prevDisplayYfo)
    }
    const handleDisplayCleaners = () => {
        setDisplayCleaners(prevDisplayCleaners => !prevDisplayCleaners)
    }
    const handleDisplayFt = () => {
        setDisplayFt(prevDisplayFt => !prevDisplayFt)
    }


    return (
        <div className='container port2'>
            <div className='text-center'>
                <h3 style={{color:'orange', fontWeight:'bold'}}>NOS PROJETS</h3>
            </div>
            <div className='row text-center'>
                <div className='col-md-4'>
                    <img className='pic' src={yfo} alt='yfo' width='100%' />
                    <h5>Your Fast Order</h5>
                    <Fab onClick={handleDisplayYfo} style={{backgroundColor:'orange'}} variant="extended" aria-label="delete">
                        En savoir plus
                    </Fab>
                    <div>
                        <br/>
                        {textYfo()}
                    </div>
                </div>
                <div className='col-md-4'>
                    <img className='pic' src={cleaners} alt='cleaners' width='100%' />
                    <h5>The Cleaners</h5>
                    <Fab onClick={handleDisplayCleaners} style={{backgroundColor:'orange'}} variant="extended" aria-label="delete">
                        En savoir plus
                    </Fab>
                    <div>
                        <br/>
                        {textCleaners()}
                    </div>
                </div>
                <div className='col-md-4'>
                    <img className='pic' src={ft} alt='ft' width='100%' />
                    <h5>Fast Transport</h5>
                    <Fab onClick={handleDisplayFt} style={{backgroundColor:'orange'}} variant="extended" aria-label="delete">
                        En savoir plus
                    </Fab>
                    <div>
                        <br/>
                        {textFt()}
                    </div>
                </div>
            </div>
        </div>
    )
}