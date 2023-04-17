import { NextApiResponse, NextApiRequest } from 'next';
import nodemailer from 'nodemailer';

type Fields = {
  name: string;
  message: string;
  email: string;
};

type Response = {
  error?: string;
  status?: string;
  message?: string;
};

// Create a transporter to send emails
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
    pass: process.env.NEXT_PUBLIC_PASSWORD,
  },
});

// Define the API handler function
const handler = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  console.log('Received request:', req);
  const { name, email, message } = req.body as Fields;

  // If the request method is not POST, return a 404 error
  if (req.method !== 'POST') {
    return res.status(404).send({ status: 'fail', error: 'Begone.' });
  }

  try {
    // Validate the name field
    if (!name || !name.trim()) {
      throw new Error('Please provide a valid name.');
    }

    // Validate the email field
    if (!email || !email.trim()) {
      throw new Error('Please provide a valid email address.');
    }

    // Validate the message field
    if (!message || !message.trim()) {
      throw new Error('Please provide a valid email message.');
    }

    // Send the email
    await transporter.sendMail({
      to: 'ealanisln@gmail.com',
      from: 'ealanisln@gmail.com',
      replyTo: email,
      subject: `Hello from ${name}`,
      text: message,
      html: `<p>${message.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>`,
    });

    // Send a success response
    res.status(200).send({ status: 'done', message: 'message has been sent' });
  } catch (error) {
    // Send an error response
    res.status(500).send({ status: 'fail', error: `${error}` });
  }
};

export default handler;