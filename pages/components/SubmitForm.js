import styled from 'styled-components'
import React, {Component} from 'react'

import {
  FormGroup,
  TextField,
  Button,
} from '@material-ui/core'


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


const A = {}

const Root = styled.div`
  && {
    margin: ${({margin}) => margin || '0'};
    ${mediaGrid(`sm`)} {
      margin: ${({marginxs}) => marginxs || '0'};
    }
  }
`

A.Button = styled(Button)`
  && {
    vertical-align: middle;
    display: inline-block;
    background-color: #777;
    color: #fff;
    margin-left: 5px;
  }
`
A.TextField = styled(TextField)`
  width: 50%;
  font-family: 'Gotham Light', sans-serif;
  padding: 0px;
`

const LabelCutom = styled.div`
  && {
    color: rgba(0, 0, 0, 0.9);
    font-weight: 500;
    font-size: 2em;
    font-family: 'Paytone One', sans-serif;
    line-height: 1.1;
    margin-bottom: 0.5em;
  }
`

A.Inline = styled.div`
  width: 100%;
  display: inline-block;
  margin: auto;
`
A.FormStyled = styled.form`
  && {
    text-align: center;
  }
`



const SubmitFormComponent = props => {
 
  const [submitted, setSubmitted] = React.useState(false);
  const [email, updateFieldEmail] = React.useState(``);

  const submitForm = async () => {
    const API = process.env.API || ''
    return await fetch(`${API}/api/submit`, {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Access-Control-Allow-Origin': '*', 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email}),
    })
  }
  const {color = '#003d59', margin, marginxs} = props


  return (
    <Root margin={margin} marginxs={marginxs}>


  <A.FormStyled
      color={`primary`}
      autoComplete="on"
      onSubmit={e => {
        e.preventDefault()

        setSubmitted(true)


          submitForm()
            .then((res, error) => {

              return res.status === 200 ? setTimeout(() => {
                setSubmitted(false)
                updateFieldEmail(``)
              }, 2000) : ''
            })
            .catch(err => console.error('error', err))
      }}

    >
      

      <LabelCutom>Stay up to date. Subscribe to our newsletter.</LabelCutom>

        <FormGroup row>
          <A.Inline>

            <A.TextField
              id="email"
              name={`email`}
              label={`Enter your email`}
              value={email}
              type="email"
              color={`primary`}
              onChange={e => {
                updateFieldEmail(e?.target?.value)
              }}
              required
              size="small"
            />

            <A.Button  type="submit"  variant="contained" bcolor={color}>
              {(submitted && 'OK') || 'OK'}
            </A.Button>
          </A.Inline>
        </FormGroup>
        <small>
          {(submitted && 'We will reply you shortly!') || ''}
        </small>


    </A.FormStyled>
    
    
       
    </Root>
  )
}

export default SubmitFormComponent
