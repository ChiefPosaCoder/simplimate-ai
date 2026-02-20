import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import {Grid, ButtonBase, Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core'
import Link from 'next/link'
import CardActions from '@material-ui/core'

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

const Root = styled.div`
  && {
    background: ${({ secondary }) =>
    secondary === 'true' ? `#f3f3f3ff` : `none`};
    padding: ${({ secondary }) => (secondary === 'true' ? `0 5em 0 5em` : `0`)};

    ${mediaGrid(`sm`)} {
      padding: ${({ secondary }) =>
    secondary === 'true' ? `2em 1em 0 1em` : `0`};
    }
  }
`


const Paragraph = styled(Typography)`
  && {
    font-weight: 300;
    font-size: 13px;
    letter-spacing: normal;
    color: ${({ colortext }) => colortext || '#1f231f'};
    line-height: 2;
    padding: 35px 0;
  }
`
const CardStyled = styled(Card)`
  && {
    height: ${({ secondary }) => (secondary === 'true' ? `auto` : `auto`)};
    background: ${({ secondary }) =>
    secondary === 'true' ? `#f3f3f3ff` : `none`};

    border-radius: ${({ secondary }) => (secondary === 'true' ? `0` : `4px`)};
    box-shadow: ${({ secondary }) =>
    secondary === 'true'
      ? `none`
      : `0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)`};

    ${mediaGrid(`sm`)} {
      height: ${({ secondary }) => (secondary === 'true' ? `auto` : `auto`)};
    }
  }
`

const ParagraphCustom = styled(Paragraph)`
  && {
    height: ${({secondary}) => (secondary === 'true' ? `auto` : `150px`)};

    padding: 0;
    text-align: centre;
    p {
      font-family: 'Gotham Light', sans-serif;
      font-size: 1.4em;
      color: rgba(0, 0, 0, 0.7);
      line-height: 1.1;
      margin: 0 0 0 0;
    }

    ${mediaGrid(`sm`)} {
      height: ${({ secondary }) => (secondary === 'true' ? `auto` : `auto`)};
      p {
        margin: 0 0 1em 0;
      }
    }
  }
`

const CardTitle = styled(Typography)`
  && {
    min-height: ${({ secondary }) => (secondary === 'true' ? `80px` : `100px`)};
    font-family: ${({ secondary }) =>
    secondary
      ? `'Gotham Medium', sans-serif`
      : `'Gotham Medium', sans-serif`};

    font-size: 1.6em;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ secondary }) => (secondary ? `rgba(0,0,0,0.7)` : `#003a5d`)};

    letter-spacing: normal;
    text-align: centre;
    a {
      color: ${({ secondary }) => (secondary ? `rgba(0,0,0,0.7)` : `#003a5d`)};
      text-decoration: none;
      &:active {
        color: #003a5d;
      }
    }

    ${mediaGrid(`sm`)} {
      min-height: ${({ secondary }) => (secondary === 'true' ? `auto` : `auto`)};
    }
  }
`

const OutlinedButton = styled(ButtonBase)`
  && {
    font-family: 'Gotham Medium', sans-serif;
    height: 46px;
    font-size: 1.15em;
    font-style: normal;
    font-stretch: normal;
    text-align: center;
    color: rgb(0, 90, 144);
    border: 3px solid rgb(0, 90, 144);
    font-weight: 600;
    padding: ${rem(0)} ${rem(25)};
    margin: auto;
    text-docoration:none;
  }
`

const CardContentStyled = styled(CardContent)`
  && {
    text-align: center;
  }
`
const CardItem = ({
  title,
  image,
  id,
  description,
  index,
  button = {},
  margin,
  secondary,
  url,
}) => {
  return (
    <Grid key={index} item xs={12} sm={6} md={3} lg={3} xl={2}>
      <CardStyled secondary={secondary}>
      <CardActionArea href={url} disabled={url ? null : true}>  
      <CardContentStyled>
        <CardMedia
        component="img"
        height="105"
        image={image}
        style={{ objectFit: 'cover', width: '100%' }}
        
      />
          <CardTitle
            secondary={secondary}
            align="center"
            gutterBottom
            variant="h5"
            component="h2"
          >
          <a>{title}</a>
          </CardTitle>
          <ParagraphCustom 
            align="center" paragraph
            
            >
            <span style={{fontSize: `1em`}}
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </ParagraphCustom>
          {button.title ? (
            <OutlinedButton align="center" variant="h5" component="h5">
              <Link href={`${button.url}`} legacyBehavior>
                <span>{button.title}</span>
              </Link>
            </OutlinedButton>
          ) : null}
        </CardContentStyled>
        </CardActionArea>

      </CardStyled>
    </Grid >
  );
}

const Cards = ({ cards = [], secondary }) => {
  return (
    <Root secondary={secondary}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={secondary === 'true' ? 0 : 2}
      >
        {/* [0,8,16,24,32,40] */}
        {cards.map((item, index) => (
          <CardItem secondary={secondary} key={index} index={index} {...item} />
        ))}
      </Grid>
    </Root>
  )
}

export default Cards
