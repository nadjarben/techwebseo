import React, { useState } from 'react';
import { APP_NAME } from '../../config';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import NavItems from './NavItems';
import NavProfile from './NavProfile';
import Search from '../blog/Search';
import SearchButton from './SearchButton';
import '../.././node_modules/nprogress/nprogress.css';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const [displaySearch, setDisplaySearch] = useState(false)
  const title = `< ${APP_NAME} `
  const slash = <span className="nav-title-slash">/</span>
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar className="app-bar">
          <Toolbar>
            <NavItems />
              <div className="nav-space" />
              <Link href="/">
                <Typography variant="h6" className="nav-title"><a>{title}{slash}></a></Typography>
              </Link>
            <div className="nav-space" />
            <div onClick={() => setDisplaySearch(!displaySearch)}>
              <SearchButton />
            </div>
            <NavProfile />
          </Toolbar>
          {( displaySearch && <Search />)}
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}