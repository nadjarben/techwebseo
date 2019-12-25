import React from 'react';
import Link from 'next/link';
import { signout, isAuth } from '../../actions/auth';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';


export default function TemporaryDrawer() {
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
        <Link href="/"><a className="nav-items"><ListItem button>ACCUEIL</ListItem></a></Link>
        <Link href="/blogs"><a className="nav-items"><ListItem button>ARTICLES</ListItem></a></Link>
        <Link href="/contact"><a className="nav-items"><ListItem button>CONTACT</ListItem></a></Link>
        {isAuth() && isAuth().role === 0 && (
          <Link href="/user"><a className="nav-items"><ListItem button>DASHBOARD</ListItem></a></Link>
        )}
        {isAuth() && isAuth().role === 1 && (
          <Link href="/admin">
          <a className="nav-items"><ListItem button>DASHBOARD</ListItem></a>
          </Link>
        )}
        
          <a href="/user/crud/blog" className="nav-items"><ListItem button>ECRIRE UN ARTICLE</ListItem></a>
          
      </List>
      <Divider />
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