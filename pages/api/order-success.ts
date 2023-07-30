import stripe from 'stripe';

// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripeSecretKey = 'sk_test_51Mxj4ZJ1rFgDrHwLu2jK9WN8CvPyQxHEiMf90HGUOCJSgToyuWd0fPBPIpfQ7hM7Ak2mdppdExfIWsMa7s0z9zfM00EWIQvsdf';
const stripeInstance = stripe(stripeSecretKey);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { session_id } = req.query;
    try {
      const session = await stripeInstance.checkout.sessions.retrieve(session_id);
      const customer = await stripeInstance.customers.retrieve(session.customer);
      res.send(`<html><body><h1>Thanks for your order, ${customer.name}!</h1></body></html>`);
    } catch (error) {
      console.error('Error fetching customer data:', error);
      res.status(500).send('Internal Server Error');
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
