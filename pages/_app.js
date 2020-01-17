import React from 'react'
import App from 'next/app'
import { appWithTranslation } from '../18n'
import CssBaseline from '@material-ui/core/CssBaseline';
import '../public/static/styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


class MyApp extends App {
  componentDidMount () {
    const jssStyles = document.querySelector ('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode.removeChild (jssStyles);
    }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <CssBaseline />
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default appWithTranslation(MyApp)