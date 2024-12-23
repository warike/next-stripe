"use client";
import { Icons } from "@/components/shared/Icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn, formatDate } from "@/lib/utils";
import type { UserSubscription } from "@/server/db/queries/user-subscription";
import { createCheckoutSession } from "@/server/stripe/actions/createCheckoutSession";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type CheckoutFormProps = UserSubscription &  {
    isCanceled: boolean
    hasActiveSubscription: boolean
}
export default function CheckoutForm({stripeCurrentPeriodEnd, isCanceled, hasActiveSubscription}: CheckoutFormProps): JSX.Element {
    const router = useRouter()
    const cardTitle = `Current subscription plan`
    const buttonTitle = !hasActiveSubscription ? "Upgrade to PRO" : "Manage Subscription";
    const cardContent = hasActiveSubscription ? 
        (isCanceled ? "Your plan will be canceled on " : "Your plan renews on ") + 
            (stripeCurrentPeriodEnd ? formatDate(stripeCurrentPeriodEnd.getTime()) : "N/A") : 
        "You dont have an active subscription";
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => router.prefetch('/dashboard/billing'), [router])
    const handleSubmit =  async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(!isLoading)
        const { url: checkoutSessionUrl } = await createCheckoutSession()
        if(checkoutSessionUrl)
            router.push(checkoutSessionUrl)
    }
    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>{cardTitle}</CardTitle>
                </CardHeader>
                <CardContent>
                    {cardContent}            
                </CardContent>
                <CardFooter className="flex flex-col items-start md:flex-row md:justify-between md:space-x-0">
                    <Button
                        type="submit"
                        variant={"default"}
                        className={cn(
                            "flex w-full",
                        )}
                        disabled={isLoading}
                    >
                        {isLoading ? 
                            (<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />) : 
                            (<Icons.sparkle className="size-12"/>)
                            }
                        {buttonTitle}
                    </Button>
                </CardFooter>
            </Card>
        </form>
    );
}