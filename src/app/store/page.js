import GradientOverlay from '@/components/GradientOverlay';
import ShopinnerDisplay from '@/components/shop/ShopinnerDisplay';

import { stripe } from '@/lib/stripe';

export default async function Store({}) {
	const allProducts = await stripe.products.list({
		expand: ['data.default_price'],
	});

	return (
		<div className="bg-stone-50 flex absolute bottom-0 h-8/9 w-screen">
			<GradientOverlay />
			<div className="overflow-y-auto absolute w-full h-full">
				<div className="flex flex-col items-center min-h-full pt-15">
					<div className="pb-4 md:pb-8">
						<h1 className="text-center caveat font-bold text-3xl">Store</h1>
					</div>

					<ShopinnerDisplay allProducts={allProducts.data} />
				</div>
			</div>
		</div>
	);
}
