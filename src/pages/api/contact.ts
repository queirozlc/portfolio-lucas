import { google } from 'googleapis'

const nodemailer = require('nodemailer')
const { OAuth2 } = google.auth

const email = process.env.MAIL_ADDRESS
const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const refreshToken = process.env.REFRESH_TOKEN
const OAuth2Client = new OAuth2(clientId, clientSecret)
OAuth2Client.setCredentials({ refresh_token: refreshToken })
const accessToken = OAuth2Client.getAccessToken()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: email,
    clientId,
    clientSecret,
    refreshToken,
    accessToken
  }
})

const mailer = ({ senderMail, name, text }: any) => {
  const from = `${name} <${senderMail}>`
  const message = {
    from,
    to: `${email}`,
    subject: `Nova mensagem de contato - ${name}`,
    text,
    html: `
    <div style="background-color:#11172B;width:100%;height:100vh;padding:5rem 7rem;">
      <h1 style="font-family:Jetbrains Mono;font-weight:600;font-size:1.8rem;color:#0ee7b7;text-align: center;margin-bottom:3rem;">Porfolio - Lucas Queiroz</h1>
      <h2 style="font-family:Jetbrains Mono;font-weight:600;font-size:1.8rem;color:#0EE7B7;">De: ${from}</h2><h3 style="font-family:Jetbrains Mono;font-weight:500;font-size:1.5rem;color:#7AC7E3;text-align:justify;">Mensagem: ${text}</h3>
    </div>`,
    replyTo: from
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (err: any, info: any) =>
      err ? reject(err) : resolve(info)
    )
  })
}

export default async (req: any, res: any) => {
  const { senderMail, name, content } = req.body

  if (senderMail === '' || name === '' || content === '') {
    return res.status(403).send()
  }

  const mailerResponse = await mailer({ senderMail, name, text: content })
  return res.send(mailerResponse)
}
