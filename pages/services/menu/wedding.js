import Layout from '../../../components/layout/Layout'
import MenuLayout from '../../../components/layout/MenuLayout'
import PackButton from '../../../components/app/button/PackButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { withTranslation } from '../../../18n'

const Wedding = () => {
    return (
        <Layout>
            <MenuLayout
                title="Marry Me"
                text="Le starter pack est destine aux nouvelles entreprises et comprends:"
                >
            <div className="container text-center">
                <div className="row">
                    <div className="col-6">
                        <h3 className="pack-title">BASIC</h3>
                        <p>sans impression</p>
                        <PackButton 
                            title="Logo"
                            subtitle="2 test, 2 test"
                        />
                        <br/>
                        <br/>
                        <PackButton 
                            title="Carte de visite"
                            subtitle="2 test, 2 test"
                        />
                        <br/>
                        <br/>
                        <PackButton 
                            title="Flyer"
                            subtitle="2 test, 2 test"
                        />
                        <br/>
                        <br/>
                        <h3 className="pack-price">₪ 1650</h3>
                        <AddShoppingCartIcon fontSize="large" />
                    </div>

                    <div className="col-6">
                        <h3 className="pack-title">PRO</h3>
                        <p>avec impression</p>
                        <PackButton 
                            title="Logo"
                            subtitle="2 test, 2 test"
                        />
                        <br/>
                        <br/>
                        <PackButton 
                            title="Carte de visite"
                            subtitle="2 test, 2 test"
                        />
                        <br/>
                        <br/>
                        <PackButton 
                            title="Flyer"
                            subtitle="2 test, 2 test"
                        />
                        <br/>
                        <br/>
                        <h3 className="pack-price">₪ 2750</h3>
                        <AddShoppingCartIcon fontSize="large" />
                    </div>
                </div>
            </div>
            </MenuLayout>
        </Layout>
    )
}

Wedding.getInitialProps = async () => ({
    namespacesRequired: ['menu'],
})

export default withTranslation('menu')(Wedding)