import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const map = {
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
}
const $browserContext = 16

const mediaGrid = type => () => `@media (max-width: ${map[type] - 1}px)`



const SubTitle = styled(Typography)`
  && {
    font-weight: 400;
    font-size: 16px;
    color: #9f9ba7;
    letter-spacing: normal;
  }
`

const Paragraph = styled(Typography)`
  && {
    font-weight: 300;
    font-size: 1.2em;
    letter-spacing: normal;
    color: ${({ colortext }) => colortext || '#1f231f'};
    line-height: 2;
    padding: 0;
  }
`
const Root = styled.div`
  && {
    padding-bottom: 4em;
  }
`

const CardStyled = styled(Card)`
  && {
    background: none;
    border: none;
    box-shadow: none;
    display: flex;
  }
`
const CardContentStyled = styled(CardContent)`
  && {
    padding: 0 30px;
    ${mediaGrid(`sm`)} {
      padding: 0 20px;
    }
  }
`

const ParagraphCustom = styled(Paragraph)`
  && {
    font-size: 14px;
    line-height: 2.09;
    letter-spacing: 0.33px;
    padding: 0;
    margin-top: 1em;
  }
`

const Name = styled(Typography)`
  && {
    font-size: 1.5em;
    color: #003d59;
    font-weight: normal;
    letter-spacing: 0.33px;
    line-height: 1.28;
    margin-top: 1.2em;
  }
`

const Role = styled(Typography)`
  && {
    font-size: .75em;
    color: #003d59;
    font-weight: normal;
    letter-spacing: 0.33px;
    line-height: 1;
    margin-top: 0em;
  }
`

const Title = styled(SubTitle)`
  && {
    font-weight: 600;
    font-size: 2em;
    color: #003a53;
    letter-spacing: normal;
    margin: 2em auto;
  }
`

const Resources = ({ resources1 = [], title1 = 'Default title', resources2 = [], title2 = 'Default title', resources3 = [], title3 = 'Default title' }) => (
    <Root>
        <Title component="h2" variant="h2" align="center" gutterBottom>
            {title1}
        </Title>

        <Grid container direction="row" justifyContent="center">
            <Grid item xs={12} sm={8}>
                <Grid container spacing={2}>
                    {resources1.map(resource => (
                        <Grid item key={resource.title} xs={12} md={6}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <SubTitle>
                                        <Name>
                                            {resource.title}
                                        </Name>
                                        {resource.role}
                                    </SubTitle>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ParagraphCustom paragraph>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: resource.description,
                                            }}
                                        />
                                    </ParagraphCustom>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
        <Title component="h2" variant="h2" align="center" gutterBottom>
            {title2}
        </Title>

        <Grid container direction="row" justifyContent="center">
            <Grid item xs={12} sm={8}>
                <Grid container spacing={2}>
                    {resources2.map(resource2 => (
                        <Grid item key={resource2.title} xs={12} md={6}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <SubTitle>
                                        <Name>
                                            {resource2.title}
                                        </Name>
                                        {resource2.role}
                                    </SubTitle>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ParagraphCustom paragraph>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: resource2.description,
                                            }}
                                        />
                                    </ParagraphCustom>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
        <Title component="h2" variant="h2" align="center" gutterBottom>
            {title3}
        </Title>

        <Grid container direction="row" justifyContent="center">
            <Grid item xs={12} sm={8}>
                <Grid container spacing={2}>
                    {resources3.map(resource3 => (
                        <Grid item key={resource3.title} xs={12} md={6}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <SubTitle>
                                        <Name>
                                            {resource3.title}
                                        </Name>
                                        {resource3.role}
                                    </SubTitle>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ParagraphCustom paragraph>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: resource3.description,
                                            }}
                                        />
                                    </ParagraphCustom>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    </Root >
)

export default Resources
