import Layout from '../../components/layout/Layout';
import Private from '../../components/auth/Private';
import { Link, withTranslation } from '../../18n'

const UserIndex = ({ t }) => {
    return (
        <Layout>
            <Private>
                <div className="container-fluid" style={{marginBottom: '30vh'}}>
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Mon Compte</h2>
                        </div>
                        <div className="col-md-4">
                            <ul class="list-group">
                
                                <li className="list-group-item list-user">
                                    <Link href='/user/update'>
                                        <a className="list-user">Modifier mes informations personnelles</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Private>
        </Layout>
    );
};
UserIndex.getInitialProps = async () => ({
    namespacesRequired: ['user'],
})
export default withTranslation('user')(UserIndex)