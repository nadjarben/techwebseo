import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {
  setGoogleTags() {
    if (publicRuntimeConfig.PRODUCTION) {
      return {
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-145136006-1');
        `
      };
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-145136006-1" />
          <link rel="stylesheet" href="/static/css/styles.css" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/images/icons/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/static/images/icons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/images/icons/favicon-16x16.png"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff" />
          <React.Fragment>
            <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          </React.Fragment>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;