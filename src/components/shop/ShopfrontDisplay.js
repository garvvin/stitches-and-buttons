import ProductDisplay from './ProductDisplay';
import { stripe } from '@/lib/stripe';

export default async function ShopfrontDisplay({ shopfrontProducts }) {
	const featuredProducts = await stripe.products.list({
		expand: ['data.default_price'],
		limit: 5,
	});

	//console.log(featuredProducts);

	return (
		<div className="w-full flex flex-wrap gap-10 justify-center min-h-[690px] max-h-[690px] overflow-y-hidden overflow-x-hidden">
			{featuredProducts.data.map((productData, i) => (
				<ProductDisplay
					productData={productData}
					key={i}
					extraClass={`${i % 2 == 1 ? 'rotate-3 hover:-rotate-5' : '-rotate-3 hover:rotate-5'}`}
				/>
			))}
		</div>
	);
}
