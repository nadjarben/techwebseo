import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { APP_NAME, DOMAIN, FB_APP_ID } from '../config';
import { withTranslation, Link } from '../18n';
import * as doneAnim from '../components/app/animation/done.json'
import Navbar from '../components/navbar/Navbar';
import Bottombar from '../components/navbar/Bottombar'
import Button from '@material-ui/core/Button'
import Lottie from "react-lottie";
import FadeIn from "react-fade-in";
import logosw from '../public/static/images/logo-sidewalk-black.png'
const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: doneAnim.default,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice"
    }
 }


const Index = ({ t }) => {
    const [loading, setLoading] = React.useState(undefined);
    const [done, setDone] = React.useState(undefined);
    React.useEffect(() => {
        setTimeout(() => {
               setLoading(true);
               setTimeout(() => {
                  setDone(true);
               }, 2000);
            });
         }, [9700]);
    const head = () => (
        <Head>
            <title>
            Collectif de développeurs Web freelance Node React | {APP_NAME}
            </title>
            <meta name="description" content="Tech Web est un collectif de développeurs web partageant leurs connaissances web et ouvert à toute proposition de freelance" />
            <meta property="og:title" content={`Collectif de développeurs Web freelance Node React | ${APP_NAME}`} />
            <meta property="og:description" content="Tech Web est un collectif de développeurs web partageant leurs connaissances web et ouvert à toute proposition de freelance" />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );
    return (
        <React.Fragment>
            {!done ? (
          <React.Fragment>
                <Navbar/>
            <FadeIn>
            <div style={{marginTop:'15vh'}}>
                <Lottie options={defaultOptions} height={320} width={320} />
            </div>
          </FadeIn>
          <div style={{bottom:'0', position:'fixed', width:'100%'}}>
          </div>
          <Bottombar />
          </React.Fragment>
          ) : (
              <Layout>
            <div className="index">
                <div className="text-center">
                <img src={logosw} className="logo-sw" alt="logo sidewalk" />
                <div className="index-btns">
                    <Link href='/services'>
                    <a>
                <Button className='home-btn' variant="contained" color='secondary' style={{backgroundColor:'red'}}>
                    {t('indexStart')}
                </Button>
                </a>
                </Link>
                <br/>
                <br/>
                <Link href="/blog"><a>
                <Button className='home-btn' variant="contained" color="secondary"style={{backgroundColor:'orange'}}>
                {t('indexBlog')}
                </Button>
                </a></Link>
                <br/>
                <br/>
                <Button className='home-btn' variant="contained" color="secondary"style={{backgroundColor:'green'}}>
                {t('indexNetwork')}
                </Button>
                </div>
            </div>
            </div>
            </Layout>
            )}
        </React.Fragment>
    );
};
Index.getInitialProps = async () => ({
    namespacesRequired: ['homepage'],
})
  

export default withTranslation('homepage')(Index)
