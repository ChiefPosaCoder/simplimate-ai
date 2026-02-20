import HeaderBlock from './HeaderBlock'
import React, { Component } from 'react'
import { Grid, ButtonBase, Typography } from '@material-ui/core'
import styled from 'styled-components'


import Article from './Article'
import Billboard from './Billboard'
import ContactUsForm from './ContactUsForm'

const A = {}

A.Root = styled(Grid)`
  && {
    background-color: #fff;
  }
`

const PageContactUs = props => {
  const { menu, content, contacts, banner } = props
  return (
    <div>
      <HeaderBlock color={`#4A4A4A`} background={`transparent`} menu={menu} />

      <Billboard stories={[]} height={`650px`} banner={banner} />


      <Grid container spacing={10}>
        <Grid item xs={12} sm={6}>
          <ContactUsForm
            title={`Get in touch with our team`}
            subtitle={`Fill out the form and we will get back to you as soon as possible.`}
            margin={`5em 0 2em 6em`}
            marginxs={`2em 1em 0 1em`}
            width={`100%`}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Article
            padding={`0 0 0 0`}
            margin={`5em 0 0 5em`}
            marginxs={`1em 0 0 1em`}
            {...contacts}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default PageContactUs
