import React, {Component} from 'react'
import posed from 'react-pose'
import {Grid, ButtonBase, Paper} from '@material-ui/core'
import styled from 'styled-components'
import ContainerAnimation from './ContainerAnimation'
import Link from 'next/link'
import Carousel from './Carousel'

const map = {
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}
const $browserContext = 16

const mediaGrid = type => () => `@media (max-width: ${map[type] - 1}px)`
const rem = ($pixels, $context = $browserContext) =>
  `${(+$pixels / $context) * 1}em`
const em = ($pixels, $context = $browserContext) =>
  `${(+$pixels / $context) * 1}em`

const A = {}
A.Link = styled(Link)`
  && {
    font-family: 'Gotham Light', sans-serif;
    display: inline-block;
    color: ${props => props.color};
    cursor: pointer;
    margin: 0;
    text-decoration: none;
    font-size: 1.15em;

    &:hover {
      opacity: 0.8;
    }
    a {
      font-size: 1.15em;
      font-family: 'Gotham Light', sans-serif;
      text-decoration: none;
    }
  }
`
const BlueButton = styled(ButtonBase)`
  && {
    font-family: 'Gotham Medium', sans-serif;
    height: 46px;
    font-size: 1.15em;
    font-style: normal;
    font-stretch: normal;
    text-align: center;
    color: #fff;
    background: rgb(0, 90, 144);
    font-weight: 600;
    margin: 3em 1em auto 0;
    padding: ${rem(0)} ${rem(15)};
  }
`

const Root = styled.div`
  height: ${({height}) => height || 'auto'};
  position: relative;
  margin-top: 100px;
  

  ${mediaGrid(`xl`)} {
    height: ${({height}) => height+'px' || 'auto'};
  }
  ${mediaGrid(`lg`)} {
    height: ${({height}) => height+'px' || 'auto'};
  }
  ${mediaGrid(`md`)} {
    height: ${({height}) => height/1.5+'px' || 'auto'};
  }
  ${mediaGrid(`sm`)} {
    height: ${({height}) => height/1.5+'px' || 'auto'};
  }
  
`


const Slogan = styled.div`
  && {
    z-index: 1;
    position: relative;
    text-align: center;
    font-size: 3.5em;
    line-height: 1.1;
    color: #fff;
    font-family: 'Paytone One', sans-serif;

    ${mediaGrid(`sm`)} {
      font-size: 2em;
      line-height: 1;
      margin-left: 1em;
      margin-right: 1em;
    }
  }
`

const Subslogan = styled.div`
  && {
    text-align: center;
    font-size: 1.7em;
    line-height: 1.321;
    font-family: 'Gotham Light', sans-serif;
    margin-top: 1.5em;
    color: #fff;
    ${mediaGrid(`sm`)} {
      font-size: 1.2em;
      line-height: 1;
      margin-left: 1em;
      margin-right: 1em;
    }
  }
`


const Row = styled(Grid)`
  && {
    text-align: center;
    position: relative;
    z-index: 1;
    height: ${({height}) => height || 'auto'};
  }
`

const ImageFilter = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  filter: brightness(${({brightness}) => brightness || '100%'});

  ${mediaGrid(`xl`)} {
    background-size: cover;
    @media only screen and (orientation: portrait) {
      background-size: cover;
    }
  }
  ${mediaGrid(`lg`)} {
    background-size: cover;
    @media only screen and (orientation: portrait) {
      background-size: cover;
    }
  }
  ${mediaGrid(`md`)} {
    background-size: cover;
  }
  ${mediaGrid(`sm`)} {
    background-size: cover;
  }
`

const Tagline = styled(Grid)`
  z-index: 1;
  height: ${({height}) => height || 'auto'};

  ${mediaGrid(`xl`)} {
    height: ${({height}) => height+'px' || 'auto'};
  }
  ${mediaGrid(`lg`)} {
    height: ${({height}) => height+'px' || 'auto'};
  }
  ${mediaGrid(`md`)} {
    height: ${({height}) => height/1.5+'px' || 'auto'};
  }
  ${mediaGrid(`sm`)} {
    height: ${({height}) => height/1.5+'px' || 'auto'};
  }


  `


const StyledBg = styled.div`
  height: ${({height}) => height+'px' || 'auto'};
  width: 100%;
  position: absolute;

  ${mediaGrid(`xl`)} {
    height: ${({height}) => height+'px' || 'auto'};
  }
  ${mediaGrid(`lg`)} {
    height: ${({height}) => height+'px' || 'auto'};
  }
  ${mediaGrid(`md`)} {
    height: ${({height}) => height/1.5+'px' || 'auto'};
  }
  ${mediaGrid(`sm`)} {
    height: ${({height}) => height/1.5+'px' || 'auto'};
  }

`


const Banner = ({height, brightness, url, slogan}) => {

  return (
    <StyledBg height={height} pose={`show`} spacing={0}>
      {url ? <ImageFilter
        brightness={brightness}
        style={{backgroundImage: `url(${url})`}}
      /> : null}
      <Tagline
        height={height}
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <Row item xs={12} sm={12} md={12} height={`auto`}>
          <Slogan
            dangerouslySetInnerHTML={{
              __html: slogan,
            }}
          />
        </Row>
      </Tagline>
    </StyledBg>
  )
}
 


function Item({item}){
  const {slogan, subslogan, url, button, button2, button3, brightness} = item
    return (
        <Paper square={true} style={{backgroundImage: `url(${url})`, height: `650px`}}>
         
         <Grid
        height={`650px`}
        container
        alignItems="center"
        justifyContent="center"
      >
            <Grid item style={{textAlign: `center`}}>

              <Slogan
                  dangerouslySetInnerHTML={{
                    __html: slogan,
                  }}
                />
                <Subslogan
                  dangerouslySetInnerHTML={{
                    __html: subslogan,
                  }}
                />

                {button ? (
                    <BlueButton>
                      <A.Link href={`${button?.url}`}>
                        <span style={{color: `#fff`}} >{button?.title}</span>
                      </A.Link>
                    </BlueButton>
                  ) : null}
                  {button2 ? (
                    <BlueButton>
                      <A.Link href={`${button2?.url}`}>
                        <span style={{color: `#fff`}} >{button2?.title}</span>
                      </A.Link>
                    </BlueButton>
                  ) : null}
                  {button3 ? (
                    <BlueButton>
                      <A.Link href={`${button3?.url}`}>
                        <span style={{color: `#fff`}} >{button3?.title}</span>
                      </A.Link>
                    </BlueButton>
                  ) : null}
                  
            </Grid>
        </Grid> 

       

        </Paper>
    )
}


const BgList = ({
  stories = [],
  height,
  banner = {},
}) => {

  return stories.length > 0 ? <Carousel>{stories.map( (item, i) => <Item key={i} item={item} /> )}</Carousel> : (
    <Banner {...banner} height={height} />
  )
}

const Billboard = props => {
  const {
    stories,
    banner = {},
    height,
  } = props

  return (
    <Root container height={height} justifyContent="center" spacing={0}>
        <BgList
                banner={banner}
                height={height}
                stories={stories}
              />
    </Root>
  )
}

export default Billboard
