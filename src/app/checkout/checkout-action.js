'use server';

import { stripe } from '@/lib/stripe';
import { redirect } from 'next/navigation';

export const checkoutAction = async (formData) => {
	const itemsJSON = formData.get('items');
	const items = JSON.parse(itemsJSON);
	const line_items = items.map((item) => ({
		price_data: {
			currency: 'usd',
			product_data: { name: item.name },
			unit_amount: item.price,
		},
		quantity: item.quantity,
	}));

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ['card'],
		line_items,
		mode: 'payment',
		success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
		cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
	});

	redirect(session.url);
};
