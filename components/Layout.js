import Header from './Header';
import Header3 from './navbar/Header3';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header3/>
            <React.Fragment>
                <div style={{marginTop:'12vh'}}>{children}</div>
            </React.Fragment>
        </React.Fragment>
    );
};

export default Layout;
