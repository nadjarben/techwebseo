import Layout from '../components/Layout';
import Who from '../components/about/Who';
import Head from 'next/head';
import { APP_NAME, DOMAIN, FB_APP_ID } from '../config';

const About = () => {
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
            {head()}
            <Layout>
                <Who />
            </Layout>
        </React.Fragment>
    );
};

export default About;
