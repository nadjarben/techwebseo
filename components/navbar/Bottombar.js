import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ModalDevis from '../app/modal/ModalDevis';
import ModalNetwork from '../app/modal/ModalNetwork';
import { withTranslation, Link } from '../../18n';


const useStyles = makeStyles({
  root: {
    width: '100%',
    bottom: 0,
    position: 'fixed',
    backgroundColor: 'black'
  },
});

function Bottombar({ t }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
        <BottomNavigationAction style={{color:'white'}} label={t('navbarBottomHome')} icon={<Link href="/"><HomeRoundedIcon /></Link>} />
      <BottomNavigationAction style={{color:'white'}} label={t('navbarBottomContact')} icon={<ModalDevis />} />
      <BottomNavigationAction style={{color:'white'}} label={t('navbarBottomNetwork')} icon={<ModalNetwork />} />
    </BottomNavigation>
  );
}

export default withTranslation('app')(Bottombar)
