import React from 'react';
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as doneAnim from "../../app/animation/done.json";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import PhonelinkRingRoundedIcon from '@material-ui/icons/PhonelinkRingRounded';
import MessageIcon from '@material-ui/icons/Message';
import Slide from '@material-ui/core/Slide';
import contact from '../../../public/static/images/email-edit-outline.png'
import whatsapp from '../../../public/static/images/whatsappb.png'
import phone from '../../../public/static/images/phone-in-talk.png'
import { emailContactForm } from '../../../actions/form'
import { withTranslation } from '../../../18n';


const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: doneAnim.default,
  rendererSettings: {
     preserveAspectRatio: "xMidYMid slice"
  }
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ModalDevis({ t }) {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
      pageOne: true,
      pageTwo: false,
      pageContact: false,
      pageSuccess: false,
      category: '',
      name: '',
      phone: '',
      message: '',
      error: ''
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setValues({...values, pageOne: true, pageTwo: false, pageContact: false, pageSuccess: false, category: '' })
  };

  const { pageOne, pageTwo, pageContact, category, name, message, pageSuccess } = values

  const handlePageOne = (e) => {
    setValues({...values, pageOne: false, pageTwo: true, category: e.target.value })
  }

  const handlePageContact = (e) => {
    setValues({...values, pageOne: false, pageTwo: false, pageContact: true })
  }

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values)
  };

  const handleSubmit = e => {
    e.preventDefault();
    emailContactForm({
        category,
        name,
        message
    }).then(data => {
        if (data.error) {
            setValues({ ...values, error: data.error });
        } else {
            setValues({ ...values, name: '', category: '', message: '', phone: '', pageOne: false, pageTwo: false, pageContact: false, pageSuccess: true });
        }
    });
};
  return (
    <div>
      <PhonelinkRingRoundedIcon onClick={handleClickOpen} />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="alert-dialog-slide-title" className="text-center modal-title">{t('modalDevisDevis')}
        <br/>
        
        </DialogTitle>
        { pageOne && 
        <DialogContent className='modal-devis'>
            <div className="container">
            <Button
            value="Depannage"
            onClick={(e) => handlePageOne(e)}
            className="btn-modal-devis"
            >
                {t('modalTab1Btn1')}
            </Button>
            <br/>
            <br/>
            <Button
            value="Travaux"
            onClick={(e) => handlePageOne(e)}
            className="btn-modal-devis"
            >
                {t('modalTab1Btn2')}
            </Button>
            <br/>
            <br />
            <Button
            value="Question"
            onClick={(e) => handlePageOne(e)}
            className="btn-modal-devis"
            >
                {t('modalTab1Btn3')}
            </Button>
            </div>
        </DialogContent>
        }
        {pageTwo &&
        <DialogContent className="modal-devis">
            <div className="container">
          <Button
            onClick={handlePageContact}
            className="btn-modal-devis"
            >
              <img src={contact} alt="contact-plumber" />
            </Button>
            <br/>
            <br/>
            <a href='https://api.whatsapp.com/send?phone=972586305530'>
            <Button
            className="btn-modal-devis"
            >
                <img src={whatsapp} alt="wa-plubmber" />
            </Button>
            </a>            
            <br/>
            <br/>
            <a href="tel:+972586305530">
            <Button
            className="btn-modal-devis"
            >
              <img src={phone} alt="phone-plubmber" />
            </Button>
            </a>            
        </div>
        </DialogContent>

        }
        {pageContact &&
        <DialogContent className="modal-devis">
        <div className="container">
        <TextField
                id="input-with-icon-textfield"
                label={t('modalTab3Input1')}
                className='modal-textfield'
                value={values.name}
                name='name'
                onChange={handleChange('name')}
                required={true}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                ),
                }}
            />
            <br/>  
            <br/>                  
        <TextField
        id="input-with-icon-textfield"
        className='modal-textfield'
        label={t('modalTab3Input2')}
        values={values.phone}
        required
        name='tel'
        onChange={handleChange('phone')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          ),
        }}
      />
        <br/>  
        <br/>               
      <TextField
        id="input-with-icon-textfield"
        className='modal-textfield'
        label={t('modalTab3Input3')}
        multiline
        required
        value={values.message}
        onChange={handleChange('message')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MessageIcon />
            </InputAdornment>
          ),
        }}
      />
      <br/> 
      <br/> 
      <Button onClick={handleSubmit} className='btn-modal-devis-send'>{t('modalTab3Btn')}</Button>
      </div>
        </DialogContent>
        }
        { pageSuccess && 
        <div className="container">
          <FadeIn>
            <div>
                <p className="text-center">{t('modalAlert')}</p>
                <Lottie options={defaultOptions} height={320} width={120} />
            </div>
          </FadeIn>
        </div>
        }
      </Dialog>
    </div>
  );
}

export default withTranslation('app')(ModalDevis)
