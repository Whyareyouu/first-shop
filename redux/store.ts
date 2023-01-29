import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './features/cart/cart.slice';
import { favoriteReducer } from './features/favorite/favoriteSlice';
import { SearchInputReducer } from './features/SearchInput/searchInput.slice';

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		favorite: favoriteReducer,
		SearchInput: SearchInputReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
