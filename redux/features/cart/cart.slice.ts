import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsModel } from "../../../interfaces/product.interface";

const initialState: ProductsModel[] = [];

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<ProductsModel>) => {
			state.push(action.payload);
		},
		removeProduct: (state, action: PayloadAction<{ id: number }>) => {
			return state.filter((product) => product.id !== action.payload.id);
		},
		changeQuantity: (
			state,
			action: PayloadAction<{ id: number; quantity: number; type: string }>
		) => {
			const index = state.findIndex(
				(product) => product.id === action.payload.id
			);
			if (action.payload.type === "cart") {
				state[index].quantity = action.payload.quantity;
				return state;
			}
		},
	},
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
