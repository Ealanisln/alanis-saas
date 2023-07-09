import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {} as any);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: "Method not allowed" });
    }

    if (!req.query.price || +req.query.price <= 0) {
        return res.status(400).json({ error: "Please enter a valid price" });
    }

    const { url } = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                    currency: "USD",
                    product_data: {
                        name: "GrowChief",
                        description: `Charging you`,
                    },
                    unit_amount: 100 * +req.query.price,
                },
                quantity: 1,
            },
        ],
        mode: "payment",
        success_url: "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: "http://localhost:3000",
    });

    return res.json({ url });
}
