import { createSlice } from '@reduxjs/toolkit';

const fetchFromLocalStorage = () => {
	let cart = localStorage.getItem('cart');
	if (cart) {
		return JSON.parse(cart);
	} else {
		return [];
	}
};

const saveToStorage = (data) => {
	localStorage.setItem('cart', JSON.stringify(data));
};

const initialState = {
	carts: fetchFromLocalStorage(),
	itemCount: 0,
	totalAmount: 0,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const isExist = state.carts.find((item) => item.id === action.payload.id);
			if (isExist) {
				const tempCart = state.carts.map((item) => {
					if (item.id === action.payload.id) {
						let tempQuantity = item.quantity + action.payload.quantity;
						let tempTotalPrice = tempQuantity * item.price;

						return { ...item, quantity: tempQuantity, totalPrice: tempTotalPrice };
					} else {
						return item;
					}
				});
				state.carts = tempCart;
			} else {
				state.carts.push(action.payload);
			}
			saveToStorage(state.carts);
		},
		removeFromCart: (state, action) => {
			const tempCart = state.carts.filter((item) => item.id !== action.payload.id);
			state.carts = tempCart;
			saveToStorage(state.carts);
		},

		clearCart: (state) => {
			state.carts = [];
			state.itemCount = 0;
			state.totalAmount = 0;
			saveToStorage(state.carts);
		},
		getCartTotal: (state) => {
			state.totalAmount = state.carts.reduce((total, item) => {
				return (total += item.price * item.quantity);
			}, 0);
			state.itemCount = state.carts.length;
		},
	},
});

export const { addToCart, removeFromCart, clearCart, getCartTotal } = cartSlice.actions;

export default cartSlice.reducer;
