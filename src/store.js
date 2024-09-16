import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Components/CartSlice";
const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;