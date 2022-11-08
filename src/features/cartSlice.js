import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: {},
    message: '',
    totalItem: 0,
};


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add_to_cart: (state, action) => {
            const product = { ...state.product }
            const newProduct = Object.keys(product);
            const exists = newProduct.find(key => key === action.payload)
            if (!exists) {
                state.product[action.payload] = 1;
                state.totalItem += 1;
                console.log("success")
            }
            else {
                state.product[action.payload] += 1;
                console.log("success")
            }
        },
        delete_from_cart: (state, action) => {
            const product = { ...state.product }
            const newProduct = Object.keys(product);
            const exists = newProduct.filter(key => key !== action.payload);
            delete state.product[action.payload]
            state.totalItem -= 1;
        },
        set_cart_product: (state, action) => {
            const newProduct = Object.keys(action.payload || {});
            state.product = action.payload
            state.totalItem = newProduct.length

        },
        increment_quantity: (state, action) => {
            state.product[action.payload] += 1;
        },
        decrement_quantity: (state, action) => {
            if (state.product[action.payload] > 1) {
                state.product[action.payload] -= 1;
            }
        },

    },
})

// Action creators are generated for each case reducer function
export const { add_to_cart, increment_quantity, decrement_quantity, delete_from_cart, set_cart_product, clear_cart_product } = cartSlice.actions

export default cartSlice.reducer;
