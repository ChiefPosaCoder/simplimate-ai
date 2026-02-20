import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import theme from '../theme';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Gotham Light';
    src: url('/fonts/Gotham-Light.eot');
    src: url('/fonts/Gotham-Light.eot?#iefix')
        format('embedded-opentype'),
      url('/fonts/Gotham-Light.woff') format('woff'),
      url('/fonts/Gotham-Light.ttf') format('truetype'),
      url('/fonts/Gotham-Light.svg#/fonts/Gotham-Light')
        format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gotham Medium';
    src: url('/fonts/Gotham-Medium.eot');
    src: url('/fonts/Gotham-Medium.eot?#iefix')
        format('embedded-opentype'),
      url('/fonts/Gotham-Medium.woff') format('woff'),
      url('/fonts/Gotham-Medium.ttf') format('truetype'),
      url('/fonts/Gotham-Medium.svg#gotham-medium')
        format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Paytone One';
    src: url('/fonts/PaytoneOne.eot');
    src: url('/fonts/PaytoneOne.eot?#iefix')
        format('embedded-opentype'),
      url('/fonts/PaytoneOne.woff') format('woff'),
      url('/fonts/PaytoneOne.ttf') format('truetype'),
      url('/fonts/PaytoneOne.svg#PaytoneOne') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  html, body {
  font-family: 'Gotham Light', sans-serif;
  height: 100%;
  margin: 0;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-decoration: none;
  font-size: 16px;
  color: #9b9b9b;

  }
  a {
    color: rgb(0,90,144);
    &:hover {
      text-decoration:none;
    }
  }

`



export default function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <React.Fragment>
      <GlobalStyle />
      <Head>
        <title>Simplimate</title>
        <link href="/favicon.ico" rel="icon" />
        <meta content="minimum-scale=1, initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
