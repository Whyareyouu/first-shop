import { createSlice } from '@reduxjs/toolkit';
const initialState: boolean = false;

export const BurgerMenu = createSlice({
	name: 'burgermenu',
	initialState,
	reducers: {
		isOppened: (state) => {
			state = !state;
			return state;
		},
	},
});

export const BurgenMenuReducer = BurgerMenu.reducer;
export const BurgenMenuActions = BurgerMenu.actions;
