import  Link  from 'next/link';
import Fab from '@material-ui/core/Fab';
import conception from '../../static/images/conception.png';
import iphonex from '../../static/images/iphone-x.png'
import light from '../../static/images/lightbulb-outline.png';
import rule from '../../static/images/ruler-square.png';
import adjust from '../../static/images/image-auto-adjust.png';
import animate from '../../static/images/animation-play-outline.png';

export default function Conception() {
    return (
        <div className='container conception'>
            <p className='text-center' style={{color:'orange', fontWeight:'bold'}}>CONCEPTION SUR-MESURE ADAPTEE A VOS BESOINS</p>
            <div className='row text-center' style={{marginTop:'5vh'}}>
                <div className='col-md-6'>
                    <img src={iphonex} width='100%' alt='conception' />
                </div>
                <div className='col-md-6'>
                <br />
                    <img src={conception} width='100%' alt='conception' />
                </div>
            </div>
            <div className='row text-center' style={{marginTop:'10vh'}}>
                <div className='col-md-3'>
                    <img src={light} alt='light' />
                    <br />
                    <br />
                    <p style={{fontWeight:'bold'}}>DÉFINIR</p>
                    <p>Nous définissons ensemble les besoins de votre projet par mail ou RDV et un devis gratuit vous est proposé.</p>
                </div>
                <div className='col-md-3'>
                    <img src={rule} alt='rule' />
                    <br />
                    <br />
                    <p style={{fontWeight:'bold'}}>DESIGNER</p>
                    <p>Sur la base de vos attentes, nous déterminons ensemble le design de l'application.</p>
                </div>
                <div className='col-md-3'>
                    <img src={adjust} alt='adjust' />
                    <br />
                    <br />
                    <p style={{fontWeight:'bold'}}>CRÉER</p>
                    <p>L'application est revue et ajustée durant tout le processus de conception selon vos retours.</p>
                </div>
                <div className='col-md-3'>
                    <img src={animate} alt='animate' />
                    <br />
                    <br />
                    <p style={{fontWeight:'bold'}}>ANIMER</p>
                    <p>Une animation sur mesure afin d'avoir une web application graphiquement agréable. Pour cela nous faisons appel à un graphiste confirmé et primé.</p>
                </div>
            </div>
            <div className='text-center'>
                <Link to='/portfolio'>
                    <a>
                    <Fab style={{color:'orange', fontWeight:'bold'}} variant="extended" aria-label="delete">
                    ACCÉDER AU PORTFOLIO
                    </Fab>
                    </a>
                </Link>
            </div>
        </div>
    )
}