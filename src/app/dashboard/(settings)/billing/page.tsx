"use server"
import Container from "@/components/shared/Container";
import CheckoutForm from "./_components/checkout-form";
import { Title } from "@/components/shared/Title";
import { getUserSubscription, type UserSubscription } from "@/server/db/queries/user-subscription";
import { stripe } from "@/utils/stripe/server";

export default async function BillingPage(){
    const userSubscription: UserSubscription | undefined = await getUserSubscription();
    const isPro = !!userSubscription?.isActive;
    let isCanceled = false;
    if (userSubscription && userSubscription.isActive && userSubscription.stripeSubscriptionId) {
        const stripePlan = await stripe.subscriptions.retrieve(
            userSubscription.stripeSubscriptionId
        );
        isCanceled = stripePlan.cancel_at_period_end;
    }

    return(
        <Container>
            <Title className="mb-6">
                Billing overview
            </Title>
            <CheckoutForm 
                isCanceled={isCanceled}
                hasActiveSubscription={isPro}
                {...userSubscription}
            />
        </Container>
    )
}