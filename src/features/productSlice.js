import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    product: [], 
    message:''
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        add_to_cart: (state, action) => {
            const newData = state.product.find(item => item === action.payload)  
            console.log(newData,"hello");
            if (!newData) {
                state.product.push(action.payload)
                state.message=""
            }
            else {  
                state.message="Already added to cart"
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { add_to_cart } = productSlice.actions

export default productSlice.reducer