import ProductDisplay from './ProductDisplay';
import { stripe } from '@/lib/stripe';

export default async function ShopinnerDisplay({}) {
	const allProducts = await stripe.products.list({
		expand: ['data.default_price'],
	});

	//console.log(allProducts);

	return (
		<div className="w-full flex flex-wrap gap-10 lg:gap-20 max-w-300 justify-center overflow-x-hidden p-8 mb-30">
			{allProducts.data.map((productData, i) => (
				<ProductDisplay
					productData={productData}
					key={i}
					extraClass={`${i % 2 == 1 ? 'rotate-3 hover:-rotate-5' : '-rotate-3 hover:rotate-5'}`}
				/>
			))}
		</div>
	);
}
