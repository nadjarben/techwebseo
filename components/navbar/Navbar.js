import React from 'react';
import { Link } from '../../18n';
import { signout, isAuth } from '../../actions/auth';
import LocaleSwitcher from './LocaleSwitcher';
import { AppBar, Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import NavItems from './NavItems';
import logosw from '../../public/static/images/logo-sidewalk-white.png';
import { withTranslation, Router } from '../../18n';


const styleSheet = {
  list : {
    width : 250,
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },

  sideBarIcon : {
    padding : 0,
    cursor : "pointer",
    color: 'orange',
  }
}

function Navbar({ t }) {
  const [width, setWidth] = React.useState(null)
    if (process.browser) {
      React.useEffect(() => setWidth(document.children[0].clientWidth), [
      document.children[0].clientWidth
      ])
    }
  return (
    <React.Fragment>
      { width < 600 ? (
        <AppBar position="static" style={{backgroundColor:'black'}} className="appbar">
        <Toolbar>
            <NavItems />
            <Typography variant="h6">
              <div className="text-center">
                <Link href="/">
                  <a><img src={logosw} alt="logo sidewalk" className="logo-sw-header" /></a>
                </Link>
              </div>
            </Typography>      
            <LocaleSwitcher />
          </Toolbar>
        </AppBar>
      ) : (
      <React.Fragment>
        <AppBar position="static" style={{backgroundColor:'black'}}>
          <div className='container'>
              <div className='row justify-content-center'>
            <Toolbar style={{color:'white', marginTop:''}}>
            
        <Link href="/"><a className="nav-items-lg"><Typography button>{t('navbarHome')}</Typography></a></Link>
        <Link href="/blog"><a className="nav-items-lg"><Typography button>{t('navbarBlog')}</Typography></a></Link>
        {isAuth() && isAuth().role === 0 && (
        <Link href="/user"><a className="nav-items-lg"><Typography button>{t('navbarAccount')}</Typography></a></Link>
        )}
        {isAuth() && isAuth().role === 1 && (
          <Link href="/admin">
          <a className="nav-items-lg"><Typography button>DASHBOARD</Typography></a>
          </Link>
        )}
            {!isAuth() && (
              <React.Fragment>
                <Typography>
                  <Link href="/signin">
            <a className='nav-items-lg'>{t('navbarSignin')}</a>
                  </Link>
                </Typography>

                <Typography>
                  <Link href="/signup">
                    <a className='nav-items-lg'>{t('navbarSignup')}</a>
                  </Link>
                  </Typography>
              </React.Fragment>

    )}
    {isAuth() && (
              <Typography button>
                <a className='nav-items-lg'
                onClick={() => signout(() => Router.replace(`/signin`)
                )}>
                  {t('navbarSignout')}
                </a>
              </Typography>
            )}         
              <div style={{position:'fixed', right:'0'}}>
                <LocaleSwitcher />
              </div>
            </Toolbar>
            </div>
        </div>
      </AppBar>
      </React.Fragment>
      )}
      </React.Fragment>
  );
}

export default withTranslation('app')(Navbar)

