import React from 'react';
import { Link } from '../../18n';
import { signout, isAuth } from '../../actions/auth';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import { withTranslation, Router } from '../../18n';



 function NavItems({ t }) {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className='nav-item'
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link href="/"><a className="nav-items"><ListItem button>{t('navbarHome')}</ListItem></a></Link>
        <Link href="/blog"><a className="nav-items"><ListItem button>{t('navbarBlog')}</ListItem></a></Link>
        {isAuth() && isAuth().role === 0 && (
        <Link href="/user"><a className="nav-items"><ListItem button>{t('navbarAccount')}</ListItem></a></Link>
        )}
        {isAuth() && isAuth().role === 1 && (
          <Link href="/admin">
          <a className="nav-items"><ListItem button>DASHBOARD</ListItem></a>
          </Link>
        )}
            {!isAuth() && (
              <React.Fragment>
                <ListItem button>
                  <Link href="/signin">
            <a className='nav-items'>{t('navbarSignin')}</a>
                  </Link>
                </ListItem>

                <ListItem button>
                  <Link href="/signup">
                    <a className='nav-items'>{t('navbarSignup')}</a>
                  </Link>
                  </ListItem>
              </React.Fragment>

    )}
    {isAuth() && (
              <ListItem button>
                <a className='nav-items'
                onClick={() => signout(() => Router.replace(`/signin`)
                )}>
                  {t('navbarSignout')}
                </a>
              </ListItem>
            )}         
      </List>
    </div>
  );

  return (
    <div>
        <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer('left', true)}
        >
            <MenuIcon />
        </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

export default withTranslation('app')(NavItems)
