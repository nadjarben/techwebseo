import Link from 'next/link';
import Fab from '@material-ui/core/Fab';
import port from '../../static/images/port.png';
import { rollIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    bounce: {
      animation: 'x 2s',
      animationName: Radium.keyframes(rollIn, 'bounce')
    }
  }

export default function Presentation() {
    const bg = port
    return (
        <StyleRoot>
        <div style={styles.bounce}>
        <div className='port' style={{backgroundImage: `url(${bg})`}}>
            <div>
                
                
            <div className='container'>
                <h2 style={{fontWeight:'bold'}}>Portfolio</h2>
                <p>VOTRE APPLICATION WEB</p>
                <br />
                <Link href='/contact'>
                    <a>
                    <Fab style={{backgroundColor:'orange', fontWeight:'bold'}} variant="extended" aria-label="delete">
                        JE SOUHAITE OBTENIR UN DEVIS GRATUIT
                    </Fab>
                    </a>    
                </Link>   
            </div>
            </div>
        </div>
        </div>
                    </StyleRoot>
    )
}