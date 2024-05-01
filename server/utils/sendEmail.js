const nodemailer = require('nodemailer')
const nodemailerConfig = require('./nodemailerConfig')

// { to, subject, html }

const sendEmail = async () => {
  let testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'aurelia.hegmann@ethereal.email',
      pass: 'QK3xpbr57JhvHVhSmT',
    },
  })

  let info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: 'bar@example.com, baz@example.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body
  })
}

module.exports = sendEmail
