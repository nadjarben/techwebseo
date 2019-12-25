import Link from 'next/link';
import Fab from '@material-ui/core/Fab';
import responsive from '../../static/images/responsive.png'

export default function Presentation() {
    return (
        <div>
        <div className='container respons'>
            <div className='row'>
                <div className='col-md-6'>
                    <h2 className='opt' style={{fontWeight:'bold'}}>
                        Optez pour une application web React, responsive design avec un haut niveau de performance et optimisée SEO
                    </h2>
                    <br/>
                    <h5 style={{color:'orange'}}>
                        Créer un site internet ou une webapp en React JS est un choix stratégique qui pourrait bien faire la différence grâce à :
                    </h5>
                    <br/>
                    <ul>
                    <li>La logique composants pour les designers et développeurs, ce qui se traduit par une uniformisation du support et gain de temps tout au long du projet.</li>
                    <br/>
                    <li>Un temps de chargement très court : les utilisateurs devenant de plus en plus exigeants, afficher une page instantanément est devenu indispensable et la vitesse de chargement de la page s’en voit considérablement optimisée grâce à React JS et son DOM virtuel qui charge uniquement les parties « interactives ».</li>
                    <br/>
                    <li>Une expérience utilisateur plus fluide : le site s’apparente à une web application pour mieux guider et convertir l’utilisateur.</li>
                    <br/>
                    <li>Une maintenance et des évolutions facilitées grâce à un code propre, structuré et organisé.</li>
                    </ul>
                    <br/>
                    <Link href='/presentation'>
                        <a><Fab style={{backgroundColor:'orange', fontWeight:'bold'}} variant="extended" aria-label="delete">
                            En savoir plus
                        </Fab></a>
                    </Link>  
                </div>

                <div className='col-md-6 pics'>
                    <br />
                    <img src={responsive} width='100%' alt='responsive' />
                </div>
            </div>
        </div>
        <br/>
        </div>
    )
}