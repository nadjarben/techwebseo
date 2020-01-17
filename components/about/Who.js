import cvphoto from '../../static/images/dev.png';
import share from '../../static/images/share.png';
import Fab from '@material-ui/core/Fab';
import { Link } from '../../18n';
import { zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    bounce: {
      animation: 'x 2s',
      animationName: Radium.keyframes(zoomIn, 'bounce')
    }
  }

export default function Who() {
    return (
        <div className='container about'>
            <div className='text-center'>
                <h1 style={{fontWeight:'bold'}}>À propos</h1>
                <h5>Embaucher est toujours un pari risqué pour une entreprise,</h5>
                    <br/> 
                <h5>c’est pourquoi je vous propose que nous fassions connaissance.</h5>
            </div>
            <div className='row text-center cv'>
                <div className='col-md-6'>
                <StyleRoot>
                        <div style={styles.bounce}>
                            <img src={cvphoto} alt='cv' width='80%' />                 
                        </div>
                    </StyleRoot>
                </div>
                <div className='col-md-6'>
                    <h3 style={{fontWeight:'bold', color:'orange'}}>
                        Collectif de developpeurs, entrepreneurs et passionnés
                    </h3>
                    <br/>
                    <p>Nous sommes un collectif de développeurs français et israéliens comptant a l'heure actuelle quatres membres et plusieurs spécialités.<br/>
                    Chacun d'entre nous dispose de compétences larges et spécifiques. De part nos origines diverses et nos milieux sociaux et professionels totalement différents nous avons pu développer des compétences complètes.
                        <br />
                        Formé aussi bien aux enjeux du management qu’à ceux de la digitalisation et du marketing connecté, nous saurons accompagner votre entreprise et l’aider à franchir le cap de la révolution numérique.
                        </p>
                </div>
            </div>
            <div className='text-center' style={{marginTop:'10vh'}}>
                <h2 style={{color:'orange'}}>Parce que le développement est une question de partage</h2>
                <p style={{marginTop:'3vh'}}>Nous sommes tous passionnés de développement et nous savons que le développement et la base de notre travail est possible grâce au partage des connaissances, alors n'hésitez pas pour toute questions à ce sujet.</p>
                <p style={{fontWeight:'bold'}}>Nous repondrons avec plaisir à vos questions dans la section question ou en privé via le formulaire de contact.</p>
            </div>
            <div className='row' style={{marginTop:'3vh'}}>
                <div className='col-6 text-center share-text'>
                <Link href="/contact">
                    <a>
                    <Fab style={{backgroundColor:'orange', fontWeight:'bold', height:'auto', minHeight:'9vh'}} variant="extended" aria-label="delete">
                        UNE QUESTION A PROPOS DES TECHNOLOGIES WEB ?
                    </Fab>
                    </a>
                </Link>
                <br/>
                <br/>
                <br/>
                <Link href="/blogs">
                    <a>
                    <Fab style={{backgroundColor:'orange', fontWeight:'bold'}} variant="extended" aria-label="delete">
                    ARTICLES
                    </Fab>
                    </a>
                </Link>
                </div>
                <div className='col-6 share-pic'>
                    <img src={share} alt='share' width='100%' />                 
                </div>
            </div>
        </div>
    )
}