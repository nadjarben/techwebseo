import Layout from '../../components/layout/Layout';
import Admin from '../../components/auth/Admin';
import { Link, withTranslation } from '../../18n'

const AdminIndex = ({ t }) => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid" style={{marginBottom: '30vh'}}>
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Admin Dashboard</h2>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link href="/user/update">
                                        <a>Update Profile</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};
AdminIndex.getInitialProps = async () => ({
    namespacesRequired: ['admin'],
})
export default withTranslation('admin')(AdminIndex)
