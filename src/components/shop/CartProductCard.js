import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/store/cart-store';

import { FaRegTrashAlt } from 'react-icons/fa';

export default function CartProductCard({ cartProductData, onSuccessPage }) {
	const { addCartItem, removeCartItem } = useCartStore();

	const onRemoveCartItem = () => removeCartItem(cartProductData.id, 1);
	const onAddCartItem = () => addCartItem({ ...cartProductData, quantity: 1 });
	const onDeleteCartItem = () =>
		removeCartItem(cartProductData.id, cartProductData.quantity);

	const pricePerProduct = cartProductData.price;

	return (
		<div className="border-2 border-gray-400 rounded-xl overflow-hidden min-h-10 w-full flex items-center">
			<Link href={`/store/${cartProductData.id}`}>
				<Image
					src={cartProductData.imageUrl}
					width={300}
					height={300}
					className="object-cover min-w-30 size-30 p-1 ms-1 md:ms-2 rounded-xl"
					alt={`Product image for ${cartProductData.name}`}
					priority={false}
				/>
			</Link>
			<div className="flex flex-col py-2 ps-2 pe-4 grow">
				<Link href={`/store/${cartProductData.id}`}>
					<h3 className="caveat text-2xl hover:text-pink-300 duration-300">
						{cartProductData.name}
					</h3>
				</Link>
				<h5 className="caveat text-emerald-400 text-lg mb-3">
					{cartProductData.quantity > 1
						? `$${((pricePerProduct * cartProductData.quantity) / 100).toFixed(2)} total @ $${(pricePerProduct / 100).toFixed(2)}/each`
						: `$${(pricePerProduct / 100).toFixed(2)}`}
				</h5>

				{onSuccessPage ? (
					<div></div>
				) : (
					<div className="flex gap-2 mb-1 items-center justify-start">
						<button
							className="size-8 border-1 border-gray-300 rounded-lg text-gray-400 cursor-pointer hover:border-pink-300 hover:bg-pink-300 active:bg-pink-400 active:text-white hover:text-white duration-300"
							onClick={onRemoveCartItem}
						>
							-
						</button>
						<input
							placeholder="Loading..."
							value={cartProductData.quantity}
							disabled={true}
							type="number"
							className="rounded-lg border-gray-300 border-2 w-13 h-11 text-center text-gray-400"
						/>
						<button
							className="size-8 border-1 border-gray-300 rounded-lg text-gray-400 cursor-pointer hover:border-pink-300 hover:bg-pink-300 active:bg-pink-400 active:text-white hover:text-white duration-300"
							onClick={onAddCartItem}
						>
							+
						</button>
					</div>
				)}
			</div>
			{!onSuccessPage && (
				<div
					className="size-12 cursor-pointer duration-300 text-gray-400 active:text-red-900 hover:text-red-400 flex justify-center items-center group"
					onClick={onDeleteCartItem}
				>
					<FaRegTrashAlt className="me-3 text-xl transition duration-300 group-active:text-[1.2rem] group-hover:text-[1.4rem]" />
				</div>
			)}
		</div>
	);
}
