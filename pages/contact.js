import Layout from '../components/Layout';
import Link from 'next/link';
import Head from 'next/head';
import { APP_NAME, DOMAIN, FB_APP_ID } from '../config';
import ContactForm from '../components/form/ContactForm';

const Contact = () => {
    const head = () => (
        
        <Head>
            <title>
            Contactez nous pour toute questions ou proposition de freelance | {APP_NAME}
            </title>
            <meta name="description" content="Remplissez le formulaire de contact pour toute informations au sujet du développement d'une application web, SPA, PWA ou API ..." />
            <meta property="og:title" content={`Contactez nous pour toute questions ou proposition de freelance | ${APP_NAME}`} />
            <meta property="og:description" content="Remplissez le formulaire de contact pour toute informations au sujet du développement d'une application web, SPA, PWA ou API ..." />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/contact`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );
    return (
        <React.Fragment>
            {head()}
            <Layout>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h2>Contact form</h2>
                            <hr />
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default Contact;
