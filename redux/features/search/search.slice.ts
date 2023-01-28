import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsModel } from "../../../interfaces/product.interface";
const initialState: ProductsModel[] = [];

const SearchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		searchProducts: (state, action: PayloadAction<{ product: string }>) => {
			const searchedProducts = state.filter((product) =>
				product.title.includes(action.payload.product.toLocaleLowerCase())
			);
			if (searchedProducts.length > 0) {
				return searchedProducts;
			} else {
				return state;
			}
		},
	},
});

export const SearchReducer = SearchSlice.reducer;
export const SearchActions = SearchSlice.actions;
