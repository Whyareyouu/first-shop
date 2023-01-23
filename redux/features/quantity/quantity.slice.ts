import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState: number = 0;

const quantitySlice = createSlice({
	name: 'quantity',
	initialState,
	reducers: {
		setIncrement: (state, action: PayloadAction<number>) => {
			return state + action.payload;
		},
		setDecrement: (state, action: PayloadAction<number>) => {
			return state - action.payload;
		},
	},
});

export const quantityReducer = quantitySlice.reducer;
export const quantityActions = quantitySlice.actions;
