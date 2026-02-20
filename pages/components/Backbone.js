import Head from 'next/head'
import React, {Component} from 'react'
import { Helmet } from 'react-helmet'


const Backbone = props => {
  const {children, title = 'Simplimate'} = props

  return (
    <div>

    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={title}
      meta={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        { property: 'og:title', content: `${title}` },
      ]}
    />
    

      {children}
    </div>
  )
}

export default Backbone
