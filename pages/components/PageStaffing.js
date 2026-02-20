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

const PageStaffing = props => {
    const { menu, article = {}, category1Resources = [], category1Title = '', category2Resources = [], category2Title = '', category3Resources = [], category3Title = '', resourcingSummary = [] } = props
    const { banner } = article
    return (
        <div>
            <HeaderBlock color={`#4A4A4A`} background={`transparent`} menu={menu} />

            <Billboard stories={[]} height={`650px`} banner={banner} />
            <Article
                textAlign={`left`}
                {...resourcingSummary}
                margin={`6em 2em 0 4em`}
                marginxs={`4em 1em 0 1em`}
            />
            <Resources resources1={category1Resources} title1={category1Title} resources2={category2Resources} title2={category2Title} resources3={category3Resources} title3={category3Title} />
        </div>
    )
}

export default PageStaffing
