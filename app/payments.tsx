import Stripe from "stripe";

export const stripe = new Stripe(
  "sk_test_51IjLitLS6zBJNnGQEM5DrXgvnFY6tdrwQTYt01rmcHFvvFvPqDofh7cb7pCq2S8g29enS5XZvZS92pObSfVVUhGK00LfNj7RYW",
  {
    apiVersion: "2022-11-15",
  }
);

export async function retrievePaymentIntent(id: string) {
  return await stripe.paymentIntents.retrieve(id);
}
