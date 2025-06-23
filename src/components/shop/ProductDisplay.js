import Image from 'next/image';

export default function ProductDisplay({ productData, extraClass }) {
	return (
		<div
			className={`w-35 h-52 md:w-40 md:h-60 lg:w-50 lg:h-75 rounded-xl overflow-hidden bg-stone-200 flex flex-col items-center justify-center duration-300 cursor-pointer select-none border-2 border-gray-300 shadow-xl ${extraClass}`}
		>
			<Image
				src={productData.images[0]}
				alt={`Product Image for ${productData.name}`}
				width={200}
				height={300}
				className="h-2/3 w-4/5 bg-blue-300"
				draggable={false}
			/>
			<div className="flex w-full flex-row justify-center mt-1 md:mt-3">
				<h4 className="caveat md:text-lg lg:text-2xl text-green-400 ps-2">
					${productData.default_price.unit_amount / 100}
				</h4>
				<h4 className="caveat md:text-lg lg:text-2xl ps-3 pe-1 md:pe-2">
					{productData.name}
				</h4>
			</div>
		</div>
	);
}
