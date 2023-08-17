// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  
  if (req.body.name && req.body.email && req.body.message) {
    const message = {
      from: "info@wearevolcan.com",
      to: "info@wearevolcan.com",
      subject: "New message at Volcan website",
      html: `
          <span style="font-size: 0px; opacity: 0;">
            ${req.body.message}
          </span>
          <div style="max-width: 460px; width: 100%; margin: 0 auto; display: inline-block;">
            <h1>🌋 New message at Volcan website</h1>
            <p>
              <span>From: </span><strong>${req.body.name}</strong>
            </p>
            <p>
              <span>Email: </span><a href="mailto:${req.body.email}">${req.body.email}</a>
            </p>
            <p>
              <span>Phone: </span><a href="tel:${req.body.phone}">${req.body.phone}</a>
            </p>
            <p>
              <span>Company: </span><a href="tel:${req.body.company}">${req.body.phone}</a>
            </p>
            <p>Message</p>
            <div style="background: whitesmoke; padding: 9px 18px; border-radius: 5px">
              <p>${req.body.message}</p>
            </div>
          </div>
        `,
    };

    let transport = {
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: "guido.glarosa@gmail.com",
        pass: process.env.BREVO_SMTP_KEY,
      },
    };

    let transporter = nodemailer.createTransport(transport);

    transporter.sendMail(message, (err : any) => {
      if (err) {
        console.log(err)
        res.status(500).json({ status: "Email delivery error" });
      } else {
        res.status(200).json({ status: "Email delivered" });
      }
    });
  } else {
    res.status(500).json({ status: "Email delivery error" });
  };
}
