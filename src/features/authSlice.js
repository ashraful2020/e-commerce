import { createSlice } from "@reduxjs/toolkit";




export const authSlice = createSlice({
    name: "user",
    initialState: {
        data:null,
        status:"idle"
    },
    reducers: {
        // login:()
        // 
        //
        //
        //

    },
})

// Action creators are generated for each case reducer function
export const { login } = authSlice.actions

export default authSlice.reducer;
