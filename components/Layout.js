import Header3 from './navbar/Header3';
import Footer from '../components/app/Footer';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header3/>
            <React.Fragment>
                <div style={{marginTop:'12vh'}}>{children}</div>
            </React.Fragment>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
