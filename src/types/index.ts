export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export type SubscriptionPlan = {
  name: string
  description: string
  stripePriceId: string
}
