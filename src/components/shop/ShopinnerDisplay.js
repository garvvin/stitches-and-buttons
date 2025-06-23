import ProductDisplay from './ProductDisplay';
import { stripe } from '@/lib/stripe';

export default async function ShopinnerDisplay({}) {
	const allProducts = await stripe.products.list({
		expand: ['data.default_price'],
	});

	//console.log(allProducts);

	return (
		<div className="w-full flex flex-wrap gap-x-5 gap-10 md:gap-15 lg:gap-20 max-w-300 justify-center overflow-x-hidden py-10 sm:p-8 md:p-15 mb-30">
			{allProducts.data.map((productData, i) => (
				<ProductDisplay
					productData={productData}
					key={i}
					extraClass={`${i % 2 == 1 ? 'rotate-3 hover:-rotate-5 active:-rotate-7' : '-rotate-3 hover:rotate-5 active:rotate-7'}`}
				/>
			))}
		</div>
	);
}
