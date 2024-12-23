import { env } from "@/env"
import type { SubscriptionPlan } from "@/types"


export const freePlan: SubscriptionPlan = {
  name: "FreeMembership",
  description:
    "The FreeMembership description.",
  stripePriceId: "",
}

export const proPlan: SubscriptionPlan = {
  name: "LifetimeMembership",
  description: "The LifetimeMembership description.",
  stripePriceId: env.STRIPE_PRO_PRICE_ID || "",
}