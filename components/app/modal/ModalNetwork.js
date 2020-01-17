import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import facebook from '../../../public/static/images/facebook-box.png'
import insta from '../../../public/static/images/instagram.png'
import ShareIcon from '@material-ui/icons/Share';
import { withTranslation } from '../../../18n';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ModalNetwork({ t }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ShareIcon onClick={handleClickOpen} />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="alert-dialog-slide-title" className="modal-title text-center">{t('modalDevisLocali')}
        <br/>        
        </DialogTitle>
        <DialogContent className="modal-devis">
            <br/>
            <br/>
            <div className="container">
              
            <a href='https://www.facebook.com/SidewalkMedias/'>
          <Button
            className="btn-modal-devis"
            >
              <img src={facebook} alt="contact-plumber" />
            </Button>
            </a>
            <br/>
            <br/>
            <a href='https://www.instagram.com/sidewalkmedias/?hl=en"'>
            <Button
            className="btn-modal-devis"
            >
                <img src={insta} alt="wa-plubmber" />
            </Button>
            </a>            
            <br/>
            <br/>         
        </div>
        </DialogContent>                
      </Dialog>
    </div>
  );
}

export default withTranslation('app')(ModalNetwork)
