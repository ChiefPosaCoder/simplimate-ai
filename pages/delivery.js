import fetch from 'node-fetch'

import React, { Component } from 'react'


import Backbone from './components/Backbone'
import Footer from './components/Footer'
import PageDelivery from './components/PageDelivery'


const Delivery = props => {

    const [params, setParams] = React.useState({})
    console.log(`params`, params)

    React.useEffect(() => {

        const fetchData = async () => {

            const API = process.env.API
            const response = await fetch(`${API}/api/data`, {
                method: 'post',
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    types: ['header', 'footer', 'articles', 'social'],
                }),
            })

            if (response.status !== 200) {
                return
            }


            let { header = {}, footer = {}, articles = {}, social = {} } = {
                ...(await response.json()),
            }

            setParams({
                ...header,
                ...footer,
                ...articles,
                ...social,
            })

        }

        fetchData()


    }, [])

    const { delivery = {}, footerCopyright, footerMenu, social } = { ...params }

    return (
        <Backbone title={`Simplimate: Digital Project Delivery`}>
            <PageDelivery {...params} {...props} article={delivery} />
            <Footer
                margin={`6em 0 0 0`}
                footerCopyright={footerCopyright}
                footerMenu={footerMenu}
                social={social}
            />
        </Backbone>
    )

}


export default Delivery
