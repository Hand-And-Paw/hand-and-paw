require("dotenv").config();
const nodemailer = require("nodemailer");
const userManager = require("../business-logic/users");

const emailController = {
  sendContactEmail: async (req, res) => {
    try {
      const output = `
        <p style="color:red" >You have a new message</p>
        <h3>Contact Details</h3>
        <ul>  
          <li>Name: ${req.body.name}</li>
          <li>Phone: ${req.body.phone}</li>
          <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
      `;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MAIL,
          pass: process.env.PASSWORD,
        },
      });

      const mailOptions = {
        from: req.body.email,
        to: "contact.handandpaw@gmail.com",
        subject: `${req.body.subject}`,
        text: `New Mail`,
        html: output,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`email sent ${info.response}`);
          res.status(200).json({ success: "message sent" });
        }
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  sendMessageToGiver: async (req, res) => {
    try {
      console.log(req.body);
      const user = await userManager.getUser(req.body.id);
      const output = `
          <p style="color:red" >You have a new message</p>
          <h3>Contact Details</h3>
          <ul>  
            <li>Name: ${req.body.name}</li>
            <li>Phone: ${req.body.phone}</li>
            <li>Email: ${req.body.email}</li>
          </ul>
          <h3>Message</h3>
          <p>${req.body.message}</p>
        `;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MAIL,
          pass: process.env.PASSWORD,
        },
      });

      const mailOptions = {
        from: req.body.email,
        to: user[0].email,
        subject: `Hand and Paw: ${req.body.subject}`,
        text: `New Mail`,
        html: output,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`email sent ${info.response}`);
          res.status(200).json({ success: "message sent" });
        }
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = emailController;
