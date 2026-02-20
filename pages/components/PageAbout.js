import HeaderBlock from './HeaderBlock'
import React from 'react'
import {Grid} from '@material-ui/core'
import styled from 'styled-components'

import Article from './Article'
import Billboard from './Billboard'
import Team from './Team'

const A = {}

A.Root = styled(Grid)`
  && {
    background-color: #fff;
  }
`

const PageAbout = props => {
  const {menu, article = {}, members= [], membersTitle = ''} = props
  const {banner} = article
  return (
    <div>
      <HeaderBlock color={`#4A4A4A`} background={`transparent`} menu={menu} />

      <Billboard stories={[]} height={`650px`} banner={banner} />

   
      <Article
        textAlign={`relative`}
        padding={`4em 6em 4em 6em`}
        paddingxs={`2em 1em 2em 1em`}
        margin={`1em 0 0 0`}
        marginxs={`1em 1em 0 1em`}
        {...article}
      />
      <Team members={members} title={membersTitle} />
    </div>
  )
}

export default PageAbout
