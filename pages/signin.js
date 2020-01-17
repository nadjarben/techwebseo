import Layout from '../components/layout/Layout';
import { withRouter } from 'next/router';
import SigninComponent from '../components/auth/SigninComponent';
import { Link, withTranslation } from '../18n';
import compose from 'recompose/compose'

const Signin = ({ router, t }) => {
    const showRedirectMessage = () => {
        if (router.query.message) {
            return <div className="alert alert-danger">{router.query.message}</div>;
        } else {
            return;
        }
    };

    return (
        <Layout>
            <div className="container-fluid pl-5 pr-5">
                <h2 className="text-center pt-4 pb-4">Connection</h2>

                <div className="row">
                    <div className="col-md-6 offset-md-3">{showRedirectMessage()}</div>
                </div>

                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="pt-5">
                            <SigninComponent />
                        </div>
                    </div>
                </div>
                <br/>
                <div className="text-center" style={{lineHeight:'1vh'}}>
                    <p>Pas encore membre ?</p>
                    <Link href='/signup'>
                        <a>{t('suscribe')}</a>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};
Signin.getInitialProps = async () => ({
    namespacesRequired: ['connection'],
})
export default compose(
    withTranslation('connection')
 )(withRouter(Signin))