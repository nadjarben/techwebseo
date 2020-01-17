import { Link } from '../../18n';
import linkedinbox from '../../public/static/images/linkedin-box.png';
import git from '../../public/static/images/github-box.png';
import mail from '../../public/static/images/email (2).png';



export default function Footer() {

    return (
        <div style={{backgroundColor:'orange', marginTop:'10vh'}}>
            <div className='container footer'>
                <div className='row '>
                    <div className='col-md-8'>
                        <h5 style={{fontWeight:'bold'}}>Nous suivre :</h5>
                        <div className='row logo'>
                            <a href='https://www.linkedin.com/in/benjamin-nadjar/' target="blank">
                                <img src={linkedinbox} alt='linkedin' />
                            </a>
                            <a href='https://github.com/nadjarben' target="blank">
                                <img src={git} alt='git' />
                            </a>
                            <Link href="/contact">
                            <a>
                                <img src={mail} alt='mail' />
                            </a>
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-4'>
                    <h5 className='footer-contact' style={{fontWeight:'bold'}}>Nous contacter :</h5>
                    <p>nadjar.benjamin@gmail.com</p>
                    <p style={{marginTop:'-12px'}}>+972 58 630 55 15</p>
                    <p style={{marginTop:'-12px'}}>+336 67 97 42 54</p>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:'black'}}>
                <div className='container text-center mentions' style={{color:'darkgrey', padding:'2vh', fontSize:'10px'}}>
                    Technoweb - Developpeurs Freelances - Tous droits réservés - 2018
                </div>
            </div>
        </div>
    )
}