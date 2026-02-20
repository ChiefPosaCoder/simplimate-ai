import fetch from 'node-fetch'

import React, {Component} from 'react'

import Backbone from './components/Backbone'

import Footer from './components/Footer'

import PageService from './components/PageService'


class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {services = {}, footerCopyright, footerMenu, social} = this.props
    return (
      <Backbone title={`Simplimate: Services`}>
        <PageService {...services} {...this.props} />
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

Services.getInitialProps = async function() {
  const API = process.env.API
  const response = await fetch(`${API}/api/data`, {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Access-Control-Allow-Origin': '*', 
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      types: ['header', 'footer', 'services', 'social'],
    }),
  })

  if (response.status !== 200) {
    return 
  }

  let {header = {}, footer = {}, articles = {}, social = {}, services = {}} = {
    ...(await response.json()),
  }

  return {
    ...header,
    ...footer,
    ...services,
    ...social,
  }
}

export default Services
