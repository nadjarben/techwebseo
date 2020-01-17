import React from 'react';
import { useRouter } from 'next/router';
import flagfr from '../../public/static/images/flag-fr.png';
import flagen from '../../public/static/images/flag-en.png';
import flaghe from '../../public/static/images/flag-he.png';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import { i18n, Link, withTranslation } from '../../18n'


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    backgroundColor: 'transparent'
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


const LocaleSwitcher = ({ t }) => {
    const router = useRouter();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [toggle, setToggle] = React.useState(false);

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const toggleDrop = () => {
      setToggle(!toggle)
    }
    
    return (
      <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        style={{backgroundColor:'transparent'}}
        onClick={handleClick}
      >
        { i18n.language === 'en' && (
            <img src={flagen} alt="flagen" width="25px" />
          )}
        { i18n.language === 'fr' && (
            <img src={flagfr} alt="flagfr" width="25px" />
        )}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem  style={{backgroundColor:'white'}}>
          <ListItem>
            <div onClick={() => i18n.changeLanguage('en')} >
              <img src={flagen} alt="flagen" width="30px" />
                English
            </div>
          </ListItem>
          <ListItem>
          <div onClick={() => i18n.changeLanguage('fr')} >
              <img src={flagfr} alt="flagfr" width="30px" />
                Français
            </div>
          </ListItem>
        </StyledMenuItem>
        </StyledMenu>        
      </div> 
      )
};
export default LocaleSwitcher;
