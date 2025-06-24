'use client';
import GradientOverlay from '@/components/GradientOverlay';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { LuArrowLeftFromLine } from 'react-icons/lu';

export default function ProductPageDetail({ productData }) {
	const price = productData.default_price;

	const [maxQuantity, minQuantity] = [10, 1];
	const [quantity, setQuantity] = useState(1);

	return (
		<div className="flex w-screen absolute bottom-0 h-8/9">
			<div className="overflow-y-scroll w-full h-full">
				<div className="flex justify-center">
					<div className="flex flex-col overflow-visible mb-50 md:flex-row md:mt-20 md:pt-0 mt-20 pt-10 md:justify-center items-center mx-5 sm:mx-20 max-w-370 relative">
						<Link
							href="/store"
							className="absolute flex items-center gap-1 right-1/2 translate-x-1/2 md:translate-0 md:right-1 -top-3 md:top-1 cursor-pointer hover:text-pink-300 duration-300 p-2"
						>
							<LuArrowLeftFromLine className="pointer-events-none" />
							<button className="pointer-events-none md:hidden">
								Back to store
							</button>
						</Link>
						<div className="min-w-full md:min-w-1/2 flex justify-center items-center mb-7 md:mb-0">
							<div
								className={`w-70 h-104 lg:w-100 active:-translate-y-2 lg:h-149 rounded-xl overflow-hidden bg-stone-200 flex flex-col items-center justify-center duration-300 cursor-pointer select-none border-2 border-gray-300 hover:shadow-xl active:shadow-xl`}
							>
								<Image
									src={productData.images[0]}
									alt={`Product Image for ${productData.name}`}
									width={400}
									height={600}
									className="h-4/5 w-5/6 bg-blue-300 object-cover outline-2 outline-stone-300 mb-10"
									draggable={false}
								/>
							</div>
						</div>
						<div className="min-w-full md:min-w-1/2 flex flex-col px-10 sm:px-7 items-center">
							<div className="w-full mb-4">
								<h2 className="caveat text-4xl font-black text-center md:text-left">
									{productData.name}
								</h2>
								<h4 className="text-emerald-500 caveat text-xl font-bold mb-5 text-center md:text-left">
									${(price.unit_amount / 100).toFixed(2)}
								</h4>
								{productData.description && (
									<h4 className="caveat text-xl text-center md:text-left">
										{productData.description}
									</h4>
								)}
							</div>
							<div className="w-full mt-8 flex flex-col items-center md:items-start">
								<div className="flex gap-2 mb-4 items-center">
									<button
										className="size-8 border-1 border-gray-300 rounded-lg text-gray-400 cursor-pointer hover:border-pink-300 hover:bg-pink-300 hover:text-white duration-300"
										onClick={() =>
											setQuantity((prevQuantity) =>
												Math.max(prevQuantity - 1, minQuantity),
											)
										}
									>
										-
									</button>
									<input
										placeholder="Loading..."
										value={quantity}
										disabled={true}
										type="number"
										className="rounded-lg border-gray-300 border-2 w-13 h-11 text-center text-gray-400"
									/>
									<button
										className="size-8 border-1 border-gray-300 rounded-lg text-gray-400 cursor-pointer hover:border-pink-300 hover:bg-pink-300 hover:text-white duration-300"
										onClick={() =>
											setQuantity((prevQuantity) =>
												Math.min(prevQuantity + 1, maxQuantity),
											)
										}
									>
										+
									</button>
								</div>
								<button className="w-full md:me-10 hover:w-101/100 max-w-100 h-10 rounded-xl bg-pink-300 caveat cursor-pointer hover:bg-pink-400 active:bg-pink-200 text-white active:text-gray-600 duration-300 relative flex justify-center items-center gap-2 hover:font-extrabold">
									<TiShoppingCart className="text-2xl pointer-events-none" />
									<span className="text-center pointer-events-none">
										Add to Cart
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<GradientOverlay />
		</div>
	);
}
