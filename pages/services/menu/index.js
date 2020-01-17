import Layout from '../../../components/layout/Layout'
import MenuLayout from '../../../components/layout/MenuLayout'
import MenuButton from '../../../components/app/button/MenuButton';
import { withTranslation, Link } from '../../../18n'

const MenuIndex = ({ t }) => {
    return (
        <Layout>
            <MenuLayout 
                title={t('menuTitle')}
                text={t('menuSubtitle')}
                >
                    <div className="container text-center">
            <div className="menu-btns">
                <div className="row">
                    <div className="col-6">
                        <Link href='/services/menu/starter-pack'>
                            <a>
            <MenuButton title="Starter Pack" />
            </a>
            </Link>
            </div>
            <div className="col-6">
            <Link href='/services/menu/social-network'>
                <a>
            <MenuButton title="Socialized Me" />
            </a>
            </Link>
            </div>
            </div>
            <br/>
            <div className="row">
            <div className="col-6">
            <Link href='/services/menu/wedding'>
                    <a>
            <MenuButton title="Epouse-moi" />
            </a>
            </Link>
            </div>
            <div className="col-6">
            <Link href='/services/menu/website'>
                <a>
            <MenuButton title="mywebsite.com" />
            </a>
            </Link>
            </div>
            </div>

            <br/>
            <div className="row">
            <div className="col-6">
            <Link href='/services/menu/bon-appetit'>
                    <a>
            <MenuButton title="Bon appetit" />
            </a>
            </Link>
            </div>
            <div className="col-6">
            <Link href='/services/menu/custom-pack'>
                <a>
            <MenuButton title="Custom Pack" />
            </a>
            </Link>
            </div>
            </div>
            </div>

            <div className="menu-footer">
                <p>{t('menuFooter1')}</p>
                <p>{t('menuFooter2')}</p>
            </div>
            </div>
            </MenuLayout>
        </Layout>
    )
}
MenuIndex.getInitialProps = async () => ({
    namespacesRequired: ['menu'],
})

export default withTranslation('menu')(MenuIndex)