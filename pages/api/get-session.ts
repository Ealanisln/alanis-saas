// Import required modules
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

// Initialize the Stripe client
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {} as any);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const { session_id } = req.query;
    if (!session_id || typeof session_id !== 'string') {
      return res.status(400).json({ error: 'Invalid session ID' });
    }
  
    try {
      const session = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['payment_intent'],
      });
  
      const paymentIntent = session.payment_intent as Stripe.PaymentIntent;
      const paymentStatus = paymentIntent?.status || null;
  
      return res.json({ payment_status: paymentStatus });
      console.log(paymentStatus);
    } catch (error) {
      console.error('Error retrieving session data:', error.message);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }