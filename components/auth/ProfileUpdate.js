import { Link } from '../../18n';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth, updateUser } from '../../actions/auth';
import { getProfile, update } from '../../actions/user';
import { API } from '../../config';
import Button from '@material-ui/core/Button'


const ProfileUpdate = () => {
    const [values, setValues] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        about: '',
        password: '',
        error: false,
        success: false,
        loading: false,
        userData: ''
    });

    const token = getCookie('token');
    const { name, surname, phone, about, password, error, success, loading, userData } = values;

    const init = () => {
        getProfile(token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: data.name,
                    surname: data.surname,
                    phone: data.phone,
                    email: data.email,
                    about: data.about
                });
            }
        });
    };

    useEffect(() => {
        init();
    }, []);

    const handleChange = name => e => {
        // console.log(e.target.value);
        const value = e.target.value;
        let userFormData = new FormData();
        userFormData.set(name, value);
        setValues({ ...values, [name]: value, userData: userFormData, error: false, success: false });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setValues({ ...values, loading: true });
        update(token, userData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false, loading: false });
            } else {
                updateUser(data, () => {
                    setValues({
                        ...values,
                        name: data.name,
                        surname: data.surname,
                        phone: data.phone,
                        about: data.about,
                        password: '',
                        success: true,
                        loading: false
                    });
                });
            }
        });
    };

    const profileUpdateForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="text-muted">Nom</label>
                <input onChange={handleChange('name')} type="text" value={name} className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Prenom</label>
                <input onChange={handleChange('surname')} type="text" value={surname} className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Telephone</label>
                <input onChange={handleChange('phone')} type="text" value={phone} className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">A propos de moi</label>
                <textarea onChange={handleChange('about')} type="text" value={about} className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Mot de passe</label>
                <input onChange={handleChange('password')} type="password" value={password} className="form-control" />
            </div>
            <div>
                <br/>
            <Button className="profile-update-btn" type="submit" variant="contained" style={{backgroundColor:'red', color: 'white', height:'6vh', width: '99%'}}>
                Modifier
            </Button>
            </div>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
            Profile mis a jour
        </div>
    );

    const showLoading = () => (
        <div className="alert alert-info" style={{ display: loading ? '' : 'none' }}>
            Chargement...
        </div>
    );

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mb-5">
                        {showSuccess()}
                        {showError()}
                        {showLoading()}
                        {profileUpdateForm()}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProfileUpdate;
