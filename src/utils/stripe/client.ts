import { env } from "@/env"
import { type Stripe, loadStripe } from "@stripe/stripe-js";


let stripePromise: Promise<Stripe | null>;

export default function getStripe(): Promise<Stripe | null> {
  if (stripePromise === null || typeof stripePromise === "undefined")
    stripePromise = loadStripe(
      env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    );

  return stripePromise;
}
