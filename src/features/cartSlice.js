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
            console.log("🚀 ~ file: cartSlice.js ~ line 16 ~ exists", exists)
            if (!exists) {
                state.product[action.payload] = 1;
                state.totalItem += 1;
            }
            else {
                state.product[action.payload] += 1;
            }
        },
        delete_from_cart: (state, action) => {
            const product = { ...state.product }
            const newProduct = Object.keys(product);
            const exists = newProduct.filter(key => key !== action.payload);
            delete state.product[action.payload]
            console.log("🚀 ~ file: cartSlice.js ~ line 31 ~ exists", exists)
            // state.product = ...exists  
            state.totalItem -= 1;
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
export const { add_to_cart, increment_quantity, decrement_quantity, delete_from_cart } = cartSlice.actions

export default cartSlice.reducer