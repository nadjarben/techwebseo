import Layout from '../components/Layout';
import Link from 'next/link';
import Head from 'next/head';
import { APP_NAME, DOMAIN, FB_APP_ID } from '../config';

const Index = () => {
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
                <article className="overflow-hidden">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-4 font-weight-bold">
                                    PROGRAMMING & WEB DEVELOPMENT BLOGS/TUTORIALS
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center pt-4 pb-5">
                                <p className="lead">
                                    Best programming and web development blogs and tutorials on React Node NextJs and
                                    JavaScript
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="flip flip-horizontal">
                                    <div
                                        className="front"
                                        style={{
                                            backgroundImage:
                                                'url(' +
                                                'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                                                ')'
                                        }}
                                    >
                                        <h2 className="text-shadow text-center h1">React</h2>
                                    </div>
                                    <div className="back text-center">
                                        <Link href="/categories/react">
                                            <a>
                                                <h3 className="h1">React Js</h3>
                                            </a>
                                        </Link>
                                        <p className="lead">The world's most popular frontend web development library</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="flip flip-horizontal">
                                    <div
                                        className="front"
                                        style={{
                                            backgroundImage:
                                                'url(' +
                                                'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                                                ')'
                                        }}
                                    >
                                        <h2 className="text-shadow text-center h1">Node</h2>
                                    </div>
                                    <div className="back text-center">
                                        <Link href="/categories/node">
                                            <a>
                                                <h3 className="h1">Node Js</h3>
                                            </a>
                                        </Link>
                                        <p className="lead">
                                            The worlds most popular backend development tool for JavaScript Ninjas
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="flip flip-horizontal">
                                    <div
                                        className="front"
                                        style={{
                                            backgroundImage:
                                                'url(' +
                                                'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                                                ')'
                                        }}
                                    >
                                        <h2 className="text-shadow text-center h1">Next</h2>
                                    </div>
                                    <div className="back text-center">
                                        <Link href="/categories/nextjs">
                                            <a>
                                                <h3 className="h1">Next Js</h3>
                                            </a>
                                        </Link>
                                        <p className="lead">A Production ready web framework for building SEO React apps</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </Layout>
        </React.Fragment>
    );
};

export default Index;
