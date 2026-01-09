require("dotenv").config();
const nodemailer = require("nodemailer");
const recruiters = require("./recruiters");

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Email template
function emailTemplate(recruiter) {
  return `
Hello ${recruiter.name},

I hope you are doing well. My name is Elliot, a Level 300 Computer Science student at the University of Ghana.

I am currently seeking internship opportunities in software development and would love to know if there are any openings at ${recruiter.company}.

I have experience with React, Node.js, MongoDB, and REST APIs, and I am eager to learn and contribute.

Thank you for your time and consideration.

Kind regards,  
Elliot
`;
}

// Send emails
async function sendEmails() {
  for (const recruiter of recruiters) {
    try {
      await transporter.sendMail({
        from: `"Elliot" <${process.env.EMAIL_USER}>`,
        to: recruiter.email,
        subject: "Computer Science Student Seeking Internship Opportunity",
        text: emailTemplate(recruiter)
      });

      console.log(`✅ Email sent to ${recruiter.name}`);
    } catch (error) {
      console.error(`❌ Failed to send to ${recruiter.email}`, error.message);
    }
  }
}

sendEmails();
