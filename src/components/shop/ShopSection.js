import ShopfrontDisplay from './ShopfrontDisplay';
import Link from 'next/link';

//const productList = require('./productData.json');

export default function ShopSection({}) {
	return (
		<div
			className="min-h-180 flex flex-col justify-center items-center"
			id="shop"
		>
			<div className="w-full md:w-9/10 max-w-140 md:max-w-170 lg:max-w-200 2xl:max-w-full flex flex-col justify-center items-center">
				<h3 className="font-bold text-3xl caveat mb-10">Explore Items</h3>
				<ShopfrontDisplay />
				<Link
					href="/shop"
					className="caveat text-blue-500 hover:text-blue-300 active:text-blue-600 duration-300 text-xl relative group my-3 -translate-y-7"
				>
					<span>View All</span>
					<span className="absolute translate-x-2 group-hover:translate-x-3 group-active:translate-x-5 duration-300">
						&#8594;
					</span>
				</Link>
			</div>
		</div>
	);
}
