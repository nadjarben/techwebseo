import Layout from '../components/layout/Layout';
import SignupComponent from '../components/auth/SignupComponent';
import { withTranslation } from '../18n'

const Signup = () => {
    return (
        <Layout>
            <div className="container-fluid pl-5 pr-5">
                <h2 className="text-center pt-4 pb-4">S'inscrire</h2>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <SignupComponent />
                    </div>
                </div>
            </div>
        </Layout>
    );
};
Signup.getInitialProps = async () => ({
    namespacesRequired: ['connection'],
})
export default withTranslation('connection')(Signup)
