import { db } from '@/server/db'
import { userSubscription } from '@/server/db/schemas'
import { cache } from "react";
import { auth, currentUser } from "@clerk/nextjs/server";
import { and, eq, desc } from 'drizzle-orm';
import { redirect } from 'next/navigation';

const DAY_IN_MS = 86_400_000;

export type UserSubscription  = Partial<typeof userSubscription.$inferInsert & { isActive: boolean}>

export const getUserSubscription = cache(async ():  Promise<UserSubscription>=> {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    redirect('/')
  }

  const subscription = await db.query.userSubscription.findFirst({
    where: and(
      eq(userSubscription.userId, userId),
      eq(userSubscription.status, true)
    ),
    orderBy: desc(userSubscription.id)
  })
  
  if (!subscription)
    return {};

  const isActive = 
    subscription.stripePriceId &&
    subscription.stripeCurrentPeriodEnd?.getTime() + DAY_IN_MS > Date.now();

  return {
    ...subscription,
    isActive: !!isActive,
  };
});

export const createUserSubscription = async( data: Partial<typeof userSubscription.$inferInsert> ) : Promise<void> => {
  await db.insert(userSubscription).
      values({
          userId: data.userId!,
          stripeCustomerId: data.stripeCustomerId!,
          stripeSubscriptionId: data.stripeSubscriptionId!,
          stripePriceId: data.stripePriceId!,
          stripeCurrentPeriodEnd: data.stripeCurrentPeriodEnd!,
      })
}
export const updateUserSubscription = async( id: string,data: Partial<typeof userSubscription.$inferInsert> ) : Promise<void> => {
  await db.update(userSubscription).
      set({
          ...data
      })
      .where(eq(userSubscription.stripeSubscriptionId, id))

}