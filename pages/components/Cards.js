import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import {Grid, ButtonBase, Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core'
import Link from 'next/link'

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
    height: 100%;
    background: ${({ secondary }) =>
    secondary === 'true' ? `#f3f3f3ff` : `#ffffff`};
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15);
    }

    ${mediaGrid(`sm`)} {
      height: auto;
    }
  }
`

const ParagraphCustom = styled.div`
  && {
    padding: 0;
    text-align: left;
    p {
      font-family: Poppins, sans-serif;
      font-size: 0.95em;
      color: rgba(0, 0, 0, 0.7);
      line-height: 1.5;
      margin: 0;
    }
  }
`

const CardTitle = styled(Typography)`
  && {
    font-family: Poppins, sans-serif;
    font-size: 1.15em;
    line-height: 1.3;
    font-weight: 600;
    color: #003a5d;
    text-align: left;
    padding-top: 1em;
    padding-bottom: 0.5em;
    
    a {
      color: #003a5d;
      text-decoration: none;
    }
  }
`

const CardContentStyled = styled(CardContent)`
  && {
    text-align: left;
    padding: 1em;
    &:last-child {
      padding-bottom: 1.5em;
    }
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
    <Grid key={index} item xs={12} sm={6} md={4} lg={2} xl={2}>
      <CardStyled secondary={secondary}>
        <CardActionArea href={url} disabled={url ? null : true}>  
          <CardMedia
            component="img"
            height="140"
            image={image}
            style={{ objectFit: 'cover', width: '100%' }}
          />
          <CardContentStyled>
            <CardTitle
              secondary={secondary}
              align="left"
              gutterBottom
              variant="h5"
              component="h3"
            >
              {title}
            </CardTitle>
            <ParagraphCustom>
              <span dangerouslySetInnerHTML={{ __html: description }} />
            </ParagraphCustom>
          </CardContentStyled>
        </CardActionArea>
      </CardStyled>
    </Grid>
  );
}

const Cards = ({ cards = [], secondary }) => {
  return (
    <Root secondary={secondary}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        {cards.map((item, index) => (
          <CardItem secondary={secondary} key={index} index={index} {...item} />
        ))}
      </Grid>
    </Root>
  )
}

export default Cards
