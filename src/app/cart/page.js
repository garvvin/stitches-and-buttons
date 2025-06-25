'use client';
import GradientOverlay from '@/components/GradientOverlay';
import { useCartStore } from '@/store/cart-store';

import { LuArrowLeftFromLine } from 'react-icons/lu';
import { FaBoxOpen } from 'react-icons/fa6';
import CartProductCard from '@/components/shop/CartProductCard';
import Link from 'next/link';

export default function Cart({}) {
	const { items } = useCartStore();

	const totalPrice = items.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);

	return (
		<div className="flex absolute bottom-0 h-8/9 w-screen">
			<GradientOverlay />
			<div className="overflow-y-auto absolute w-full h-full pt-10">
				<div className="flex flex-col items-center min-h-full pt-15">
					<Link
						href="/store"
						className="absolute flex items-center gap-1 right-1/2 translate-x-1/2 md:translate-0 md:right-30 xl:right-50 2xl:right-100 top-12 md:top-16 cursor-pointer hover:text-pink-400 duration-300 p-2 group"
					>
						<LuArrowLeftFromLine className="pointer-events-none" />
						<button className="caveat text-lg duration-300 pointer-events-none">
							Return to store
						</button>
					</Link>
					<div className="pb-4 md:pb-8">
						<h1 className="text-center caveat font-bold text-3xl">Your Cart</h1>
					</div>
					<div className="flex flex-col gap-3 w-90 md:w-125 lg:w-150">
						{items.map((cartItemData, keyI) => (
							<CartProductCard key={keyI} cartProductData={cartItemData} />
						))}

						{!(items && items.length > 0) && (
							<div className="w-full mt-7 flex flex-col items-center border-2 rounded-xl border-dashed border-gray-300 px-4 sm:px-8 md:px-13 md:py-20 py-10">
								<span className="text-gray-300 text-8xl text-center">
									<FaBoxOpen />
								</span>
								<h2 className="caveat text-xl md:text-2xl text-gray-400 mt-5">
									Your cart is empty. Check out our{' '}
									<Link
										href="/store"
										className="underline text-pink-300 hover:text-pink-400 duration-300"
									>
										store catalog
									</Link>
									!
								</h2>
							</div>
						)}

						<div className="w-full mt-4 flex flex-col gap-3 mb-60">
							<h3 className="text-3xl caveat">
								Subtotal: ${(totalPrice / 100).toFixed(2)}
							</h3>

							<button className="text-3xl caveat border-2 border-gray-300 text-gray-500 duration-300 hover:text-white active:bg-pink-400 hover:border-pink-300 hover:bg-pink-300 cursor-pointer rounded-xl px-3 py-1 md:w-50">
								Check Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
