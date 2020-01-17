import Private from '../auth/Private'
import NavigationBar from '../navbar/NavigationBar';

const Layout = ({ children, title, text }) => {
    return (
        <React.Fragment>
            <Private>
                <NavigationBar />
                <div className="container text-center">
                    <h1 className='layout-title'>{title}</h1>
                    <p className="layout-text">{text}</p>
                </div>
                <div style={{marginTop:'-1vh'}}>
                {children}
                </div>
            </Private>
        </React.Fragment>
    );
};

export default Layout;
