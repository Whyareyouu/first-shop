import { configureStore } from '@reduxjs/toolkit';
import { BurgenMenuReducer } from './features/burgermenu/burgermenu.slise';
import { cartReducer } from './features/cart/cart.slice';
import { favoriteReducer } from './features/favorite/favoriteSlice';
import { SearchInputReducer } from './features/SearchInput/searchInput.slice';

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		favorite: favoriteReducer,
		SearchInput: SearchInputReducer,
		burgermenu: BurgenMenuReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
