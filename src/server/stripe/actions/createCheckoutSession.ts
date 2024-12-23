"use server";

import type { Stripe } from "stripe";
import { stripe } from '@/utils/stripe/server'
import { absoluteUrl } from "@/lib/utils"
import { proPlan } from "@/config/subscriptions";
import { currentUser } from "@clerk/nextjs/server";
import { getUserSubscription } from "@/server/db/queries/user-subscription";

interface CheckoutSession {
  url: string
}
export async function createCheckoutSession(): Promise<CheckoutSession> {
  const user = await currentUser();
  if (!user) {
    throw new Error('You must be signed in to perform this action')
  }
  
  try {
    const billingUrl: string = absoluteUrl("/dashboard/billing");
    const currentSubscription = await getUserSubscription();
    if (currentSubscription && currentSubscription.isActive && currentSubscription.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: currentSubscription.stripeCustomerId,
        return_url: billingUrl,
      })

      return { url: stripeSession.url}
    }


    const customerEmail: string = user.primaryEmailAddress?.emailAddress ?? ""
    const uiMode: Stripe.Checkout.SessionCreateParams.UiMode = "hosted";
    const paymentMode: Stripe.Checkout.SessionCreateParams.Mode = "subscription"
    const billingAddressCollection : Stripe.Checkout.SessionCreateParams.BillingAddressCollection = "auto"
    const paymentMenthodTypes : Stripe.Checkout.SessionCreateParams.PaymentMethodType[] = ["card"]

    const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create({
      payment_method_types: paymentMenthodTypes,
      mode: paymentMode,
      line_items: [
        {
          quantity: 1,
          price: proPlan.stripePriceId
        },
      ],
      success_url: billingUrl,
      cancel_url: billingUrl,
      ui_mode: uiMode,
      billing_address_collection: billingAddressCollection,
      customer_email: customerEmail,
      metadata: {
        price: proPlan.stripePriceId,
        email: customerEmail,
        userId: user.id,
      },
      
    });
    return {
      url: checkoutSession.url!,
    };
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : "Unknown error")
  }
}