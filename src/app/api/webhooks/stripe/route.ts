import { env } from "@/env";
import { stripe } from "@/utils/stripe/server";
import { stripePermittedEvents } from "@/utils/stripe/events";
import { NextResponse } from "next/server";
import type { Stripe } from "stripe";
import { get } from 'lodash';
import { createUserSubscription, updateUserSubscription } from "@/server/db/queries/user-subscription";

export async function POST(request: Request) {
    let event: Stripe.Event;
    const body = await request.text();
    const signature = request.headers.get("stripe-signature")!
    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            env.STRIPE_WEBHOOK_SECRET
        );
       
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        return new Response(`Webhook Error: ${errorMessage }`, {
          status: 400
        });
      }

    if (stripePermittedEvents.has(event.type)) {
      try {

        const checkoutSession: Stripe.Checkout.Session = event.data.object as Stripe.Checkout.Session;
        const userId: string | undefined = checkoutSession.metadata?.userId;
        const subscription = await stripe.subscriptions.retrieve(
          checkoutSession.subscription as string
        )

        if (!userId) {
          return new NextResponse("User ID is required", { status: 400 });
        }

        switch (event.type) {
          case 'checkout.session.completed':
            await createUserSubscription({
              userId: userId,
              stripeSubscriptionId: subscription.id,
              stripeCustomerId: subscription.customer as string,
              stripePriceId: get(subscription, "items.data[0].price.id"),
              stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
            });
            break;
          case 'invoice.payment_succeeded':
            await updateUserSubscription(subscription.id,{
              stripePriceId: get(subscription, "items.data[0].price.id"),
              stripeCurrentPeriodEnd: new Date(
                subscription.current_period_end * 1000
              ),
            });
            break;
        }
       
      } catch (error) {
        return NextResponse.json(
          { message: `Webhook handler failed : ${get(error, "message", "unknown error")}` },
          { status: 500 },
        );
      }
    }


    return NextResponse.json({ message: "Received" }, { status: 200 });
}