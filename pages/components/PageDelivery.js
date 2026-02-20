import HeaderBlock from './HeaderBlock'
import React from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'

import Article from './Article'
import Billboard from './Billboard'
import Resources from './Resources'

const A = {}

A.Root = styled(Grid)`
  && {
    background-color: #fff;
  }
`

const PageDelivery = props => {
    const { menu, article = {} } = props
    const { banner } = article
    return (
        <div>
            <HeaderBlock color={`#4A4A4A`} background={`transparent`} menu={menu} />

            <Billboard stories={[]} height={`650px`} banner={banner} />
            <Article
                textAlign={`left`}
                {...article}
                margin={`8em 6em 0 6em`}
                marginxs={`4em 1em 0 1em`}
            />
        </div>
    )
}

export default PageDelivery