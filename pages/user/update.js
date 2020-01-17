import Layout from '../../components/layout/Layout';
import Private from '../../components/auth/Private';
import ProfileUpdate from '../../components/auth/ProfileUpdate';
import { Link, withTranslation } from '../../18n'

const UserProfileUpdate = ({ t }) => {
    return (
        <Layout>
            <Private>
            <div className="container-fluid pt-4 pl-5 pr-5">
                    <h3 className="profile-update-title text-left">Modifier mes informations</h3>
                    <ProfileUpdate />
            </div>
            </Private>
        </Layout>
    );
};

UserProfileUpdate.getInitialProps = async () => ({
    namespacesRequired: ['user'],
})
export default withTranslation('user')(UserProfileUpdate)