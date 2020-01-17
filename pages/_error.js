import Layout from '../components/layout/Layout';
import { withTranslation, Link } from '../18n';
import Lottie from "react-lottie";
import * as anim404 from '../components/app/animation/404.json'


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: anim404.default,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice"
    }
 }


const Error = ({ t }) => {
    return (
        <React.Fragment>
            <Layout>
                <div className="text-center">
                    <Lottie options={defaultOptions} height={320} width={320} />
                    <br/>
                    <Link href='/'>
                    <a><h3 style={{color:'red'}}>{t('errorLink')}</h3></a>
                    </Link>
                </div>
            </Layout>
        </React.Fragment>
    );
};
Error.getInitialProps = async () => ({
    namespacesRequired: ['common'],
  })
  

export default withTranslation('common')(Error)
