import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

// Helper function to get the base URL dynamically
function getBaseUrl(req: NextApiRequest) {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host || "localhost:3000";
  return `${protocol}://${host}`;
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2022-11-15',
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!req.query.price || +req.query.price <= 0) {
    return res.status(400).json({ error: "Please enter a valid price" });
  }

  try {
    const baseUrl = getBaseUrl(req);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "USD",
            product_data: {
              name: "Alanis Web Dev",
              description: `Charging you`,
            },
            unit_amount: 100 * +req.query.price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
    });

    return res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}