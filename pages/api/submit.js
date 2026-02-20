// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')
const sendgridApiKey = process.env.APIKEY
const receiver = process.env.RECEIVER


// //process.env.SENDGRID_API
const transporter = nodemailer.createTransport(
  sgTransport({
    auth: {
      api_key: sendgridApiKey,
    },
  }),
)

const SendEmail = ({
  email,
  phone,
  company,
  name,
  text = 'A visitor to the website has requested to be added to the mailing list',
  subject = 'Simplimate Submit from Website',
}) => {
  const from = name && email ? `${name} <${email}>` : `${email}`
  const message = {
    from,
    to: receiver,
    subject: `${subject}, from: ${from}, company: ${company}`,
    text: `${text} , phone: ${phone}, email: ${email}, company: ${company}`,
    html: `<p>${text} , phone: ${phone}, email: ${email}, company: ${company}</p>`,
    replyTo: from,
  }

  console.log({sendgridApiKey})
  console.log({receiver})


  console.log({message})
  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, resp) =>
      error ? reject(error) : resolve(resp),
    )
  })
}



export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request

    const {
      email = '',
      phone = '',
      message = '',
      company = '',
      subject = '',
    } = req.body
    console.log('req.body!', req.body)

    SendEmail({email, phone, company, text: message, subject})
      .then(resp => {
        console.log('resp success', resp)
        res.send(resp)
      })
      .catch(error => {
        console.log('error', error)
        res.send(error)
      })



  } else {
    // Handle any other HTTP method
  }
}
