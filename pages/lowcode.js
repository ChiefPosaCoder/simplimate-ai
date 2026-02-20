import fetch from 'node-fetch'

import React, {Component} from 'react'

import Backbone from './components/Backbone'

import Footer from './components/Footer'

import PageLowcode from './components/PageLowcode'


class Lowcode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {lowcode = {}, footerCopyright, footerMenu, social} = this.props
    return (
      <Backbone title={`Simplimate: Lowcode`}>
        <PageLowcode {...lowcode} {...this.props} />
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

Lowcode.getInitialProps = async function() {
  const API = process.env.API
  const response = await fetch(`${API}/api/data`, {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Access-Control-Allow-Origin': '*', 
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      types: ['header', 'footer', 'lowcode', 'social'],
    }),
  })

  if (response.status !== 200) {
    return 
  }

  let {header = {}, footer = {}, articles = {}, social = {}, lowcode = {}} = {
    ...(await response.json()),
  }

  return {
    ...header,
    ...footer,
    ...lowcode,
    ...social,
  }
}

export default Lowcode
