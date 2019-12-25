import React from 'react';
import Link from 'next/link';
import TextLoop from "react-text-loop";
import Fab from '@material-ui/core/Fab';
import logo from '../../static/images/techweblogo.png';
import Typed from 'react-typed';
//import { zoomInRight } from 'react-animations';
//import Radium, {StyleRoot} from 'radium';

//const styles = {
  //  bounce: {
    //  animation: 'x 2s',
     // animationName: Radium.keyframes(zoomInRight, 'bounce')
    //}
  //}
  const test = () => "< "

export default function Homepage() {
    return (
        <div className='container descri'>
            <div className='row'>

                <div className='col-md-6 order-md-2 logo-div'>
                    <div className="react-typed-logo">
                        <span className="logo-title">{test()}TECHNOWEB /></span>
                        <br/>
                        <Typed
                        strings={['{... webDevelopers}']}
                        typeSpeed={80}
                        />    
                    </div>
                </div>

                <div className='col-md-6 order-md-1 text-descri'>
                    <h1 style={{fontWeight:'bold'}}>
                        Développeurs_
                    <TextLoop>
                        <p style={{color:'orange'}}>#React.Js</p>
                        <p style={{color:'orange'}}> #Node.Js</p>
                        <p style={{color:'orange'}}> #Next.Js</p>
                    </TextLoop>{" "}
                    </h1>
                    <br/>
                    <h5>Front-End React Development</h5>
                    <h5>Back-End Node Development</h5>
                    <h5>UX/UI Design</h5>
                    <h5>Application Testing</h5>
                    <br/>
                    <br/>
                    <Link href="/blogs">
                        <a><Fab style={{backgroundColor:'orange', fontWeight:'bold'}} variant="extended" aria-label="delete">
                            ARTICLES
                        </Fab></a>
                    </Link>       
                </div>
            </div>
        </div>
    )
}