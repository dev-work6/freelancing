import nodemailer from "nodemailer";

interface SendMailOptions {
  to: string;
  subject: string;
  text: string;
  html: string;
}

export async function sendMail({ to, subject, text, html }: SendMailOptions) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: {
        name: "Response to Your Service Inquiry",
        address: process.env.SMTP_FROM_EMAIL!,
      },
      to,
      subject,
      text,
      html,
    });

    console.log("Email sent successfully:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
