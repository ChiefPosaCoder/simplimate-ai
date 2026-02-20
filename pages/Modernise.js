import fetch from 'node-fetch'

import React, {Component} from 'react'

import Backbone from './components/Backbone'

import Footer from './components/Footer'

import PageModernise from './components/PageModernise'


class Modernise extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {Modernise = {}, footerCopyright, footerMenu, social} = this.props
    return (
      <Backbone title={`Simplimate: Modernise`}>
        <PageModernise {...Modernise} {...this.props} />
        <Footer
          margin={`6em 0 0 0`}
          footerCopyright={footerCopyright}
          footerMenu={footerMenu}
          social={social}
        />
      </Backbone>
    )
  }
}

Modernise.getInitialProps = async function() {
  const API = process.env.API || ''
  const response = await fetch(`${API}/api/data`, {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Access-Control-Allow-Origin': '*', 
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      types: ['header', 'footer', 'Modernise', 'social'],
    }),
  })

  if (response.status !== 200) {
    return 
  }

  let {header = {}, footer = {}, articles = {}, social = {}, Modernise = {}} = {
    ...(await response.json()),
  }

  return {
    ...header,
    ...footer,
    ...Modernise,
    ...social,
  }
}

export default Modernise
