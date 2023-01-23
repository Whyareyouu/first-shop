import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductsModel } from '../../../interfaces/product.interface';

const initialState: ProductsModel[] = [];

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<ProductsModel>) => {
			state.push({ ...action.payload, quantity: 1 });
		},
		incrQuantity: (state, action: PayloadAction<{ id: number }>) => {
			const quantity = state.filter(
				(product) =>
					product.id === action.payload.id &&
					product.quantity &&
					product.quantity + 1
			);
			return [...quantity, ...state];
		},
		removeProduct: (state, action: PayloadAction<{ id: number }>) => {
			return state.filter((product) => product.id !== action.payload.id);
		},
	},
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
