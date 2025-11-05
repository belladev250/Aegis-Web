'use strict';

const nodemailer = require('nodemailer');
const fs = require('fs');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT, 10),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function formatFormData(formData) {
  return Object.entries(formData)
    .map(([key, value]) => {
      const val = Array.isArray(value) ? value.join(', ') : value;
      return `<p><strong>${key}:</strong> ${val}</p>`;
    })
    .join('\n');
}

module.exports = {
  async send({ formType, formData, file }) {
const mailOptions = {
  from: `"GRH AEGIS TRUST FORMS" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_TO,
  subject: `New ${formType} submission`,
  html: formatFormData(formData),
} as any;

    // Add attachment if file exists
    if (file) {
      mailOptions.attachments = [{
        filename: file.originalFilename || file.name,
        content: fs.readFileSync(file.filepath),

      }];
    }

    await transporter.sendMail(mailOptions);
  },
};