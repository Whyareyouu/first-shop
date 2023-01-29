import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState: SearchInput = {
	value: '',
};
export interface SearchInput {
	value: string;
}

export const SearchInputSlice = createSlice({
	name: 'SearchInput',
	initialState,
	reducers: {
		onChangeValue: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});

export const SearchInputReducer = SearchInputSlice.reducer;
export const SearchInputActions = SearchInputSlice.actions;
