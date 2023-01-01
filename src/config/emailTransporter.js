const nodemailer = require('nodemailer');
const config = require('config');

const mailConfig = config.get('mail');

const transporter = nodemailer.createTransport({
  ...mailConfig,
  // host: '::1',
  // logger: true,
});

module.exports = transporter;
