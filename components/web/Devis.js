import Link  from 'next/link';
import Fab from '@material-ui/core/Fab';
import devis from '../../static/images/devis.png';
import { hinge } from 'react-animations';
import Radium, {StyleRoot} from 'radium';


export default function Devis() {

    //const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
    const bg = devis

    const styles = {
        bounce: {
          animation: 'x 2s',
          animationName: Radium.keyframes(hinge, 'bounce')
        }
      }
    

    return (
        <div className='devis' style={{backgroundImage: `url(${bg})`}}>
            <div className='container'>
                <h2 style={{fontWeight:'bold'}}>Conception web & Référencement<br/>SEO</h2>
                <p>VOTRE WEB APP EN 1 CLIC</p>
                <div className='row'>
                    <div className='col-md-4'>
                    <StyleRoot>
                        <div style={styles.bounce}>
                        <Link href='/contact'>
                            <a>
                            <Fab style={{backgroundColor:'orange', fontWeight:'bold'}} variant="extended" aria-label="delete">
                                JE SOUHAITE OBTENIR UN DEVIS GRATUIT
                            </Fab>  
                            </a>  
                        </Link>                     
                        </div>
                    </StyleRoot>
                    </div>
                    <div className='col-md-3 button'>
                        <Link href='/portfolio'>
                            <a>
                            <Fab style={{color:'orange'}} variant="extended" aria-label="delete">
                                PORTFOLIO
                            </Fab>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}