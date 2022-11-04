
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../services/http.service";

const initialState = {
    status: "idle",
    error: null,
    loading: false,
    product: {}
};
export const addProductInDatabase = createAsyncThunk(
    "product/addProductInDatabase",
    async (formData) => {
        const res = await http.post("/product", formData);
        return res.data;
    }
);

export const addProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: {
        [addProductInDatabase.pending]: (state) => {
            state.status = "loading";
        },
        [addProductInDatabase.fulfilled]: (state, action) => {
            state.status = "success";
            state.successMessage = action.payload;
        },
        [addProductInDatabase.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        },
    },
});

export default addProductSlice.reducer;

