export const stripePermittedEvents = new Set([
    "invoice.payment_succeeded",
    "checkout.session.completed",
]);

export const stripeRelevantEvents = new Set([
    'product.created',
    'product.updated',
    'product.deleted',
    'price.created',
    'price.updated',
    'price.deleted',
    'checkout.session.completed',
    'customer.subscription.created',
    'customer.subscription.updated',
    'customer.subscription.deleted'
  ]);