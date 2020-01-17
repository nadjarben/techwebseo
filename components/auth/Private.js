import { useEffect } from 'react';
import { isAuth } from '../../actions/auth';
import { Router } from '../../18n'



const Private = ({ children }) => {
    useEffect(() => {
        if (!isAuth()) {
            Router.push(`/signin`);
        }
    }, []);
    return <React.Fragment>{children}</React.Fragment>;
};

export default Private;
