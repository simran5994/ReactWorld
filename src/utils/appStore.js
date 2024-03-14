import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./store/cartSlice";

//store config
const appStore = configureStore({
	reducer: {
		cart: cartReducer,
	},
});

export default appStore;
