'use client';
import GradientOverlay from '@/components/GradientOverlay';
import { AiOutlineHome } from 'react-icons/ai';
import { FaBoxOpen } from 'react-icons/fa6';
import Link from 'next/link';

import { useEffect, useState } from 'react';

import CartProductCard from '@/components/shop/CartProductCard';
import { useCartStore } from '@/store/cart-store';
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function SuccessPage({}) {
	const { items, clearCart } = useCartStore();
	const [recentItems, setRecentItems] = useState(items);

	useEffect(() => {
		setRecentItems(clearCart());
	}, [clearCart]);

	const totalPrice = recentItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);

	const hasCartItems = recentItems && recentItems.length > 0;

	return (
		<div className="flex absolute bottom-0 h-8/9 w-screen">
			<GradientOverlay />
			<div className="overflow-y-auto absolute w-full h-full pt-10">
				<div className="flex flex-col items-center min-h-full pt-15">
					<div className="pb-2">
						<h1 className="text-center caveat font-black text-3xl px-3 md:text-4xl text-pink-300">
							Thank you for purchasing from Stitches & Buttons!
						</h1>
						<h2 className="text-center caveat text-3xl font-bold text-pink-300 mt-2 px-3">
							Your order is now being processed.
						</h2>
						<h2 className="text-center caveat font-bold text-2xl text-gray-400 mt-5">
							What you have purchased:
						</h2>
					</div>
					<div className="bg-gray-100 rounded-xl w-80 md:min-w-100 lg:min-w-140 min-h-80 md:min-h-90 flex flex-col items-center mb-10 pt-4">
						{!hasCartItems && (
							<div className="mx-5 w-4/5 mt-7 flex flex-col items-center border-2 rounded-xl border-dashed border-gray-300 px-4 sm:px-8 md:px-13 md:py-20 py-10">
								<span className="text-gray-300 text-8xl text-center">
									<FaBoxOpen />
								</span>
								<h2 className="caveat text-xl md:text-2xl text-gray-400 mt-5 text-center">
									You have not purchased anything. How did you get here?{' '}
									<span className="block">
										Take a look at our{' '}
										<Link
											href="/store"
											className="underline text-pink-300 hover:text-pink-400 duration-300"
										>
											store catalog
										</Link>
										!
									</span>
								</h2>
							</div>
						)}

						<div className="flex flex-col gap-3">
							{recentItems.map((cartItemData, keyI) => (
								<CartProductCard
									key={keyI}
									cartProductData={cartItemData}
									onSuccessPage={true}
								/>
							))}
						</div>

						<div
							className={`flex justify-center mt-3 caveat text-2xl font-extrabold mb-5 ${totalPrice > 0 ? 'text-emerald-400' : 'text-gray-500'}`}
						>
							<h3 className="text-center px-10">
								You have spent in total (excluding tax): $
								{(totalPrice / 100).toFixed(2)}
							</h3>
						</div>
					</div>
					<div className="flex items-center justify-center gap-2 mb-40">
						<Link
							href="/"
							className="flex items-center cursor-pointer hover:text-pink-400 duration-300 p-2 gap-1 group"
						>
							<AiOutlineHome className="pointer-events-none text-xl group-active:translate-y-0.5 duration-300" />
							<button className="caveat text-xl duration-300 pointer-events-none group-active:translate-y-0.5">
								Home
							</button>
						</Link>
						<Link
							href="/store"
							className="flex items-center cursor-pointer hover:text-pink-400 duration-300 p-2 gap-2 group"
						>
							<button className="caveat text-xl duration-300 pointer-events-none">
								Continue Shopping
							</button>
							<FaLongArrowAltRight className="pointer-events-none text-xl group-hover:translate-x-1 group-active:translate-x-0.5 duration-300" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
