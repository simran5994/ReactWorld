import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		addItem: (state, action) => {
			// const newState = [...state];
			// newState.items.push(action.payload)
			// return newState  - old redux way where no state is mutated, return is not mandatory in redux toolkit
			state.items.push(action.payload);
		},
		removeItem: (state) => {
			state.items.pop();
		},
		clearCart: (state) => {
			state.items.length = 0; // or return {items: []}
		},
	},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
