import fetch from 'node-fetch'
import React from 'react'
import Backbone from './components/Backbone'
import Footer from './components/Footer'
import PageContactUs from './components/PageContactUs'


 const ContactUs = (props) => {

  const [params, setParams] = React.useState({})

  const API = process.env.API || ''


  React.useEffect(() => {

    const fetchData = async () =>  {

      const response = await fetch(`${API}/api/data`, {
        method: 'post',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Access-Control-Allow-Origin': '*', 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          types: ['header', 'footer', 'articles', 'contactus', 'social'],
        }),
      })
      
      if (response.status !== 200) {
        return 
      }


      let {header = {}, footer = {}, articles = {}, contactus = {}, social = {}} = {
        ...(await response.json()),
      }
      
      
      setParams({
        ...header,
        ...footer,
        ...articles,
        ...social,
        contactus,
      })
      
    }

    fetchData()
  

  }, [])


  const {contactus, footerCopyright, footerMenu = [], social} = params
  const {banner, contacts} = contactus || {}
  
  return (
    <Backbone title={`Simplimate: About`}>
      <PageContactUs
        {...params}
        {...props}
        content={contactus}
        contacts={contacts}
        banner={banner}
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

export default ContactUs