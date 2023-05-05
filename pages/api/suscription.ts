import { NextApiRequest, NextApiResponse } from "next";
import { subscriptionHandler } from "use-stripe-subscription";
import { findOrCreateCustomerId } from "@/utils/findOrCreateCustomerId";

export default async function subscription(req: NextApiRequest, res: NextApiResponse) {
  const customerId = await findOrCreateCustomerId({ clerkUserId: req.body.clerkUserId });
  const response = await subscriptionHandler({
    body: req.body,
    query: req.query,
    customerId,
  });
  res.status(200).json(response);
}
