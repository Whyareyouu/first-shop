import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductsModel } from '../../../interfaces/product.interface';

const initialState: ProductsModel[] = [];

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addToFavorite: (state, action: PayloadAction<ProductsModel>) => {
			state.push(action.payload);
		},
		removeFavorite: (state, action: PayloadAction<{ id: number }>) => {
			state.filter((product) => product.id !== action.payload.id);
		},
	},
});

export const favoriteReducer = favoriteSlice.reducer;
export const favoriteActions = favoriteSlice.actions;
