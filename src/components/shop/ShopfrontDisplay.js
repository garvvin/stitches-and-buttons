import ProductDisplay from './ProductDisplay';
import { stripe } from '@/lib/stripe';
import GradientOverlay from '../GradientOverlay';

export default async function ShopfrontDisplay({ shopfrontProducts }) {
	const featuredProducts = await stripe.products.list({
		expand: ['data.default_price'],
		limit: 5,
	});

	//console.log(featuredProducts);

	return (
		<div className="w-full flex flex-wrap gap-5 gap-y-12 md:gap-10 lg:gap-18 justify-center overflow-x-hidden my-3 pt-3 sm:px-3 duration-300 relative overflow-hidden">
			<GradientOverlay gradientSection={'bottom'} className="h-9/10" />
			{featuredProducts.data.map((productData, i) => (
				<ProductDisplay
					productData={productData}
					key={i}
					extraClass={`${i % 2 == 1 ? 'rotate-3 hover:-rotate-5 active:-rotate-7' : '-rotate-3 hover:rotate-5 active:rotate-7'}`}
				/>
			))}
		</div>
	);
}
