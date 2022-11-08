import { createSlice } from "@reduxjs/toolkit";




export const authSlice = createSlice({
    name: "user",
    initialState: {
        data: null,
        status: "idle",
        email: ""
    },
    reducers: {
        persistedUser: (state, action) => {
            state.email = action.payload;
        },
        clearPersistedUser: (state) => {
            state.email = ""
        },
    },
})

// Action creators are generated for each case reducer function
export const { persistedUser, clearPersistedUser } = authSlice.actions

export default authSlice.reducer;
