import Navbar from '../navbar/Navbar';
import Bottombar from '../navbar/Bottombar'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
                <div className="layout">
                    {children}
               </div>
               <div className="bottombar">
            <Bottombar />
            </div>
        </React.Fragment>
    );
};

export default Layout;
