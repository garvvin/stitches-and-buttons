'use client';
import { useState } from 'react';

import { HiMagnifyingGlass } from 'react-icons/hi2';
import ProductDisplay from './ProductDisplay';

export default function ShopinnerDisplay({ allProducts }) {
	//console.log(allProducts);

	const [searchTerm, setSearchTerm] = useState('');
	const filteredProducts = allProducts.filter((product) => {
		const term = searchTerm.toLowerCase();
		const nameMatch = product.name.toLowerCase().includes(term);
		const descriptionMatch = product.description
			? product.description.toLowerCase().includes(term)
			: false;

		return nameMatch || descriptionMatch;
	});

	return (
		<>
			{/* SEARCH BAR */}
			<div className="group relative w-80 h-8 text-sm md:w-130 md:h-10 md:text-base flex items-center duration-300">
				<HiMagnifyingGlass className="ms-3 z-2 pointer-events-none text-stone-500" />
				<input
					placeholder="Search Here..."
					type="text"
					className="caveat text-xl ps-10 pe-3 py-1 outline-1 outline-stone-300 text-stone-500 w-full h-full rounded-lg hover:bg-stone-100 transition-colors duration-300 outline-offset-2 focus:outline-2 focus:outline-pink-200 absolute left-0 top-0"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>
			{/* DISPLAY OF PRODUCTS */}
			<div className="w-full flex flex-wrap gap-x-5 gap-10 md:gap-15 lg:gap-20 max-w-300 justify-center overflow-x-hidden py-10 sm:p-8 md:p-15 mb-30">
				{filteredProducts.map((productData, i) => (
					<ProductDisplay
						productData={productData}
						key={i}
						extraClass={`${i % 2 == 1 ? 'rotate-3 hover:-rotate-5 active:-rotate-7' : '-rotate-3 hover:rotate-5 active:rotate-7'}`}
					/>
				))}
			</div>
		</>
	);
}
