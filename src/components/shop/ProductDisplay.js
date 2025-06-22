import Image from 'next/image';

export default function ProductDisplay({ productData, extraClass }) {
	return (
		<div
			className={`w-50 h-75 rounded-xl overflow-hidden bg-stone-200 flex flex-col items-center justify-center duration-300 cursor-pointer border-2 border-gray-300 shadow-xl ${extraClass}`}
		>
			<Image
				src={productData.images[0]}
				alt={`Product Image for ${productData.name}`}
				width={200}
				height={300}
				className="h-2/3 w-4/5 bg-blue-300"
			/>
			<div className="flex w-full flex-row place-content-evenly mt-3">
				<h4 className="caveat text-2xl text-green-400">
					${productData.default_price.unit_amount / 100}
				</h4>
				<h4 className="caveat text-2xl ps-3 pe-2">{productData.name}</h4>
			</div>
		</div>
	);
}
