import React from 'react'


import Backbone from './components/Backbone'
import Footer from './components/Footer'
import PageMain from './components/PageMain'

const Index = props => {

  const [params, setParams] = React.useState({})

  React.useEffect(() => {

    const fetchData = async () => {

      const API = process.env.API
      const stringify = JSON.stringify({
        types: [
          'header',
          'stories',
          'footer',
          'aboutus',
          'projects',
          'members',
          'articles',
          'social',
        ],
      })
      const response = await fetch(`${API}/api/data`, {
        method: 'post',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Access-Control-Allow-Origin': '*', 
          'Content-Type': 'application/json',
        },
        body: stringify,
      })

      if (response.status !== 200) {
        return 
      }


      let {
        header = {},
        stories = {},
        footer = {},
        aboutus = {},
        projects = {},
        members = {},
        articles = {},
        social = {},
      } = {
        ...(await response.json()),
      }

      setParams({
        ...header,
        ...stories,
        ...footer,
        ...aboutus,
        ...projects,
        ...members,
        ...articles,
        ...social,
        storyId: 0,
      })

    
  }


    fetchData()
          

  }, [])


  const {footerCopyright, footerMenu, social} = params || {}


  return (
    <Backbone title={`Simplimate | Low-Code Automation`}>
      <PageMain
        {...props}
        {...params}
      />
      <Footer
        margin={`6em 0 0 0`}
        footerCopyright={footerCopyright}
        footerMenu={footerMenu}
        social={social}
      />
    </Backbone>
  )

}


export default Index
