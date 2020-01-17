import { useState, useEffect } from 'react';
import { signup, isAuth, preSignup } from '../../actions/auth';
import { Router } from '../../18n';
import LoginGoogle from './LoginGoogle';
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider';


const SignupComponent = () => {
    const [values, setValues] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { name, surname, email, phone, password, error, loading, message, showForm } = values;

    useEffect(() => {
        isAuth() && Router.push(`/`);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        // console.table({ name, email, password, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false });
        const user = { name, surname, phone, email, password };

        preSignup(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    surname: '',
                    phone: '',
                    email: '',
                    password: '',
                    error: '',
                    loading: false,
                    message: data.message,
                    showForm: false
                });
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');

    const signupForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        value={name}
                        onChange={handleChange('name')}
                        type="text"
                        className="form-control"
                        placeholder="Nom"
                    />
                </div>

                <div className="form-group">
                    <input
                        value={surname}
                        onChange={handleChange('surname')}
                        type="prenom"
                        className="form-control"
                        placeholder="Prenom"
                    />
                </div>

                <div className="form-group">
                    <input
                        value={email}
                        onChange={handleChange('email')}
                        type="email"
                        className="form-control"
                        placeholder="Type your email"
                    />
                </div>

                <div className="form-group">
                    <input
                        value={phone}
                        onChange={handleChange('phone')}
                        type="phone"
                        className="form-control"
                        placeholder="Telephone"
                    />
                </div>

                <div className="form-group">
                    <input
                        value={password}
                        onChange={handleChange('password')}
                        type="password"
                        className="form-control"
                        placeholder="Type your password"
                    />
                </div>

                <div>
                <Button type="submit" variant="contained" style={{backgroundColor:'red', color: 'white', height:'6vh', width: '99%'}}>
                    S'inscrire
                </Button>                
                </div>
            </form>
        );
    };

    return (
        <React.Fragment>
            {showError()}
            {showLoading()}
            {showMessage()}
            {showForm && signupForm()}
            <br />
            <Divider />
            <br/>
            <div className="text-center">
                <LoginGoogle />
            </div>
        </React.Fragment>
    );
};

export default SignupComponent;
