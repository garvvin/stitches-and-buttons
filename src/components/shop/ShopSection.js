import ShopfrontDisplay from './ShopfrontDisplay';
import Link from 'next/link';

//const productList = require('./productData.json');

export default function ShopSection({}) {
	return (
		<div
			className="min-h-180 flex flex-col justify-center items-center"
			id="shop"
		>
			<div className="w-4/5 lg:w-3/4 max-w-250 flex flex-col justify-center items-center">
				<h3 className="-translate-y-10 font-bold text-3xl caveat">
					Explore Items
				</h3>
				<Link
					href="/shop"
					className="-translate-y-6 caveat text-blue-500 hover:text-blue-300 active:text-blue-600 duration-300 text-xl relative group"
				>
					<span className="">View All</span>
					<span className="absolute translate-x-2 group-hover:translate-x-3 duration-300">
						&#8594;
					</span>
				</Link>
				<ShopfrontDisplay />
			</div>
		</div>
	);
}
