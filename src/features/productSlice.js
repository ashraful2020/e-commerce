import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    product: {},
    message: ''
};

export const cartSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        add_to_cart: (state, action) => {
            const product = { ...state.product }
            const newProduct = Object.keys(product);
            const exists = newProduct.filter(key => key === action.payload)
            if (exists.length === 0) {
                state.product[action.payload] = 1;
            }
            else {
                state.product[action.payload] += 1;
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { add_to_cart } = cartSlice.actions

export default cartSlice.reducer