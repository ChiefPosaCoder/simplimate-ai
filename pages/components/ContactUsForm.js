import styled from 'styled-components'
import React, {Component} from 'react'

import {
  FormGroup,
  Input,
  ButtonBase,
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
const em = ($pixels, $context = $browserContext) =>
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
A.FormGroup = styled(FormGroup)`
  && {
    margin: 1em auto;
  }
`
A.Textarea = styled.textarea`
  && {
    vertical-align: top;
    border: 1px solid #777;
    border-radius: ${rem(10)} ${rem(10)};
    padding: ${rem(10)} ${rem(20)};
    font-size: 1em;
    width: ${({width}) => width || '50%'};

    font-family: 'Gotham Light', sans-serif;
    margin: auto;
    height: 100px;
    &::placeholder {
      color: #afafaf;
    }

    &:focus {
      outline: none;
    }
  }
`

A.Input = styled(Input)`
  && {
    vertical-align: middle;
    display: inline-block;
    border: 1px solid #777;
    border-radius: ${rem(10)} ${rem(10)};
    padding: ${rem(10)} ${rem(20)};
    font-size: 1em;
    width: ${({width}) => width || '50%'};
    font-family: 'Gotham Light', sans-serif;
    margin: auto;
    &::placeholder {
      color: #afafaf;
    }

    &:focus {
      outline: none;
    }
  }
`

A.BlueButton = styled(ButtonBase)`
  && {
    font-family: 'Gotham Medium', sans-serif;
    height: 46px;
    font-size: 1.15em;
    font-style: normal;
    font-stretch: normal;
    text-align: center;
    font-weight: 600;
    padding: ${rem(0)} ${rem(25)};
    background: ${({background}) => background || 'rgb(0, 90, 144)'};
    border: 3px solid transparent;
    color: #fff;
    margin: 1em auto;
  }
`

A.Title = styled.div`
  && {
    color: rgba(0, 0, 0, 0.9);
    font-weight: 500;
    font-size: 2em;
    font-family: 'Paytone One', sans-serif;
    line-height: 1.1;
    margin: 0 auto 0.5em auto;
    width: ${({width}) => width || '50%'};

    text-align: ${({textAlign}) => textAlign || 'left'};
  }
`

A.SubTitle = styled.div`
  && {
    color: rgba(0, 0, 0, 0.9);
    font-weight: 500;
    font-size: 1.2em;
    line-height: 1.1;
    margin: 0.5em auto 1em auto;
    width: ${({width}) => width || '50%'};

    text-align: ${({textAlign}) => textAlign || 'left'};
  }
`

const FormStyled = styled.form`
  && {
    text-align: center;
  }
`


const ContactUsForm = ({
  color = '#003d59',
  margin,
  marginxs,
  textAlign,
  title,
  subtitle,
  width,
}) => {
  
  const[values, updateField] =  React.useState({})
  
  const [submitted, setSubmitted] = React.useState(false)

  const submitForm = async () => {

    const API = process.env.API 

    return await fetch(`${API}/api/submit`, {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Access-Control-Allow-Origin': '*', 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        Object.assign({}, {...values}, {
          subject: `A new message received from website user`,
        }),
      ),
    })
  }
  return(
  
  <Root margin={margin} marginxs={marginxs}>

    <FormStyled
          color={color}
          autoComplete="on"
          onSubmit={e => {
            e.preventDefault()

            setSubmitted(true)

            submitForm()
                .then((res) => {
                  
                  return res.status === 200 ? setTimeout(() => {

                    setSubmitted(false)
                    updateField({})

                  }, 2000) : ''
                })
                .catch(err => console.error('error', err))
          }}
        >


      <A.Title width={width} textAlign={textAlign}>
        {title}
      </A.Title>
      <A.SubTitle width={width} textAlign={textAlign}>
        {subtitle}
      </A.SubTitle>

      <A.FormGroup row={true}>
      <A.Input
        width={width}
        id="email"
        placeholder="Work Email"
        margin="none"
        fullWidth={true}
        disableUnderline={true}
        bcolor={color}
        name={`email`}
        label={`email`}
        value={values?.email}
        type="email"
        onChange={e => {
          updateField({...values, email:e?.target?.value})
        }}
        required
      />

      </A.FormGroup>
      <A.FormGroup row={true}>

      <A.Textarea
        id="message"
        placeholder="Leave message"
        margin="none"
        fullWidth={true}
        disableUnderline={true}
        bcolor={color}
        name={`message`}
        label={`message`}
        value={values?.message}
        width={width}
        type="text"
        onChange={e => {
          updateField({...values, message: e?.target?.value})
        }}
        required
    />

      </A.FormGroup>
      <A.FormGroup row={true}>

      <A.Input
        id="phone"
        placeholder="Phone number"
        margin="none"
        width={width}
        fullWidth={true}
        disableUnderline={true}
        bcolor={color}
        name={`phone`}
        label={`phone`}
        value={values?.phone}
        type="number"
        onChange={e => {
          updateField({...values, phone: e?.target?.value})
        }}
        required
    />

      </A.FormGroup>
      <A.FormGroup row={true}>

      <A.Input
        id="company"
        placeholder="Company name"
        margin="none"
        fullWidth={true}
        disableUnderline={true}
        bcolor={color}
        name={`company`}
        label={`company`}
        value={values?.company}
        type="text"
        width={width}
        onChange={e => {
          updateField({...values, company: e?.target?.value})
        }}
        required
      />

      </A.FormGroup>

      <A.FormGroup row={true}>
        <A.BlueButton
          type="submit"
          variant="contained"
          background={submitted ? `green` : ``}
        >
          {submitted ? 'We will reply to you shortly' : 'Submit'}
        </A.BlueButton>
      </A.FormGroup>
      
    </FormStyled>
    
    
  </Root>)
}

export default ContactUsForm