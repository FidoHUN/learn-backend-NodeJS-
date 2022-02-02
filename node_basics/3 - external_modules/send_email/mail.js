const nodemailer = require('nodemailer');
const mailjetTransport = require('nodemailer-mailjet-transport');
require('dotenv').config()
const transport = nodemailer.createTransport(mailjetTransport({
  auth: {
    apiKey: process.env.MAILJET_API_KEY,
    apiSecret: process.env.MAILJET_API_SECRET,
  }
}));
const mail = {
  from: 'vass.frigyes@gmail.com',
  to: 'vass.frigyes@gmail.com',
  subject: 'Hello',
  text: 'Hello',
  html: '<h1>Hello</h1>'
};

const send = async function(){
  try {
    await transport.sendMail(mail);
  } catch (err) {
    console.error(err);
  }
}

//call send function
send()