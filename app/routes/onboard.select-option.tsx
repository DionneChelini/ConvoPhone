import PricingPage from "../components/paymentOption/PricingPage";
import type { ActionFunction } from "@remix-run/server-runtime";
import Stripe from "stripe";
import { redirect } from "@remix-run/server-runtime";
import { useEffect } from "react";
import { useOnboardData } from "./onboard";
import { useAuth } from "@clerk/remix";
import BottomNav from "app/components/navbar/BottomNavbar";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

export function meta() {
  return [
    { title: "Home - Convo Local Numbers" },
    { description: "Connecting Prisoners with Families" },
  ];
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const priceId = form.get("priceId") as string;
  const userEmail = form.get("userEmail") as string;
  const url = await stripeCheckout(priceId, userEmail);

  return redirect(url);
};

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export const stripeCheckout = async (
  priceId: string,
  emailAddress: string
) => {
  const lineItems = [
    {
      price: priceId,
      quantity: 1,
    },
  ];
  const customerData = {
    customer_email: emailAddress,
  };

  const session = await stripe.checkout.sessions.create({
    ...customerData,
    mode: "subscription",
    line_items: lineItems,
    success_url: `http://localhost:3000/onboard/success`,
    cancel_url: `http://localhost:3000`,
  });

  return session.url!;
};

export default function SelectOption() {
  const { setOnboardData, onboardData } = useOnboardData();
  const { sessionId } = useAuth();

  useEffect(() => {
    if (sessionId) {
      setOnboardData({
        ...onboardData,
        progressBar: { completed: 3, total: 4 },
      });
    }
  }, [sessionId]);
  return <PricingPage />;
}
