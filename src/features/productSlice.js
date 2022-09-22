import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    product: {},
    message: '',
    totalItem:0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add_to_cart: (state, action) => {
            const product = { ...state.product }
            const newProduct = Object.keys(product);
            const exists = newProduct.find(key => key === action.payload)
            if (exists?.length === 0) {
                state.product[action.payload] = 1;
            }
            else {
                state.product[action.payload] += 1;
            }
        },
        cart_length: (state, action) => {
            state.totalItem = action.payload;
        }

    },
})

// Action creators are generated for each case reducer function
export const { add_to_cart,cart_length } = cartSlice.actions

export default cartSlice.reducer