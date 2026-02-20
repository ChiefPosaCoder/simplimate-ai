import React, {Component} from 'react'
import {Grid} from '@material-ui/core'
import styled from 'styled-components'

const Block = styled(props => <Grid {...props} />)`
  && {
    position: relative;
  }
`

const Poster = props => {

  const {children, height = '100vh'} = props

  return (
    <Block
      container
      height={`100vh`}
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'stretch'}
      spacing={0}
    >
      <React.Fragment>{children}</React.Fragment>
    </Block>
  )
}

export default Poster
