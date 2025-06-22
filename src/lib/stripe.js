import Stripe from 'stripe';

//console.log('secret key', process.env.STRIPE_SECRET_KEY);
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
