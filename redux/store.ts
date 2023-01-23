import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './features/cart/cart.slice';
import { favoriteReducer } from './features/favorite/favoriteSlice';
import { quantityReducer } from './features/quantity/quantity.slice';

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		favorite: favoriteReducer,
		quantity: quantityReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
