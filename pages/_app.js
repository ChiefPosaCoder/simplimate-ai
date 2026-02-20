import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import theme from '../theme';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  
  * {
    box-sizing: border-box;
  }
  
  html, body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 16px;
    color: #333;
    background: #fff;
  }
  
  a {
    color: rgb(0,90,144);
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
`

export default function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <React.Fragment>
      <GlobalStyle />
      <Head>
        <title>Simplimate AI | AI Consulting for Small Business</title>
        <link href="/favicon.ico" rel="icon" />
        <meta content="minimum-scale=1, initial-scale=1, width=device-width" name="viewport" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Paytone+One&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
