//import Header from './Header';
import Header2 from './app/Header2';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header2/>
            <React.Fragment>
                <div style={{marginTop:'15vh'}}>{children}</div>
            </React.Fragment>
        </React.Fragment>
    );
};

export default Layout;
