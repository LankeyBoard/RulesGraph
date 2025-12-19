import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: "fortunesfavortabletop@gmail.com", // your email
    pass: process.env.GMAIL_APP_PASSWORD, // the app password you generated, paste without spaces
  },
  secure: true,
  port: 465,
});

const SendMail = (to: string, subject: string, body: string) => {
  (async () => {
    await transporter.sendMail({
      from: "fortunesfavortabletop@gmail.com", // your email
      to: to, // the email address you want to send an email to
      subject: subject, // The title or subject of the email
      html: body, // I like sending my email as html, you can send \
      // emails as html or as plain text
    });

    console.debug(`Email sent to ${to} with with subject: ${subject} 
        contents ${body}`);
  })();
};
export default SendMail;
