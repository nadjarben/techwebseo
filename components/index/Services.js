import Button from '@material-ui/core/Button';
import react from '../../static/images/react.png';
import wp from '../../static/images/wp.png'
import seo from '../../static/images/seo.png';

export default function Services() {
    return (
        <div>
        <div className='container serv'>

            <h2 className='text-center' style={{fontWeight:'bold'}}>Services</h2>
            <p className='text-center text-serv'>
                De la création de votre application web à son implémentation, nous saurons vous accompagner dans l’ensemble de votre stratégie digitale.
            </p>

            <div className='row text-center' style={{marginTop:'10vh'}}>
                <div className='col-md-4'>
                    <img src={react} alt='react' />
                    <h5 style={{marginTop:'2vh', fontWeight:'bold'}}>Application React.JS</h5>
                    <br/>
                    <div className='text-left list'>
                        <ul className='list-services'>
                            <li>Développement en HTML/CSS, JS</li>
                            <li>Management des states: Redux</li>
                            <li>Intégration sur-mesure</li>
                            <li>Progressive Web App</li>
                        </ul>
                    <br/>
                    <Button style={{color:'orange'}}>
                        En savoir plus
                    </Button>
                    </div>
                </div>
                <div className='col-md-4'>
                    <img src={seo} alt='seo' width='50%' style={{marginTop:'-4vh'}} />
                    <h5 style={{marginTop:'0vh', fontWeight:'bold'}}>
                        React Native Application
                    </h5>
                    <br/>
                    <div className='text-left'>
                        <ul className='list-services'>
                            <li>Applications hybrides iOs/Android</li>
                            <li>Réutilisabilité maximale du code</li>
                            <li>Peformances de haut niveau</li>
                            <li>Architecture modulable et intuitive</li>
                        </ul>
                    <br/>
                    <Button style={{color:'orange'}}>
                        En savoir plus
                    </Button>
                </div>
                </div>
                <div className='col-md-4'>
                    <img src={wp} alt='wp' width='33%'/>
                    <h5 style={{marginTop:'2vh', fontWeight:'bold'}}>
                        Développement Node.Js
                    </h5>
                    <br/>
                    <div className='text-left'>
                        <ul className='list-services'>
                            <li>Développement Back-End en Js</li>
                            <li>RESTful API / Microservices</li>
                            <li>Haut niveau de performance</li>
                            <li>Facilement scalable</li>
                        </ul>
                    <br/>
                    <Button style={{color:'orange'}}>
                        En savoir plus
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    
        </div>
    )
}