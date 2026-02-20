import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Cards from './Cards'

const map = {
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}
const $browserContext = 16

const mediaGrid = type => () => `@media (max-width: ${map[type] - 1}px)`


const Root = styled.div`
  && {
    margin: ${({margin}) => margin || '0'};
    height: auto;

    ${mediaGrid(`md`)} {
      height: auto;
    }

    ${mediaGrid(`sm`)} {
      height: auto;
      margin: ${({marginxs}) => marginxs || '0'};
    }
  }
`
const Title = styled(Typography)`
  && {
    color: rgba(0, 0, 0, 0.9);
    font-weight: 500;
    font-size: 2.7em;
    font-family: 'Paytone One', sans-serif;
    line-height: 1.1;

    margin-bottom: 1em;
  }
`

const Lowcode = ({projects = [], title, margin, marginxs}) => (
  <Root margin={margin} marginxs={marginxs}>
    <Title component="h2" variant="h2" align="center" gutterBottom>
      {title}
    </Title>

    <Cards secondary="false" cards={projects} />
  </Root>
)

export default Lowcode
