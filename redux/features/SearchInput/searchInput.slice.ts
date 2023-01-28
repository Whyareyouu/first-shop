import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: SearchInput[] = [];
export interface SearchInput {
	name: string;
	value: string | number;
}

export const SearchInputSlice = createSlice({
	name: "SearchInput",
	initialState,
	reducers: {
		onChange: (state, action: PayloadAction<SearchInput>) => {
			state.push(action.payload);
		},
	},
});
