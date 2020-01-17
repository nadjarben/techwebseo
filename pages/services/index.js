import Layout from '../../components/layout/Layout'
import MenuLayout from '../../components/layout/MenuLayout'
import MenuButton from '../../components/app/button/MenuButton';
import Private from '../../components/auth/Private';
import { withTranslation, Link } from '../../18n';
//import { getInitialLocale } from '../../translations/getInitialLocale'



const Services = ({ t }) => {
    return (
        <Layout>
            <Private>
                <MenuLayout
                    title={t('servicesTitle')}
                    text={t('servicesSubtitle')}
                >
                    <div className="container text-center services-btns">
                    <Link href={`/services/menu`}>
                        <a>
                <MenuButton title={t('servicesMenu')} />
                </a>
                </Link>
                <br/>
                <br/>
                <MenuButton title={t('servicesCard')} />
                </div>
                </MenuLayout>
            </Private>
        </Layout>
    )
}
Services.getInitialProps = async () => ({
    namespacesRequired: ['services'],
})

export default withTranslation('services')(Services)
