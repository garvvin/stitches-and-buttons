import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const maxQuantityPerProduct = 20;

export const useCartStore = create()(
	persist(
		(set) => ({
			items: [],
			addCartItem: (item) => {
				let success = true;

				set((state) => {
					const existing = state.items.find(
						(existingItem) => existingItem.id === item.id,
					);

					if (existing) {
						if (existing.quantity + item.quantity > maxQuantityPerProduct)
							success = false;
						return {
							items: state.items.map((existingItem) =>
								existingItem.id === item.id
									? {
											...existingItem,
											quantity: Math.min(
												existingItem.quantity + item.quantity,
												maxQuantityPerProduct,
											),
										}
									: existingItem,
							),
						};
					}

					return { items: [...state.items, item] };
				});

				return success;
			},
			removeCartItem: (id, quantity) =>
				set((state) => {
					return {
						items: state.items
							.map((existingItem) =>
								existingItem.id === id
									? {
											...existingItem,
											quantity:
												existingItem.quantity - (quantity ? quantity : 1),
										}
									: existingItem,
							)
							.filter((existingItem) => existingItem.quantity > 0),
					};
				}),
			clearCart: () => {
				let prevCart;
				set((state) => {
					prevCart = JSON.parse(JSON.stringify(state.items));
					return { items: [] };
				});
				return prevCart;
			},
		}),
		{ name: 'cart' },
	),
);
